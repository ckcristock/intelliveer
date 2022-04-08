import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '@src/environments/environment';
import { LoaderService } from '@services/loader/loader.service';
import { CONFIG } from '@src/app/config';
import { ErrorHandlerService } from '@services/error-handler/error-handler.service';

@Injectable()
export class HttpCallsInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private loaderService: LoaderService,
    private errHandlerService: ErrorHandlerService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestedURL = new URL(request.url);
    const backendURL = new URL(CONFIG.backend.host);

    if (requestedURL.host === backendURL.host) {
      if (environment.production) {
        // production mode
        request = request.clone({
          headers: request.headers
            .set('Content-Type', 'application/json')
            .set('Accept', '/'),
          withCredentials: true,
        });
      } else {
        // local development
        // Cookie will not be readable in prod mode
        request = request.clone({
          headers: request.headers
            .set('Content-Type', 'application/json')
            .set('Accept', '/')
            .set('Authorization', `Bearer ${this.cookieService.get('token')}`),
        });
      }
    }

    this.loaderService.openDialog();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `,
            error.error
          );
        }
        this.errHandlerService.showErrorr(error.error);
        return throwError(
          () => new Error('Something bad happened; please try again later.')
        );
      }),
      finalize(() => {
        this.loaderService.closeDialog();
      })
    ) as Observable<HttpEvent<any>>;
  }
}

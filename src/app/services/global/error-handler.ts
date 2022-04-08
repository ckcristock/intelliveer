import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    // private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }
    // this.zone.run(() =>
    //   this.errorDialogService.openDialog(
    //     error?.message || 'Undefined client error',
    //     error?.status
    //   )
    // );

    console.log('Error from global error handler', error);
  }
}

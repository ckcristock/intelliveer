import { ErrorHandler, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { GlobalErrorHandler } from '@services/global/error-handler';
import { HttpCallsInterceptor } from '@services/global/http.intercepter';
import { DialogComponent } from '@components/loader/dialog/dialog.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '@environment/environment';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

let providers: Provider[] = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpCallsInterceptor,
		multi: true
	},
	CookieService
];

// Only enable custom error handler in production mode
if (environment.production) {
	providers.push({
		provide: ErrorHandler,
		useClass: GlobalErrorHandler
	});
}

@NgModule({
	declarations: [
		AppComponent,
		DialogComponent,
		ErrorHandlerComponent,
		ConfirmationDialogComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule, // required by ToasterModule
		ToastrModule.forRoot()
	],
	providers: providers,
	bootstrap: [AppComponent]
})
export class AppModule {}

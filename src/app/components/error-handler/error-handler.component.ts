import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '@services/error-handler/error-handler.service';
import { Subscription } from 'rxjs';
import { CONFIG } from '@config/index';
@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
})
export class ErrorHandlerComponent implements OnInit, OnDestroy {
  error: object = {};
  showErrors: boolean = false;
  errorHandlerSubscription: Subscription;
  constructor(private errService: ErrorHandlerService,private router: Router) {
    this.errorHandlerSubscription = this.errService.errors.subscribe(
      (error) => {
        if(error?.statusCode == 403 && error?.error == "Forbidden"){
          localStorage.clear()
          window.location.href = CONFIG.auth.host + `/login`;
        }else{
          this.error = error;
          this.showErrors = true;
        }
      }
    );
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.errorHandlerSubscription.unsubscribe();
  }
  close() {
    this.error = {};
    this.showErrors = false;
  }
}

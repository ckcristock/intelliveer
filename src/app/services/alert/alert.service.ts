import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}
  success(title: string, message: string, options?: {}) {
    this.toastr.success(message, title, {
      progressBar: true,
    });
  }
  error(title: string, message: string, options?: {}) {
    this.toastr.error(message, title, {
      progressBar: true,
      timeOut: 45454545,
    });
  }
}

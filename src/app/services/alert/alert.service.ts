import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'; //npm install --save sweetalert2 required for alert
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
  conformAlert(title: string, text: string)
  {
    return Swal.fire({
			title: title,
			text: text,
			icon: 'warning',
			showCancelButton: true,
      allowOutsideClick: false,
			confirmButtonText: 'Discard my changes.',
      confirmButtonColor: '#ff4500',
			cancelButtonText: 'Save my changes.',
      cancelButtonColor: '#414042',
      backdrop: true,
      showCloseButton: true,
		})
  }
  displayAlertMessage(title: string, text: string)
  {
    return Swal.fire({
			title: title,
			text: text,
			icon: 'warning',
			showCancelButton: true,
      allowOutsideClick: false,
			confirmButtonText: 'Ok',
      confirmButtonColor: '#e87442',
			cancelButtonText: '',
      cancelButtonColor: '#ffffff',
      backdrop: true
		})
  }
}

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
			confirmButtonText: 'Save my changes.',
      confirmButtonColor: '#414042',
			cancelButtonText: 'Discard my changes.',
      cancelButtonColor: '#ff4500',
      backdrop: true,
      showCloseButton: true,
		})
  }
  conformAlertNavigate(title: string, text: string,confirmButtonText?:any,cancelButtonText?:any)
  {
    return Swal.fire({
			title: title,
			text: text,
			icon: 'warning',
			showCancelButton: cancelButtonText ? true : false,
      allowOutsideClick: false,
			confirmButtonText: confirmButtonText,
      confirmButtonColor: '#ff4500',
			cancelButtonText: cancelButtonText,
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

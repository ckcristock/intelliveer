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
			confirmButtonText: 'Yes, go ahead.',
      confirmButtonColor: '#ff4500',
			cancelButtonText: 'No, let me think',
      cancelButtonColor: '#414042',
      backdrop: true
		})
  }
}

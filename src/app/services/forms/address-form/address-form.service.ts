import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddressFormService {
  constructor(private fb: FormBuilder) {}

  getAddressForm(data?: any): FormGroup {
    data = data || {};
    return this.fb.group({
      addressLine1: [data?.addressLine1 || '', Validators.required],
      addressLine2: [data?.addressLine2 || '', Validators.required],
      city: [data?.city || '', Validators.required],
      state: [data?.state || '', Validators.required],
      country: [data?.country || '', Validators.required],
      zipCode: [data?.zipCode || '', Validators.required],
    });
  }
}

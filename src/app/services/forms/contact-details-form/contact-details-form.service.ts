import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ContactDetailsFormService {
  constructor(private fb: FormBuilder) {}

  getContactDetailsForm(data?: any): FormGroup {
    data = data || {};
    return this.fb.group({
      email: [data?.email || '', Validators.required],
      primaryPhone: this.fb.group({
        type: [data?.primaryPhone?.type || '', Validators.required],
        countryCode: [
          data?.primaryPhone?.countryCode || '',
          Validators.required,
        ],
        number: [data?.primaryPhone?.number || '', Validators.required],
      }),
      secondaryPhone: this.fb.group({
        type: [data?.secondaryPhone?.type || '', Validators.required],
        countryCode: [
          data?.secondaryPhone?.countryCode || '',
          Validators.required,
        ],
        number: [data?.secondaryPhone?.number || '', Validators.required],
      }),
      preferedMailMethod: [data?.preferedMailMethod || '', Validators.required],
      website: [data?.website || '', Validators.required],
    });
  }
}

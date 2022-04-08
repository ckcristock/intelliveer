import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ContactPersonFormService {
  constructor(private fb: FormBuilder) {}

  getContactPersonForm(data?: any): FormGroup {
    data = data || {};
    return this.fb.group({
      partyId: [data?.partyId || '', Validators.required],
      designation: [data?.designation || '', Validators.required],
      title: [data?.title || '', Validators.required],
      firstName: [data?.firstName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      email: [data?.email || '', Validators.required],
      phone: this.fb.group({
        type: [data?.phone?.type || '', Validators.required],
        countryCode: [data?.phone?.countryCode || '', Validators.required],
        number: [data?.phone?.number || '', Validators.required],
      }),
    });
  }
}

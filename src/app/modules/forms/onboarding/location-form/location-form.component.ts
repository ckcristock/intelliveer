import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactDetailsFormService } from '@services/forms/contact-details-form/contact-details-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
})
export class LocationFormComponent implements OnInit {
  Form: FormGroup | undefined;
  @Input() title: string = '';
  @Input() formData: any | undefined = undefined;
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private addressFormService: AddressFormService,
    private contactPersonFormService: ContactPersonFormService,
    private contactDetailsFormService: ContactDetailsFormService
  ) {}

  ngOnInit(): void {
    this.initForm(this.formData);
  }
  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required],
      abbreviation: [data?.abbreviation || '', Validators.required],
      logo: [data?.logo || 'null'],
      registrationNumber: [data?.registrationNumber || '', Validators.required],
      physicalAddress: this.addressFormService.getAddressForm(
        data?.physicalAddress || {}
      ),
      mailingAddress: this.addressFormService.getAddressForm(
        data?.mailingAddress || {}
      ),
      insuranceBillingAddress: this.addressFormService.getAddressForm(
        data?.insuranceBillingAddress || {}
      ),
      contactDetails: this.contactDetailsFormService.getContactDetailsForm(
        data?.contactDetails || {}
      ),
      contactPerson: this.contactPersonFormService.getContactPersonForm(
        data?.contactPerson || {}
      ),
    });
  }
  save(data: any) {
    this.onSubmit.emit(data);
  }
  cancel() {
    this.onCancel.emit();
  }
  setAddress(type: string) {
    let physicalAddress = this.Form?.controls['physicalAddress'].value;
    this.Form?.controls[type].setValue(physicalAddress);
  }
  handleUploadedImage(e: { url: string }) {
    if (e && this.Form) {
      this.Form.controls['logo'].setValue(e.url);
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

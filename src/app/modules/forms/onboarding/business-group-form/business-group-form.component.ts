import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactDetailsFormService } from '@services/forms/contact-details-form/contact-details-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-business-group-form',
  templateUrl: './business-group-form.component.html',
  styleUrls: ['./business-group-form.component.scss'],
})
export class BusinessGroupFormComponent implements OnInit {
  @Input() title: string = '';
  @Input() formData: any | undefined = undefined;
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  BGForm: FormGroup | undefined;
  countries: any;
  imageSrc: any;
  selectTab: string = "overview";
  countriesList: any[] = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private addressFormService: AddressFormService,
    private contactPersonFormService: ContactPersonFormService,
    private contactDetailsFormService: ContactDetailsFormService,
    private geoService: GeoService
  ) {}

  ngOnInit() {
    this.initBGForm(this.formData);
    this.getCountryList();
  }
  initBGForm(data?: any) {
    data = data || {};
    this.BGForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      logo: [data?.logo || 'null'],
      TIN: [data?.TIN || '', Validators.required],
      country: [data?.country || '', Validators.required],
      currency: [data?.currency || '', Validators.required],
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
  getCountryList()
  {
    this.geoService
      .getCountries()
      .pipe(delay(100))
      .subscribe({
        next: (res: any) => {
          this.countriesList = res;
          console.log(res)
        },
      });
  }
  save(data: any) {
    this.onSubmit.emit(data);
  }
  cancel() {
    this.onCancel.emit();
  }
  setAddress(type: string) {
    let physicalAddress = this.BGForm?.controls['physicalAddress'].value;
    this.BGForm?.controls[type].setValue(physicalAddress);
  }
  handleUploadedImage(e: { url: string }) {
    if (e && this.BGForm) {
      this.BGForm.controls['logo'].setValue(e.url);
    }
  }
  scroll(el: HTMLElement, selectTab: string) {
    this.selectTab = selectTab.trim();
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  checkboxValue(event: any, value: string)
  {
    if(event.target.checked)
    {
      this.setAddress(value);
    }
    else{
      this.BGForm?.get(value)?.reset();
    }
  }
}

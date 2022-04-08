import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@src/app/config';

@Component({
  selector: 'app-business-group-form',
  templateUrl: './business-group-form.component.html',
  styleUrls: ['./business-group-form.component.scss'],
})
export class BusinessGroupFormComponent implements OnInit {
  @Input() formData: any | undefined = undefined;
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  BGForm: FormGroup | undefined;
  staticData: any;
  countries: any;
  imageSrc: any;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.getStaticData();
    this.initBGForm(this.formData);
  }
  initBGForm(data?: any) {
    data = data || {};
    this.BGForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required],
      abbreviation: [data?.abbreviation || '', Validators.required],
      logo: [data?.logo || 'null'],
      TIN: [data?.TIN || '', Validators.required],
      country: [data?.country || '', Validators.required],
      currency: [data?.currency || '', Validators.required],
      physicalAddress: this.fb.group({
        addressLine1: [
          data?.physicalAddress?.addressLine1 || '',
          Validators.required,
        ],
        addressLine2: [
          data?.physicalAddress?.addressLine2 || '',
          Validators.required,
        ],
        city: [data?.physicalAddress?.city || '', Validators.required],
        state: [data?.physicalAddress?.state || '', Validators.required],
        country: [data?.physicalAddress?.country || '', Validators.required],
        zipCode: [data?.physicalAddress?.zipCode || '', Validators.required],
      }),
      mailingAddress: this.fb.group({
        addressLine1: [
          data?.mailingAddress?.addressLine1 || '',
          Validators.required,
        ],
        addressLine2: [
          data?.mailingAddress?.addressLine2 || '',
          Validators.required,
        ],
        city: [data?.mailingAddress?.city || '', Validators.required],
        state: [data?.mailingAddress?.state || '', Validators.required],
        country: [data?.mailingAddress?.country || '', Validators.required],
        zipCode: [data?.mailingAddress?.zipCode || '', Validators.required],
      }),
      insuranceBillingAddress: this.fb.group({
        addressLine1: [
          data?.insuranceBillingAddress?.addressLine1 || '',
          Validators.required,
        ],
        addressLine2: [
          data?.insuranceBillingAddress?.addressLine2 || '',
          Validators.required,
        ],
        city: [data?.insuranceBillingAddress?.city || '', Validators.required],
        state: [
          data?.insuranceBillingAddress?.state || '',
          Validators.required,
        ],
        country: [
          data?.insuranceBillingAddress?.country || '',
          Validators.required,
        ],
        zipCode: [
          data?.insuranceBillingAddress?.zipCode || '',
          Validators.required,
        ],
      }),
      contactDetails: this.fb.group({
        email: [data?.contactDetails?.email || '', Validators.required],
        primaryPhone: this.fb.group({
          type: [
            data?.contactDetails?.primaryPhone?.type || '',
            Validators.required,
          ],
          countryCode: [
            data?.contactDetails?.primaryPhone?.countryCode || '',
            Validators.required,
          ],
          number: [
            data?.contactDetails?.primaryPhone?.number || '',
            Validators.required,
          ],
        }),
        secondaryPhone: this.fb.group({
          type: [
            data?.contactDetails?.secondaryPhone?.type || '',
            Validators.required,
          ],
          countryCode: [
            data?.contactDetails?.secondaryPhone?.countryCode || '',
            Validators.required,
          ],
          number: [
            data?.contactDetails?.secondaryPhone?.number || '',
            Validators.required,
          ],
        }),
        preferedMailMethod: [
          data?.contactDetails?.preferedMailMethod || '',
          Validators.required,
        ],
        website: [data?.contactDetails?.website || '', Validators.required],
      }),
      contactPerson: this.fb.group({
        partyId: [data?.contactPerson?.partyId || '', Validators.required],
        designation: [
          data?.contactPerson?.designation || '',
          Validators.required,
        ],
        title: [data?.contactPerson?.title || '', Validators.required],
        firstName: [data?.contactPerson?.firstName || '', Validators.required],
        lastName: [data?.contactPerson?.lastName || '', Validators.required],
        email: [data?.contactPerson?.email || '', Validators.required],
        phone: this.fb.group({
          type: [data?.contactPerson?.phone?.type || '', Validators.required],
          countryCode: [
            data?.contactPerson?.phone?.countryCode || '',
            Validators.required,
          ],
          number: [
            data?.contactPerson?.phone?.number || '',
            Validators.required,
          ],
        }),
      }),
    });
  }
  save(data: any) {
    this.onSubmit.emit(data);
  }
  cancel() {
    this.onCancel.emit();
  }
  getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/api/v1/global-data/static-types`)
      .subscribe({
        next: (data) => {
          this.staticData = data;
        },
        error: () => {},
        complete: () => {},
      });
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
  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

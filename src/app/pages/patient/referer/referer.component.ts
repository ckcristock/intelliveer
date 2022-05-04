import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressFormService } from '@services/forms/address-form/address-form.service';

@Component({
  selector: 'app-referer',
  templateUrl: './referer.component.html',
  styleUrls: ['./referer.component.scss']
})
export class RefererComponent implements OnInit {

  @Input() formData: any | undefined = undefined;
  idForm: FormGroup;
  Form!: FormGroup;

  bussinessGroups: any = [
    {
      "First_Name": "BG1",
      "Last_Name": "my bg!",
      "Phase": "description",
      "Status": "my-bg!",
      "Treatment_Start_Date": "description",
      "Treatment_End_Date": "my-bg!"
    },
    {
      "First_Name": "BG2",
      "Last_Name": "my bg!",
      "Phase": "description",
      "Status": "my-bg!",
      "Treatment_Start_Date": "description",
      "Treatment_End_Date": "my-bg!"
    },
    {
      "First_Name": "BG3",
      "Last_Name": "my bg!",
      "Phase": "description",
      "Status": "my-bg!",
      "Treatment_Start_Date": "description",
      "Treatment_End_Date": "my-bg!"
    },
  ];

  constructor(
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      companyName: [data?.companyName || '', Validators.required],
      title: [data?.title || '', Validators.required],
      firstName: [data?.firstName || '', Validators.required],
      middleName: [data?.middleName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      greeting: [data?.greeting || '', Validators.required],
      emailId: [data?.emailId || '', Validators.required],
      pPhoneType: [data?.pPhoneType || '', Validators.required],
      pPhoneNumber: [data?.pPhoneNumber || '', Validators.required],
      sPhoneType: [data?.sPhoneType || '', Validators.required],
      sPhoneNumber: [data?.sPhoneNumber || '', Validators.required],
      preferredMailMethod: [data?.preferredMailMethod || '', Validators.required],
      website: [data?.website || '', Validators.required],
      note: [data?.note || '', Validators.required],
      address: this.addressFormService.getAddressForm(
        data?.address || {}
      )
    });
  }

  handleUploadedImage(e: { url: string }) {
    if (e && this.idForm) {
      this.idForm.controls['logo'].setValue(e.url);
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

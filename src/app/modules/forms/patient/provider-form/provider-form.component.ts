import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressFormService } from '@services/forms/address-form/address-form.service';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.scss']
})
export class ProviderFormComponent implements OnInit {
  Form: FormGroup = new FormGroup({});
	staticData: any;
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();

  idForm: FormGroup;
  selectTab: string = "overview";

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
    private addressFormService: AddressFormService
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
    this.initForm(this.formData);
  }

  ngOnInit(): void {
    this.initForm(this.formData);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      provider: [data?.relation || ''],
      title: [data?.title || ''],
      firstName: [data?.firstName || '', Validators.required],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', Validators.required],
      praticeName: [data?.praticeName || ''],
      degree: [data?.degree || ''],
      DMSchool: [data?.DMSchool || '',Validators.required],
      language: [data?.language || ''],
      specialty: [data?.specialty || ''],
      specialtySchool: [data?.specialtySchool || ''],
      greeting: [data?.greeting || ''],
      emailId: [data?.emailId || ''],
      demailId: [data?.emailId || ''],
      pPhoneType: [data?.pPhoneType || ''],
      pPhoneNumber: [data?.pPhoneNumber || ''],
      sPhoneType: [data?.sPhoneType || ''],
      sPhoneNumber: [data?.sPhoneNumber || ''],
      preferredMailMethod: [data?.preferredMailMethod || ''],
      website: [data?.website || ''],
      note: [data?.note || ''],
      address: this.addressFormService.getAddressForm(
        data?.address || {}
      )
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
    if (e && this.idForm) {
      this.idForm.controls['logo'].setValue(e.url);
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

}

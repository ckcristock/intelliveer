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
      provider: [data?.relation || '', Validators.required],
      title: [data?.title || '', Validators.required],
      firstName: [data?.firstName || '', Validators.required],
      middleName: [data?.middleName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      praticeName: [data?.praticeName || '', Validators.required],
      degree: [data?.degree || '', Validators.required],
      DMSchool: [data?.DMSchool || '',Validators.required],
      language: [data?.language || '', Validators.required],
      specialty: [data?.specialty || '', Validators.required],
      specialtySchool: [data?.specialtySchool || '', Validators.required],
      greeting: [data?.greeting || '', Validators.required],
      emailId: [data?.emailId || '', Validators.required],
      demailId: [data?.emailId || '', Validators.required],
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressFormService } from '@services/forms/address-form/address-form.service';

@Component({
  selector: 'app-insurance-subscriber-form',
  templateUrl: './insurance-subscriber-form.component.html',
  styleUrls: ['./insurance-subscriber-form.component.scss']
})
export class InsuranceSubscriberFormComponent implements OnInit {

  
  Form: FormGroup = new FormGroup({});
	staticData: any;
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();

  
  idForm: FormGroup;
  selectTab: string = "overview";
  fileName: string = "";
  filePath: any;

  constructor(
    private fb: FormBuilder,
    private addressFormService: AddressFormService
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
      relation: [data?.relation || ''],
      title: [data?.title || ''],
      firstName: [data?.firstName || '', Validators.required],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', Validators.required],
      DOB: [data?.DOB || ''],
      gender: [data?.gender || ''],
      pronoun: [data?.pronoun || ''],
      language: [data?.language || ''],
      maried: [data?.maried || ''],
      lastUsedName: [data?.lastUsedName || ''],
      emailId: [data?.emailId || ''],
      pPhoneType: [data?.pPhoneType || '', Validators.required],
      pPhoneNumber: [data?.pPhoneNumber || '', Validators.required],
      sPhoneType: [data?.sPhoneType || ''],
      sPhoneNumber: [data?.sPhoneNumber || ''],
      CommPrimary: [data?.CommPrimary || ''],
      CommSecondary: [data?.CommSecondary || ''],
      phone: [data?.phone || ''],
      workStatus: [data?.workStatus || ''],
      occupation: [data?.occupation || ''],
      employer: [data?.employer || ''],
      ssn: [data?.ssn || ''],
      rating: [data?.rating || ''],
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

  onFileSelected(event: any)
  {
    this.filePath = event.target.value;
    const file:File = event.target.files[0];
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.filePath = reader.result; 
		}
    if (file) {
      this.fileName = file.name;
    }
  }

  cancleImage()
  {
    this.filePath = "";
    this.fileName = "";
  }

}

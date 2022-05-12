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
      relation: [data?.relation || '', Validators.required],
      title: [data?.title || '', Validators.required],
      firstName: [data?.firstName || '', Validators.required],
      middleName: [data?.middleName || '', Validators.required],
      lastName: [data?.lastName || '', Validators.required],
      DOB: [data?.DOB || '', Validators.required],
      gender: [data?.gender || '', Validators.required],
      pronoun: [data?.pronoun || '',Validators.required],
      language: [data?.language || '', Validators.required],
      maried: [data?.maried || '', Validators.required],
      lastUsedName: [data?.lastUsedName || '', Validators.required],
      emailId: [data?.emailId || '', Validators.required],
      pPhoneType: [data?.pPhoneType || '', Validators.required],
      pPhoneNumber: [data?.pPhoneNumber || '', Validators.required],
      sPhoneType: [data?.sPhoneType || '', Validators.required],
      sPhoneNumber: [data?.sPhoneNumber || '', Validators.required],
      CommPrimary: [data?.CommPrimary || '', Validators.required],
      CommSecondary: [data?.CommSecondary || '', Validators.required],
      phone: [data?.phone || '', Validators.required],
      workStatus: [data?.workStatus || '', Validators.required],
      occupation: [data?.occupation || '', Validators.required],
      employer: [data?.employer || '', Validators.required],
      ssn: [data?.ssn || '', Validators.required],
      rating: [data?.rating || '', Validators.required],
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
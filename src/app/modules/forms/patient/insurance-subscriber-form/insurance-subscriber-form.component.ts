import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
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

  currentSelection: string = '';

  menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Address', id: 'address' },
		{ title: 'Contact', id: 'contact' },
		{ title: 'Financials', id: 'financials' },
    { title: 'Notes', id: 'notes' },
	];
  
  relationship!: string;

  idForm: FormGroup;
  selectTab: string = "overview";
  fileName: string = "";
  filePath: any;

  constructor(
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private patientUserServ: PatientUserService,
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.initForm(this.formData);
    this.relationship = this.patientUserServ.getInsuSubscToPati();
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

  onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

  handleUploadedImage(e: { url: string }) {
    if (e && this.idForm) {
      this.idForm.controls['logo'].setValue(e.url);
    }
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { HttpClient } from '@angular/common/http';

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
  insuranSubsc: any[] = [];
  famiMembTitle!: any;
  pronouns: any[] = [
    { pronoun: 'He' },
    { pronoun: 'She' },
  ];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private patientUserServ: PatientUserService,
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
    this.getStaticData();
  }

  async ngOnInit() {
    this.initForm(this.formData);
    this.insuranSubsc.push(await this.patientUserServ.getInsuSubscFamiMemb());

    this.relationship = await this.patientUserServ.getInsuSubscToPati();
    this.Form.controls['relationship'].setValue(this.relationship);
    // this.Form.controls['title'].setValue(this.insuranSubsc[0].title);
    this.Form.controls['firstName'].setValue(this.insuranSubsc[0].firstName);
    this.Form.controls['middleName'].setValue(this.insuranSubsc[0].middleName);
    this.Form.controls['lastName'].setValue(this.insuranSubsc[0].lastName);
    this.Form.controls['DOB'].setValue(this.insuranSubsc[0].DOB);
    this.Form.controls['gender'].setValue(this.insuranSubsc[0].gender);
    this.Form.controls['pronoun'].setValue(this.insuranSubsc[0].prefePronoun);
    this.Form.controls['language'].setValue(this.insuranSubsc[0].language);
    this.Form.controls['maried'].setValue(this.insuranSubsc[0].maritalStatus);
    this.Form.controls['pPhoneType'].setValue(this.insuranSubsc[0].pPhoneType);
    this.Form.controls['pPhoneNumber'].setValue(this.insuranSubsc[0].pPhoneNumber);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      relationship: [data?.relation || ''],
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

  async getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/global-data/static-types`)
      .subscribe({
        next: async (data) => {
          this.famiMembTitle = data;
          console.log("this.phoneTypes", this.famiMembTitle);

        },
        error: () => { },
        complete: () => { }
      });
  }

  save(data: any) {
    this.onSubmit.emit(data);
    this.patientUserServ.setInsuSubsc(data);
    this.patientUserServ.setPatientFamiMemb(data.relationship, data);
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

  onFileSelected(event: any) {
    this.filePath = event.target.value;
    const file: File = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.filePath = reader.result;
    }
    if (file) {
      this.fileName = file.name;
    }
  }

  cancleImage() {
    this.filePath = "";
    this.fileName = "";
  }

}

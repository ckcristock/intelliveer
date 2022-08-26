import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '@services/alert/alert.service';

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
  genders: any[] = [
    { label: 'Male', value:'M' },
    { label: 'Female', value:'F' },
  ];
  languages: any[] = [
    { label: 'English', value:'english' },
    { label: 'Hindi', value:'hindi' },
  ];
  maritalStatuses: any[] = [
    { label: 'Maried', value:'M' },
    { label: 'Single', value:'S' },
  ];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private patientUserServ: PatientUserService,
    private alertService: AlertService,
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
      title: [data?.title || null],
      firstName: [data?.firstName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      DOB: [data?.DOB || '',],
      gender: [data?.gender || null],
      pronoun: [data?.pronoun || ''],
      language: [data?.language || ''],
      maried: [data?.maried || ''],
      emailId: ['', ],
      pPhoneType: [data?.pPhoneType || '', Validators.required],
      pPhoneNumber: [data?.pPhoneNumber || '', [Validators.required, Validators.pattern("^[0-9]*$")]],
      sPhoneType: [data?.sPhoneType || ''],
      sPhoneNumber: [data?.sPhoneNumber || ''],
      CommPrimary: [data?.CommPrimary || '',],
      CommSecondary: [data?.CommSecondary || ''],
      phone: [data?.phone || ''],
      workStatus: [data?.workStatus || ''],
      occupation: [data?.occupation || ''],
      employer: [data?.employer || ''],
      ssn: [data?.ssn || ''],
      rating: [data?.rating || '', Validators.pattern("^[0-9]*$")],
      note: [data?.note || ''],
      address: this.addressFormService.getAddressForm(
        data?.address || {}
      )
    });
  }

  firstNameValid() {
    return this.Form.get('firstName')?.valid;
  }

  middleNameValid() {
    return this.Form.get('middleName')?.valid;
  }

  lastNameValid() {
    return this.Form.get('lastName')?.valid;
  }

  DOBValid() {
    return this.Form.get('DOB')?.value.length > 0;
  }

  pPhoneTypeValid() {
    return this.Form.get('pPhoneType')?.valid;
  }

  pPhoneNumberValid() {
    return this.Form.get('pPhoneNumber')?.valid;
  }

  commPrimaryValid() {
    return this.Form.get('CommPrimary')?.value.length > 0;
  }

  emailValid() {
    return this.Form.get('emailId')?.value.length > 0;
  }

  ratingValid(){
    return this.Form.get('rating')?.value.length > 0 && this.Form.get('rating')?.valid;
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
    this.Form.markAsPristine();
    this.alertService.success(
      'Success',
      'Insurance Subscriber has been updated successfully'
    );
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

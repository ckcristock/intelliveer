import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';

@Component({
  selector: 'app-payment-party-form',
  templateUrl: './payment-party-form.component.html',
  styleUrls: ['./payment-party-form.component.scss']
})
export class PaymentPartyFormComponent implements OnInit {


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

  idForm: FormGroup;
  selectTab: string = "overview";
  fileName: string = "";
  filePath: any;
  relationship!: string;
  paymentParty: any[] = [];
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
    this.paymentParty.push(await this.patientUserServ.getPaymPartyFamiMemb());

    this.relationship = await this.patientUserServ.getPaymPartyToPati();
    this.Form.controls['relationship'].setValue(this.relationship);
    //this.Form.controls['title'].setValue(this.paymentParty[0].title);
    this.Form.controls['firstName'].setValue(this.paymentParty[0].firstName);
    this.Form.controls['middleName'].setValue(this.paymentParty[0].middleName);
    this.Form.controls['lastName'].setValue(this.paymentParty[0].lastName);
    this.Form.controls['DOB'].setValue(this.paymentParty[0].DOB);
    this.Form.controls['gender'].setValue(this.paymentParty[0].gender);
    this.Form.controls['pronoun'].setValue(this.paymentParty[0].prefePronoun);
    this.Form.controls['language'].setValue(this.paymentParty[0].language);
    this.Form.controls['maried'].setValue(this.paymentParty[0].maritalStatus);
    this.Form.controls['pPhoneType'].setValue(this.paymentParty[0].pPhoneType);
    this.Form.controls['pPhoneNumber'].setValue(this.paymentParty[0].pPhoneNumber);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      relationship: [data?.relation || ''],
      title: [data?.title || ''],
      firstName: [data?.firstName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      DOB: [data?.DOB || ''],
      gender: [data?.gender || ''],
      pronoun: [data?.pronoun || ''],
      language: [data?.language || ''],
      maried: [data?.maried || ''],
      emailId: ['', Validators.minLength(2)],
      pPhoneType: [data?.pPhoneType || '', Validators.required],
      pPhoneNumber: [data?.pPhoneNumber || '', [Validators.required, Validators.pattern("^[0-9]*$")]],
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

  async getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/global-data/static-types`)
      .subscribe({
        next: async (data) => {
          this.famiMembTitle = data;
        },
        error: () => { },
        complete: () => { }
      });
  }

  save(data: any) {
    this.onSubmit.emit(data);
    this.patientUserServ.setPaymParty(data);
    this.patientUserServ.setPatientFamiMemb(data.relationship, data);
    this.Form.markAsPristine();
    this.alertService.success(
      'Success',
      'Payment Party has been updated successfully'
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
    console.log(event)
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

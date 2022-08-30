import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';

@Component({
  selector: 'app-legal-guardian-form',
  templateUrl: './legal-guardian-form.component.html',
  styleUrls: ['./legal-guardian-form.component.scss']
})
export class LegalGuardianFormComponent implements OnInit {


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
    { title: 'Notes', id: 'notes' },
  ];

  relationship!: any;


  idForm: FormGroup;
  fileName: string = "";
  filePath: any;
  legalGuard: any[] = [];
  famiMembTitle!: any;
  pronouns: any[] = [
    { pronoun: 'He' },
    { pronoun: 'She' },
  ];
	genders: any[] = [
		{ label: 'Male', value: 'M' },
		{ label: 'Female', value: 'F' },
	];
	languages: any[] = [
		{ label: 'English', value: 'english' },
		{ label: 'Hindi', value: 'hindi' },
	];
	maritalStatuses: any[] = [
		{ label: 'Maried', value: 'M' },
		{ label: 'Single', value: 'S' },
	];
  disableSaveBtn: boolean = false;
  firstName!: string;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private patientUserServ: PatientUserService,
    private addPatientServ: AddPatientService,
    private insuranceServ: InsuranceService,
    private onboardingServ: OnboardingService,
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
		this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
    this.Form?.statusChanges.subscribe(
			result => {
				console.log(result)
				if (!this.Form?.pristine) {
					console.log("hiiiiii", event);
					console.log("status", this.Form?.pristine);
					this.patientUserServ.setlegalGuardNotPristine(true);
				}
			}
		);
    // this.Form.get('emailId')?.markAsDirty();
    this.legalGuard.push(await this.patientUserServ.getLegalGuardFamiMemb());

    this.relationship = await this.patientUserServ.getLegalGuardToPati();
    this.Form.controls['relationship'].setValue(this.relationship);
    // this.Form.controls['title'].setValue(this.legalGuard[0].title);
    this.Form.controls['firstName'].setValue(this.legalGuard[0].firstName);
    this.Form.controls['middleName'].setValue(this.legalGuard[0].middleName);
    this.Form.controls['lastName'].setValue(this.legalGuard[0].lastName);
    this.Form.controls['DOB'].setValue(this.legalGuard[0].DOB);
    this.Form.controls['gender'].setValue(this.legalGuard[0].gender);
    this.Form.controls['pronoun'].setValue(this.legalGuard[0].prefePronoun);
    this.Form.controls['language'].setValue(this.legalGuard[0].language);
    this.Form.controls['maritalStatus'].setValue(this.legalGuard[0].maritalStatus);
    this.Form.controls['primaryPhoneType'].setValue(this.legalGuard[0].primaryPhoneType);
    this.Form.controls['pPhoneNumber'].setValue(this.legalGuard[0].pPhoneNumber);
    
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      relationship: [data?.relation || ''],
      title: [data?.title || ''],
      firstName: [data?.firstName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      DOB: [data?.DOB || '',],
      gender: [data?.gender || ''],
      pronoun: [data?.pronoun || ''],
      language: [data?.language || ''],
      maritalStatus: [data?.maritalStatus || ''],
      emailId: ['',],
      primaryPhoneType: [data?.primaryPhoneType || '', Validators.required],
      pPhoneNumber: [data?.pPhoneNumber || '', [Validators.required, Validators.pattern("^[0-9]*$")]],
      secondaryPhoneType: [data?.secondaryPhoneType || ''],
      sPhoneNumber: [data?.sPhoneNumber || ''],
      primaryPreferredCommunicationMethod: [data?.primaryPreferredCommunicationMethod || '',],
      secondaryPreferredCommunicationMethod: [data?.secondaryPreferredCommunicationMethod || ''],
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

  clearCommPrimary() {
		this.Form.controls['primaryPreferredCommunicationMethod'].setValue("");
	}

  primaryPhoneTypeValid() {
    return this.Form.get('primaryPhoneType')?.valid;
  }

  pPhoneNumberValid() {
    return this.Form.get('pPhoneNumber')?.valid;
  }

  commPrimaryValid() {
    return this.Form.get('primaryPreferredCommunicationMethod')?.value.length > 0;
  }

  emailValid() {
    return this.Form.get('emailId')?.value.length > 0;
  }

  async getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/global-data/static-types`)
      .subscribe(async (data: any) => {
        this.famiMembTitle = data;
        console.log("global data", this.famiMembTitle);

      });
  }

  save(data: any) {
    this.onSubmit.emit(data);
    console.log("data", data);
    this.patientUserServ.setLegalGuard(data);
    this.patientUserServ.setPatientFamiMemb(data.relationship, data);
    this.Form.markAsPristine();
    this.alertService.success(
      'Success',
      'Legal Guardian has been updated successfully'
    );
		this.patientUserServ.setlegalGuardNotPristine(false);
  }
  cancel() {
    this.onCancel.emit();
  }

  handleUploadedImage(e: { url: string }) {
    if (e && this.idForm) {
      this.idForm.controls['logo'].setValue(e.url);
    }
  }

  onSectionChange(sectionId: string) {
    this.currentSelection = sectionId;
  }

}

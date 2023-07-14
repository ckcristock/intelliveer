import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '@services/alert/alert.service';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';

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

  isSaveButton: boolean = false;
  inEdit: boolean = false;
  FormDisable!: boolean;
  validEmail: boolean | undefined;
  validPrimaryPhoneType: boolean | undefined;
  validPrimaryPhoneNumber: boolean | undefined;
  validSecondaryPhoneType: boolean | undefined;
  validSecondaryPhoneNumber: boolean | undefined;
  validPrimaryPreferredCommunicationMethod: boolean | undefined;
  validSecondaryPreferredCommunicationMethod: boolean | undefined;
  validPreferredTimingForCall: boolean | undefined;
  validDOB: boolean | undefined;
  variableDiable: boolean = true;
  validCreditRating: boolean | undefined;
  imageUpLoaderDisable: boolean = true;
  validRelationship: boolean | undefined;
  mandatoryFirstNameSaved: boolean = false;
  mandatoryPrimaryPhoneNumberSaved: boolean = false;
  mandatoryLastNameSaved: boolean = false;
  mandatoryPrimaryPhoneTypeSaved: boolean = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private patientUserServ: PatientUserService,
    private addPatientServ: AddPatientService,
    private insuranceServ: InsuranceService,
    private onboardingServ: OnboardingService,
    private alertService: AlertService,
    private contactPersonFormService: ContactPersonFormService,
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
    this.getStaticData();
  }

  async ngOnInit() {
    this.initForm(this.formData);
    this.setUserDataToForm();
    this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
    this.insuranceServ.setFalseAllNotPristine();
    this.onboardingServ.setFalseAllNotPristine();
    this.Form?.statusChanges.subscribe(
      result => {
        if (!this.Form?.pristine) {
          this.patientUserServ.setinsuranSubscNotPristine(true);
        }
      }
    );
    this.insuranSubsc.push(await this.patientUserServ.getInsuSubscFamiMemb());

    this.relationship = await this.patientUserServ.getInsuSubscToPati();
    this.Form.controls['relationship'].setValue(this.relationship);
  }

  async ngAfterViewInit() {
    await this.reviewInputs();
    this.enableAndDisableInputs();
  }

  initForm(data?: any) {
    data = data || {};
    if (Object.keys(data).length != 0) {
      this.inEdit = true;
      this.FormDisable = true;
    } else if (Object.keys(data).length == 0) {
      this.inEdit = false;
      this.FormDisable = false;
    }
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
      maritalStatus: [data?.maritalStatus || ''],
      lastUsedName: [data?.lastUsedName || ''],
      emailId: ['',],
      primaryPhoneType: [data?.primaryPhoneType || '', Validators.required],
      primaryPhoneNumber: [data?.primaryPhoneNumber || '', [Validators.required, Validators.pattern("^[0-9]*$")]],
      secondaryPhoneType: [data?.secondaryPhoneType || ''],
      secondaryPhoneNumber: [data?.secondaryPhoneNumber || ''],
      primaryPreferredCommunicationMethod: [data?.primaryPreferredCommunicationMethod || '',],
      secondaryPreferredCommunicationMethod: [data?.secondaryPreferredCommunicationMethod || ''],
      preferredTimingForCall: [data?.preferredTimingForCall || ''],
      workStatus: [data?.workStatus || ''],
      occupation: [data?.occupation || ''],
      employer: [data?.employer || ''],
      SSN: [data?.SSN || ''],
      creditRating: [data?.creditRating || '', Validators.pattern("^[0-9]*$")],
      note: [data?.note || ''],
      address: this.addressFormService.getAddressForm(
        data?.address || {}
      )
    });
    this.addressFormService.setDisabledOrEnabled(this.FormDisable);
    this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
  }

  setUserDataToForm() {
    this.Form.controls['title'].setValue(this.formData.profile.title);
    this.Form.controls['firstName'].setValue(
      this.formData.profile.firstName
    );
    this.Form.controls['middleName'].setValue(
      this.formData.profile.middleName
    );
    this.Form.controls['lastName'].setValue(this.formData.profile.lastName);
    this.Form.controls['DOB'].setValue(this.formData.profile.DOB);
    this.Form.controls['gender'].setValue(this.formData.profile.gender);
    this.Form.controls['pronoun'].setValue(
      this.formData.profile.preferredPronoun
    );
    this.Form.controls['language'].setValue(this.formData.profile.language);
    this.Form.controls['maritalStatus'].setValue(
      this.formData.profile.maritalStatus
    );
    this.Form.controls['emailId'].setValue(this.formData.contact.email);
    this.Form.controls['primaryPhoneType'].setValue(
      this.formData.contact.primaryPhone.type
    );
    this.Form.controls['primaryPhoneNumber'].setValue(
      this.formData.contact.primaryPhone.number
    );
    this.Form.controls['secondaryPhoneType'].setValue(
      this.formData.contact.secondaryPhone.type
    );
    this.Form.controls['secondaryPhoneNumber'].setValue(
      this.formData.contact.secondaryPhone.number
    );
    this.Form.controls['primaryPreferredCommunicationMethod'].setValue(
      this.formData.contact.primaryPreferredCommunicationMethod
    );
    this.Form.controls['secondaryPreferredCommunicationMethod'].setValue(
      this.formData.contact.secondaryPreferredCommunicationMethod
    );
    this.Form.controls['preferredTimingForCall'].setValue(
      this.formData.contact.preferredTimingForCall
    );
    this.Form.controls['workStatus'].setValue(
      this.formData.financials.workStatus
    );
    this.Form.controls['occupation'].setValue(
      this.formData.financials.occupation
    );
    this.Form.controls['employer'].setValue(
      this.formData.financials.employer
    );
    this.Form.controls['creditRating'].setValue(
      this.formData.financials.creditRating
    );
    this.Form.controls['SSN'].setValue(this.formData.financials.SSN);
    this.Form.controls['note'].setValue(this.formData.notes);
  }

  clearCommPrimary() {
    this.Form.controls['primaryPreferredCommunicationMethod'].setValue("");
  }

  async reviewInputs() {
    await this.fieldValidation("relationship", true);
    await this.fieldValidation("emailId", true);
    await this.fieldValidation("primaryPreferredCommunicationMethod", true);
    await this.fieldValidation("DOB", true);
    await this.fieldValidation("creditRating", true);
  }

  async fieldValidation(field: any, notRequiredButPattern?: boolean) {
    let validator;

    if (notRequiredButPattern) {
      validator = (this.Form.get(field)?.valid && (this.Form.get(field)?.value != null) && this.Form.get(field)?.value != 0);
    } else {
      validator = this.Form.get(field)?.value != null;
    }

    switch (field) {
      case 'relationship':
        this.validRelationship = validator;
        break;
      case 'DOB':
        this.validDOB = validator;
        break;
      case 'emailId':
        this.validEmail = validator;
        break;
      case 'primaryPhoneType':
        this.validPrimaryPhoneType = validator;
        break;
      case 'primaryPhoneNumber':
        this.validPrimaryPhoneNumber = validator;
        break;
      case 'secondaryPhoneType':
        this.validSecondaryPhoneType = validator;
        break;
      case 'secondaryPhoneNumber':
        this.validSecondaryPhoneNumber = validator;
        break;
      case 'primaryPreferredCommunicationMethod':
        this.validPrimaryPreferredCommunicationMethod = validator;
        break;
      case 'secondaryPreferredCommunicationMethod':
        this.validSecondaryPreferredCommunicationMethod = validator;
        break;
      case 'preferredTimingForCall':
        this.validPreferredTimingForCall = validator;
        break;
      case 'creditRating':
        this.validCreditRating = validator;
        break;
      default:
    }
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
    this.mandatoryFirstNameSaved = true;
    this.mandatoryLastNameSaved = true;
    this.mandatoryPrimaryPhoneTypeSaved = true;
    this.mandatoryPrimaryPhoneNumberSaved = true;
    if (this.Form?.valid && !this.Form.pristine) {
      this.onSubmit.emit(data);
      this.Form.markAsPristine();
      this.alertService.success(
        'Success',
        'Insurance Subscriber has been updated successfully'
      );
      this.patientUserServ.setinsuranSubscNotPristine(false);
    }
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

  checkPermission() {
    this.isSaveButton = true;
    this.enableAndDisableInputs();
  }

  enableAndDisableInputs() {
    if (this.inEdit) {
      if (!this.isSaveButton) {
        this.Form?.disable();
        this.FormDisable = true;
      } else if (this.isSaveButton) {
        this.Form?.enable();
        this.FormDisable = false;
      }
      this.addressFormService.setDisabledOrEnabled(this.FormDisable);
      this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
    }
  }

  inputChanged(field: any) {
    switch (field) {
      // For Add Patient Module
      case 'firstName':
        this.mandatoryFirstNameSaved = false;
        break;
      case 'lastName':
        this.mandatoryLastNameSaved = false;
        break;
      case 'primaryPhoneType':
        this.mandatoryPrimaryPhoneTypeSaved = false;
        break;
      case 'primaryPhoneNumber':
        this.mandatoryPrimaryPhoneNumberSaved = false;
        break;
      default:
    }
  }

}

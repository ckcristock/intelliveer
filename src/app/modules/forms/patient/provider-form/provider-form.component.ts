import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';

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

  currentSelection: string = '';
  menuItems: MenuItem[] = [
    { title: 'Overview', id: 'overview' },
    { title: 'Profile', id: 'profile' },
    { title: 'Address', id: 'address' },
    { title: 'Contact', id: 'contact' },
    { title: 'Notes', id: 'notes' },
  ];


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
  famiMembTitle!: any;

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
  validPPhoneNumber: boolean | undefined;
  validDMSchool: boolean | undefined;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private alertService: AlertService,
    private patientUserServ: PatientUserService,
    private addPatientServ: AddPatientService,
    private insuranceServ: InsuranceService,
    private onboardingServ: OnboardingService,
    private contactPersonFormService: ContactPersonFormService,
  ) {
    this.idForm = this.fb.group({
      // name: '',
      info: this.fb.array([]),
    });
    this.initForm(this.formData);
    this.getStaticData();
  }

  async ngOnInit() {
    this.initForm(this.formData);
    this.reviewInputs();
    this.enableAndDisableInputs();
    this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
    this.insuranceServ.setFalseAllNotPristine();
    this.onboardingServ.setFalseAllNotPristine();
    this.Form?.statusChanges.subscribe(
      result => {
        if (!this.Form?.pristine) {
          this.patientUserServ.setExterProvNotPristine(true);
        }
      }
    );
  }

  initForm(data?: any) {
    data = data || {};
    if (Object.keys(data).length != 0) {
      this.inEdit = true;
      this.FormDisable = true;
      console.log("YYYYYYYYYYYYHHHHH");

    } else if (Object.keys(data).length == 0) {
      this.inEdit = false;
      this.FormDisable = false;
    }
    this.Form = this.fb.group({
      provider: [data?.relation || ''],
      title: [data?.title || ''],
      firstName: [data?.firstName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      praticeName: [data?.praticeName || ''],
      degree: [data?.degree || ''],
      DMSchool: [data?.DMSchool || '', Validators.required],
      language: [data?.language || ''],
      specialty: [data?.specialty || ''],
      specialtySchool: [data?.specialtySchool || ''],
      greeting: [data?.greeting || ''],
      emailId: [data?.emailId || '', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      demailId: [data?.demailId || ''],
      primaryPhoneType: [data?.primaryPhoneType || ''],
      pPhoneNumber: [data?.pPhoneNumber || '', Validators.pattern("^[0-9]*$")],
      secondaryPhoneType: [data?.secondaryPhoneType || ''],
      sPhoneNumber: [data?.sPhoneNumber || '',],
      preferredMailMethod: [data?.preferredMailMethod || ''],
      website: [data?.website || ''],
      note: [data?.note || ''],
      address: this.addressFormService.getAddressForm(
        data?.address || {}
      )
    });
    this.addressFormService.setDisabledOrEnabled(this.FormDisable);
    this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);

  }

  async reviewInputs() {
    await this.fieldValidation('DMSchool', undefined, undefined, true);
    console.log(" this.validDMSchool", this.validDMSchool);

    await this.fieldValidation("emailId", true, true);
    await this.fieldValidation("primaryPreferredCommunicationMethod", true);
    await this.fieldValidation("DOB", true, true);
    await this.fieldValidation("pPhoneNumber", true);
  }

  async fieldValidation(field: any, notRequiredButPattern?: boolean, greaterZero?: boolean, mandatory?: boolean) {
    let validator;
    if (mandatory) {
      validator = this.Form.get(field)?.valid;
    }
    if (notRequiredButPattern) {
      validator = (this.Form.get(field)?.valid && (this.Form.get(field)?.value != null));
      if (greaterZero) {
        validator = this.Form.get(field)?.value != 0;
      }
    } else {
      validator = this.Form.get(field)?.value != null;
    }

    switch (field) {
      case 'DMSchool':
        this.validDMSchool = validator;
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
      case 'pPhoneNumber':
        this.validPPhoneNumber = validator;
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
    this.onSubmit.emit(data);
    this.Form.markAsPristine();
    this.alertService.success(
      'Success',
      'Insurance Subscriber has been updated successfully'
    );
    this.patientUserServ.setExterProvNotPristine(false);
  }
  cancel() {
    this.onCancel.emit();
  }

  onSectionChange(sectionId: string) {
    this.currentSelection = sectionId;
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

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-family-member-form',
  templateUrl: './family-member-form.component.html',
  styleUrls: ['./family-member-form.component.scss']
})
export class FamilyMemberFormComponent implements OnInit {

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
  ];
  genders: any[] = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
  ];

  relationship!: string;
  idForm: FormGroup;
  familyMember: any[] = [];
  famiMembTitle!: any;
  isSaveButton: boolean = false;
	inEdit: boolean = false;
	FormDisable!: boolean;

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
		this.enableAndDisableInputs();
    this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
    this.insuranceServ.setFalseAllNotPristine();
    this.onboardingServ.setFalseAllNotPristine();
    this.Form?.statusChanges.subscribe(
      result => {
        if (!this.Form?.pristine) {
          this.patientUserServ.setFamilyMembNotPristine(true);
        }
      }
    );
    this.familyMember.push(await this.patientUserServ.getFamylMembFamylMemb());

    this.relationship = await this.patientUserServ.getFamylMembToPati();
    this.Form.controls['relationship'].setValue(this.relationship);
    // this.Form.controls['title'].setValue(this.familyMember[0].title);
    this.Form.controls['firstName'].setValue(this.familyMember[0].firstName);
    this.Form.controls['middleName'].setValue(this.familyMember[0].middleName);
    this.Form.controls['lastName'].setValue(this.familyMember[0].lastName);
    this.Form.controls['DOB'].setValue(this.familyMember[0].DOB);
    this.Form.controls['gender'].setValue(this.familyMember[0].gender);
    this.Form.controls['pronoun'].setValue(this.familyMember[0].prefePronoun);
    this.Form.controls['language'].setValue(this.familyMember[0].language);
    this.Form.controls['maried'].setValue(this.familyMember[0].maritalStatus);
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
      title: [data?.title || ''],
      firstName: [data?.firstName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      DOB: [data?.DOB || ''],
      gender: [data?.gender || ''],
      pronoun: [data?.pronoun || ''],
      relationship: [data?.relation || ''],
    });
    this.addressFormService.setDisabledOrEnabled(this.FormDisable);
		this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
  }

  fieldValidation(field: any, notRequiredButPattern?: boolean) {
    if (notRequiredButPattern) {
      return (this.Form.get(field)?.valid && this.Form.get(field)?.value != null);
    } else {
      return this.Form.get(field)?.value != null
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
    this.patientUserServ.setFamyMemb(data);
    this.patientUserServ.setPatientFamiMemb(data.relationship, data);
    this.Form.markAsPristine();
    this.alertService.success(
      'Success',
      'Family Members has been updated successfully'
    );
    this.patientUserServ.setFamilyMembNotPristine(false);
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '@services/alert/alert.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';

@Component({
  selector: 'app-referer-form',
  templateUrl: './referer-form.component.html',
  styleUrls: ['./referer-form.component.scss']
})
export class RefererFormComponent implements OnInit {

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

  idForm: FormGroup;
  selectTab: string = "overview";
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
    this.getStaticData();
  }

  ngOnInit(): void {
    this.initForm(this.formData);
		this.enableAndDisableInputs();
		this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				if (!this.Form?.pristine) {
					this.patientUserServ.setReferrerNotPristine(true);
				}
			}
		);
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
      companyName: [data?.companyName || ''],
      title: [data?.title || ''],
      firstName: [data?.firstName || '', [Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      middleName: [data?.middleName || ''],
      lastName: [data?.lastName || '', [Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]],
      greeting: [data?.greeting || ''],
      emailId: [data?.emailId || ''],
      primaryPhoneType: [data?.primaryPhoneType || '', ],
      pPhoneNumber: [data?.pPhoneNumber || '', [Validators.pattern("^[0-9]*$")]],
      secondaryPhoneType: [data?.secondaryPhoneType || ''],
      sPhoneNumber: [data?.sPhoneNumber || ''],
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
    this.Form.markAsPristine();
    this.alertService.success(
      'Success',
      'Referrer has been updated successfully'
    );
    this.patientUserServ.setReferrerNotPristine(false);
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

  scroll(el: HTMLElement, selectTab: string) {
    this.selectTab = selectTab.trim();
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
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

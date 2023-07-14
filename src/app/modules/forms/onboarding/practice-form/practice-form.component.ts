import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { AlertService } from '@services/alert/alert.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactDetailsFormService } from '@services/forms/contact-details-form/contact-details-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { FieldValidationService } from '@services/global/field-validation/field-validation.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';

@Component({
	selector: 'app-practice-form',
	templateUrl: './practice-form.component.html',
	styleUrls: ['./practice-form.component.scss']
})
export class PracticeFormComponent implements OnInit {
	Form: FormGroup | undefined;
	staticData: any;
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	practiceTypeData: any = [];
	countries: any;
	imageSrc: any;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Physical Address', id: 'physicalAddress' },
		{ title: 'Mailing Address', id: 'mailingAddress' },
		{ title: 'Insurance ', id: 'insuranceBillingAddress' },
		{ title: 'Contact', id: 'contactDetails' },
		{ title: 'Contact Person Info', id: 'contactPerson' }
	];

	globalData: any = [
		{
			type: 'Orthodontics',
			value: 'Orthodontics',
			dataType: 'Global Data'
		},
		{
			type: 'Orthodontics 2',
			value: 'Orthodontics2',
			dataType: 'Business Data'
		}
	];
	practiceEdit: any;
	isSaveButton: boolean = false;
	inEdit: boolean = false;
	FormDisable!: boolean;
	urlPractice!: string;
	practiceName!: any;
	imageUpLoaderDisable: boolean = true;
	mandAndRequiredFields: any[] = [
		{ name: 'name', type: 'dropdown', mandSaved: false, required: false, valid: false },
		{ name: 'practiceType', type: 'dropdown', mandSaved: false, required: false, valid: false },
	];

	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private contactDetailsFormService: ContactDetailsFormService,
		private alertService: AlertService,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private searchString: SearchStringPipePipe,
		private globalRoutes: GlobalRoutesService,
		private fieldValidationServ: FieldValidationService,
	) { }

	ngOnInit() {
		this.getStaticData();
		this.initForm(this.formData);
		this.enableAndDisableInputs();
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				if (!this.Form?.pristine) {
					this.onboardingServ.setpracticeNotPristine(true);
				}
			}
		);
		this.urlPractice = this.globalRoutes.getSettingsOnboardingRoutes()[3].url;

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
			name: [data?.name || '', Validators.required],
			// description: [data?.description || '', Validators.required],
			abbreviation: [data?.abbreviation || ''],
			logo: [data?.logo || 'null'],
			practiceType: [data?.practiceType || '', Validators.required],
			physicalAddress: this.addressFormService.getAddressForm(
				data?.physicalAddress || {}
			),
			mailingAddress: this.addressFormService.getAddressForm(
				data?.mailingAddress || {}
			),
			insuranceBillingAddress: this.addressFormService.getAddressForm(
				data?.insuranceBillingAddress || {}
			),
			contactDetails:
				this.contactDetailsFormService.getContactDetailsForm(
					data?.contactDetails || {}
				),
			contactPerson: this.contactPersonFormService.getContactPersonForm(
				data?.contactPerson || {}
			)
		});
		this.practiceName = this.Form.get('name')?.value;
	}

	save(data: any) {
		this.mandAndRequiredFields.forEach(field => {
			field.mandSaved = true;
		});
		if (this.Form?.valid && !this.Form?.pristine) {
			this.onSubmit.emit(data);
			this.Form?.markAsPristine();
			this.alertService.success(
				'Success',
				'Practice has been updated successfully'
			);
			this.onboardingServ.setpracticeNotPristine(false);
		}
	}
	cancel() {
		this.onCancel.emit();
	}
	getStaticData() {
		this.http
			.get(`${CONFIG.backend.host}/auth/global-data/static-types`)
			.subscribe({
				next: (data) => {
					this.staticData = data;
					// this.getPracticeTypeData();
				},
				error: () => { },
				complete: () => { }
			});
	}
	setAddress(type: string) {
		let physicalAddress = this.Form?.controls['physicalAddress'].value;
		this.Form?.controls[type].setValue(physicalAddress);
	}
	handleUploadedImage(e: { url: string }) {
		if (e && this.Form) {
			this.Form.controls['logo'].setValue(e.url);
		}
	}
	scroll(el: HTMLElement) {
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		});
	}
	getPracticeTypeData() {
		let globalData = this.staticData?.practiceType || [];
		let _data: any[] = [];

		let businessData: any[] = [
			{
				label: 'Pediatric dental services',
				value: 'pediatric_dental_services'
			},
			{
				label: 'Endodontic procedures',
				value: 'endodontic_procedures'
			}
		];
		if (businessData && businessData.length > 0) {
			businessData.map((item: any) => {
				if (item) {
					item['dataType'] = 'Business Data';
					_data.push(item);
				}
			});
		}

		if (globalData && globalData.length > 0) {
			globalData.map((item: any) => {
				if (item) {
					if (businessData && businessData.length > 0) {
						item['dataType'] = 'Global Data';
					}
					_data.push(item);
				}
			});
		}

		this.practiceTypeData = _data;
	}
	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

	async fieldValidation(field: any, notRequiredButPattern?: boolean) {
		this.mandAndRequiredFields = this.fieldValidationServ.fieldValidation(field, notRequiredButPattern, this.Form);
	}

	checkPermission() {
		let practice = this.globalRoutes.getSettingsOnboardingRoutes();
		let getpractice = this.searchString.transform('title', practice, "Practice");
		this.practiceEdit = this.searchString.transform('title', getpractice[0].child, 'Edit');
		if (this.practiceEdit[0].isEnabled) {
			this.isSaveButton = true;
			this.enableAndDisableInputs();
			this.imageUpLoaderDisable = false;
		} else if (!this.practiceEdit.isEnable) {
			this.isSaveButton = false;
		}

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
	inputChanged(fieldParam: any) {
		this.mandAndRequiredFields.forEach(field => {
			if (field.name == fieldParam) {
				field.mandSaved = false;
			}
		});
	}
}

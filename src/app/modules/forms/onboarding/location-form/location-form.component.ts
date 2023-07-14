import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { AddressFormComponent } from '@modules/forms/address-form/address-form.component';
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
	selector: 'app-location-form',
	templateUrl: './location-form.component.html',
	styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {
	@ViewChild(AddressFormComponent) AddressFormComponent!: AddressFormComponent;
	Form: FormGroup | undefined;
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
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
	locationEdit: any;
	isSaveButton: boolean = false;
	inEdit: boolean = false;
	FormDisable!: boolean;
	urlLocation!: any;
	locationName!: any;
	locationTimeZoneData!: any;
	imageUpLoaderDisable: boolean = true;
	mandAndRequiredFields: any[] = [
		{ name: 'name', type: 'string', mandSaved: false, required: false, valid: false },
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

	async ngOnInit() {
		await this.initForm(this.formData);
		this.enableAndDisableInputs();
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				if (!this.Form?.pristine && this.Form?.controls['locationTimeZone'].value != null) {
					this.onboardingServ.setlocationNotPristine(true);
				}
			}
		);
		this.urlLocation = this.globalRoutes.getSettingsOnboardingRoutes()[2].url;
	}

	async initForm(data?: any) {
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
			registrationNumber: [data?.registrationNumber || ''],
			locationTimeZone: [data?.locationTimeZone || ''],
			physicalAddress: this.addressFormService.getAddressForm(
				data?.physicalAddress || {},
				{
					addressLine1: true,
					zipCode: true,
					city: true,
					state: true,
					country: true
				}
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
		this.addressFormService.setDisabledOrEnabled(this.FormDisable);
		this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
		this.locationName = this.Form.get('name')?.value;
	}

	save(data: any) {
		this.mandAndRequiredFields.forEach(field => {
			field.mandSaved = true;
		});
		this.AddressFormComponent.saved();
		if (this.Form?.valid && !this.Form?.pristine) {
			this.onSubmit.emit(data);
			this.Form?.markAsPristine();
			this.alertService.success(
				'Success',
				'Location has been updated successfully'
			);
			this.onboardingServ.setlocationNotPristine(false);
		}
	}
	cancel() {
		this.onCancel.emit();
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
	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

	async fieldValidation(field: any, notRequiredButPattern?: boolean) {
		this.mandAndRequiredFields = this.fieldValidationServ.fieldValidation(field, notRequiredButPattern, this.Form);
	}

	checkPermission() {
		let location = this.globalRoutes.getSettingsOnboardingRoutes();
		let getlocation = this.searchString.transform('title', location, "Location");
		this.locationEdit = this.searchString.transform('title', getlocation[0].child, 'Edit');
		if (this.locationEdit[0].isEnabled) {
			this.isSaveButton = true;
			this.enableAndDisableInputs();
			this.imageUpLoaderDisable = false;
		} else if (!this.locationEdit.isEnable) {
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

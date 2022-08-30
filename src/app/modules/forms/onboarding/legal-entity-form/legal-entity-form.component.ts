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
import { GeoService } from '@services/global-data/public/geo/geo.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';

@Component({
	selector: 'app-legal-entity-form',
	templateUrl: './legal-entity-form.component.html',
	styleUrls: ['./legal-entity-form.component.scss']
})
export class LegalEntityFormComponent implements OnInit {
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
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private contactDetailsFormService: ContactDetailsFormService,
		private geoService: GeoService,
		private alertService: AlertService,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
	) {
		this.getCountries();
	}

	ngOnInit(): void {
		this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				console.log(result)
				if (!this.Form?.pristine) {
					console.log("this.Form?.pristine", this.Form?.pristine);
					console.log("status", this.Form?.pristine);
					this.onboardingServ.setlegalEntityBenfNotPristine(true);
				}
			}
		);
	}
	save(data: any) {
		this.onSubmit.emit(data);
		this.Form?.markAsPristine();
		this.alertService.success(
			'Success',
			'Legal Entity has been updated successfully'
		);
		this.onboardingServ.setlegalEntityBenfNotPristine(false);
	}
	cancel() {
		this.onCancel.emit();
	}
	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			logo: [data?.logo || 'null'],
			name: [data?.name || '', Validators.required],
			// description: [data?.description || '', Validators.required],
			abbreviation: [data?.abbreviation || ''],
			TIN: [data?.TIN || '', Validators.required],
			country: [data?.country || ''],
			currency: [data?.currency || ''],
			isLegalEmployer: [data?.isLegalEmployer || 'yes'],
			employerId: [data?.employerId || ''],
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
	}

	leNameValid() {
		return this.Form?.get('name')?.valid;
	}

	tinValid() {
		return this.Form?.get('TIN')?.valid;
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
	getCountries() {
		this.geoService.getCountries().subscribe({
			next: (res) => {
				this.countries = res;
			}
		});
	}
	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}
}

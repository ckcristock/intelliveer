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
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';

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
	) { }

	ngOnInit() {
		this.getStaticData();
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
					this.onboardingServ.setpracticeNotPristine(true);
				}
			}
		);
	}
	initForm(data?: any) {
		data = data || {};
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
	}

	firstNameValid() {
		return this.Form?.get('name')?.valid;
	}

	pracTypeValid() {
		return this.Form?.get('practiceType')?.valid;
	}

	save(data: any) {
		this.onSubmit.emit(data);
		this.Form?.markAsPristine();
		this.alertService.success(
			'Success',
			'Practice has been updated successfully'
		);
		this.onboardingServ.setpracticeNotPristine(false);
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
}

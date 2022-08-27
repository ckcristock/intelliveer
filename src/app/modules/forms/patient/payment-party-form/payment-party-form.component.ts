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
		{ title: 'Notes', id: 'notes' }
	];

	idForm: FormGroup;
	selectTab: string = 'overview';
	fileName: string = '';
	filePath: any;
	relationship!: string;
	paymentParty: any[] = [];
	famiMembTitle!: any;
	pronouns: any[] = [{ pronoun: 'He' }, { pronoun: 'She' }];

	constructor(
		private http: HttpClient,
		private fb: FormBuilder,
		private addressFormService: AddressFormService
	) {
		this.idForm = this.fb.group({
			// name: '',
			info: this.fb.array([])
		});
		this.getStaticData();
	}

	async ngOnInit() {
		console.log(this.formData);
		this.initForm(this.formData);
		JSON.parse(localStorage.getItem('PaymPartyToPati')!);

		this.relationship = JSON.parse(
			localStorage.getItem('PaymPartyToPati')!
		);
		this.Form.controls['relationship'].setValue(this.relationship);
		this.setUserDataToForm();
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			relationship: [data?.relation || ''],
			title: [data?.title || ''],
			firstName: [
				data?.firstName || '',
				[
					Validators.required,
					Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
				]
			],
			middleName: [data?.middleName || ''],
			lastName: [
				data?.lastName || '',
				[
					Validators.required,
					Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
				]
			],
			DOB: [data?.DOB || ''],
			gender: [data?.gender || ''],
			pronoun: [data?.pronoun || ''],
			language: [data?.language || ''],
			martialStatus: [data?.martialStatus || ''],
			emailId: ['', Validators.minLength(2)],
			primaryPhoneType: [
				data?.primaryPhoneType || '',
				Validators.required
			],
			primaryPhoneNumber: [
				data?.primaryPhoneNumber || '',
				[Validators.required, Validators.pattern('^[0-9]*$')]
			],
			secondaryPhoneType: [data?.secondaryPhoneType || ''],
			secondaryPhoneNumber: [data?.secondaryPhoneNumber || ''],
			primaryPreferredCommunicationMethod: [
				data?.primaryPreferredCommunicationMethod || ''
			],
			secondaryPreferredCommunicationMethod: [
				data?.secondaryPreferredCommunicationMethod || ''
			],
			preferredTimingForCall: [data?.preferredTimingForCall || ''],
			workStatus: [data?.workStatus || ''],
			occupation: [data?.occupation || ''],
			employer: [data?.employer || ''],
			SSN: [data?.SSN || ''],
			creditRating: [data?.creditRating || ''],
			note: [data?.note || ''],
			address: this.addressFormService.getAddressForm(data?.address || {})
		});
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
		this.Form.controls['martialStatus'].setValue(
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

	primaryPhoneTypeValid() {
		return this.Form.get('primaryPhoneType')?.valid;
	}

	primaryPhoneNumberValid() {
		return this.Form.get('primaryPhoneNumber')?.valid;
	}

	commPrimaryValid() {
		return (
			this.Form.get('primaryPreferredCommunicationMethod')?.value.length >
			0
		);
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
				error: () => {},
				complete: () => {}
			});
	}

	save(data: any) {
		this.onSubmit.emit(data);
		this.Form.markAsPristine();
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
		console.log(event);
		this.filePath = event.target.value;
		const file: File = event.target.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.filePath = reader.result;
		};
		if (file) {
			this.fileName = file.name;
		}
	}

	cancleImage() {
		this.filePath = '';
		this.fileName = '';
	}
}

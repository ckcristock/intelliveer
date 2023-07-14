import { HttpClient } from '@angular/common/http';
import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';
import { FieldValidationService } from "@services/global/field-validation/field-validation.service";

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
		{ title: 'Notes', id: 'notes' }
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
		private globalRoutes: GlobalRoutesService,
		private searchString: SearchStringPipePipe,
		private fieldValidationServ: FieldValidationService,
	) {
		this.idForm = this.fb.group({
			// name: '',
			info: this.fb.array([]),
		});
		this.getStaticData();
	}

	async ngOnInit() {
		this.initForm(this.formData);
		if (this.formData) {
			this.setUserDataToForm();
		}
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				if (!this.Form?.pristine) {
					this.patientUserServ.setlegalGuardNotPristine(true);
				}
			}
		);
		// this.Form.get('emailId')?.markAsDirty();
		this.legalGuard.push(await this.patientUserServ.getLegalGuardFamiMemb());
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
			maritalStatus: [data?.maritalStatus || ''],
			emailId: [data?.emailId || '', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
			primaryPhoneType: [data?.primaryPhoneType || '', Validators.required],
			primaryPhoneNumber: [
				data?.primaryPhoneNumber || '',
				[Validators.required, Validators.pattern('^[0-9]*$')]
			],
			secondaryPhoneType: [data?.secondaryPhoneType || ''],
			secondaryPhoneNumber: [data?.secondaryPhoneNumber || ''],
			primaryPreferredCommunicationMethod: [data?.primaryPreferredCommunicationMethod || ''],
			secondaryPreferredCommunicationMethod: [data?.secondaryPreferredCommunicationMethod || ''],
			preferredTimingForCall: [data?.preferredTimingForCall || ''],
			workStatus: [data?.workStatus || ''],
			occupation: [data?.occupation || ''],
			employer: [data?.employer || ''],
			SSN: [data?.SSN || ''],
			creditRating: [data?.creditRating || ''],
			note: [data?.note || ''],
			address: this.addressFormService.getAddressForm(data?.address || {})
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
	}

	async fieldValidation(field: any, notRequiredButPattern?: boolean) {
		const aa = this.fieldValidationServ.fieldValidation(field, notRequiredButPattern, this.Form);
		console.log("this.fieldValidationServ.fieldValidation(field, notRequiredButPattern, this.Form)", aa);

	}

	async getStaticData() {
		this.http
			.get(`${CONFIG.backend.host}/auth/global-data/static-types`)
			.subscribe(async (data: any) => {
				this.famiMembTitle = data;
			});
	}

	save(data: any) {
		this.mandatoryFirstNameSaved = true;
		this.mandatoryLastNameSaved = true;
		this.mandatoryPrimaryPhoneTypeSaved = true;
		this.mandatoryPrimaryPhoneNumberSaved = true;
		if (this.Form?.valid && !this.Form.pristine) {
			this.onSubmit.emit(data);
			this.patientUserServ.setLegalGuard(data);
			this.patientUserServ.setPatientFamiMemb(data.relationship, data);
			this.Form.markAsPristine();
			this.patientUserServ.setlegalGuardNotPristine(false);
		}
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

	checkPermission() {
		this.isSaveButton = true;
		this.enableAndDisableInputs();
		this.imageUpLoaderDisable = false;
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

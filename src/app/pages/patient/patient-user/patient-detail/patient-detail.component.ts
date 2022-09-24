import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { CONFIG } from '@config/index';
import { UserService } from '@services/user/user.service';
import { PatientDetailService } from '@services/patient/family/patient-detail.service';
import { AlertService } from '@services/alert/alert.service';
import { Patient } from '@services/patient/family/patient';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { Router } from '@angular/router';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';

@Component({
	selector: 'app-patient-detail',
	templateUrl: './patient-detail.component.html',
	styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
	public navIndex: number = 0;
	idForm: FormGroup;
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	Form!: FormGroup;
	editButton = { isButton: false, url: "/dashboard/home/add-patient/coor-with-prospect/callers-info" }
	interestsLst: any[] = [
		'option 1',
		'option 2',
		'option 3',
		'option 4',
		'option 5',
		'option 6'
	];
	tagsLst: any[] = [
		'option 1',
		'option 2',
		'option 3',
		'option 4',
		'option 5',
		'option 6'
	];
	tabsLst: any[] = [];

	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Information', id: 'information' },
		{ title: 'Preferences', id: 'preferences' },
		{ title: 'Emergency Contact', id: 'emergencyContact' },
		{ title: 'Notes', id: 'notes' }
	];
	userObj: any = {};
	legelEntityList: any;
	locationList: any[] = [];
	practiceList: any[] = [];
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	globalData: any = {
		title: ''
	};
	bgId: any;
	patientObj: Patient | undefined;
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
	inEdit: boolean = true;
	FormDisable: boolean = true;
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
	validLocation: boolean | undefined;
	validBilling: boolean | undefined;
	validProvider: boolean | undefined;
	validCPerson: boolean | undefined;
	validName: boolean | undefined;
	validEContact: boolean | undefined;

	constructor(
		private fb: FormBuilder,
		private addressFormService: AddressFormService,
		private http: HttpClient,
		private userService: UserService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private authService: AuthService,
		private patientDetailService: PatientDetailService,
		private alertService: AlertService,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private router: Router,
		private contactPersonFormService: ContactPersonFormService,
	) {
		this.idForm = this.fb.group({
			// name: '',
			info: this.fb.array([])
		});
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getOrgBgId();
					}
				});
	}

	async ngOnInit() {
		this.addId();
		this.getStaticData();
		this.userObj = JSON.parse(
			localStorage.getItem('selectedPatient') || ''
		);
		this.initForm(this.formData);
		await this.reviewInputs();
		this.enableAndDisableInputs();
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				if (!this.Form?.pristine) {
					this.patientUserServ.setpatientNotPristine(true);
				}
			}
		);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			title: [data?.title || null],
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
			DOB: [data?.DOB || '', Validators.required],
			gender: [data?.gender || null, Validators.required],
			pronoun: [data?.pronoun || null],
			language: [data?.language || null],
			maried: [data?.maried || null],
			preferredName: [data?.preferredName || ''],
			pronounciation: [data?.pronounciation || ''],
			school: [data?.school || ''],
			interest: [data?.interest || ''],
			tags: [data?.tags || ''],
			location: [data?.location || ''],
			practice: [data?.practice || ''],
			provider: [data?.provider || null],
			idNumber: [data?.idNumber || ''],
			idType: [data?.idType || ''],
			patientCoordinator: [data?.patientCoordinator || ''],
			treatmentCoordinator: [data?.treatmentCoordinator || ''],
			CSAssistant: [data?.CSAssistant || ''],
			cPerson: [data?.cPerson || null],
			name: [
				data?.name || '',
				Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
			],
			eContact: [data?.eContact || '', Validators.pattern('^[0-9]*$')],
			note: [data?.note || ''],
			billing: [data?.billing || null]
		});
		this.addressFormService.setDisabledOrEnabled(this.FormDisable);
		this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
	}

	async reviewInputs() {
		await this.fieldValidation("emailId", true);
		await this.fieldValidation("primaryPreferredCommunicationMethod", true);
		await this.fieldValidation("DOB", true, true);
		await this.fieldValidation("location", true);
		await this.fieldValidation("billing", true);
		await this.fieldValidation("provider", true);
		await this.fieldValidation("cPerson", true);
		await this.fieldValidation("name", true, true);
		await this.fieldValidation("eContact", true, true);
	}

	async fieldValidation(field: any, notRequiredButPattern?: boolean, date?: boolean) {
		let validator;

		if (notRequiredButPattern) {
			validator = (this.Form.get(field)?.valid && (this.Form.get(field)?.value != null));
			if (date) {
				validator = this.Form.get(field)?.value != 0;
			}
		} else {
			validator = this.Form.get(field)?.value != null;
		}

		switch (field) {
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
			case 'location':
				this.validLocation = validator;
				break;
			case 'billing':
				this.validBilling = validator;
				break;
			case 'provider':
				this.validProvider = validator;
				break;
			case 'cPerson':
				this.validCPerson = validator;
				break;
			case 'name':
				this.validName = validator;
				break;
			case 'eContact':
				this.validEContact = validator;
				break;
			default:
		}
	}

	get ids(): FormArray {
		return this.idForm.get('info') as FormArray;
	}

	newId(): FormGroup {
		return this.fb.group({
			idType: '',
			idNumber: ''
		});
	}

	handleUploadedImage(e: { url: string }) {
		if (e && this.idForm) {
			this.idForm.controls['logo'].setValue(e.url);
		}
	}

	addId() {
		this.ids.push(this.newId());
	}

	removeId(i: number) {
		this.ids.removeAt(i);
	}

	save(data: any) {
		let saveObj = {
			_id: this.userObj.dbId,
			profile: {
				title: data.title,
				firstName: data.firstName,
				middleName: data.middleName,
				lastName: data.lastName,
				DOB: data.DOB,
				gender: data.gender,
				preferredPronoun: data.pronoun,
				language: data.language,
				maritalStatus: data.maried
			},
			information: {
				preferredName: data.preferredName,
				pronounciation: data.pronounciation,
				school: data.school,
				interests: data.interest,
				tags: data.tags
			},
			preferences: {
				location: data.location,
				billingProvider: data.billing,
				treatingProvider: data.provider,
				newPatientCoordinator: data.patientCoordinator,
				chairSideAssistant: data.CSAssistant,
				treatmentCoordinator: data.treatmentCoordinator
			},
			emergencyContact: {
				name: data.cPerson,
				contactPerson: data.name,
				emergencyContact: data.eContact
			},
			notes: data.note
		};
		this.alertService
			.conformAlert('Are you sure', 'you want to update Patient')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.patientDetailService
						.updatePatient(saveObj, this.bgId)
						.subscribe(
							(result: any) => {
								this.alertService.success(
									'Success',
									'Patient has been updated successfully'
								);
								this.router.navigate([
									'/dashboard/patient/patient-user/patient-detail'
								]);
							},
							(error) => {
								console.log(error);
							}
						);
				}
			});
		this.patientUserServ.setpatientNotPristine(false);
	}
	cancel() {
		this.onCancel.emit();
	}
	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

	getStaticData() {
		this.http
			.get(`${CONFIG.backend.host}/auth/global-data/static-types`)
			.subscribe({
				next: (data) => {
					this.globalData = data;
				},
				error: () => { },
				complete: () => { }
			});
	}
	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		console.log(bgOrdID);
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.getLegelEntityList('intelliveer');
				this.getLocationList('intelliveer');
				this.getPracticeList('intelliveer');
				this.getSelectPatientObj('intelliveer');
				this.bgId = 'intelliveer';
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
				this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
				this.getLocationList(this.selectedBusinessGroup?.bgId);
				this.getPracticeList(this.selectedBusinessGroup?.bgId);
				this.getSelectPatientObj(this.selectedBusinessGroup?.bgId);
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
			this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
			this.getLocationList(this.selectedBusinessGroup?.bgId);
			this.getPracticeList(this.selectedBusinessGroup?.bgId);
			this.getSelectPatientObj(this.selectedBusinessGroup?.bgId);
		}
	}

	getLegelEntityList(bgId: any) {
		this.userService.getLegelEntityList(bgId).subscribe(
			(list: any) => {
				this.legelEntityList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getLocationList(bgId: any) {
		this.userService.getLocationList(bgId).subscribe(
			(list: any) => {
				this.locationList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getPracticeList(bgId: any) {
		this.userService.getPracticeList(bgId).subscribe(
			(list: any) => {
				this.practiceList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getSelectPatientObj(bgId: any) {
		let userId: any = JSON.parse(
			localStorage.getItem('selectedPatientId') || ''
		);
		this.patientDetailService
			.getSinglePatientData(bgId, userId)
			.subscribe((data: any) => {
				console.log(data);
				this.patientObj = data;
				if (Object.keys(data).length != 0) {
					this.inEdit = true;
					this.FormDisable = true;
				} else if (Object.keys(data).length == 0) {
					this.inEdit = false;
					this.FormDisable = false;
				}
				console.log("formdisable", this.FormDisable);

			});
	}

	checkPermission() {
		this.isSaveButton = true;
		this.editButton.isButton = true;
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

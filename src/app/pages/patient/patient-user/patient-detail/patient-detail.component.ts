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
	private router: Router
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

	ngOnInit(): void {
		this.addId();
		this.getStaticData();
		this.userObj = JSON.parse(
			localStorage.getItem('selectedPatient') || ''
		);
		this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				console.log(result)
				if (!this.Form?.pristine) {
					console.log("hiiiiii", event);
					console.log("status", this.Form?.pristine);
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
			provider: [data?.provider || ''],
			idNumber: [data?.idNumber || ''],
			idType: [data?.idType || ''],
			patientCoordinator: [data?.patientCoordinator || ''],
			treatmentCoordinator: [data?.treatmentCoordinator || ''],
			CSAssistant: [data?.CSAssistant || ''],
			cPerson: [data?.cPerson || ''],
			name: [
				data?.name || '',
				Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
			],
			eContact: [data?.eContact || '', Validators.pattern('^[0-9]*$')],
			note: [data?.note || ''],
			billing: [data?.billing || '']
		});
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

	genderValid() {
		return this.Form.get('gender')?.value != null;
	}

	locationValid() {
		return this.Form.get('location')?.value != null;
	}

	billingValid() {
		return this.Form.get('billing')?.value != null;
	}

	treatingValid() {
		return this.Form.get('provider')?.value != null;
	}

	contPersValid() {
		return this.Form.get('cPerson')?.value != null;
	}

	emerNameValid() {
		return (
			this.Form.get('name')?.value.length > 0 &&
			this.Form.get('name')?.valid
		);
	}

	eContactValid() {
		return (
			this.Form.get('eContact')?.value.length > 0 &&
			this.Form.get('eContact')?.valid
		);
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
				martialStatus: data.maried
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
					console.log('this.globalData', this.globalData);
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
				console.log("this.locationList", this.locationList);

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
				console.log("this.patientObj", this.patientObj);

			});
	}
}

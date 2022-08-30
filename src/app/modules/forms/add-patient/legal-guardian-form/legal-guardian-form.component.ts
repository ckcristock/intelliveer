import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from '@config/index';
import { IMenuItem } from '@pages/dashboard/menu';
import {
	addPatientCordinateMenuItems,
	addPatientQuickMenuItems
} from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';
import { LegalGuardianService } from '@services/patient/family/legal-guardian/legal-guardian.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { delay, filter, map } from 'rxjs';

@Component({
	selector: 'app-legal-guardian-form',
	templateUrl: './legal-guardian-form.component.html',
	styleUrls: ['./legal-guardian-form.component.scss']
})
export class LegalGuardianFormComponent implements OnInit {
	@ViewChild('legalGuardRadio1') legalGuardRadio1!: ElementRef;
	@ViewChild('legalGuardRadio2') legalGuardRadio2!: ElementRef;
	@ViewChild('legalGuardRadio3') legalGuardRadio3!: ElementRef;

	phoneTypes: any = {
		phone: ''
	};
	countries: any;
	states: any;
	cities: any;

	callersInfo: any = {
		phoneNumber: '',
		firstName: '',
		lastName: '',
		callerSelfPatient: false,
		callerLegarGuar: true
	};

	legalGuardian: any = {
		relatiToPatient: '',
		firstName: '',
		lastName: '',
		address1: '',
		address2: '',
		country: '',
		state: '',
		city: '',
		zipCode: '',
		priPhoneNumb: '',
		typePhone: '',
		email: ''
	};

	legalGuardianArray: any = {
		relatiToPatient: '',
		firstName: '',
		lastName: '',
		address1: '',
		address2: '',
		country: '',
		state: '',
		city: '',
		zipCode: '',
		priPhoneNumb: '',
		typePhone: '',
		email: ''
	};

	radioLG: number = 1;

	menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
	menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
	Form!: FormGroup;
	@Input() parentGroup!: FormGroup;
	@Input() formGroupName!: string;
	@Input() formData: any | undefined = undefined;
	@Input() tab: string = '';
	@Input() legalGuardians: any[] = [];
	@Input() patientPage!: number;
	showButtonSaveCancel: boolean = false;
	openTextAreaVar: boolean = false;
	selectedCountry2: any = 'USA';

	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	relationShipArray: any[] = ['Father', 'Mother', 'Sister', 'Brother'];

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private http: HttpClient,
		private geoService: GeoService,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private addressFormService: AddressFormService,
		private legalGuardianService: LegalGuardianService,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private alertService: AlertService
	) {
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
		console.log('selectedCountry2', this.selectedCountry2);
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.addPatientServ.getLegalGuardFromCompone(
			this.getLegalGuard.bind(this)
		);
		this.getDataLegaGuarCaller();
		this.initForm(this.formData);
		this.Form.controls['state'].setValue(null);
		this.Form.controls['city'].setValue(null);
		this.getStaticData();
		await this.getCountries();
		this.Form.statusChanges.subscribe((result) => {
			if (!this.Form.pristine) {
				this.addPatientServ.setLegalGuardianNotPristineCWP(true);
			}
		});
	}

	ngOnChanges() {
		for (let i = 0; i < this.legalGuardians.length; i++) {
			if (this.legalGuardians[i].selected) {
				this.legalGuardian.firstName = this.legalGuardians[i].firstName;
				this.legalGuardian.lastName = this.legalGuardians[i].lastName;
			}
		}
	}

	async ngAfterViewInit() {
		this.radioLG = JSON.parse(
			localStorage.getItem(`legalGuardianPatie${this.patientPage}`) ||
				'[]'
		);
		setTimeout(() => {
			this.checkRadiosStatus();
		}, 20);
	}

	async checkRadiosStatus() {
		//Insurance 1 Radio
		if (this.radioLG == 0) {
			this.radioLG = 1;
		}
		if (this.legalGuardRadio1 != null) {
			if (this.radioLG == 1) {
				this.legalGuardRadio1.nativeElement.checked = true;
				this.radioLGuargFunct(this.radioLG);
			} else if (this.radioLG == 2) {
				this.legalGuardRadio2.nativeElement.checked = true;
				this.radioLGuargFunct(this.radioLG);
			} else if (this.radioLG == 3) {
				this.legalGuardRadio3.nativeElement.checked = true;
				this.radioLGuargFunct(this.radioLG);
			}
		}
	}

	async getDataLegaGuarCaller() {
		if (this.tab == 'coordWithProspect') {
			this.legalGuardianArray =
				await this.addPatientServ.getLegalGuardCWP(this.patientPage);
			this.callersInfo = await this.addPatientServ.getCallerInfoCWP();
			console.log('caller', this.callersInfo);
			if (this.legalGuardianArray != null) {
				this.legalGuardian.firstName =
					this.legalGuardianArray.firstName;
				this.legalGuardian.lastName = this.legalGuardianArray.lastName;
			}
			if (this.callersInfo.callerLegarGuar == true) {
				this.legalGuardian.firstName = this.callersInfo.firstName;
				this.legalGuardian.lastName = this.callersInfo.lastName;
			}
		} else if (this.tab == 'quickAdd') {
			this.legalGuardianArray =
				await this.addPatientServ.getLegalGuardQuiAdd();
			if (this.legalGuardianArray != null) {
				this.legalGuardian.firstName =
					this.legalGuardianArray.firstName;
				this.legalGuardian.lastName = this.legalGuardianArray.lastName;
			}
		}
	}

	getLegalGuard() {
		return [this.legalGuardian, this.patientPage];
	}

	continueToDentist() {
		if (this.tab == 'coordWithProspect') {
			this.addPatientServ.setLegalGuardianNotPristineCWP(false);
			this.addPatientServ.setLegalGuardCWP(
				this.legalGuardian,
				this.patientPage
			);
			let visitedArray: any = JSON.parse(
				localStorage.getItem('visitedArray') || '[]'
			);
			visitedArray.push('Legal Guardian');
			localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
			this.router.navigate([this.menuItemsOfCordinate[3].url]);
		} else if (this.tab == 'quickAdd') {
			this.addPatientServ.setLegalGuardQuiAdd(this.legalGuardian);
			let visitedArrayQuick: any = JSON.parse(
				localStorage.getItem('visitedArrayQuick') || '[]'
			);
			visitedArrayQuick.push('Legal Guardian');
			localStorage.setItem(
				'visitedArrayQuick',
				JSON.stringify(visitedArrayQuick)
			);
			this.router.navigate([this.menuItemsOfQuickAdd[2].url]);
		}
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			firstName: [
				data?.firstName || '',
				[
					Validators.required,
					Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
				]
			],
			lastName: [
				data?.lastName || '',
				[
					Validators.required,
					Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
				]
			],
			address: this.addressFormService.getAddressForm(data?.address || {})
		});
	}

	firstNameValid() {
		return this.Form.get('firstName')?.valid;
	}

	lastNameValid() {
		return this.Form.get('lastName')?.valid;
	}

	address1Valid() {
		return this.Form.get('address1')?.value.length > 0;
	}

	countryValid() {
		return this.Form.get('country')?.value != null;
	}

	stateValid() {
		return this.Form.get('state')?.value != null;
	}

	cityValid() {
		return this.Form.get('city')?.value != null;
	}

	zipCodeValid() {
		return (
			this.Form.get('zipCode')?.valid &&
			this.Form.get('zipCode')?.value > 0
		);
	}

	showButtonSaveCancelFunc() {
		this.showButtonSaveCancel = true;
	}

	closeSaveCancelFunc() {
		this.openTextAreaVar = false;
		this.showButtonSaveCancel = false;
	}

	openTextarea() {
		this.openTextAreaVar = true;
		this.showButtonSaveCancel = true;
	}

	getStaticData() {
		this.http
			.get(`${CONFIG.backend.host}/auth/global-data/static-types`)
			.subscribe({
				next: (data) => {
					this.phoneTypes = data;
					console.log('this.phoneTypes', this.phoneTypes);
				},
				error: () => {},
				complete: () => {}
			});
	}

	async getCountries() {
		this.geoService.getCountries().subscribe({
			next: (res) => {
				this.countries = res;
			}
		});
	}

	changeSelect(lgIndex: number, value: boolean) {
		if (this.legalGuardians[lgIndex].activated) {
			for (let i = 0; i < this.legalGuardians.length; i++) {
				if (i == lgIndex && !this.legalGuardians[i].selected) {
					this.legalGuardians[i].selected = true;
				} else {
					this.legalGuardians[i].selected = false;
					this.legalGuardian.firstName = '';
					this.legalGuardian.lastName = '';
				}
			}
		}

		for (let i = 0; i < this.legalGuardians.length; i++) {
			if (this.legalGuardians[i].selected) {
				this.legalGuardian.firstName = this.legalGuardians[i].firstName;
				this.legalGuardian.lastName = this.legalGuardians[i].lastName;
			}
		}
	}

	active(lgIndex: number, value: boolean) {
		for (let i = 0; i < this.legalGuardians.length; i++) {
			if (i == lgIndex) {
				if (!this.legalGuardians[i].activated) {
					this.legalGuardians[i].activated = true;
				} else {
					this.legalGuardians[i].activated = false;
					if (this.legalGuardians[i].selected) {
						this.legalGuardians[i].selected = false;
						this.legalGuardian.firstName = '';
						this.legalGuardian.lastName = '';
					}
				}
			}
		}
	}

	async radioLGuargFunct(value: number) {
		this.radioLG = value;
		localStorage.setItem(
			`legalGuardianPatie${this.patientPage}`,
			JSON.stringify(this.radioLG)
		);
		this.legalGuardian.firstName = '';
		this.legalGuardian.lastName = '';

		if (this.radioLG == 1) {
			for (let i = 0; i < this.legalGuardians.length; i++) {
				if (this.legalGuardians[i].selected) {
					this.legalGuardian.firstName =
						this.legalGuardians[i].firstName;
					this.legalGuardian.lastName =
						this.legalGuardians[i].lastName;
				}
			}
		} else if (this.radioLG == 2) {
			let LGLocStora = await this.addPatientServ.getLegalGuardCWP(
				this.patientPage
			);
			this.legalGuardian.firstName = LGLocStora.firstName;
			this.legalGuardian.lastName = LGLocStora.lastName;
		} else if (this.radioLG == 3) {
			//Push dentist to API
		}
	}

	save(data: any) {
		console.log(data.value);
		let saveObj = {
			profile: {
				title: '',
				firstName: data.value.firstName,
				middleName: '',
				lastName: data.value.lastName,
				DOB: '',
				gender: '',
				preferredPronoun: '',
				language: '',
				martialStatus: ''
			},
			address: data.value.address,
			contact: {
				email: data.value.email,
				primaryPhone: {
					type: data.value.phoneType,
					countryCode: '',
					number: data.value.phoneNumber
				},
				secondaryPhone: {
					type: '',
					countryCode: '',
					number: ''
				},
				primaryPreferredCommunicationMethod: '',
				secondaryPreferredCommunicationMethod: '',
				preferredTimingForCall: ''
			},
			notes: ''
		};
		this.legalGuardianService
			.saveLegalGuardian(saveObj, this.bgId)
			.subscribe(
				(result: any) => {
					this.alertService.success(
						'Success',
						'Legal Guardian has been saved successfully'
					);
					this.continueToDentist();
				},
				(error) => {
					console.log(error);
				}
			);
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
		}
	}
}

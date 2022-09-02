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
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    legalGuardianData:any;
	legalGuardianID:any;
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
    model!:NgbDateStruct
	alertText:any;
	confirmButtonText:any
	cancelButtonText:any
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
		private alertService: AlertService,
		private modalService: NgbModal,
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getOrgBgId();
						setTimeout(() => {
							if(this.legalGuardianID){
								this.getLegalGuardianWithID();
							}
						}, 1000)
					}
				});
	}

	async ngOnInit() {
		console.log('selectedCountry2', this.selectedCountry2);
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		// this.addPatientServ.getLegalGuardFromCompone(
		// 	this.getLegalGuard.bind(this)
		// );
		this.getDataLegaGuarCaller();
		this.initForm(this.formData);
		this.Form.controls['state']?.setValue(null);
		this.Form.controls['city']?.setValue(null);
		this.getStaticData();
		await this.getCountries();
		this.Form.statusChanges.subscribe((result) => {
			console.log(result)
			if (!this.Form.pristine) {
				this.addPatientServ.setLegalGuardianNotPristineCWP(true);
				if(this.Form.invalid){
					this.addPatientServ.setLegalMandatoryFields(true)
				}else{
					this.addPatientServ.setLegalMandatoryFields(false)
				}
				let saveObj:any = {
					profile: {
						title: '',
						firstName: this.Form.value.firstName,
						middleName: '',
						lastName: this.Form.value.lastName,
						DOB: '',
						gender: '',
						preferredPronoun: '',
						language: '',
						martialStatus: ''
					},
					address: this.Form.value.address,
					contact: {
						email: this.Form.value.email,
						primaryPhone: {
							type: this.Form.value.phoneType,
							countryCode: '',
							number: this.Form.value.phoneNumber
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
				let setOBJ:any = [saveObj,this.patientPage]
				this.addPatientServ.getLegalGuardFromCompone(setOBJ);
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
			this.legalGuardianData =
				await this.addPatientServ.getLegalGuardCWP(this.patientPage);
			this.callersInfo = await this.addPatientServ.getCallerInfoCWP();
			this.legalGuardianID = this.legalGuardianData?._id;
			console.log('caller', this.callersInfo);
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

	continueToDentist(result:any) {
		if (this.tab == 'coordWithProspect') {
			this.addPatientServ.setLegalGuardianNotPristineCWP(false);
			this.addPatientServ.setLegalGuardCWP(
				result,
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
			address: this.addressFormService.getAddressForm(data?.address || {}),
			phoneType:[data?.phoneType ||''],
			email:[data?.email ||''],
			phoneNumber:[data?.phoneNumber ||'']

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
		let saveObj:any = {
			profile: {
				title: '',
				firstName: data.value.firstName,
				middleName: '',
				lastName: data.value.lastName,
				DOB: '',
				gender: '',
				preferredPronoun: '',
				language: '',
				maritalStatus: ''
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
		this.addPatientServ.getLegalGuardCWP(this.patientPage).then(res=>{
         console.log(res);
		 if(res._id){
			saveObj._id = res._id;
            this.legalGuardianService
			.updateLegalGuardian(saveObj, this.bgId)
			.subscribe(
				(result: any) => {
					this.alertService.success(
						'Success',
						'Legal Guardian has been updated successfully'
					);
					this.continueToDentist(saveObj);
				},
				(error) => {
					console.log(error);
				}
			);
		 }else{
			this.legalGuardianService
			.saveLegalGuardian(saveObj, this.bgId)
			.subscribe(
				(result: any) => {
					this.alertService.success(
						'Success',
						'Legal Guardian has been saved successfully'
					);
					this.continueToDentist(result);
				},
				(error) => {
					console.log(error);
				}
			);
		 }
		})
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
	// openModel(content: any) {
	// 	let firstName = this.Form.value.firstName;
	// 	if(firstName == undefined){
	// 	  firstName = '';
	// 	}
	// 	let lastName = this.Form.value.lastName;
	// 	if(lastName == undefined){
	// 	  lastName = ''
	// 	}

	// 	console.log(firstName,lastName,this.Form)
	// 	if(firstName != '' || lastName != '' || this.Form.value.phoneType != '' || this.Form.value.phoneNumber != '' || this.Form.value.address.addressLine1 != '' || this.Form.value.address.addressLine2 != '' || this.Form.value.address.zipCode != '' || this.Form.value.email != '' ){
	// 	  this.modalService.open(content, { centered: true });
	// 	}else
	// 	{
	// 	  this.addPatientServ.setLegalGuardianNotPristineCWP(false);
	// 	  this.router.navigate(['/dashboard/home']);
	// 	}
	// }
	openModel(content: any) {
		let firstName = this.Form.value.firstName;
		if(firstName == undefined){
		  firstName = '';
		}
		let lastName = this.Form.value.lastName;
		if(lastName == undefined){
		  lastName = ''
		}

		console.log(firstName,lastName,this.Form)
		if(firstName != '' || lastName != '' || this.Form.value.phoneType != '' || this.Form.value.phoneNumber != '' || this.Form.value.address.addressLine1 != '' || this.Form.value.address.addressLine2 != '' || this.Form.value.address.zipCode != '' || this.Form.value.email != '' ){
			if(this.Form.valid){
				this.alertText = "Would you like to discard or save it?"
				this.confirmButtonText = "Save";
				this.cancelButtonText = "Discard"
			}else if(this.Form.invalid){
				this.alertText = "Mandatory fields are required to save."
				this.confirmButtonText = false;
				this.cancelButtonText = "Discard"
			}
			this.alertService.conformAlertNavigate('Please confirm', this.alertText,this.cancelButtonText,this.confirmButtonText).then((result: any) => {
				console.log("result", result);

				if (result.isConfirmed) {
					this.discardPatient()
				} else if (result.isDismissed && (result.dismiss == "cancel")) {
					this.savePatientForm()
				}
			})
		}else
		{
		  this.addPatientServ.setLegalGuardianNotPristineCWP(false);
		  this.router.navigate(['/dashboard/home']);
		}
	}
	discardPatient(){
		this.modalService.dismissAll();
		this.addPatientServ.setLegalGuardianNotPristineCWP(false);
		this.router.navigate(['/dashboard/home']);
	}
	savePatientForm(){
		this.modalService.dismissAll();
		this.save(this.Form)
	}
	getLegalGuardianWithID(){
		console.log(this.bgId,this.legalGuardianID)
       this.legalGuardianService.getSingleLegalGuardianData(this.bgId,this.legalGuardianID).subscribe(
		(result: any) => {
			console.log(result);
			this.legalGuardianArray = {
				firstName: result.profile.firstName,lastName: result.profile.lastName,
				email: result.contact.email,phoneType: result.contact.primaryPhone.type,phoneNumber: result.contact.primaryPhone.number,
				address: {addressLine1:result.address.addressLine1,addressLine2:result.address.addressLine2,
				city:result.address.city,state:result.address.state,country:result.address.country,zipCode:result.address.zipCode}
			};
			this.Form.patchValue(this.legalGuardianArray)
		   // this.initForm(this.legalGuardianArray)
			this.addPatientServ.setLegalGuardCWP(
				result,
				this.patientPage
			);
		},
		(error:any) => {
			console.log(error);
		}
	);
	}
}

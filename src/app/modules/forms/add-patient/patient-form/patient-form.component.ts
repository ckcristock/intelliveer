import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
import { Patient } from '@services/patient/family/patient';
import { PatientDetailService } from '@services/patient/family/patient-detail.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'app-patient-form',
	templateUrl: './patient-form.component.html',
	styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
	callersInfo: any = {
		phoneNumber: '',
		firstName: '',
		lastName: '',
		callerSelfPatient: true
	};
	patient: any = {
		practice: '',
		firstName: '',
		lastName: '',
		dateBirth: '',
		gender: ''
	};
	patientArray: any = {
		practice: '',
		firstName: '',
		lastName: '',
		dateBirth: '',
		gender: '',
		location: '',
		legalEntity: ''
	};
	patientID: any;
	patientData: any;
	menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
	menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
	Form!: FormGroup;
	@Input() formData: any | undefined = undefined;
	@Input() tab: string = '';
	showButtonSaveCancel: boolean = false;
	openTextAreaVar: boolean = false;
	practiceList: any[] = [];
	locationList: any[] = [];
	legalEntityList: any[] = [];
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	public patientObj: Patient | undefined;
	bgId: any;
	model!: NgbDateStruct
	alertText: any;
	confirmButtonText: any
	cancelButtonText: any
	constructor(
		private router: Router,
		private fb: FormBuilder,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private patientDetailService: PatientDetailService,
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
							if(this.patientID){
								this.getPatentDataWithID();
							}
						  }, 500)
					}
				});
	}

	async ngOnInit() {
		this.initForm(this.formData);
			this.patientUserServ.setFalseAllNotPristine();
			this.addPatientServ.setFalseAllNotPristineCWP();
			this.insuranceServ.setFalseAllNotPristine();
			this.onboardingServ.setFalseAllNotPristine();
			this.patientData = await this.addPatientServ.getPatientCWP();
			this.callersInfo = await this.addPatientServ.getCallerInfoCWP();
			this.patientID = this.patientData?._id;
			if (this.callersInfo.callerSelfPatient == true) {
				this.patient.firstName = this.callersInfo.firstName;
				this.patient.lastName = this.callersInfo.lastName;
				this.patient.dateBirth = this.patientArray.DOB;
			}
			this.Form?.statusChanges.subscribe(
				result => {
					if (!this.Form.pristine) {
						this.addPatientServ.setPatientNotPristineCWP(true);
						if (this.Form.invalid) {
							this.addPatientServ.setPatentMandatoryFields(true)
						} else {
							this.addPatientServ.setPatentMandatoryFields(false)
						}
						let saveObj: any = {
							practiceId: this.Form.value?.practice,
							profile: {
								title: '',
								firstName: this.Form.value?.firstName,
								middleName: '',
								lastName: this.Form.value?.lastName,
								DOB: this.Form.value?.DOB,
								gender: this.Form.value?.gender,
								preferredPronoun: '',
								language: '',
								maritalStatus: ''
							},
							information: {
								preferredName: '',
								pronounciation: '',
								school: '',
								interests: '',
								tags: ''
							},
							preferences: {
								location: this.Form.value?.location,
								billingProvider: '',
								treatingProvider: '',
								newPatientCoordinator: '',
								chairSideAssistant: '',
								treatmentCoordinator: ''
							},
							emergencyContact: {
								name: '',
								contactPerson: '',
								emergencyContact: ''
							},
							notes: ''
						};
						this.addPatientServ.getPatientFromCompone(saveObj);
					}
				}
			);
	}
	getPatient() {
		return [this.patient];
	}

	continueToLegalGuar(result: any) {
		if (this.tab == "coordWithProspect") {
			this.addPatientServ.setPatientNotPristineCWP(false);
			this.addPatientServ.setPatientCWP(result);
			let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
			visitedArray.push("Patient");
			localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
			this.router.navigate([this.menuItemsOfCordinate[2].url]);
		}else if (this.tab == "quickAdd") {
			//this.addPatientServ.setPatientQuiAdd(this.patient);
			this.addPatientServ.setPatientCWP(result);
			let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
			visitedArrayQuick.push("Patient");
			localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
			this.router.navigate([this.menuItemsOfQuickAdd[1].url]);
		}
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			practice: [data?.practice || '', Validators.required],
			firstName: [data?.firstName || '', Validators.required],
			lastName: [data?.lastName || '', Validators.required],
			DOB: [data?.DOB || '', Validators.required],
			gender: [data?.gender || ''],
			location: [data?.location || ''],
			legalEntity: [data?.legalEntity || '']
		});
	}

	fieldValidation(field: any, notRequiredButPattern?: boolean) {
		if (notRequiredButPattern) {
			return (this.Form.get(field)?.valid && this.Form.get(field)?.value != null);
		} else {
			return this.Form.get(field)?.value != null
		}
	}

	save(data: any) {
		let saveObj: any = {
			practiceId: data.value?.practice,
			profile: {
				title: '',
				firstName: data.value?.firstName,
				middleName: '',
				lastName: data.value?.lastName,
				DOB: data.value?.DOB,
				gender: data.value?.gender,
				preferredPronoun: '',
				language: '',
				maritalStatus: ''
			},
			information: {
				preferredName: '',
				pronounciation: '',
				school: '',
				interests: '',
				tags: ''
			},
			preferences: {
				location: data.value?.location,
				billingProvider: '',
				treatingProvider: '',
				newPatientCoordinator: '',
				chairSideAssistant: '',
				treatmentCoordinator: ''
			},
			emergencyContact: {
				name: '',
				contactPerson: '',
				emergencyContact: ''
			},
			notes: ''
		};
		this.addPatientServ.getPatientCWP().then((res)=>{
			if(res._id){
				saveObj._id = res._id
				this.patientDetailService.updatePatient(saveObj, this.bgId).subscribe(
					(result: any) => {
						this.alertService.success(
							'Success',
							'Patient has been updated successfully'
						);
						this.continueToLegalGuar(saveObj);
					},
					(error) => {
						console.log(error);
					}
				);
			} else {
				this.patientDetailService.savePatient(saveObj, this.bgId).subscribe(
					(result: any) => {
						this.alertService.success(
							'Success',
							'Patient has been save successfully'
						);
						this.continueToLegalGuar(result);
					},
					(error) => {
						console.log(error);
					}
				);
			}
		})
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

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.getPracticesList('intelliveer');
				this.getLocationList('intelliveer');
				this.getLegalEntityList('intelliveer');
				this.patientDetailService
					.getMapping('intelliveer')
					.subscribe((data) => {
						console.log(data);
					});
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
				this.getPracticesList(this.selectedBusinessGroup?.bgId);
				this.getLocationList(this.selectedBusinessGroup?.bgId);
				this.getLegalEntityList(this.selectedBusinessGroup?.bgId);
				this.patientDetailService
					.getMapping(this.selectedBusinessGroup?.bgId)
					.subscribe((data) => {
						console.log(data);
					});
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
			this.getPracticesList(this.selectedBusinessGroup?.bgId);
			this.getLocationList(this.selectedBusinessGroup?.bgId);
			this.getLegalEntityList(this.selectedBusinessGroup?.bgId);
			this.patientDetailService
				.getMapping(this.selectedBusinessGroup?.bgId)
				.subscribe((data) => {
					console.log(data);
				});
		}
	}

	getPracticesList(bgId: any) {
		this.patientDetailService
			.getPracticesList(bgId)
			.subscribe((list: any) => {
				this.practiceList = list;
			});
	}

	getLocationList(bgId: any) {
		this.patientDetailService
			.getLocationsList(bgId)
			.subscribe((list: any) => {
				this.locationList = list;
			});
	}

	getLegalEntityList(bgId: any) {
		this.patientDetailService
			.getLegalEntitesList(bgId)
			.subscribe((list: any) => {
				this.legalEntityList = list;
			});
	}
	openModel(content: any) {
		let firstName = this.Form.value.firstName;
		if (firstName == undefined) {
			firstName = '';
		}
		let lastName = this.Form.value.lastName;
		if (lastName == undefined) {
			lastName = ''
		}
		let dateOFBirth = this.Form.value.DOB;
		if (dateOFBirth == undefined) {
			dateOFBirth = ''
		}
		if (firstName != '' || lastName != '' || this.Form.value.gender != '' || this.Form.value.legalEntity != '' || this.Form.value.practice != '' || this.Form.value.location != '' || dateOFBirth != '') {
			if (this.Form.valid) {
				this.alertText = "Would you like to discard or save it?"
				this.confirmButtonText = "Save";
				this.cancelButtonText = "Discard"
			} else if (this.Form.invalid) {
				this.alertText = "Mandatory fields are required to save."
				this.confirmButtonText = false;
				this.cancelButtonText = "Discard"
			}
			this.alertService.conformAlertNavigate('Please confirm', this.alertText,this.cancelButtonText,this.confirmButtonText).then((result: any) => {
				if (result.isConfirmed) {
					this.discardPatient()
				} else if (result.isDismissed && (result.dismiss == "cancel")) {
					this.savePatientForm()
				}
			})
		} else {
			this.addPatientServ.setPatientNotPristineCWP(false);
			this.router.navigate(['/dashboard/home']);
		}
	}
	discardPatient() {
		this.modalService.dismissAll();
		this.addPatientServ.setPatientNotPristineCWP(false);
		this.router.navigate(['/dashboard/home']);
	}
	savePatientForm() {
		this.modalService.dismissAll();
		this.save(this.Form)
	}
    getPatentDataWithID(){
       this.patientDetailService.getSinglePatientData(this.bgId,this.patientID).subscribe(
		(result: any) => {
			this.patientArray = { practice: result.practiceId,firstName: result.profile.firstName,lastName: result.profile.lastName,
				gender: result.profile.gender,DOB: result.profile.DOB,location: result.preferences.location}
		    // this.initForm(this.patientArray)
			this.Form.patchValue(this.patientArray)
			this.addPatientServ.setPatientCWP(result);
		},
		(error:any) => {
			console.log(error);
		}
	);
	}
}

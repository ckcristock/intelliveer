import { Component, Input, OnInit } from '@angular/core';
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
import { Patient } from '@services/patient/family/patient';
import { PatientDetailService } from '@services/patient/family/patient-detail.service';

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
		gender: ''
	};
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

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private addPatientServ: AddPatientService,
		private patientDetailService: PatientDetailService,
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
    this.initForm(this.formData);
    if (this.tab == 'coordWithProspect') {
    this.addPatientServ.setFalseAllNotPristineCWP();
      this.patientArray = await this.addPatientServ.getPatientCWP();
      this.callersInfo = await this.addPatientServ.getCallerInfoCWP();
      if (this.patientArray != null) {
        this.patient.firstName = this.patientArray.firstName;
        this.patient.lastName = this.patientArray.lastName;
        this.patient.dateBirth = this.patientArray.dateBirth;
      }
      if (this.callersInfo.callerSelfPatient == true) {
        this.patient.firstName = this.callersInfo.firstName;
        this.patient.lastName = this.callersInfo.lastName;
        this.patient.dateBirth = this.patientArray.DOB;
      }
      this.Form?.statusChanges.subscribe(
        result => {
          console.log(result)
          if (!this.Form.pristine) {
            console.log("hiiiiii", event);
            console.log("status", this.Form.pristine);
  
            this.addPatientServ.setPatientNotPristineCWP(true);
            
          }
        }
      );
    } else if (this.tab == 'quickAdd') {
      this.patientArray = await this.addPatientServ.getPatientQuiAdd();
      if (this.patientArray != null) {
        this.patient.firstName = this.patientArray.firstName;
        this.patient.lastName = this.patientArray.lastName;
        this.patient.dateBirth = this.patientArray.dateBirth;
      }
    }
  }

  continueToLegalGuar() {
    if (this.tab == "coordWithProspect") {
      this.addPatientServ.setPatientNotPristineCWP(false);
      this.addPatientServ.setPatientCWP(this.patient);
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Patient");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[2].url]);

    } else if (this.tab == "quickAdd") {
      this.addPatientServ.setPatientQuiAdd(this.patient);
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Patient");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[1].url]);
    }
  }

	initForm(data?: any) {
		data = data || {};
		if (this.tab == 'coordWithProspect') {
			this.Form = this.fb.group({
				practice: [data?.practice || ''],
				fName: [data?.fName || '', Validators.required],
				lName: [data?.lName || '', Validators.required],
				DOB: [data?.DOB || '', Validators.required],
				gender: [data?.gender || ''],
				location: [data?.location || ''],
				legalEntity: [data?.legalEntity || '']
			});
		} else if (this.tab == 'quickAdd') {
			this.Form = this.fb.group({
				practice: [data?.practice || ''],
				fName: [data?.fName || '', Validators.required],
				lName: [data?.lName || '', Validators.required],
				DOB: [data?.DOB || ''],
				gender: [data?.gender || '']
			});
		}
	}

	save(data: any) {
		let saveObj = {
			practiceId: data.value.practice,
			profile: {
				title: '',
				firstName: data.value.fName,
				middleName: '',
				lastName: data.value.lName,
				DOB: data.value.DOB,
				gender: data.value.gender,
				preferredPronoun: '',
				language: '',
				martialStatus: ''
			},
			information: {
				preferredName: '',
				pronounciation: '',
				school: '',
				interests: '',
				tags: ''
			},
			preferences: {
				location: data.value.location,
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
		this.patientDetailService.savePatient(saveObj, this.bgId).subscribe(
			(result: any) => {
				console.log(result);
				this.alertService.success(
					'Success',
					'Patient has been save successfully'
				);
				this.continueToLegalGuar();
			},
			(error) => {
				console.log(error);
			}
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
				console.log(list);
			});
	}

	getLocationList(bgId: any) {
		this.patientDetailService
			.getLocationsList(bgId)
			.subscribe((list: any) => {
				this.locationList = list;
				console.log(list);
			});
	}

	getLegalEntityList(bgId: any) {
		this.patientDetailService
			.getLegalEntitesList(bgId)
			.subscribe((list: any) => {
				this.legalEntityList = list;
				console.log(list);
			});
	}

	onSelectGender($event: any) {
		console.log($event);
	}

	onSelectPractice($event: any) {
		console.log($event);
	}

	onSelectLocation($event: any) {
		console.log($event);
	}

	onSelectLegalEntity($event: any) {
		console.log($event);
	}
}

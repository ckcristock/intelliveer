import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
import { DentistService } from '@services/patient/dentist/dentist.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
@Component({
	selector: 'app-dentist-form',
	templateUrl: './dentist-form.component.html',
	styleUrls: ['./dentist-form.component.scss']
})
export class DentistFormComponent implements OnInit {
	dentist = {
		namesGenrDents: '',
		officeName: '',
		firstName: '',
		lastName: '',
		officePhoneNumber: {number:''}
	};

	dentistArray:any = {
		namesGenrDents: '',
		officeName: '',
		firstName: '',
		lastName: '',
		officePhoneNumber: ''
	};

	Form!: FormGroup;
    dentistData: any;
	dentistID:any;

	menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
	menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
	@Input() tab: string = '';
	@Input() formData: any | undefined = undefined;
	showButtonSaveCancel: boolean = false;
	openTextAreaVar: boolean = false;
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
    model!:NgbDateStruct
	alertText:any;
	confirmButtonText:any
	cancelButtonText:any
	constructor(
		private router: Router,
		private patientUserServ: PatientUserService,
		private addPatientService: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private fb: FormBuilder,
		private dentistService: DentistService,
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
					}
				});
	}

	async ngOnInit() {
		this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientService.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		//this.addPatientService.getDentistFromCompone(this.getDentist.bind(this));
		if (this.tab == 'coordWithProspect') {
			this.dentistData = await this.addPatientService.getDentistCWP();
			this.dentistID = this.dentistData?._id;
			this.Form.statusChanges.subscribe((result) => {
				if (!this.Form.pristine) {
					this.addPatientService.setDentistNotPristineCWP(true);
					if(this.Form.invalid){
						this.addPatientService.setDentistMandatoryFields(true)
					}else{
						this.addPatientService.setDentistMandatoryFields(false)
					}
					let saveObj:any = {
						firstName: this.Form.value.firstName,
						lastName: this.Form.value.lastName,
						officeName: this.Form.value.officeName,
						officeAddress: {
							addressLine1: '',
							addressLine2: '',
							city: '',
							state: '',
							country: '',
							zipCode: ''
						},
						officePhoneNumber: {
							type: '',
							countryCode: '',
							number: this.Form.value.officePhoneNumber
						}
					};
					this.addPatientService.getDentistFromCompone(saveObj);
				}
			});
		} else if (this.tab == 'quickAdd') {
			this.dentistArray = await this.addPatientService.getDentistQuiAdd();
		}
		if (this.dentistArray != null) {
			this.dentist.namesGenrDents = this.dentistArray.namesGenrDents;
			this.dentist.officeName = this.dentistArray.officeName;
			this.dentist.firstName = this.dentistArray.firstName;
			this.dentist.lastName = this.dentistArray.lastName;
			this.dentist.officePhoneNumber.number =
				this.dentistArray.officePhoneNumber;
		}
		setTimeout(() => {
			if(this.dentistID){
				this.getDentistWithID();
			}
		}, 1000)
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			namesGenrDents: [data?.namesGenrDents || ''],
			officeName: [data?.officeName || ''],
			firstName: [
				data?.firstName || '',
				Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
			],
			lastName: [
				data?.lastName || '',
				Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')
			],
			officePhoneNumber: [data?.officePhoneNumber || '']
		});
	}

  firstNameValid() {
    return (this.Form.get('firstName')?.valid && this.Form.get('firstName')?.value != null);
  }

  lastNameValid() {
    return (this.Form.get('lastName')?.valid && this.Form.get('lastName')?.value != null);
  }

	save(data: any) {
		console.log(data);
		this.addPatientService.getDentistCWP().then((findChange: any) =>
			{
				console.log(findChange._id)
				if(findChange._id)
				{
					data._id = findChange._id;
					this.updateFormData(data);
				}
				else
				{
					this.saveFormData(data);
				}
			});
		
	}

	saveFormData(data: any)
	{
		let saveObj = {
			firstName: data.firstName,
			lastName: data.lastName,
			officeName: data.officeName,
			officeAddress: {
				addressLine1: '',
				addressLine2: '',
				city: '',
				state: '',
				country: '',
				zipCode: ''
			},
			officePhoneNumber: {
				type: '',
				countryCode: '',
				number: data.officePhoneNumber
			}
		};
		this.dentistService.save(saveObj, this.bgId).subscribe(
			(result: any) => {
				console.log(result);
				this.alertService.success(
					'Success',
					'Dentist has been save successfully'
				);
				this.continueToReferrer(result);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	updateFormData(data: any)
	{
		console.log(data)
		let saveObj = {
			_id: data._id,
			firstName: data.firstName,
			lastName: data.lastName,
			officeName: data.officeName,
			officeAddress: {
				addressLine1: '',
				addressLine2: '',
				city: '',
				state: '',
				country: '',
				zipCode: ''
			},
			officePhoneNumber: {
				type: '',
				countryCode: '',
				number: data.officePhoneNumber
			}
		};
		this.dentistService.update(saveObj, this.bgId).subscribe(
			(result: any) => {
				console.log(result);
				this.alertService.success(
					'Success',
					'Dentist has been updated successfully'
				);
				this.continueToReferrer(saveObj);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getDentist() {
		return [this.dentist];
	}

	continueToReferrer(result: any) {
		if (this.tab == 'coordWithProspect') {
			this.addPatientService.setDentistNotPristineCWP(false);
			this.addPatientService.setDentistCWP(result);
			let visitedArray: any = JSON.parse(
				localStorage.getItem('visitedArray') || '[]'
			);
			visitedArray.push('Dentist');
			localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
			this.router.navigate([this.menuItemsOfCordinate[4].url]);
		} else if (this.tab == 'quickAdd') {
			this.addPatientService.setDentistQuiAdd(result);
			let visitedArrayQuick: any = JSON.parse(
				localStorage.getItem('visitedArrayQuick') || '[]'
			);
			visitedArrayQuick.push('Dentist');
			localStorage.setItem(
				'visitedArrayQuick',
				JSON.stringify(visitedArrayQuick)
			);
			this.router.navigate([this.menuItemsOfQuickAdd[3].url]);
		}
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
	// 		firstName = '';
	// 	}
	// 	let lastName = this.Form.value.lastName;
	// 	if(lastName == undefined){
	// 		lastName = ''
	// 	}
	// 	let namesGenrDents = this.Form.value.namesGenrDents;
	// 	if(namesGenrDents == undefined){
	// 		namesGenrDents = ''
	// 	}
	// 	let officeName = this.Form.value.officeName;
	// 	if(officeName == undefined){
	// 		officeName = ''
	// 	}
	// 	let officePhoneNumber = this.Form.value.officePhoneNumber;
	// 	if(officePhoneNumber == undefined){
	// 		officePhoneNumber = ''
	// 	}
	// 	if(firstName != '' || lastName != '' || namesGenrDents != '' || officeName != '' || officePhoneNumber != '' ){
	// 		this.modalService.open(content, { centered: true });
	// 	  }else
	// 	  {
	// 		this.addPatientService.setDentistNotPristineCWP(false);
	// 		this.router.navigate(['/dashboard/home']);
	// 	  }
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
		let namesGenrDents = this.Form.value.namesGenrDents;
		if(namesGenrDents == undefined){
			namesGenrDents = ''
		}
		let officeName = this.Form.value.officeName;
		if(officeName == undefined){
			officeName = ''
		}
		let officePhoneNumber = this.Form.value.officePhoneNumber;
		if(officePhoneNumber == undefined){
			officePhoneNumber = ''
		}
		if(firstName != '' || lastName != '' || namesGenrDents != '' || officeName != '' || officePhoneNumber != '' ){
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
			this.addPatientService.setDentistNotPristineCWP(false);
			this.router.navigate(['/dashboard/home']);
		  }
	}
	discardPatient(){
		this.modalService.dismissAll();
		this.addPatientService.setDentistNotPristineCWP(false);
		this.router.navigate(['/dashboard/home']);
	}
	savePatientForm(){
		this.modalService.dismissAll();
		this.save(this.Form.value)
	}
	getDentistWithID(){
		console.log(this.bgId,this.dentistID)
       this.dentistService.getSingleData(this.bgId,this.dentistID).subscribe(
		(result: any) => {
			console.log(result);
			this.dentistArray = {
				firstName: result.firstName,lastName: result.lastName,officeName: result.officeName,officePhoneNumber: result.officePhoneNumber.number
			};
		    this.Form.patchValue(this.dentistArray);
			this.addPatientService.setDentistCWP(result);
		},
		(error:any) => {
			console.log(error);
		}
	);
	}
}

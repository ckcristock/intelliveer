import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { AlertService } from '@services/alert/alert.service';
import { CanDeactiveGuardService } from '@services/can-deactive-guard/can-deactive-guard.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-confirmation-dialog',
	templateUrl: './confirmation-dialog.component.html',
	styleUrls: ['./confirmation-dialog.component.scss'],
	providers: [NgbModalConfig, NgbModal]
})
export class ConfirmationDialogComponent implements OnInit {
	@ViewChild('content', { static: false }) private content: unknown;
	canDeactivateRouteSubscription: Subscription;
	alertText:any;
	confirmButtonText:any;
	cancelButtonText:any;
	discardType: any;
	isMandatory: boolean = false;
	constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
		private canDeactivateRouteService: CanDeactiveGuardService,
		private alertService: AlertService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private router: Router
	) {
		config.backdrop = 'static';
		config.keyboard = false;
		this.canDeactivateRouteSubscription =
			this.canDeactivateRouteService.modalStatus$.subscribe((state) => {
				if (state) {
					this.getAlertValues();
					if(this.isMandatory){
                      this.saveDataIsFieldsAreNotMandatory()
					}else{
                      this.alertPopup()
					}
				}
			});
	}
	ngOnInit(): void { }
	ngOnDestroy(): void {
		this.canDeactivateRouteSubscription.unsubscribe();
	}
	cancel() {
		this.modalService.dismissAll();
		this.canDeactivateRouteService.setChoice(false);
	}
	close(data?:any) {
		console.log(data)
		this.modalService.dismissAll();
		if(data == 'callersinfo'){
		 this.canDeactivateRouteService.closeDialog();
		 this.addPatientServ.setCallerInfoNotPristineCWP(false)
		 this.router.navigate(['/dashboard/home']);
		}else if(data == 'patient'){
		 this.canDeactivateRouteService.closeDialog();
		 this.addPatientServ.setPatientNotPristineCWP(false)
		 this.router.navigate(['/dashboard/home']);
		}else if(data == 'legalguardian'){
		 this.canDeactivateRouteService.closeDialog();
		 this.addPatientServ.setLegalGuardianNotPristineCWP(false)
		 this.router.navigate(['/dashboard/home']);
		}else if(data == 'dentist'){
		 this.canDeactivateRouteService.closeDialog();
		 this.addPatientServ.setDentistNotPristineCWP(false)
		 this.router.navigate(['/dashboard/home']);
		}else if(data == 'referrer'){
		 this.canDeactivateRouteService.closeDialog();
		 this.addPatientServ.setReferrerNotPristineCWP(false)
		 this.router.navigate(['/dashboard/home']);
		}else if(data == 'insurance'){
		 this.canDeactivateRouteService.closeDialog();
		 this.addPatientServ.setInsuranceNotPristineCWP(false)
		 this.router.navigate(['/dashboard/home']);
		}else{
		  this.canDeactivateRouteService.setChoice(true);
		}
	}
	getAlertValues(){
		let conditions = this.addPatientServ.getConditions();
		conditions.push(...this.insuranceServ.getConditions());
		for (let i = 0; i < conditions.length; i++) {
			if (conditions[i].condition) {
				switch (conditions[i].section) {
					// For Add Patient Module
					case 'callersinfo':
						this.alertText = "Your data will be discarded .You can take note of the details.";
						this.confirmButtonText = "Discard"
						this.cancelButtonText = false;
						this.discardType = 'callersinfo'
						console.log(conditions[i])
						break;
					case 'patient':
						if(conditions[i].mandatory){
							this.isMandatory = false;
							this.alertText = "Mandatory fields are required to save.";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = false;
						}else{
							this.alertText = "Would you like to discard or save it?";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = "Save";
							this.isMandatory = true;
						}
						this.discardType = 'patient'
						console.log(conditions[i])
						break;
					case 'legalguardian':
						if(conditions[i].mandatory){
							this.isMandatory = false;
							this.alertText = "Mandatory fields are required to save.";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = false;
						}else{
							this.alertText = "Would you like to discard or save it?";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = "Save";
							this.isMandatory = true;
						}
						this.discardType = 'legalguardian'
						break;
					case 'dentist':
						if(conditions[i].mandatory){
							this.isMandatory = false;
							this.alertText = "Mandatory fields are required to save.";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = false;
						}else{
							this.alertText = "Would you like to discard or save it?";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = "Save";
							this.isMandatory = true;
						}
						this.discardType = 'dentist'
						break;
					case 'referrer':
						if(conditions[i].mandatory){
							this.isMandatory = false;
							this.alertText = "Mandatory fields are required to save.";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = false;
						}else{
							this.alertText = "Would you like to discard or save it?";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = "Save";
							this.isMandatory = true;
						}
						this.discardType = 'referrer'
						break;
					case 'insurance':
						if(conditions[i].mandatory){
							this.isMandatory = false;
							this.alertText = "Mandatory fields are required to save.";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = false;
						}else{
							this.alertText = "Would you like to discard or save it?";
							this.confirmButtonText = "Discard"
							this.cancelButtonText = "Save";
							this.isMandatory = true;
						}
						break;
					default:
					this.alertText = "Are you sure to exit without saving changes?";
					this.confirmButtonText = "Yes, go ahead."
					this.cancelButtonText = "No, let me think"
				}
			}
		}
	}
	alertPopup(){
		this.alertService.conformAlertNavigate('Please confirm', this.alertText,this.confirmButtonText,this.cancelButtonText)
			.then((result: any) => {
				console.log("result", result);

				if (result.isConfirmed) {
					console.log("result", result);
					this.close(this.discardType);
				} else if (result.isDismissed && (result.dismiss == "cancel")) {
					// For Add Patient Module
					let conditions = this.addPatientServ.getConditions();
					conditions.push(...this.insuranceServ.getConditions());
					for (let i = 0; i < conditions.length; i++) {
						if (conditions[i].condition) {
							switch (conditions[i].section) {
								// For Add Patient Module
								case 'callersinfo':
									this.addPatientServ.setCallersInfoCWPFromPopup()
									break;
								case 'patient':
									this.addPatientServ.setPatientCWPFromPopup()
									break;
								case 'legalguardian':
									this.addPatientServ.setLegalGuardCWPFromPopup();
									break;
								case 'dentist':
									this.addPatientServ.setDentistCWPFromPopup();
									break;
								case 'referrer':
									this.addPatientServ.setReferrerCWPFromPopup();
									break;
								case 'insurance':
									this.addPatientServ.setInsuranceCWPFromPopup();
									break;

								//For Insurance Module
								// case 'policy':
								// 	this.insuranceServ.setLegalGuardCWPFromPopup();
								// 	break;
								// case 'orthodontic':
								// 	this.insuranceServ.setDentistCWPFromPopup();
								// 	break;
								// case 'dentalbenefits':
								// 	this.insuranceServ.setReferrerCWPFromPopup();
								// 	break;
								// case 'billing':
								// 	this.insuranceServ.setInsuranceCWPFromPopup();
								// 	break;
							}
						}
					}
					console.log("result.isDenied", result.isDenied);
					this.close();
					// End Add Patient Module
				} else if (result.isDismissed && (result.dismiss == "close")) {
					this.cancel();
				}
			});
	}
	saveDataIsFieldsAreNotMandatory(){
		let conditions = this.addPatientServ.getConditions();
		conditions.push(...this.insuranceServ.getConditions());
		for (let i = 0; i < conditions.length; i++) {
			if (conditions[i].condition) {
				switch (conditions[i].section) {
					// For Add Patient Module
					case 'callersinfo':
						this.addPatientServ.setCallersInfoCWPFromPopup()
						break;
					case 'patient':
						this.addPatientServ.setPatientCWPFromPopup()
						break;
					case 'legalguardian':
						this.addPatientServ.setLegalGuardCWPFromPopup();
						break;
					case 'dentist':
						this.addPatientServ.setDentistCWPFromPopup();
						break;
					case 'referrer':
						this.addPatientServ.setReferrerCWPFromPopup();
						break;
					case 'insurance':
						this.addPatientServ.setInsuranceCWPFromPopup();
						break;

					//For Insurance Module
					// case 'policy':
					// 	this.insuranceServ.setLegalGuardCWPFromPopup();
					// 	break;
					// case 'orthodontic':
					// 	this.insuranceServ.setDentistCWPFromPopup();
					// 	break;
					// case 'dentalbenefits':
					// 	this.insuranceServ.setReferrerCWPFromPopup();
					// 	break;
					// case 'billing':
					// 	this.insuranceServ.setInsuranceCWPFromPopup();
					// 	break;
				}
			}
		}
	}
}

import { Component, OnInit, ViewChild } from '@angular/core';
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
	constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
		private canDeactivateRouteService: CanDeactiveGuardService,
		private alertService: AlertService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
	) {
		config.backdrop = 'static';
		config.keyboard = false;
		this.canDeactivateRouteSubscription =
			this.canDeactivateRouteService.modalStatus$.subscribe((state) => {
				if (state) {
					this.alertService.conformAlert('Please confirm', 'Are you sure to exit without saving changes?')
						.then((result: any) => {
							console.log("result", result);

							if (result.isConfirmed) {
								console.log("result", result);
								this.close();
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
	close() {
		this.modalService.dismissAll();
		this.canDeactivateRouteService.setChoice(true);
	}
}

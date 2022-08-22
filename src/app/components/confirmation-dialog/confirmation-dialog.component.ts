import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { AlertService } from '@services/alert/alert.service';
import { CanDeactiveGuardService } from '@services/can-deactive-guard/can-deactive-guard.service';
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
		private addPatientServ: AddPatientService
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
							} else if (result.isDismissed && result.dismiss == "cancel") {
								// For Add Patient Module
								// this.addPatientServ["setLegalGuardCWPFromPopup"]();
								this.addPatientServ["setConditions"]();
								this.addPatientServ.callFuntion("test");
								let allConditions = this.addPatientServ.getAllConditions();
								// for (let i = 0; i < allConditions.length; i++) {
								// 	if (allConditions[i].condition) {
								// 		let functionString = allConditions[i].function.toString();
								// 		this.addPatientServ[functionString]();
								// 	}
								// }
								console.log("result.isDenied", result.isDenied);
								this.close();
								// End Add Patient Module
							} else if (result.isDismissed && result.dismiss == "close") {
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

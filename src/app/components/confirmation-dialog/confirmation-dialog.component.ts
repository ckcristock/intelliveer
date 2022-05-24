import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
		private canDeactivateRouteService: CanDeactiveGuardService
	) {
		config.backdrop = 'static';
		config.keyboard = false;
		this.canDeactivateRouteSubscription =
			this.canDeactivateRouteService.modalStatus$.subscribe((state) => {
				if (state) {
					this.modalService.open(this.content);
				}
			});
	}
	ngOnInit(): void {}
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

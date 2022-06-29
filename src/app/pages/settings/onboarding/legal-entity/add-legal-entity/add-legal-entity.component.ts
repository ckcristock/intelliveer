import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LegalEntityService } from '@services/onboarding/legal-entity/legal-entity.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-add-legal-entity',
	templateUrl: './add-legal-entity.component.html',
	styleUrls: ['./add-legal-entity.component.scss']
})
export class AddLegalEntityComponent implements OnInit, OnDestroy {
	bgDropdownSubscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	constructor(
		private router: Router,
		private bgDropdownService: BusinessGroupDropdownService,
		private legalEntityService: LegalEntityService
	) {
		this.bgDropdownSubscription = this.bgDropdownService
			.businessGroup()
			.subscribe((bg) => {
				if (bg) {
					this.selectedBusinessGroup = bg;
				}
			});
	}

	ngOnInit(): void {}
	ngOnDestroy(): void {
		this.bgDropdownSubscription.unsubscribe();
	}
	createLegalEntity(data: any) {
		if (this.selectedBusinessGroup) {
			this.legalEntityService
				.createLegalEntity(this.selectedBusinessGroup.bgId, data)
				.subscribe({
					next: (res) => {
						this.router.navigate([
							'/dashboard/settings/onboarding/legal-entity'
						]);
					},
					error: () => {}
				});
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/settings/onboarding/legal-entity']);
	}
}

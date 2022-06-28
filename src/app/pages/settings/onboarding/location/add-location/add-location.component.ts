import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LocationService } from '@services/onboarding/location/location.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-add-location',
	templateUrl: './add-location.component.html',
	styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit, OnDestroy {
	bgDropdownSubscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	constructor(
		private router: Router,
		private bgDropdownService: BusinessGroupDropdownService,
		private locationService: LocationService
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
	create(data: any) {
		if (this.selectedBusinessGroup) {
			this.locationService
				.createLocation(this.selectedBusinessGroup.bgId, data)
				.subscribe({
					next: (res) => {
						this.router.navigate([
							'/dashboard/settings/onboarding/location'
						]);
					},
					error: () => {}
				});
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/settings/onboarding/location']);
	}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LocationService } from '@services/onboarding/location/location.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-location',
	templateUrl: './edit-location.component.html',
	styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit, OnDestroy {
	id: string | undefined;
	data: any;
	bgDropdownSubscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	constructor(
		private router: Router,
		private activeRoute: ActivatedRoute,
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
		this.bgDropdownService.disable(true);
	}

	ngOnInit(): void {
		this.activeRoute.params.subscribe((params) => {
			if (params['id']) {
				this.id = params['id'];
				this.getLOC(params['id']);
			}
		});
	}
	ngOnDestroy(): void {
		this.bgDropdownService.disable(false);
		this.bgDropdownSubscription.unsubscribe();
	}
	getLOC(id: string) {
		if (this.selectedBusinessGroup && id) {
			this.locationService
				.getLocation(this.selectedBusinessGroup.bgId, id)
				.subscribe({
					next: (res) => {
						this.data = res;
					},
					error: () => {}
				});
		}
	}
	update(data: any) {
		if (this.id && this.selectedBusinessGroup) {
			data['slug'] = '';
			this.locationService
				.updateLocation(this.selectedBusinessGroup.bgId, this.id, data)
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

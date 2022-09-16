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
	bgId: any;
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
					this.getUserOrdID();
				}
			});
		this.bgDropdownService.disable(true);
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.activeRoute.params.subscribe((params) => {
				if (params['id']) {
					this.id = params['id'];
					this.getLOC(params['id']);
				}
			});
		}, 500);

	}
	ngOnDestroy(): void {
		this.bgDropdownService.disable(false);
		this.bgDropdownSubscription.unsubscribe();
	}
	getLOC(id: string) {
		if (!this.bgId) {
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup && id) {
			this.locationService
				.getLocation(this.bgId, id)
				.subscribe({
					next: (res) => {
						this.data = res;
					},
					error: () => { }
				});
		}
	}
	update(data: any) {
		if (!this.bgId) {
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.id && this.selectedBusinessGroup) {
			data['slug'] = '';
			this.locationService
				.updateLocation(this.bgId, this.id, data)
				.subscribe({
					next: (res) => {
						this.router.navigate([
							'/dashboard/settings/onboarding/location'
						]);
					},
					error: () => { }
				});
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/settings/onboarding/location']);
	}
	getUserOrdID() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		if (bgOrdID == null) {
			this.bgId = 'intelliveer';
		} else {
			this.bgId = null;
		}
	}
}

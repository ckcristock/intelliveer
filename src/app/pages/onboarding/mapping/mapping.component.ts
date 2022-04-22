import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LegalEntityService } from '@services/onboarding/legal-entity/legal-entity.service';
import { LocationService } from '@services/onboarding/location/location.service';
import { MappingService } from '@services/onboarding/mapping/mapping.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-mapping',
	templateUrl: './mapping.component.html',
	styleUrls: ['./mapping.component.scss'],
})
export class MappingComponent implements OnInit, OnDestroy {
	locations: any = [];
	legalEntities: any = [];
	practices: any = [];
	businessGroupDropdownSupscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	constructor(
		private mappingService: MappingService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private locationService: LocationService,
		private legalEntityService: LegalEntityService,
		private practiceService: PracticeService,
		private alertService: AlertService,
		private routeLocation: Location
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getLocations();
						this.getLegalEntities();
						this.getPractices();
						this.getMapping();
					}
				});
	}

	ngOnInit(): void {}
	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
	}
	getMapping() {
		if (this.selectedBusinessGroup) {
			this.mappingService
				.getMapping(this.selectedBusinessGroup.bgId)
				.subscribe({
					next: (res: any) => {
						if (res) {
							this.locations.map((r: any) => {
								let c = res.relation.filter(
									(i: any) => i.locId == r._id
								);

								if (c && c.length == 1) {
									r['legalEntities'] =
										c[0].legalEntities || [];
									r['practices'] = c[0].practices || [];
								}
							});
						}
					},
				});
		}
	}
	getLocations() {
		if (this.selectedBusinessGroup) {
			this.locationService
				.getLocations(this.selectedBusinessGroup.bgId)
				.subscribe({
					next: (res) => {
						this.locations = res;
					},
					error: () => {},
				});
		}
	}
	getLegalEntities() {
		if (this.selectedBusinessGroup) {
			this.legalEntityService
				.getLegalEntites(this.selectedBusinessGroup.bgId)
				.subscribe({
					next: (res) => {
						this.legalEntities = res;
					},
					error: () => {},
				});
		}
	}
	getPractices() {
		if (this.selectedBusinessGroup) {
			this.practiceService
				.getPractices(this.selectedBusinessGroup.bgId)
				.subscribe({
					next: (res) => {
						this.practices = res;
					},
					error: () => {},
				});
		}
	}
	saveMapping() {
		const data = JSON.parse(JSON.stringify(this.locations));
		const relation = data.reduce((acc: any, item: any) => {
			acc = [
				...acc,
				{
					locId: item['_id'],
					legalEntities: item['legalEntities'],
					practices: item['practices'],
				},
			];
			return acc;
		}, []);
		if (this.selectedBusinessGroup) {
			this.mappingService
				.updateMapping(this.selectedBusinessGroup.bgId, relation)
				.subscribe({
					next: (res) => {
						this.alertService.success(
							'',
							'Mapping has been updated successfully'
						);
					},
					error: (err) => {
						console.error(err);
					},
				});
		}
	}
	handleCancel() {
		this.routeLocation.back();
	}
}

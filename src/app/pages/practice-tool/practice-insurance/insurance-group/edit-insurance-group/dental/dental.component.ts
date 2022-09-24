import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	SelectedBusinessGroup,
	BusinessGroupDropdownService
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { InsuranceGroupService } from '@services/practice-tool/insurance-group/insurance-group.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-dental',
	templateUrl: './dental.component.html',
	styleUrls: ['./dental.component.scss']
})
export class DentalComponent implements OnInit {
	urlInsuranceGroup: string;
	insurancePlanMenu: any[] = [];
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;
	id: any;
	data: any;

	constructor(
		private globalRoutes: GlobalRoutesService,
		private router: Router,
		private alertService: AlertService,
		private insuranceGroupService: InsuranceGroupService,
		private authService: AuthService,
		private activeRoute: ActivatedRoute,
		private businessGroupDropdownService: BusinessGroupDropdownService
	) {
		this.urlInsuranceGroup =
			this.globalRoutes.getPracticeInsuranceGroupUrl();
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

	ngOnInit(): void {}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let orgId = this.authService.getOrgId();
		let user: any = localStorage.getItem('permissionSet');
		user = JSON.parse(user);
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.activeRoute.params.subscribe((params) => {
					if (params['id']) {
						this.id = params['id'];
						this.getData();
					}
				});
			} else {
				this.bgId = bgOrdID;
				this.activeRoute.params.subscribe((params) => {
					if (params['id']) {
						this.id = params['id'];
						this.getData();
					}
				});
			}
		} else if (user?.isBGAdmin) {
			this.bgId = bgOrdID;
			this.activeRoute.params.subscribe((params) => {
				if (params['id']) {
					this.id = params['id'];
					this.getData();
				}
			});
		} else {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				bgOrdID = orgId;
			}
			this.bgId = bgOrdID;
			this.activeRoute.params.subscribe((params) => {
				if (params['id']) {
					this.id = params['id'];
					this.getData();
				}
			});
		}
	}

	getData() {
		this.insuranceGroupService
			.getSingleData(this.bgId, this.id)
			.subscribe((data: any) => {
				this.data = data;
			});
	}

	create(data: any) {
		data._id = this.id;
		this.alertService
			.conformAlert('Are you sure', 'you want to save dental')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.insuranceGroupService
						.update(data, this.bgId)
						.subscribe(
							(result: any) => {
								this.alertService.success(
									'Success',
									'Dental has been saved successfully'
								);
								this.router.navigate([
									'/dashboard/practice-tool/practice/insurance-group'
								]);
							},
							(error: any) => {
								console.log(error);
							}
						);
				}
			});
	}

	handleCancel() {
		this.router.navigate([
			'/dashboard/practice-tool/practice/insurance-group'
		]);
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { InsurancePlanService } from '@services/practice-tool/insurance/insurance-plan.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-insurance-plan',
	templateUrl: './edit-insurance-plan.component.html',
	styleUrls: ['./edit-insurance-plan.component.scss']
})
export class EditInsurancePlanComponent implements OnInit {
	urlInsurancePlan: string;
	data: any;
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;
	id: any;

	constructor(
		private globalRoutes: GlobalRoutesService,
		private router: Router,
		private activeRoute: ActivatedRoute,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private authService: AuthService,
		private insurancePlanService: InsurancePlanService,
		private alertService: AlertService,
	) {
		this.urlInsurancePlan = this.globalRoutes.getPracticeInsurancePlanUrl();
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

	getData()
	{
		this.insurancePlanService.getSingleData(this.bgId, this.id).subscribe((data: any) => {
			console.log(data)
			this.data = data;
		});
	}

	update(data: any) {
		console.log(data);
		this.alertService
			.conformAlert('Are you sure', 'you want to update insurance plan')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.insurancePlanService.update(data, this.bgId).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Insurance plan has been updated successfully'
							);
							this.router.navigate([
								'/dashboard/practice-tool/practice/insurance-plan'
							]);
						},
						(error) => {
							console.log(error);
						}
					);
				}
			});
	}

	handleCancel() {
		this.router.navigate([
			'/dashboard/practice-tool/practice/insurance-plan'
		]);
	}
}

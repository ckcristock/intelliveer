import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
	selector: 'app-add-insurance-plan',
	templateUrl: './add-insurance-plan.component.html',
	styleUrls: ['./add-insurance-plan.component.scss']
})
export class AddInsurancePlanComponent implements OnInit {
	urlInsurancePlan: string;
	insurancePlanMenu: any[] = [];
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;

	constructor(
		private globalRoutes: GlobalRoutesService,
		private router: Router,
		private alertService: AlertService,
		private insurancePlanService: InsurancePlanService,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService
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
			} else {
				this.bgId = bgOrdID;
			}
		} else if (user?.isBGAdmin) {
			this.bgId = bgOrdID;
		} else {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				bgOrdID = orgId;
			}
			this.bgId = bgOrdID;
		}
	}

	create(data: any) {
		this.alertService
			.conformAlert('Are you sure', 'you want to save insurance plan')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.insurancePlanService.save(data, this.bgId).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Insurance plan has been saved successfully'
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

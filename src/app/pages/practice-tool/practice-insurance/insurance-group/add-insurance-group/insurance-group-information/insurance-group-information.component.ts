import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import { SelectedBusinessGroup, BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { InsuranceGroupService } from '@services/practice-tool/insurance-group/insurance-group.service';
import { InsurancePlanService } from '@services/practice-tool/insurance/insurance-plan.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-insurance-group-information',
  templateUrl: './insurance-group-information.component.html',
  styleUrls: ['./insurance-group-information.component.scss']
})
export class InsuranceGroupInformationComponent implements OnInit {

  urlInsuranceGroup: string;
	insurancePlanMenu: any[] = [];
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;

	constructor(
		private globalRoutes: GlobalRoutesService,
		private router: Router,
		private alertService: AlertService,
		private insuranceGroupService: InsuranceGroupService,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService
	) {
		this.urlInsuranceGroup = this.globalRoutes.getPracticeInsuranceGroupUrl();
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
    console.log(data);
		this.alertService
			.conformAlert('Are you sure', 'you want to save insurance group')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.insuranceGroupService.save(data, this.bgId).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Insurance group has been saved successfully'
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

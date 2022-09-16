import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { InsurancePlanService } from '@services/practice-tool/insurance/insurance-plan.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-insurance-plan',
	templateUrl: './insurance-plan.component.html',
	styleUrls: ['./insurance-plan.component.scss']
})
export class InsuranceComponent implements OnInit {
	insuranceList: any[] = [];
	menuItems: any[] = [];
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;

	constructor(
		private router: Router,
		private insurancePlanService: InsurancePlanService,
		private authService: AuthService,
		private alertService: AlertService,
		private businessGroupDropdownService: BusinessGroupDropdownService
	) {
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

	onAdd() {
		this.router.navigate([
			'/dashboard/practice-tool/practice/insurance-plan/add'
		]);
	}

	onEdit(id: any) {
		this.router.navigate([
			'/dashboard/practice-tool/practice/insurance-plan/edit/'+id
		]);
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let orgId = this.authService.getOrgId();
		let user: any = localStorage.getItem('permissionSet');
		user = JSON.parse(user);
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = "intelliveer";
				this.getInsurancePlanList('intelliveer');
			} else {
				this.bgId = bgOrdID;
				this.getInsurancePlanList(bgOrdID);
			}
		} else if (user?.isBGAdmin) {
			this.bgId = bgOrdID;
			this.getInsurancePlanList(bgOrdID);
		} else {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				bgOrdID = orgId;
			}
			this.bgId = bgOrdID;
			this.getInsurancePlanList(bgOrdID);
		}
	}

	getInsurancePlanList(bgId: any) {
		this.insurancePlanService.getList(bgId).subscribe((list: any) => {
			this.insuranceList = list;
		});
	}

	onDelete(id: any) {
		console.log(id)
		this.alertService
			.conformAlert('Are you sure', 'you want to delete insurance plan')
			.then((value: any) => {
				if (value.isConfirmed) {
					this.insurancePlanService.delete(this.bgId, id).subscribe(
						(result: any) => {
							this.alertService.success(
								'Success',
								'Insurance plan has been delete successfully'
							);
							this.getInsurancePlanList(this.bgId);
						},
						(error) => {
							console.log(error);
						}
					);
				}
			});
	}
}

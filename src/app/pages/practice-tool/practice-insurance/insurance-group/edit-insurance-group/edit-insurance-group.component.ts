import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { InsuranceGroupService } from '@services/practice-tool/insurance-group/insurance-group.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-insurance-group',
	templateUrl: './edit-insurance-group.component.html',
	styleUrls: ['./edit-insurance-group.component.scss']
})
export class EditInsuranceGroupComponent implements OnInit {
	urlInsuranceGroup: string;
	insuranceGroupMenu: any[];
	id: string;
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;
	groupName: any;

	constructor(
		private globalRoutes: GlobalRoutesService,
		private insuranceGroupService: InsuranceGroupService,
		private authService: AuthService,
		private activeRoute: ActivatedRoute,
		private businessGroupDropdownService: BusinessGroupDropdownService
	) {
		this.urlInsuranceGroup =
			this.globalRoutes.getPracticeInsuranceGroupUrl();
		this.insuranceGroupMenu =
			this.globalRoutes.getPracticeToolInsuranceGroupRoutesEdit();
		this.id = localStorage.getItem('insuranceGroupId') || '';
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
				this.getData();
			} else {
				this.bgId = bgOrdID;
				this.getData();
			}
		} else if (user?.isBGAdmin) {
			this.bgId = bgOrdID;
			this.getData();
		} else {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				bgOrdID = orgId;
			}
			this.bgId = bgOrdID;
			this.getData();
		}
	}

	getData() {
		this.insuranceGroupService
			.getSingleData(this.bgId, this.id)
			.subscribe((data: any) => {
				if (data.name == '') {
					this.groupName = data.number;
				} else {
					this.groupName = data.name;
				}
			});
	}
}

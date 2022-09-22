import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { InsuranceGroupService } from '@services/practice-tool/insurance-group/insurance-group.service';
import { InsurancePlanService } from '@services/practice-tool/insurance/insurance-plan.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-insurance-group',
  templateUrl: './insurance-group.component.html',
  styleUrls: ['./insurance-group.component.scss']
})
export class InsuranceGroupComponent implements OnInit {

  insuranceGruopList: any[] = [];
  menuItems: any[] = [];
  businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
  bgId: any;

  constructor(private router: Router,
    private authService: AuthService,
    private insuranceGroupService: InsuranceGroupService,
		private businessGroupDropdownService: BusinessGroupDropdownService) {
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

  ngOnInit(): void {
  }

  onAdd()
  {
    this.router.navigate(['/dashboard/practice-tool/practice/insurance-group/add'])
  }

  getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let orgId = this.authService.getOrgId();
		let user: any = localStorage.getItem('permissionSet');
		user = JSON.parse(user);
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = "intelliveer";
				this.getInsuranceGroupList('intelliveer');
			} else {
				this.bgId = bgOrdID;
				this.getInsuranceGroupList(bgOrdID);
			}
		} else if (user?.isBGAdmin) {
			this.bgId = bgOrdID;
			this.getInsuranceGroupList(bgOrdID);
		} else {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				bgOrdID = orgId;
			}
			this.bgId = bgOrdID;
			this.getInsuranceGroupList(bgOrdID);
		}
	}

  getInsuranceGroupList(bgId: any) {
		this.insuranceGroupService.getList(bgId).subscribe((list: any) => {
      console.log(list)
			this.insuranceGruopList = list;
		});
	}

}

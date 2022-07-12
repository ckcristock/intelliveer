import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-business-group',
	templateUrl: './business-group.component.html',
	styleUrls: ['./business-group.component.scss']
})
export class BusinessGroupComponent
	implements OnInit, OnDestroy, AfterViewInit
{
	loading: boolean = true;
	data: any;
	checkedItems: any = [];
	checkAllState = false;
	bgOrdID: any;
	constructor(
		private router: Router,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private businessGroupService: BusinessGroupService,
		private alertService: AlertService,
		private cookieService: CookieService,
		private cdRef: ChangeDetectorRef,
		private authService: AuthService
	) {}
	ngOnDestroy(): void {
		this.businessGroupDropdownService.disable(false);
	}
	ngOnInit() {
		this.getOrgBgId();
		this.fetchBgList();
	}
	ngAfterViewInit() {
		setTimeout(() => {
			this.businessGroupDropdownService.disable(true);
			this.cdRef.detectChanges();
		}, 100);
	}
	fetchBgList() {
		this.businessGroupService.getBusinessGroups().subscribe({
			next: (data) => {
				this.data = data;
			},
			error: () => {}
		});
	}
	fetchBgListByBGId(bgId:any){
		this.businessGroupService.getBusinessGroup(bgId).subscribe({
			next: (data) => {
				this.data = [data];
				console.log(this.data)
			},
			error: () => {}
		});
	}
	deleteBG(id: string) {
		if (id) {
			this.alertService
				.conformAlert('Are you sure?', 'You want to delete')
				.then((result) => {
					if (result.value) {
						this.businessGroupService
							.deleteBusinessGroup(id)
							.subscribe({
								next: (data) => {
									this.businessGroupDropdownService.reload();
									this.fetchBgList();
								},
								error: () => {}
							});
					}
				});
		}
	}
	navigateTo(bg: string, module: string) {
		this.businessGroupDropdownService.setSelectedBusinessGroup(bg);
		this.router.navigate([`dashboard/settings/onboarding/${module}`]);
	}

	getOrgBgId(){
		let user = this.authService.getLoggedInUser();
		if (user) {
			if(user?.__ISSU__){
			   this.fetchBgList()
			}else{
			   this.fetchBgListByBGId(user.bg[0]?._id)
			}
		}
	}
}

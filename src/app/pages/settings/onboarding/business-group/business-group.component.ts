import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbDayTemplateData } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';

@Component({
	selector: 'app-business-group',
	templateUrl: './business-group.component.html',
	styleUrls: ['./business-group.component.scss']
})
export class BusinessGroupComponent
	implements OnInit, OnDestroy, AfterViewInit {
	loading: boolean = true;
	data: any;
	checkedItems: any = [];
	checkAllState = false;
	bgOrdID: any;
	isSuperUser: any;
	searchText: any;
	searchCount: number = 0;
	dataBackup: any;
    bussinessEdit:any;
	bussinessAdd:any;
	bussinessDelete:any;
	constructor(
		private router: Router,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private businessGroupService: BusinessGroupService,
		private alertService: AlertService,
		private cookieService: CookieService,
		private cdRef: ChangeDetectorRef,
		private authService: AuthService,
		private searchString: SearchStringPipePipe,
		private globalRoutes: GlobalRoutesService
	) { }
	ngOnDestroy(): void {
		this.businessGroupDropdownService.disable(false);
	}
	ngOnInit() {
		this.getOrgBgId();
		this.checkPermission()
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
			error: () => { }
		});
	}
	fetchBgListByBGId(bgId: any, orgId: any) {
		this.businessGroupService.getBusinessGroup(bgId, orgId).subscribe({
			next: (data) => {
				this.data = [data];
				console.log(this.data)
			},
			error: () => { }
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
								error: () => { }
							});
					}
				});
		}
	}
	navigateTo(bg: string, module: string) {
		this.businessGroupDropdownService.setSelectedBusinessGroup(bg);
		this.router.navigate([`dashboard/settings/onboarding/${module}`]);
	}

	getOrgBgId() {
		let user:any =	localStorage.getItem('permissionSet');
        user = JSON.parse(user);
		let orgId = this.authService.getOrgId();
		if (user) {
			if (user?.__ISSU__) {
				this.fetchBgList()
				this.isSuperUser = true;
			} else if (user.bgs[0]?._id) {
				this.fetchBgListByBGId(user.bgs[0]?._id, 'intelliveer')
			} else {
				this.fetchBgListByBGId(orgId, orgId)
			}
		}
	}

	search() {
		this.searchCount++;
		if (this.searchCount == 1) {
			this.dataBackup = this.data;
		}
		this.data = this.dataBackup;
		let dataFiltered = this.data.filter((x: any) => {
			return x._id.toLowerCase().includes(this.searchText.toLowerCase()) || x.name.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.firstName.toLowerCase().includes(this.searchText.toLowerCase())
				|| x.contactPerson.lastName.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.phone.number.toLowerCase().includes(this.searchText.toLowerCase())
				|| x.createdAt.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
				(x.contactPerson.firstName.toLowerCase().concat(" ").concat(x.contactPerson.lastName.toLowerCase())).includes(this.searchText.toLowerCase())
				;
		});
		this.data = dataFiltered;
	}
	checkPermission(){
		let bussinessGroup = this.globalRoutes.getSettingsOnboardingRoutes();
		let getBusinessGroup = this.searchString.transform('title',bussinessGroup,'Business Group');
		this.bussinessAdd = this.searchString.transform('title',getBusinessGroup[0].child,'Add');
		this.bussinessEdit = this.searchString.transform('title',getBusinessGroup[0].child,'Edit');
		this.bussinessDelete = this.searchString.transform('title',getBusinessGroup[0].child,'Delete');
	}

	editBussinessGroup(ID:any){
		this.router.navigate([`${this.globalRoutes.getSettingsOnboardingRoutes()[0].child[1].url}/${ID}`]);
	}
}

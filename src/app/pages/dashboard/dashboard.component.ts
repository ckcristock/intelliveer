import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';
import { Subscription } from 'rxjs';
import { IMenuItem, menuItems } from './menu';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	selectedBusinessGroup: string | undefined;
	businessGroupDropdownSupscription: Subscription;
	menuStatsSubscription: Subscription;
	menuItems: IMenuItem[] = menuItems;
	businessGroups: any;
	disableBGDropdown: boolean = false;
	moduleName: string = '';
	showCompactSidebar: boolean = false;
	constructor(
		private router: Router,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private menuBarService: MenuBarService
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.getBusinessGroups()
				.subscribe((res) => {
					if (res && res.length > 0) {
						this.businessGroups = res;
						this.selectedBusinessGroup = res[0]?._id;
					}
				});
		this.businessGroupDropdownService.businessGroup().subscribe((res) => {
			if (res) {
				this.selectedBusinessGroup = res.bgId;
				this.disableBGDropdown = res.disabled;
			}
		});
		this.menuStatsSubscription =
			this.menuBarService.compactSideMenuStatus.subscribe(
				(val: boolean) => {
					this.showCompactSidebar = val;
				}
			);
	}
	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
		this.menuStatsSubscription.unsubscribe();
	}

	ngOnInit(): void {}
	handleClick(menu: IMenuItem) {
		if (menu.url) {
			this.router.navigate([menu.url]);
		}
	}
	setBusinessGroup(e: any) {
		this.businessGroupDropdownService.setSelectedBusinessGroup(
			e.target.value
		);
	}
}

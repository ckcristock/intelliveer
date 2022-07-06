import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMenuItem } from '@pages/dashboard/menu';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';
import { Subscription } from 'rxjs';
import { onboardingMenuItems } from './menu';

@Component({
	selector: 'app-onboarding',
	templateUrl: './onboarding.component.html',
	styleUrls: ['./onboarding.component.scss'],
	animations: [
		trigger('fadeInOut', [
			transition(':enter', [
				// :enter is alias to 'void => *'
				style({ opacity: 0 }),
				animate(500, style({ opacity: 1 })),
			]),
			transition(':leave', [
				// :leave is alias to '* => void'
				animate(500, style({ opacity: 0 })),
			]),
		]),
	],
})
export class OnboardingComponent implements OnInit, OnDestroy {

	urlSettings!: string;
	selectedBusinessGroup: string | undefined;
	menuItems: IMenuItem[] = onboardingMenuItems;

	compactSidebar: boolean = true;
	businessGroupDropdownSupscription: Subscription;
	menuStatsSubscription: Subscription;
	businessGroups: any;
	disableBGDropdown: boolean = false;
	moduleName: string = '';

	constructor(
		public router: Router,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private menuBarService: MenuBarService,
		private routes: GlobalRoutesService,
	) {
		this.urlSettings = this.routes.getSettingsUrl();
		this.menuBarService.compactSideMenu(this.compactSidebar);
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
					this.compactSidebar = val;
				}
			);
	}

	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
		this.menuStatsSubscription.unsubscribe();
	}


	ngOnInit(): void { }

	setBusinessGroup(e: any) {
		this.businessGroupDropdownService.setSelectedBusinessGroup(
			e.target.value
		);
	}
}

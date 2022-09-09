import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';
import { Subscription } from 'rxjs';
import { IMenuItem, menuItems } from './menu';
import {
	style,
	state,
	animate,
	transition,
	trigger,
} from '@angular/animations';
interface MenuItems {
	top: IMenuItem[];
	bottom: IMenuItem[];
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	animations: [
		trigger('fadeSlideInOut', [
			transition(':enter', [
			  style({ opacity: 0, transform: 'translateX(-100%)' }), //apply default styles before animation starts
			  animate(
				'750ms ease-in-out',
				style({ opacity: 1, transform: 'translateX(0)',width: '200px'})
			  )
			]),
		  ]),
	],
})
export class DashboardComponent implements OnInit, OnDestroy {
	compactSidebar: boolean = true;
	selectedBusinessGroup: string | undefined;
	businessGroupDropdownSupscription: Subscription;
	menuStatsSubscription: Subscription;
	menuItems: MenuItems = menuItems;
	businessGroups: any;
	disableBGDropdown: boolean = false;
	moduleName: string = '';
	compactRightSidebar: boolean = false;
	display: boolean = false;
	constructor(
		public router: Router,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private menuBarService: MenuBarService
	) {
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

	ngOnInit(): void {}
	toggleMenuBar() {
		let that = this
		let compareSidebar = this.compactSidebar
		compareSidebar = !compareSidebar;
		that.menuBarService.compactSideMenu(compareSidebar);
		setTimeout(function(){ 
			that.compactSidebar = compareSidebar
		}, 700);
	}
	toggleRightMenuBar(){
		this.compactRightSidebar = !this.compactRightSidebar;
		this.menuBarService.compactSideMenu(this.compactRightSidebar);
	}
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

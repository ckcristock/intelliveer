import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
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
  menuItems: IMenuItem[] = menuItems;
  businessGroups: any;
  disableBGDropdown: boolean = false;
  moduleName: string = '';
  constructor(
    private router: Router,
    private businessGroupDropdownService: BusinessGroupDropdownService
  ) {
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
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
  }
  ngOnDestroy(): void {
    this.businessGroupDropdownSupscription.unsubscribe();
  }

  ngOnInit(): void {}
  handleClick(menu: IMenuItem) {
    if (menu.url) {
      this.router.navigate([menu.url]);
    }
  }
  setBusinessGroup(e: any) {
    this.businessGroupDropdownService.setSelectedBusinessGroup(e.target.value);
  }
}

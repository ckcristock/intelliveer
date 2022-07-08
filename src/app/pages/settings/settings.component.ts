import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  selectedBusinessGroup: string | undefined;
  onboardingChilds: any []=[];
  roleManagementchilds: any []=[];
  userManagementchilds: any []=[];
  menuItems: any[] = [
    {
      name: "Onboarding",
      childs: [],
    },
    {
      name: "Role Management",
      childs: [],
    },
    {
      name: "User Management",
      childs: [],
    },
  ];

  compactSidebar: boolean = true;
  businessGroupDropdownSupscription: Subscription;
  menuStatsSubscription: Subscription;
  businessGroups: any;
  disableBGDropdown: boolean = false;
  moduleName: string = '';
  currentRoute: string = "Onboarding";
  orgID:any;
  constructor(
    public router: Router,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private menuBarService: MenuBarService,
    private globalRoutes: GlobalRoutesService,
    private cookieService: CookieService,
  ) {
    this.getUserOrdID();
    this.menuBarService.compactSideMenu(this.compactSidebar);
    this.businessGroupDropdownSupscription =
      this.businessGroupDropdownService
        .getBusinessGroups()
        .subscribe((res) => {
          if (res && res.length > 0) {
            this.businessGroups = res;
            this.selectedBusinessGroup = this.orgID;
          }
        });
       
    this.businessGroupDropdownService.businessGroup().subscribe((res) => {
      if (res) {
        this.selectedBusinessGroup = res.bgId;
        this.disableBGDropdown = res.disabled;
        if(this.orgID != 'intelliveer'){
          this.disableBGDropdown = true;
        }else{
          this.disableBGDropdown = false
        }
        console.log(this.disableBGDropdown,this.selectedBusinessGroup);
      }
      
    });
    this.menuStatsSubscription =
      this.menuBarService.compactSideMenuStatus.subscribe(
        (val: boolean) => {
          this.compactSidebar = val;
        }
      );

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      if (event.url.includes("onboarding")) {
        this.currentRoute = "Onboarding";
      } else if (event.url.includes("role")) {
        this.currentRoute = "Role Management";
      } else if (event.url.includes("user")) {
        this.currentRoute = "User Management";
      }
    });

  }

  ngOnInit(): void {
    this.onboardingChilds = this.globalRoutes.getSettingsOnboardingRoutes();
    this.roleManagementchilds = this.globalRoutes.getSettingsRoleManageRoutes();
    this.userManagementchilds = this.globalRoutes.getSettingsUserManageRoutes();
    this.removeMenu(this.orgID);
    if(this.orgID != 'intelliveer'){
      console.log(this.orgID)
      this.roleManagementchilds.forEach((element:any,index:any )=> {
        if(element.title == 'Manage Role Templates'){
          delete element.title;
        }
      });
    }
    this.menuItems[0].childs=this.onboardingChilds;
    this.menuItems[1].childs=this.roleManagementchilds;
    this.menuItems[2].childs=this.userManagementchilds;
   
  }
  getUserOrdID(){
   this.orgID = this.cookieService.get('orgId');
  //this.orgID = "BG1";
  
  }
  

  setBusinessGroup(e: any) {
    this.businessGroupDropdownService.setSelectedBusinessGroup(
      e.target.value
    );
    this.removeMenu(e.target.value);
  }
  /** Remove Manage Role Templates */
  removeMenu(orgId:any){
    if(orgId != 'intelliveer'){
      this.roleManagementchilds.forEach((element:any,index:any )=> {
        if(element.title == 'Manage Role Templates'){
          delete element.title;
        }
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { MenuBarService } from '@services/menu-bar/menu-bar.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  onSettingsPage: boolean = false;
  selectedBusinessGroup: string | undefined;
  onboardingChilds: any[] = [];
  roleManagementchilds: any[] = [];
  userManagementchilds: any[] = [];
  isSuperUser: boolean = false;
  menuItems: any[] = [
    {
      name: "Organization Onboarding",
      route: "",
      childs: [],
    },
    {
      name: "Role Management",
      route: "",
      childs: [],
    },
    {
      name: "User Management",
      route: "",
      childs: [],
    },
    {
      name: "Practice Management",
      route: "",
      childs: [],
    },
    {
      name: "Preferences",
      route: "",
      childs: [],
    }
  ];

  compactSidebar: boolean = true;
  //  businessGroupDropdownSupscription: Subscription;
  menuStatsSubscription: Subscription;
  businessGroups: any;
  disableBGDropdown: boolean = false;
  moduleName: string = '';
  currentRoute: string = "Onboarding";
  currentRouteChild1: string = "";
  currentRouteChild2: string = "";
  currentRouteChild3: string = "";
  urlSettings!: string;
  urlRoleManagement!: string;
  urlManageRole!: string;



  orgID: any;
  constructor(
    public router: Router,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private menuBarService: MenuBarService,
    private globalRoutes: GlobalRoutesService,
    private cookieService: CookieService,
    private authService: AuthService,
    private routes: GlobalRoutesService,
    private businessGroupService: BusinessGroupService

  ) {
    this.getUserOrdID();
    this.menuBarService.compactSideMenu(this.compactSidebar);
    // this.businessGroupDropdownSupscription =
    //   this.businessGroupDropdownService
    //     .getBusinessGroups()
    //     .subscribe((res) => {
    //       if (res && res.length > 0) {
    //         this.businessGroups = res;
    //         this.selectedBusinessGroup = (this.orgID) ? this.orgID : res[0]._id;
    //       }
    //     });

    // this.businessGroupDropdownService.businessGroup().subscribe((res) => {
    //   if (res) {
    //     console.log(res)
    //     this.selectedBusinessGroup = (this.orgID) ? this.orgID : res.bgId;
    //     this.disableBGDropdown = res.disabled;
    //     console.log(this.selectedBusinessGroup)
    //   }

    // });
    this.menuStatsSubscription =
      this.menuBarService.compactSideMenuStatus.subscribe(
        (val: boolean) => {
          this.compactSidebar = val;
        }
      );

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {

      //////// Onboarding
      if (event.url.includes("onboarding")) {
        this.businessGroupService.setBusinessGroup('');
        this.currentRoute = "Onboarding";
        this.currentRouteChild1 = "Business Group";
        this.currentRouteChild2 = "";
        this.currentRouteChild3 = "";
        if (event.url.includes("business-group")) {
          this.currentRouteChild1 = "Business Group";
          this.currentRouteChild2 = "";
          this.currentRouteChild3 = "";
          this.urlRoleManagement = this.routes.getSettingsRoleManageUrl();
          if (event.url.includes("business-group/edit")) {
            this.currentRouteChild2 = "Edit Business Group";
          } else if (event.url.includes("business-group/add")) {
            this.currentRouteChild3 = "Add Business Group";
          }
        } else if (event.url.includes("legal-entity")) {
          this.currentRouteChild1 = "Legal Entity";
          this.currentRouteChild2 = "";
          this.currentRouteChild3 = "";
          this.urlRoleManagement = this.routes.getSettingsRoleManageUrl();
          if (event.url.includes("legal-entity/edit")) {
            this.currentRouteChild2 = "Edit Legal Entity";
          } else if (event.url.includes("legal-entity/add")) {
            this.currentRouteChild3 = "Add Legal Entity";
          }
        } else if (event.url.includes("location")) {
          this.currentRouteChild1 = "Location";
          this.currentRouteChild2 = "";
          this.currentRouteChild3 = "";
          this.urlRoleManagement = this.routes.getSettingsRoleManageUrl();
          if (event.url.includes("location/edit")) {
            this.currentRouteChild2 = "Edit Location";
          } else if (event.url.includes("location/add")) {
            this.currentRouteChild3 = "Add Location";
          }
        } else if (event.url.includes("practice")) {
          this.currentRouteChild1 = "Practice";
          this.currentRouteChild2 = "";
          this.currentRouteChild3 = "";
          this.urlRoleManagement = this.routes.getSettingsRoleManageUrl();
          if (event.url.includes("practice/edit")) {
            this.currentRouteChild2 = "Edit Practice";
          } else if (event.url.includes("practice/add")) {
            this.currentRouteChild3 = "Add Practice";
          }
        } else if (event.url.includes("mapping")) {
          this.currentRouteChild1 = "Mapping";
          this.currentRouteChild2 = "";
          this.currentRouteChild3 = "";
          this.urlRoleManagement = this.routes.getSettingsRoleManageUrl();
        }

          ////// Role Management
        } else if (event.url.includes("role-management")) {
          this.currentRoute = "Role Management";
          this.currentRouteChild1 = "Manage Role Templates";
          this.currentRouteChild2 = "";
          if (event.url.includes("role-management/manage-role-template")) {
            this.currentRouteChild1 = "Manage Role Templates";
            this.currentRouteChild2 = "";
            this.currentRouteChild3 = "";
            this.urlRoleManagement = this.routes.getSettingsRoleManageUrl();
            if (event.url.includes("manage-role-template/edit?_id")) {
              this.currentRouteChild2 = "Edit Role Template";
            } else if (event.url.includes("add")) {
              this.currentRouteChild3 = "Add Role Template";
            }
          } else if (event.url.includes("role-management/manage-role")) {
            this.currentRouteChild1 = "Manage Role";
            this.currentRouteChild2 = "";
            this.currentRouteChild3 = "";
            this.urlManageRole = this.routes.getSettingsRoleManageRoutes()[1].url;
            if (event.url.includes("manage-role/edit")) {
              this.currentRouteChild2 = "Edit Role";
            } else if (event.url.includes("manage-role/add")) {
              this.currentRouteChild3 = "Add Role";
            }
          }

          ////// User Management
        } else if (event.url.includes("user-management")) {
          this.currentRoute = "User Management";
        }
        if (event.url == this.globalRoutes.getSettingsUrl()) {
          this.onSettingsPage = true;
        } else {
          this.onSettingsPage = false;
        }
      });
  }

  ngOnInit(): void {

    //getting principal routes
    this.checkActiveRoutes();
    this.urlSettings = this.routes.getSettingsUrl();

  }
  getUserOrdID() {
    let bgOrdID: any = localStorage.getItem('selected_business_group');
    let user: any = localStorage.getItem('permissionSet');
    let orgId = this.authService.getOrgId();
    user = JSON.parse(user)
    console.log(bgOrdID)
    if (bgOrdID) {
      this.orgID = bgOrdID
    } else {
      if (user?.__ISSU__) {
        this.orgID = 'intelliveer'
      } else {
        this.orgID = orgId
      }
    }
    if (user?.__ISSU__) {
      this.isSuperUser = user?.__ISSU__;
    } else if (user?.isBGAdmin) {

    }

  }

  /** Get Active Routes */
  checkActiveRoutes() {
    let onBoardingMenu = this.globalRoutes.getSettingsOnboardingRoutes();
    for (let index = 0; index < onBoardingMenu.length; index++) {
      if (onBoardingMenu[index].isEnabled) {
        if (onBoardingMenu[index].title == 'Business Group') {
          if (onBoardingMenu[index].child.isEnabled) {
            this.menuItems[0].url = onBoardingMenu[index].url + '/edit/' + this.orgID;
          } else {
            this.menuItems[0].url = onBoardingMenu[index].url;
          }
        } else {
          this.menuItems[0].url = onBoardingMenu[index].url;
        }
        break;
      }
    }
    //this.menuItems[0].url = this.globalRoutes.getSettingsOnboardingUrl();
    this.menuItems[1].url = this.globalRoutes.getSettingsRoleManageUrl();
    this.menuItems[2].url = this.globalRoutes.getSettingsUserManageUrl();
    this.menuItems[4].url = this.globalRoutes.getSettingsPreferencesUrl();
    this.onboardingChilds = this.globalRoutes.getSettingsOnboardingRoutes();
    this.roleManagementchilds = this.globalRoutes.getSettingsRoleManageRoutes();
    this.userManagementchilds = this.globalRoutes.getSettingsUserManageRoutes();
    let user = this.authService.getLoggedInUser();
    if (!user?.__ISSU__) {
      this.menuItems[1].url = "/dashboard/settings/role-management/manage-role"
    }
    this.menuItems[0].childs = this.onboardingChilds;
    this.menuItems[1].childs = this.roleManagementchilds;
    this.menuItems[2].childs = this.userManagementchilds;
    console.log(this.menuItems, onBoardingMenu)
  }
  // setBusinessGroup(e: any) {
  //   this.businessGroupDropdownService.setSelectedBusinessGroup(
  //     e.target.value
  //   );
  // }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RolesUsersService } from '@services/settings/role-management/roles-users.service';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  urlSettings!: string;
  // menuItems:any [] = [
  //   {title: "Manage Role Templates", url: '/dashboard/settings/role-management/manage-role-template'},
  //   {title: "Manage Role", url: '/dashboard/settings/role-management/manage-role'},
  // ];
  menuItems: any;
  currentRoute: any = "";
  roleTemplateName!: any;
  roleName!: any;


  constructor(private routes: GlobalRoutesService,
    private authService: AuthService,
    private router: Router,
    private rolesUsersServ: RolesUsersService,
  ) {
    this.urlSettings = this.routes.getSettingsUrl();
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(async (event: any) => {
      if (event.url.includes("manage-role-template/edit?_id")) {
        this.currentRoute = 'editRoleTemplate';
        this.currentRoute = await this.rolesUsersServ.getRoleTemplateName();
      } else if (event.url.includes("manage-role/edit")) {
        this.currentRoute = 'editRole';
        this.roleTemplateName = await this.rolesUsersServ.getRoleName();
      }
    });
  }

  ngOnInit(): void {
    let user: any = localStorage.getItem('permissionSet');
    user = JSON.parse(user)
    this.menuItems = this.routes.getSettingsRoleManageRoutes();
    if (!user?.__ISSU__) {
      if (this.menuItems[0].title == "Manage Role Templates") {
        delete this.menuItems[0].title
      }

    }
  }

}

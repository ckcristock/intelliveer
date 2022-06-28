import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesUsersService } from "@services/roles-users/roles-users.service";
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roles: any [] = [];

  constructor(private router: Router,
    private rolesUserServ: RolesUsersService,
    private globalRoutes: GlobalRoutesService) { }

  ngOnInit(): void {
    this.rolesUserServ.getRoles().subscribe(
      (resp: any) => {
        this.roles = resp;
      }
    );
  }

  addRole() {
    //this.router.navigate(['/dashboard/settings/role-management/manage-role/add']);
    this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[1].child[0].url]);
  }

  gotoEdit() {
    //this.router.navigate(['/dashboard/settings/role-management/manage-role/edit']);
    this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[1].child[1].url]);
  }

  deleteRole(id:number){
    this.rolesUserServ.deleteRole(id);
  }

}

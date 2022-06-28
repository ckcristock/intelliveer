import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesUsersService } from "@services/roles-users/roles-users.service";
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";

@Component({
  selector: 'app-role-templates',
  templateUrl: './role-templates.component.html',
  styleUrls: ['./role-templates.component.scss']
})
export class RoleTemplatesComponent implements OnInit {

  roleTemplates: any [] = [];
  addRoute: string = "";

  constructor(private router: Router,
    private rolesUserServ: RolesUsersService,
    private globalRoutes: GlobalRoutesService) { }

  ngOnInit(): void {
    this.addRoute = this.globalRoutes.getSettingsRoleManageRoutes()[0].child[0].url;
    this.rolesUserServ.getRoleTemplates().subscribe(
      (resp: any) => {
        this.roleTemplates = resp;
      }
    );
  }

  addRoleTemplate()
  {
    //this.router.navigate(['/dashboard/settings/role-management/manage-role-template/add']);
    this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[0].child[0].url]);
  }

  deleteRoleT(id:number){
    this.rolesUserServ.deleteRoleTemplate(id);
  }

}

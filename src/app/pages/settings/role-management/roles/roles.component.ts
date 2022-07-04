import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";
import { RoleService } from '@services/role/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roleList: any[] = [];

  constructor(private router: Router,
    private roleService: RoleService,
    private alertService: AlertService,
    private globalRoutes: GlobalRoutesService) { }

  ngOnInit(): void {
    this.getRoleList();
  }

  getRoleList()
  {
    this.roleService.getRoleList().subscribe((list: any) =>
    {
      console.log(list)
      this.roleList = list;
    })
  }

  addRole() {
    this.router.navigate(['/dashboard/settings/role-management/manage-role/add']);
    // this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[1].child[0].url]);
  }

  gotoEdit(id: any) {
    this.router.navigate(['/dashboard/settings/role-management/manage-role/edit/' + id]);
    // this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[1].child[1].url + "/" + id]);
  }

  deleteRole(roleId: string) 
  {
    this.alertService.conformAlert('Are you sure?', 'You want to delete a role')
      .then((result: any) => {
        if (result.value) {
          this.roleService.deleteRole(roleId).subscribe((data: any) => {
            this.alertService.success(
              'Success',
              'Role has been delete successfully'
            );
            this.getRoleList();
          }, error => {
            console.log(error)
          });
        }
      });
  }

}

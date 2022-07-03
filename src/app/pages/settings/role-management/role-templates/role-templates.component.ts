import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";
import { AlertService } from '@services/alert/alert.service';
import { RolesUsersService } from '@services/settings/role-management/roles-users.service';

@Component({
  selector: 'app-role-templates',
  templateUrl: './role-templates.component.html',
  styleUrls: ['./role-templates.component.scss']
})
export class RoleTemplatesComponent implements OnInit {

  // roleTemplates: any [] = [];
  roleTemplates:any;
  addRoute: string = "";

  constructor(private router: Router,
    private rolesUserServ: RolesUsersService,
    private alertService: AlertService,
    private _ngZone: NgZone,
    private globalRoutes: GlobalRoutesService) { }

  ngOnInit(): void {
    this.addRoute = this.globalRoutes.getSettingsRoleManageRoutes()[0].child[0].url;
    // this.rolesUserServ.getRoleTemplates().subscribe(
    //   (resp: any) => {
    //     this.roleTemplates = resp;
    //   }
    // );
    this.roleTemplateList();
  }

  addRoleTemplate()
  {
    //this.router.navigate(['/dashboard/settings/role-management/manage-role-template/add']);
    this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[0].child[0].url]);
  }
  editRoleTemplate(ID:any)
  {
    //this.router.navigate(['/dashboard/settings/role-management/manage-role-template/add']);
    this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[0].child[1].url],{queryParams: {_id:ID}});
  }

  deleteRoleT(id:number){
    this.alertService.conformAlert('Are you sure?', 'You want to delete a role template')
    .then((result: any) => {
      if (result.value) {
    this.rolesUserServ.deleteRoleTemplateById(id).subscribe(res=>{
      this.alertService.success(
        'Success',
        'Role Template has been deleted successfully'
      );
      this._ngZone.run(() => { this.roleTemplateList() });
      
    }, error => {
      console.log(error)
    });
  }
});
    //this.rolesUserServ.deleteRoleTemplate(id);
  }

  roleTemplateList(){
    this.rolesUserServ.listRoleTemplate().subscribe(res=>{
      this.roleTemplates = res
    })
  }
}

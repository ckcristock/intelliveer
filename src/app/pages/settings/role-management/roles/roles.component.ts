import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { RoleService } from '@services/role/role.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  businessGroupDropdownSupscription: Subscription = new Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | any;
  roleList: any[] = [];
  
  constructor(private router: Router,
    private roleService: RoleService,
    private authService: AuthService,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          console.log(bg)
          this.selectedBusinessGroup = bg;
          this.getOrgBgId();
        }
      });
  }
  
  getRoleList()
  {
    this.roleService.getRoleList().subscribe((list: any) =>
    {
      this.roleList = list;
    })
  }

  getRoleListByBgId(bgId:any)
  {
    console.log(bgId)
    this.roleService.getRoleListByID(bgId).subscribe((list: any) =>
    {
      console.log('list',list);
      this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
        this.roleList = [...list,...list2];
      })
    })
  }

  addRole() {
    this.router.navigate(['/dashboard/settings/role-management/manage-role/add']);
    // this.router.navigate([this.globalRoutes.getSettingsRoleManageRoutes()[1].child[0].url]);
  }
  deleteRoleByBg(roleId: string){
    this.alertService.conformAlert('Are you sure?', 'You want to delete a role')
      .then((result: any) => {
        if (result.value) {
          this.roleService.deleteRole(roleId,this.selectedBusinessGroup?.bgId).subscribe((data: any) => {
            this.alertService.success(
              'Success',
              'Role has been delete successfully'
            );
            this.getRoleListByBgId(this.selectedBusinessGroup?.bgId)
          }, error => {
            console.log(error)
          });
        }
      });
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
   /** Show data According To Type and BG */
   getOrgBgId(){
    let bgOrdID:any = localStorage.getItem('selected_business_group');
    console.log(bgOrdID)
		let user = this.authService.getLoggedInUser();
    console.log(user)
		if (user?.__ISSU__) {
      if(bgOrdID == 'intelliveer' || bgOrdID == null){
        this.getRoleList();
      }else{
        this.getRoleListByBgId(bgOrdID)
      }
      }else{
      this.getRoleListByBgId(bgOrdID)
    }
	}
  delteRoleUser(roleId:any){
    let user = this.authService.getLoggedInUser();
    if (user?.__ISSU__) {
      this.deleteRole(roleId)
    }else{
      this.deleteRoleByBg(roleId)
    }
  }
}

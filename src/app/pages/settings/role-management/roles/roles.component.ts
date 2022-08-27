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
  roleRRT:boolean = false;
  roleRRTEdit:boolean = false;
  roleRRTAdd:boolean = false;
  roleRRTDelete :boolean = false;
  roleURRT:boolean = false;
  roleURRTEdit:boolean = false;
  roleURRTAdd:boolean = false;
  roleURRTDelete :boolean = false;
  user:any;
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
          this.selectedBusinessGroup = bg;
          console.log(this.selectedBusinessGroup)
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
    this.checkPermissionRRTOrURRT();
    this.roleService.getRoleListByID(bgId).subscribe((list: any) =>
    {
      if(this.roleRRT && !this.roleURRT){
        this.roleList = list;
      }else if(this.roleRRT && this.roleURRT){
        this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
          this.roleList = [...list,...list2];
        })
      }else if(!this.roleRRT && this.roleURRT){
        this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
          this.roleList = list2
        })
      }
    })
  }
  getRoleListByBgAdminId(bgId:any)
  {
    this.roleService.getRoleListByID(bgId).subscribe((list: any) =>
    {
      
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
    let orgId = this.authService.getOrgId();
		let user:any =	localStorage.getItem('permissionSet');
    user = JSON.parse(user);
    this.user = user; 
    console.log(user,bgOrdID)
		if (user?.__ISSU__) {
      if(bgOrdID == 'intelliveer' || bgOrdID == null){
        this.getRoleList();
      }else{
        this.getRoleListByBgAdminId(bgOrdID)
      }
      }else if(user?.isBGAdmin){
        this.getRoleListByBgAdminId(bgOrdID)
      }else{
      if(bgOrdID == 'intelliveer' || bgOrdID == null){
        bgOrdID = orgId
      }
      console.log(bgOrdID)
      this.getRoleListByBgId(bgOrdID)
    }

	}
  delteRoleUser(roleId:any){true
    let user = this.authService.getLoggedInUser();
    if (user?.__ISSU__) {
      this.deleteRole(roleId)
    }else{
      this.deleteRoleByBg(roleId)
    }
  }
  checkPermissionRRTOrURRT(){
		let user:any =	localStorage.getItem('permissionSet');
    user = JSON.parse(user);
    this.user = user;
    user?.roles[0]?.permissions[0]?.sections.forEach((element:any) => {
      if(element.section == 'templateBasedRestrictedRoles'){
        element.permissions.forEach((RRT:any) => {
          switch (RRT.name) {
            case 'CAN_CREATE_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleRRTAdd = RRT.enabled;
              break;
            case 'CAN_RETRIEVE_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleRRT = RRT.enabled;
              break;
            case 'CAN_EDIT_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleRRTEdit = RRT.enabled;
              break;
            case 'CAN_DELETE_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleRRTDelete = RRT.enabled;
              break;
           
          }
        });
      }else  if(element.section == 'templateBasedUnRestrictedRoles'){
        element.permissions.forEach((URRT:any) => {
          switch (URRT.name) {
            case 'CAN_CREATE_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleURRTAdd = URRT.enabled;
              break;
            case 'CAN_RETRIEVE_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleURRT = URRT.enabled;
              break;
            case 'CAN_EDIT_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleURRTEdit = URRT.enabled;
              break;
            case 'CAN_DELETE_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleURRTDelete = URRT.enabled;
              break;
           
          }
        });
      }
    });
	}

}

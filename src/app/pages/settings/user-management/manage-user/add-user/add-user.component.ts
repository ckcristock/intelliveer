import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { RoleService } from '@services/role/role.service';
import { UserService } from '@services/user/user.service';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
	Form!: FormGroup;
	@Input() formData: any | undefined = undefined;
	//user = { firstName: '', lastName: '', email: '', password: '', roles:'' };
	urlManageUser: string = '';
	userEmail: any = '';
	menuItems: any[] = [];
	user = {
		creds: {
			email: '',
			password: ''
		},
		profile: {
			firstName: '',
			lastName: '',
			email: ''
		},
		roles: [],
		userTimeZone:'',
	};
	roles: any[] = [];
  businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	/** RRT or URRT */
	roleRRT:boolean = false;
	roleRRTEdit:boolean = false;
	roleRRTAdd:boolean = false;
	roleRRTDelete :boolean = false;
	roleURRT:boolean = false;
	roleURRTEdit:boolean = false;
	roleURRTAdd:boolean = false;
	roleURRTDelete :boolean = false;
    roleList: any[] = [];

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private userService: UserService,
		private globalRoutes: GlobalRoutesService,
		private authService: AuthService,
		private roleService: RoleService,
    private businessGroupDropdownService: BusinessGroupDropdownService
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getOrgBgId();
					}
				});
		this.urlManageUser = this.globalRoutes.getSettingsUserManageUrl();
		this.menuItems.push(
			this.globalRoutes.getSettingsUserManageRoutes()[0].child[0]
		);
	}

	ngOnInit(): void {
		this.initForm(this.formData);
	}

	getOrgBgId(){
		let bgOrdID:any = localStorage.getItem('selected_business_group');
		console.log(bgOrdID)
		let orgId = this.authService.getOrgId();
		let user:any =	localStorage.getItem('permissionSet');
		user = JSON.parse(user);
			if (user?.__ISSU__) {
			if(bgOrdID == 'intelliveer' || bgOrdID == null){
				this.getRolesList('intelliveer');
			}else{
				this.getRoleListByBgId(this.selectedBusinessGroup?.bgId)
			}
		  }else if(user?.isBGAdmin){
			   this.getRoleListByBgAdminId(this.selectedBusinessGroup?.bgId)
		  }else{
			if(bgOrdID == 'intelliveer' || bgOrdID == null){
				bgOrdID = orgId
			  }
		  this.getRoleListByBgId(bgOrdID)
		}
		}

  getRolesList(bgId: any)
  {
	console.log(bgId);
	this.userService.getRoles(bgId).subscribe((resp: any) => {
        this.roles = resp;
		console.log(this.roles)
      });
  }
  
	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			firstName: [data?.firstName || '', Validators.required],
			lastName: [data?.lastName || '', Validators.required],
			userEmail: [data?.userEmail || '', Validators.required],
			password: [data?.password || '', Validators.required],
			userRoles: [data?.userRoles || '', Validators.required],
			userTimeZone:[data?.userTimeZone|| '', Validators.required]
		});
	}

	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
	}
	getRoleListByBgId(bgId:any)
	{
	  this.checkPermissionRRTOrURRT()
	  console.log(bgId)
	  this.roleService.getRoleListByID(bgId).subscribe((list: any) =>
	  {
		console.log('list',list);
		if(this.roleRRT && !this.roleURRT){
		  this.roles = list;
		}else if(this.roleRRT && this.roleURRT){
		  this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
			  this.roles = [...list,...list2];
		  })
		}else if(!this.roleRRT && this.roleURRT){
		  this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
			  this.roles = list2
		  })
		}
		console.log(this.roles)
	  })
	}
	getRoleListByBgAdminId(bgId:any)
	{
	  this.roleService.getRoleListByID(bgId).subscribe((list: any) =>
	  {
		console.log('list',list);
		  this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
			  this.roles = [...list,...list2];
		  })
	  })
	}
	save(data: any) {
		this.user.userTimeZone = this.Form.value.userTimeZone?.nameValue
		this.user.creds.email = this.userEmail;
		this.user.profile.email = this.userEmail;
		if(this.selectedBusinessGroup)
    {
      this.userService
			.saveUsers(this.selectedBusinessGroup.bgId, this.user)
			.subscribe({
				next: (res: any) => {
					this.router.navigate([
						'/dashboard/settings/user-management/manage-user'
					]);
				},
				error: () => {}
			});
    }
	}

	// saveUser() {
	//   this.user.creds.email = this.userEmail;
	//   this.user.profile.email = this.userEmail;
	//   this.userServ.pushManageUser(this.user).subscribe((resp: any) => {
	//     this.userServ.refreshUsers();
	//     this.router.navigate(['/dashboard/settings/user-management/manage-user']);
	//   });
	// }
	checkPermissionRRTOrURRT(){
	let user:any =	localStorage.getItem('permissionSet');
    user = JSON.parse(user);
    //this.user = user;
    console.log(user.roles[0])
    user?.roles[0]?.permissions[0]?.sections.forEach((element:any) => {
      console.log(element)
      if(element.section == 'templateBasedRestrictedRoles'){
        element.permissions.forEach((RRT:any) => {
          switch (RRT.name) {
            case 'CAN_CREATE_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleURRTAdd = RRT.enabled;
              break;
            case 'CAN_RETRIEVE_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleURRT = RRT.enabled;
              break;
            case 'CAN_EDIT_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleURRTEdit = RRT.enabled;
              break;
            case 'CAN_DELETE_TEMPLATE_BASED_RESTRICTED_ROLE':
              this.roleURRTDelete = RRT.enabled;
              break;
           
          }
        });
      }else  if(element.section == 'templateBasedUnRestrictedRoles'){
        element.permissions.forEach((URRT:any) => {
          switch (URRT.name) {
            case 'CAN_CREATE_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleRRTAdd = URRT.enabled;
              break;
            case 'CAN_RETRIEVE_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleRRT = URRT.enabled;
              break;
            case 'CAN_EDIT_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleRRTEdit = URRT.enabled;
              break;
            case 'CAN_DELETE_TEMPLATE_BASED_UNRESTRICTED_ROLE':
              this.roleRRTDelete = URRT.enabled;
              break;
           
          }
        });
      }
      console.log(this.roleRRT,this.roleRRTAdd,this.roleRRTDelete,this.roleRRTEdit)
    });
	}

}

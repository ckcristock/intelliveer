import { Component, OnInit } from '@angular/core';
import {
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { RoleService } from '@services/role/role.service';
import { UserService } from '@services/user/user.service';

@Component({
	selector: 'app-assign-role',
	templateUrl: './assign-role.component.html',
	styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {
	Form!: FormGroup;
	formData: any | undefined = undefined;

	userCurrentRoleList: any[] = [];
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	roleList: any[] = [];
	userAssignRoleIdsList: any[] = [];
	logInType: string | undefined;
	tempRoleList: any;
    roleRRT:boolean = false;
	roleRRTEdit:boolean = false;
	roleRRTAdd:boolean = false;
	roleRRTDelete :boolean = false;
	roleURRT:boolean = false;
	roleURRTEdit:boolean = false;
	roleURRTAdd:boolean = false;
	roleURRTDelete :boolean = false;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private userService: UserService,
		private authService: AuthService,
		private alertService: AlertService,
		private roleService: RoleService,
		private businessGroupDropdownService: BusinessGroupDropdownService
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.userCurrentRoleList = []
						this.getOrgBgId();
					}
				});
	}

	ngOnInit(): void {
		this.initForm(this.formData);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({});
	}

	save() {
		let userAssignRoleObj = {
			roles: this.userAssignRoleIdsList
		}
		let userId = localStorage.getItem('userId');
		this.alertService
			.conformAlert('Are you sure?', 'You want to update user role')
			.then((result: any) => {
				if (result.value) {
					this.userService.updateUserRole(this.logInType, userId, userAssignRoleObj)
					.subscribe({
						next: (result: any) => {
							if (result) {
								this.alertService.success(
									'Success',
									'User role has been updated successfully'
								);
							}
						},
						error: () => {}
					});
				}
			});
	}

	cancel() {
		this.alertService
			.conformAlert('Are you sure?', 'You want to edit')
			.then((result: any) => {
				if (result.value) {
					this.router.navigate([
						'/dashboard/settings/user-management/manage-user'
					]);
				}
			});
		
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user:any =	localStorage.getItem('permissionSet');
        user = JSON.parse(user);
		console.log(user)
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.getUserCurrentRoleList('intelliveer');
				this.getRolesList('intelliveer');
				this.logInType = "intelliveer";
			} else {
				this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
				this.getRolesList(this.selectedBusinessGroup?.bgId);
				this.logInType = this.selectedBusinessGroup?.bgId;
			}
		}else if(user?.isBGAdmin){
			//this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
			this.getRoleListByBgAdminId(user?.bgs[0]?._id);
			this.logInType = this.selectedBusinessGroup?.bgId;
		} 
		else {
			//this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
			this.getRoleListByBgId(this.selectedBusinessGroup?.bgId);
			this.logInType = this.selectedBusinessGroup?.bgId;
		}
	}

	getUserCurrentRoleList(bgId: any) {
		this.userCurrentRoleList = [];
		this.userAssignRoleIdsList = [];
		let userId = localStorage.getItem('userId');
		this.userService.getUserData(bgId, userId).subscribe(
			(userCurrentRoleList: any) => {
				if (userCurrentRoleList) {
					for (let i = 0; i < userCurrentRoleList.roles.length; i++) {
						this.userService
							.getUserRoleData(bgId, userCurrentRoleList.roles[i])
							.subscribe({
								next: (roledata: any) => {
									if (roledata) {
										let roleObj = {
											_id: roledata._id,
											name: roledata.name
										};
										this.userCurrentRoleList.push(roleObj);
										this.userCurrentRoleList = this.getUniqueListBy(this.userCurrentRoleList,'name')
										this.userAssignRoleIdsList.push(
											roledata._id
										);
										this.roleList = this.getRoleFilterLst(this.tempRoleList, this.userCurrentRoleList);
									}
								},
								error: () => {}
							});
					}
				}
			},
			(error) => {
				console.log(error);
			}
		);
	}
getUniqueListBy(arr:any, key:any) {
    return [...new Map(arr.map((item:any) => [item[key], item])).values()]
  }
	cancleUserCurrentRole(Obj: any, index: number) {
		if(this.userCurrentRoleList.length != 1)
		{
			this.alertService
			.conformAlert('Are you sure?', 'You want to delete role')
			.then((result: any) => {
				if (result.value) {
					this.userCurrentRoleList.splice(index, 1);
					this.userAssignRoleIdsList.splice(index, 1);
					let userAssignRoleObj = {
						roles: this.userAssignRoleIdsList
					}
					let userId = localStorage.getItem('userId');
					this.userService.updateUserRole(this.logInType, userId, userAssignRoleObj)
					.subscribe({
						next: (result: any) => {
							if (result) {
								this.alertService.success(
									'Success',
									'User role has been updated successfully'
								);
								this.roleList = this.getRoleFilterLst(this.tempRoleList, this.userCurrentRoleList);
							}
						},
						error: () => {}
					});
				}
			});
		}
		else
		{
			this.alertService.displayAlertMessage(
				'Sorry....',
				'You can not delete role'
		  );
		}
	}

	async getRolesList(bgId: any) {
		await this.userService.getRoleList(bgId).subscribe({
			next: (roleList: any) => {
				this.tempRoleList = roleList;
			},
			error: () => {}
		});
	}
    getRoleListByBgId(bgId:any)
	{
	  this.checkPermissionRRTOrURRT()
	  console.log(bgId)
	  this.roleService.getRoleListByID(bgId).subscribe((list: any) =>
	  {
		console.log('list',list);
		if(this.roleRRT && !this.roleURRT){
		  this.tempRoleList = list;
		}else if(this.roleRRT && this.roleURRT){
		  this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
			  this.tempRoleList = [...list,...list2];
		  })
		}else if(!this.roleRRT && this.roleURRT){
		  this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
			  this.tempRoleList = list2
		  })
		}
		this.getUserCurrentRoleList(bgId);
	  })
	}
	getRoleListByBgAdminId(bgId:any)
	{
		console.log(bgId)
	  this.roleService.getRoleListByID(bgId).subscribe((list: any) =>
	  {
		  this.roleService.getRoleListByIDUnRestricted(bgId).subscribe((list2:any)=>{
			  this.tempRoleList = [...list,...list2];
			  console.log(this.tempRoleList)
		  })
		  this.getUserCurrentRoleList(bgId);  
	  })
	}
	getRoleFilterLst(array1: any, array2: any)
	{
		return array1?.filter((object1: any) => {
			return !array2.some((object2: any) => {
			  return object1._id === object2._id;
			});
		});
	}

	selectRoleData($event: any) {
		let roleObj = {
			id: $event._id,
			name: $event.name
		};
		this.userAssignRoleIdsList.push($event._id);
		let userAssignRoleObj = {
			roles: this.userAssignRoleIdsList
		}
		let userId = localStorage.getItem('userId');
		this.userService.updateUserRole(this.logInType, userId, userAssignRoleObj)
		.subscribe({
			next: (result: any) => {
				if (result) {
					this.userCurrentRoleList.push(roleObj);
					this.roleList = this.getRoleFilterLst(this.tempRoleList, this.userCurrentRoleList);
					this.alertService.success(
						'Success',
						'User role has been updated successfully'
					);
				}
			},
			error: () => {}
		});
	}
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

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

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private userService: UserService,
		private authService: AuthService,
		private alertService: AlertService,
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
	}

	ngOnInit(): void {
		this.initForm(this.formData);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({});
	}

	save(data: any) {
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
								this.router.navigate([
									'/dashboard/settings/user-management/manage-user'
								]);
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
		let user = this.authService.getLoggedInUser();
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
		} else {
			this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
			this.getRolesList(this.selectedBusinessGroup?.bgId);
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
											id: roledata._id,
											name: roledata.name
										};
										this.userCurrentRoleList.push(roleObj);
										this.userAssignRoleIdsList.push(
											roledata._id
										);
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

	cancleUserCurrentRole(Obj: any, index: number) {
		if(this.userCurrentRoleList.length != 1)
		{
			this.userCurrentRoleList.splice(index, 1);
			this.userAssignRoleIdsList.splice(index, 1);
		}
		else
		{
			this.alertService.displayAlertMessage(
				'Sorry....',
				'You can not delete role'
		  );
		}
	}

	getRolesList(bgId: any) {
		this.userService.getRoleList(bgId).subscribe({
			next: (roleList: any) => {
				this.roleList = roleList;
			},
			error: () => {}
		});
	}

	selectRoleData($event: any) {
		let roleObj = {
			id: $event._id,
			name: $event.name
		};
		this.userCurrentRoleList.push(roleObj);
		this.userAssignRoleIdsList.push($event._id);
	}
}

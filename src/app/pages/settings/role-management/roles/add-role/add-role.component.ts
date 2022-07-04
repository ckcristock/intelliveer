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
import { RoleService } from '@services/role/role.service';

export class RoleTemplate {
	_id: string | undefined;
	name: string | undefined;
	description: string | undefined;
	permissions: any[] = [];
	businessGroups: any[] = [];
}

@Component({
	selector: 'app-add-role',
	templateUrl: './add-role.component.html',
	styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
	Form!: FormGroup;
	roleNestedForm!: FormGroup;
	public formData: any | undefined = undefined;
	createRoleTemplete: string | undefined;
	roleTemplateList: any[] = [];
	public roleTemplate: RoleTemplate = new RoleTemplate();
	public legalEntityLst: any[] = [];
	legelEntityList: any[] = [];
	locationList: any[] = [];
	practiceList: any[] = [];
	displayShowAdvanced: boolean = false;
	displayCreateRoleYesNoOption: boolean = false;
	permissionsList: any[] = [];

	constructor(
		private router: Router,
		private roleService: RoleService,
		private alertService: AlertService,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		this.roleService.authService.getOrgId().trim() === 'intelliveer'
			? (this.displayCreateRoleYesNoOption = true)
			: (this.displayCreateRoleYesNoOption = false);
		this.createRoleTemplete = 'yes';
		this.initForm(this.formData);
		this.getRoleList();
		this.getLegelEntityList();
		this.getLocationList();
		this.getPracticeList();
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			roletemplate: [data?.roletemplate || 'yes'],
			name: [data?.fName || '', Validators.required],
			description: [data?.lName || '', Validators.required],
			permissions: this.fb.array([])
		});
	}
  
	get sectionNested() {
		return (<FormArray>this.Form.get('permissions')).controls;
	}

	permissionNested(i: any) {
		return (<FormArray>this.sectionNested[i].get('permissions')).controls;
	}

	sectionsArray(): FormArray {
		return <FormArray>this.Form.get('permissions');
	}

	newSections(): FormGroup {
		return (this.roleNestedForm = this.fb.group({
			section: new FormControl(),
      roles: new FormControl(),
			permissions: this.fb.array([])
		}));
	}

	permissionArray(): FormArray {
		return <FormArray>this.roleNestedForm.get('permissions');
	}

	newPermissions(): FormGroup {
		return this.fb.group({
			name: new FormControl(),
			enabled: new FormControl(false),
			locked: new FormControl(false),
			allowOverride: new FormControl(false),
			attrs: {}
		});
	}

	getLegelEntityList() {
		this.roleService.getLegelEntityList().subscribe(
			(list: any) => {
				console.log(list);
				this.legelEntityList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getLocationList() {
		this.roleService.getLocationList().subscribe(
			(list: any) => {
				console.log(list);
				this.locationList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getPracticeList() {
		this.roleService.getPracticeList().subscribe(
			(list: any) => {
				console.log(list);
				this.practiceList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	save(data: any) {
		if (this.displayCreateRoleYesNoOption) {
			if (this.createRoleTemplete == 'yes') {
				this.saveRoleFromTemplate(data);
			} else {
				this.saveRoleFromScratch(data);
			}
		}
		// else
		// {
		//   this.businessGroupDropdownService.getBusinessGroups().subscribe(list =>
		//       {
		//         if(list.length == 0)
		//         {
		//           this.saveRoleFromScratch(data);
		//         }
		//         else
		//         {
		//           this.saveRoleFromTemplate(data);
		//         }
		//       })
		// }
	}

	saveRoleFromScratch(data: any) {
    data.permissions.map((item: any) =>
    {
      delete item.roles
    })
		let roleObj = {
			name: data.name,
			description: data.description,
			permissions: data.permissions
		};
		this.alertService
			.conformAlert('Are you sure?', 'You want to save a role')
			.then((result: any) => {
				if (result.value) {
					this.roleService.saveRoleFromRoleScratch(roleObj).subscribe(
						(data: any) => {
							this.alertService.success(
								'Success',
								'Role has been save successfully'
							);
							this.router.navigate([
								'/dashboard/settings/role-management/manage-role'
							]);
						},
						(error) => {
							console.log(error);
						}
					);
				}
			});
	}

	saveRoleFromTemplate(data: any) {
		let roleObj = {
			name: data.name,
			description: data.description,
			roleTemplateId: this.roleTemplate._id
		};
		this.alertService
			.conformAlert('Are you sure?', 'You want to save a role')
			.then((result: any) => {
				if (result.value) {
					this.roleService
						.saveRoleFromRoleTemplate(
							roleObj,
							this.roleTemplate.businessGroups[0]
						)
						.subscribe(
							(data: any) => {
								this.alertService.success(
									'Success',
									'Role has been save successfully'
								);
								this.router.navigate([
									'/dashboard/settings/role-management/manage-role'
								]);
							},
							(error) => {
								console.log(error);
							}
						);
				}
			});
	}

	cancel() {
		this.router.navigate([
			'/dashboard/settings/role-management/manage-role'
		]);
	}

	getRoleList() {
		this.roleService.getRoleTemplateList().subscribe(
			(list: any) => {
				this.roleTemplateList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	selectRoleTemplateChange(Obj: any) {
		this.roleTemplate = Obj;
		this.permissionsList = Obj.permissions;
	}

	onSelectionChanged($event: any) {
		if ($event.target.value == 'yes') {
			this.createRoleTemplete = 'yes';
		} else {
			this.createRoleTemplete = 'no';
			this.getPermissionList();
		}
	}

	getPermissionList() {
		this.roleService.getPermissionList().subscribe(
			(list: any) => {
				for (let i = 0; i < list.length; i++) {
					const subPermissionList = list[i].permissions;
					for (let j = 0; j < subPermissionList.length; j++) {
						const sectionFormGroup = this.newSections();
						const childPermisssion =
							subPermissionList[j].permissions;
						for (let k = 0; k < childPermisssion.length; k++) {
							const permissionFormGroup = this.newPermissions();
							permissionFormGroup.patchValue({
								name: childPermisssion[k].name,
								enabled: false,
								locked: false,
								allowOverride: false,
								attrs: {}
							});
							this.permissionArray().push(permissionFormGroup);
						}
            sectionFormGroup.patchValue({
							section: subPermissionList[j].section,
              roles: list[i].name
						});
						this.sectionsArray().push(sectionFormGroup);
					}
				}
				this.permissionsList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}
}

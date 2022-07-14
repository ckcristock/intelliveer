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
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { RoleService } from '@services/role/role.service';

export class RoleTemplate {
	_id: string | undefined;
	name: string | undefined;
	description: string | undefined;
	permissions: any[] = [];
	businessGroups: any[] = [];
	roleTemplateId: string | undefined;
}

@Component({
	selector: 'app-add-role',
	templateUrl: './add-role.component.html',
	styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
	Form!: FormGroup;
	roleNestedForm!: FormGroup;
	roleModuleNestedForm!: FormGroup;
	public formData: any | undefined = undefined;
	createRoleTemplete: string | undefined;
	roleTemplateList: any[] = [];
	public roleTemplate: RoleTemplate = new RoleTemplate();
	public legalEntityLst: any[] = [];
	legelEntityList: any[] = [];
	locationList: any[] = [];
	practiceList: any[] = [];
	displayCreateRoleYesNoOption: boolean = false;
	permissionsList: any[] = [];
	bgName: any;
	roleType: any;
    orgId: any;
	addRoleTitle: string = "Create Role";
	roleTemplatePlaceholder: string = "Role template name";
	constructor(
		private router: Router,
		private roleService: RoleService,
		private alertService: AlertService,
		private fb: FormBuilder,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService
	) {
	}

	ngOnInit(): void {
		//  this.roleService.authService.getOrgId().trim() === 'intelliveer'
		// 	? (this.displayCreateRoleYesNoOption = true)
		// 	: (this.displayCreateRoleYesNoOption = false);
		this.createRoleTemplete = 'yes';
		this.initForm(this.formData);
		this.getRoleList();
		this.getLegelEntityList();
		this.getLocationList();
		this.getPracticeList();
		this.businessGroupDropdownService
			.getBusinessGroups()
			.subscribe((list) => {
				if(list.length)
				{
					this.bgName = list[0]._id;
				}
			});

			this.getSelectedBusinessGroupId();
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

	/** First Array form value*/
	get moduleNested(){
		return (<FormArray>this.Form.get("permissions")).controls;
	  }
	/** Get Second Array form value*/
	sectionNested(i:any){
	 return (<FormArray>this.moduleNested[i].get("sections")).controls;
	}

	/** Get Third Array form value*/
	permissionNested(i:any,j:any){
		let sectionForm = (<FormArray>this.moduleNested[i].get("sections")).controls
		return (<FormArray>sectionForm[j].get("permissions")).controls
	}
	/** This array for permission */
	moduleArray() : FormArray {
		return (<FormArray>this.Form.get("permissions"));
	}
	newModule(): FormGroup {
		return this.roleModuleNestedForm = this.fb.group({
			module: new FormControl(),
			sections:this.fb.array([]),
		})
	}
	/** This array for permission Sections */
	sectionsArray() : FormArray {
		return (<FormArray>this.roleModuleNestedForm.get("sections"));
	}

	newSections(): FormGroup {
		return this.roleNestedForm = this.fb.group({
			section: new FormControl(),
			permissions:this.fb.array([]),
		})
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
			if(this.createRoleTemplete == 'yes') {
				this.addRoleWithTemplate(data);
			}else if(this.createRoleTemplete == 'no') {
				this.saveRoleFromScratch(data);
			}
		}else{
			this.addRoleWithTemplate(data);
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
		data.permissions.map((item: any) => {
			delete item.roles;
			delete item.displayShowAdvanced
		});
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
		console.log(data);
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
							this.bgName,
							this.roleType
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
	saveRoleFromTemplateBYBgId(data: any) {
		console.log(data);
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
							this.bgName,
							this.roleType,
							this.orgId
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
				console.log(list)
				this.roleTemplateList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	selectRoleTemplateChange(Obj: any) {
		let roleManage = {...Obj};
		this.roleType = Obj.type
		this.roleTemplate = roleManage;
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
					const formGroup = this.newModule();
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
							displayShowAdvanced: false,
						});
						this.sectionsArray().push(sectionFormGroup);
					}
					formGroup.patchValue({module:list[i].name})
                    this.moduleArray().push(formGroup)
				}
				this.permissionsList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	/** Get Selected Org Id */
	getSelectedBusinessGroupId(){
		this.businessGroupDropdownService.businessGroup().subscribe((res) => {
			this.orgId = res?.bgId;
			let bgOrdID:any = localStorage.getItem('selected_business_group');
			console.log(bgOrdID)
			let user = this.authService.getLoggedInUser();
		    if(user?.__ISSU__){
				if(this.orgId != "intelliveer" && bgOrdID != null){
					this.addRoleTitle = "Create Role from Role Template";
					this.roleTemplatePlaceholder = "Select role template";
					this.displayCreateRoleYesNoOption = false;
				}else{
					this.addRoleTitle = "Create Role";
					this.roleTemplatePlaceholder = "Role template name";
					this.displayCreateRoleYesNoOption = true;
				}
			}else{
				this.addRoleTitle = "Create Role from Role Template";
				this.roleTemplatePlaceholder = "Select role template";
				this.displayCreateRoleYesNoOption = false;
			}
		  });
	}
	/** Update Role with Template  */
	addRoleWithTemplate(data:any){
		let user = this.authService.getLoggedInUser();
		if(user?.__ISSU__){
			this.saveRoleFromTemplate(data);
		}else{
			this.saveRoleFromTemplateBYBgId(data)
		}
	}
}

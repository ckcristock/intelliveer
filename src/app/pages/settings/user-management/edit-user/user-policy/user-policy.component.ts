import { Component, OnInit } from '@angular/core';
import {
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { UserService } from '@services/user/user.service';

@Component({
	selector: 'app-user-policy',
	templateUrl: './user-policy.component.html',
	styleUrls: ['./user-policy.component.scss']
})
export class UserPolicyComponent implements OnInit {
	Form!: FormGroup;
	roleModuleNestedForm!: FormGroup;
	roleSectionNestedForm!: FormGroup;
	formData: any | undefined = undefined;
	showAdvanceBG: boolean = true;
	showAdvanceLE: boolean = true;
	showAdvanceLOC: boolean = true;
	showAdvancePC: boolean = true;

	userCurrentRoleList: any[] = [];
	userCurrentRoleListForForm: any[] = [];
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	roleList: any;
	legelEntityList: any;
	locationList: any;
	practiceList: any;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private userService: UserService,
		private authService: AuthService,
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
		this.Form = this.fb.group({
			permissions: this.fb.array([])
		});
	}

	/** First Array form value*/
	get moduleNested() {
		return (<FormArray>this.Form.get('permissions')).controls;
	}
	/** Get Second Array form value*/
	sectionNested(i: any) {
		return (<FormArray>this.moduleNested[i].get('sections')).controls;
	}

	/** Get Third Array form value*/
	permissionNested(i: any, j: any) {
		let sectionForm = (<FormArray>this.moduleNested[i].get('sections'))
			.controls;
		return (<FormArray>sectionForm[j].get('permissions')).controls;
	}
	/** This array for permission */
	moduleArray(): FormArray {
		return <FormArray>this.Form.get('permissions');
	}
	newModule(): FormGroup {
		return (this.roleModuleNestedForm = this.fb.group({
			module: new FormControl(),
			sections: this.fb.array([])
		}));
	}
	/** This array for permission Sections */
	sectionsArray(): FormArray {
		return <FormArray>this.roleModuleNestedForm.get('sections');
	}

	newSections(): FormGroup {
		return (this.roleSectionNestedForm = this.fb.group({
			section: new FormControl(),
			permissions: this.fb.array([])
		}));
	}
	permissionArray(): FormArray {
		return <FormArray>this.roleSectionNestedForm.get('permissions');
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

	save(data: any) {}

	cancel() {
		this.router.navigate([
			'/dashboard/settings/user-management/manage-user'
		]);
	}

	showAdvBG() {
		this.showAdvanceBG = !this.showAdvanceBG;
	}

	showAdvLE() {
		this.showAdvanceLE = !this.showAdvanceLE;
	}

	showAdvLOC() {
		this.showAdvanceLOC = !this.showAdvanceLOC;
	}

	showAdvPC() {
		this.showAdvancePC = !this.showAdvancePC;
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.getUserCurrentRoleList('intelliveer');
				this.getRolesList('intelliveer');
				this.getLegelEntityList('intelliveer');
				this.getLocationList('intelliveer');
				this.getPracticeList('intelliveer');
			} else {
				this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
				this.getRolesList(this.selectedBusinessGroup?.bgId);
				this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
				this.getLocationList(this.selectedBusinessGroup?.bgId);
				this.getPracticeList(this.selectedBusinessGroup?.bgId);
			}
		} else {
			this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
			this.getRolesList(this.selectedBusinessGroup?.bgId);
			this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
			this.getLocationList(this.selectedBusinessGroup?.bgId);
			this.getPracticeList(this.selectedBusinessGroup?.bgId);
		}
	}

	// getUserCurrentRoleList(bgId: any) {
	// 	this.userCurrentRoleList = [];
	// 	let permissionArray: any[] = [];
	// 	let userId = localStorage.getItem('userId');
	// 	this.userService.getUserData(bgId, userId).subscribe(
	// 		(userCurrentRoleList: any) => {
	// 			if (userCurrentRoleList) {
	// 				for (let i = 0; i < userCurrentRoleList.roles.length; i++) {
	// 					this.userService
	// 						.getUserRoleData(bgId, userCurrentRoleList.roles[i])
	// 						.subscribe({
	// 							next: (roledata: any) => {
	// 								let rolePermission = roledata.permissions;
	// 								for (
	// 									let i = 0;
	// 									i < rolePermission.length;
	// 									i++
	// 								) {
	// 									const formGroup = this.newModule();
	// 									const sectionList =
	// 										rolePermission[i].sections;
	// 									for (
	// 										let j = 0;
	// 										j < sectionList.length;
	// 										j++
	// 									) {
	// 										const sectionFormGroup =
	// 											this.newSections();
	// 										const permissionsList =
	// 											sectionList[j].permissions;
	// 										for (
	// 											let k = 0;
	// 											k < permissionsList.length;
	// 											k++
	// 										) {
	// 											const findDuplicate = permissionArray.find((x: any) => x.name === permissionsList[k].name);
	// 											if(findDuplicate)
	// 											{
	// 												if(findDuplicate.enabled || permissionsList[k].enabled)
	// 												{
	// 													permissionsList[k].enabled = true;
	// 												}
	// 												if(findDuplicate.locked || permissionsList[k].locked)
	// 												{
	// 													permissionsList[k].locked = true;
	// 												}
	// 												if(findDuplicate.allowOverride || permissionsList[k].allowOverride)
	// 												{
	// 													permissionsList[k].allowOverride = true;
	// 												}
	// 												console.log(findDuplicate)
	// 												console.log("------------------------------------------")
	// 												console.log(permissionsList[k])
	// 											}
	// 											const permissionFormGroup =
	// 												this.newPermissions();
	// 											permissionFormGroup.patchValue({
	// 												name: permissionsList[k]
	// 													.name,
	// 												enabled:
	// 													permissionsList[k]
	// 														.enabled,
	// 												locked: permissionsList[k]
	// 													.locked,
	// 												allowOverride:
	// 													permissionsList[k]
	// 														.allowOverride,
	// 												attrs: {}
	// 											});
	// 											this.permissionArray().push(
	// 												permissionFormGroup
	// 											);
	// 											permissionArray.push(permissionsList[k]);
	// 										}
	// 										sectionFormGroup.patchValue({
	// 											section: sectionList[j].section,
	// 											displayShowAdvanced: false
	// 										});
	// 										this.sectionsArray().push(
	// 											sectionFormGroup
	// 										);
	// 									}
	// 									const findDuplicateModule = this.moduleArray().value.find((x: any) => x.module === rolePermission[i].module);
	// 									if(findDuplicateModule == undefined)
	// 									{
	// 										formGroup.patchValue({
	// 											module: rolePermission[i].module
	// 										});
	// 										this.moduleArray().push(formGroup);
	// 									}
	// 								}
	// 								console.log(this.Form);
	// 								this.Form.patchValue(this.moduleArray())
	// 								if (roledata) {
	// 									this.userCurrentRoleList.push(roledata);
	// 								}
	// 							},
	// 							error: () => {}
	// 						});
	// 				}
	// 			}
	// 		},
	// 		(error) => {
	// 			console.log(error);
	// 		}
	// 	);
	// }

	getUserCurrentRoleList(bgId: any) {
		this.userCurrentRoleList = [];
		this.userCurrentRoleListForForm = [];
		let permissionArray: any[] = [];
		let userId = localStorage.getItem('userId');
		this.userService.getUserData(bgId, userId).subscribe(
			(userCurrentRole: any) => {
				if (userCurrentRole) {
					userCurrentRole.roles.forEach((element:any,index:any) => {
						
						this.userService
							.getUserRoleData(bgId, userCurrentRole.roles[index])
							.subscribe({
								next: (roledata: any) => {
									console.log(roledata,index)
									if(permissionArray.length == 0){
									  this.userCurrentRoleListForForm.push(roledata);
									  roledata.permissions.forEach((eli:any)=>{
										eli.sections.forEach((section:any)=>{
											section.permissions.forEach((perm:any)=>{
												 permissionArray.push({
													name: perm
														.name,
													enabled:
														perm
															.enabled,
													locked: perm
														.locked,
													allowOverride:
														perm
															.allowOverride,
													attrs: {}
												})
											})
										})
									})
									}else{
										roledata.permissions.forEach((eli:any,index:any)=>{
											eli.sections.forEach((section:any,ind:any)=>{
												section.permissions.forEach((perm:any,perIndex:any)=>{
													const findDuplicate = permissionArray.find((x: any) => x.name === perm.name);
													if(findDuplicate)
													{
														if(findDuplicate.enabled || perm.enabled)
															{
																this.userCurrentRoleListForForm[0].permissions[index].sections[ind].permissions[perIndex].enabled = true;
															}
															if(findDuplicate.locked || perm.locked)
															{
																this.userCurrentRoleListForForm[0].permissions[index].sections[ind].permissions[perIndex].locked = true;
															}
															if(findDuplicate.allowOverride || perm.allowOverride)
															{
																this.userCurrentRoleListForForm[0].permissions[index].sections[ind].permissions[perIndex].allowOverride = true;
															}
													}else{
														permissionArray.push({
															name: perm
																.name,
															enabled:
																perm
																	.enabled,
															locked: perm
																.locked,
															allowOverride:
																perm
																	.allowOverride,
															attrs: {}
														})
													}
												})
											})
										})
									}
									if(userCurrentRole.roles.length-1 == index){
										setTimeout(() => {
											console.log(this.userCurrentRoleListForForm[0]?.permissions, 'permissions');
										this.setUserPolicyData(this.userCurrentRoleListForForm[0]?.permissions)
										}, 1000);
									}
									if(roledata){
										this.userCurrentRoleList.push(roledata)
									}
									
								},
								error: () => {}
							});
					})
				}
				
				
			},
			(error) => {
				console.log(error);
			}
			
		);
	}
   setUserPolicyData(data:any){
	data.forEach((section:any) => {
		const formGroup = this.newModule();
		section.sections.forEach((elem:any) => {
		  const formGroupFirst = this.newSections();
		  elem.permissions.forEach((perm:any) =>{
			const formGroupSecond = this.newPermissions();
			formGroupSecond.patchValue({name: perm.name, enabled: perm.enabled, locked: perm.locked, allowOverride: perm.allowOverride});
			this.permissionArray().push(formGroupSecond);
		  })
		  formGroupFirst.patchValue({section: elem.section});
		  this.sectionsArray().push(formGroupFirst)
		});
		formGroup.patchValue({module:section.module})
		this.moduleArray().push(formGroup)
	  });
	  console.log(this.moduleArray().value,'formvalues')
   }
	cancleUserCurrentRole(Obj: any, index: number) {
		this.userCurrentRoleList.length != 1
			? this.userCurrentRoleList.splice(index, 1)
			: console.log('Sorry you can not delete role');
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
		const findDuplicate = this.userCurrentRoleList.find((x: any) => x._id === $event._id);
		let roleObj = {
			id: $event._id,
			name: $event.name
		};
		(findDuplicate == undefined) ? this.userCurrentRoleList.push(roleObj) : '';		
		this.moduleArray().clear();
		this.sectionsArray().clear();
		this.permissionArray().clear();
		let rolePermission = $event.permissions;
		for (let i = 0; i < rolePermission.length; i++) {
			const formGroup = this.newModule();
			const sectionList = rolePermission[i].sections;
			for (let j = 0; j < sectionList.length; j++) {
				const sectionFormGroup = this.newSections();
				const permissionsList = sectionList[j].permissions;
				for (let k = 0; k < permissionsList.length; k++) {
					const permissionFormGroup = this.newPermissions();
					permissionFormGroup.patchValue({
						name: permissionsList[k].name,
						enabled: permissionsList[k].enabled,
						locked: permissionsList[k].locked,
						allowOverride: permissionsList[k].allowOverride,
						attrs: {}
					});
					this.permissionArray().push(permissionFormGroup);
				}
				sectionFormGroup.patchValue({
					section: sectionList[j].section,
					displayShowAdvanced: false
				});
				this.sectionsArray().push(sectionFormGroup);
			}
			formGroup.patchValue({ module: rolePermission[i].module });
			this.moduleArray().push(formGroup);
		}
	}

	getLegelEntityList(bgId: any) {
		this.userService.getLegelEntityList(bgId).subscribe(
			(list: any) => {
				console.log(list);
				this.legelEntityList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getLocationList(bgId: any) {
		this.userService.getLocationList(bgId).subscribe(
			(list: any) => {
				console.log(list);
				this.locationList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getPracticeList(bgId: any) {
		this.userService.getPracticeList(bgId).subscribe(
			(list: any) => {
				console.log(list);
				this.practiceList = list;
			},
			(error) => {
				console.log(error);
			}
		);
	}
}

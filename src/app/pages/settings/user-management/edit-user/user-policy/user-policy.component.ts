import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
	selector: 'app-user-policy',
	templateUrl: './user-policy.component.html',
	styleUrls: ['./user-policy.component.scss']
})
export class UserPolicyComponent implements OnInit {
	@ViewChild('legelEntity') refLegelEntity :ElementRef | any;
	@ViewChild('location') refLocation :ElementRef | any;
	@ViewChild('practice') refPractice :ElementRef | any;
	Form!: FormGroup;
	roleModuleNestedForm!: FormGroup;
	roleSectionNestedForm!: FormGroup;
	formData: any | undefined = undefined;
	showAdvanceBG: boolean = true;
	showAdvanceLE: boolean = true;
	showAdvanceLOC: boolean = true;
	showAdvancePC: boolean = true;

	permissionOBJ: any[] = [];
	userCurrentRoleList: any[] = [];
	userCurrentRoleListForForm: any[] = [];
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	roleList: any;
	legelEntityList: any[] = [];
	locationList: any[] = [];
	practiceList: any[] = [];
	bgUserLogin: string | undefined;
	selectedLegelEntity: any;
	selectedLocation: any;
	selectedPractice: any;
	saveDissable: boolean = true;
	legelEntitySearchLst: any[] = [];

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
		console.log(this.refLegelEntity)
		this.initForm(this.formData);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			permissions: this.fb.array([])
		});
		this.Form.valueChanges.subscribe((values) => {
			this.saveDissable = false;
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

	getUserPolicyPermission() {
		this.userService
			.getUserPolicyList(this.bgUserLogin, localStorage.getItem('userId'))
			.subscribe(
				(list) => {
					console.log(list);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	save(data: any) {
		this.alertService
			.conformAlert('Are you sure?', 'You want to update a user policy')
			.then((result: any) => {
				if (result.value) {
					this.saveUesrPolicyList();
				}
			});
	}

	saveUesrPolicyList() {
		this.Form.value.permissions.map((module: any) => {
			module.sections.map((section: any) => {
				section.permissions.map((permission: any) => {
					delete permission.locked;
					delete permission.allowOverride;
				});
			});
		});
		this.userService
			.saveUserPolicyList(
				this.bgUserLogin,
				localStorage.getItem('userId'),
				this.Form.value
			)
			.subscribe(
				(list) => {
					this.alertService.success(
						'Success',
						'User policy has been updated successfully'
					);
					this.router.navigate([
						'/dashboard/settings/user-management/manage-user'
					]);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	cancel() {
		this.router.navigate([
			'/dashboard/settings/user-management/manage-user'
		]);
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.getUserCurrentRoleList('intelliveer');
				this.getLegelEntityList('intelliveer');
				this.getLocationList('intelliveer');
				this.getPracticeList('intelliveer');
				this.bgUserLogin = 'intelliveer';
			} else {
				this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
				this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
				this.getLocationList(this.selectedBusinessGroup?.bgId);
				this.getPracticeList(this.selectedBusinessGroup?.bgId);
				this.bgUserLogin = this.selectedBusinessGroup?.bgId;
			}
		} else {
			this.getUserCurrentRoleList(this.selectedBusinessGroup?.bgId);
			this.getLegelEntityList(this.selectedBusinessGroup?.bgId);
			this.getLocationList(this.selectedBusinessGroup?.bgId);
			this.getPracticeList(this.selectedBusinessGroup?.bgId);
			this.bgUserLogin = this.selectedBusinessGroup?.bgId;
		}
		this.getUserPolicyPermission();
	}

	getUserCurrentRoleList(bgId: any) {
		this.userCurrentRoleList = [];
		this.userCurrentRoleListForForm = [];
		let userId = localStorage.getItem('userId');
		this.userService
			.getUserData(bgId, userId)
			.forEach((userCurrentRole: any) => {
				if (userCurrentRole) {
					userCurrentRole.roles.forEach(
						(element: any, index: any) => {
							console.log(element, bgId);
							this.userService
								.getUserRoleData(
									bgId,
									userCurrentRole.roles[index]
								)
								.subscribe({
									next: (roledata: any) => {
										let rolData: any = roledata;
										if (roledata) {
											this.userCurrentRoleList.push(
												rolData
											);
										}
										this.setPermissionForCancelANDNew(
											roledata
										);
										if (
											userCurrentRole.roles.length - 1 ==
											index
										) {
											setTimeout(() => {
												console.log(
													this
														.userCurrentRoleListForForm[0]
														?.permissions,
													'permissions'
												);
												this.setUserPolicyData(
													this
														.userCurrentRoleListForForm[0]
														?.permissions
												);
											}, 200);
										}
									},
									error: () => {}
								});
						}
					);
				}
			});
	}
	setUserPolicyData(data: any) {
		data.forEach((section: any) => {
			const formGroup = this.newModule();
			section.sections.forEach((elem: any) => {
				const formGroupFirst = this.newSections();
				elem.permissions.forEach((perm: any) => {
					const formGroupSecond = this.newPermissions();
					formGroupSecond.patchValue({
						name: perm.name,
						enabled: perm.enabled,
						locked: perm.locked,
						allowOverride: perm.allowOverride
					});
					this.permissionArray().push(formGroupSecond);
				});
				formGroupFirst.patchValue({ section: elem.section });
				this.sectionsArray().push(formGroupFirst);
			});
			formGroup.patchValue({ module: section.module });
			this.moduleArray().push(formGroup);
		});
		//   console.log(this.moduleArray().value,'formvalues')
	}
	cancleUserCurrentRole(Obj: any, index: number) {
		this.userCurrentRoleList.length != 1
			? this.userCurrentRoleList.splice(index, 1)
			: this.alertService.displayAlertMessage(
					'Sorry....',
					'You can not delete role'
			  );
		this.moduleArray().clear();
		this.sectionsArray().clear();
		this.permissionArray().clear();
		this.userCurrentRoleListForForm = [];
		this.permissionOBJ = [];
		this.userCurrentRoleList.forEach((ele: any, ind: any) => {
			this.userService
				.getUserRoleData(this.bgUserLogin, ele._id)
				.subscribe({
					next: (roledata: any) => {
						this.setPermissionForCancelANDNew(roledata);
						if (this.userCurrentRoleList.length - 1 == ind) {
							setTimeout(() => {
								console.log(
									this.userCurrentRoleListForForm[0]
										?.permissions,
									'permissions'
								);
								this.setUserPolicyData(
									this.userCurrentRoleListForForm[0]
										?.permissions
								);
							}, 200);
						}
					}
				});
		});
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
		const findDuplicate = this.userCurrentRoleList.find(
			(x: any) => x._id === $event._id
		);
		findDuplicate == undefined ? this.userCurrentRoleList.push($event) : '';
		console.log(this.userCurrentRoleList);
		this.moduleArray().clear();
		this.sectionsArray().clear();
		this.permissionArray().clear();
		this.userCurrentRoleListForForm = [];
		this.permissionOBJ = [];
		this.addRolePermissions(this.userCurrentRoleList);
	}

	getLegelEntityList(bgId: any) {
		this.userService.getLegelEntityList(bgId).subscribe(
			(list: any) => {
				console.log(list);
				this.legelEntityList = list;
				this.legelEntitySearchLst = this.legelEntityList;
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
	/** common function for add permission acording roles */
	addRolePermissions(data: any) {
		data.forEach((element: any, index: any) => {
			if (this.permissionOBJ.length == 0) {
				this.userCurrentRoleListForForm.push(element);
				element.permissions.forEach((eli: any) => {
					eli.sections.forEach((section: any) => {
						section.permissions.forEach((perm: any) => {
							this.permissionOBJ.push({
								name: perm.name,
								enabled: perm.enabled,
								locked: perm.locked,
								allowOverride: perm.allowOverride,
								attrs: {}
							});
						});
					});
				});
			} else {
				element.permissions.forEach((eli: any, index: any) => {
					eli.sections.forEach((section: any, ind: any) => {
						section.permissions.forEach(
							(perm: any, perIndex: any) => {
								const findDuplicate = this.permissionOBJ.find(
									(x: any) => x.name === perm.name
								);
								if (findDuplicate) {
									if (findDuplicate.enabled || perm.enabled) {
										this.userCurrentRoleListForForm[0].permissions[
											index
										].sections[ind].permissions[
											perIndex
										].enabled = true;
									}
									if (findDuplicate.locked || perm.locked) {
										this.userCurrentRoleListForForm[0].permissions[
											index
										].sections[ind].permissions[
											perIndex
										].locked = true;
									}
									if (
										findDuplicate.allowOverride ||
										perm.allowOverride
									) {
										this.userCurrentRoleListForForm[0].permissions[
											index
										].sections[ind].permissions[
											perIndex
										].allowOverride = true;
									}
								}
							}
						);
					});
				});
			}
			if (data.length - 1 == index) {
				setTimeout(() => {
					console.log(
						this.userCurrentRoleListForForm[0]?.permissions,
						'permissions'
					);
					this.setUserPolicyData(
						this.userCurrentRoleListForForm[0]?.permissions
					);
				}, 200);
			}
		});
	}
	setPermissionForCancelANDNew(roledata: any) {
		if (this.permissionOBJ.length == 0) {
			this.userCurrentRoleListForForm.push(roledata);
			roledata.permissions.forEach((eli: any) => {
				eli.sections.forEach((section: any) => {
					section.permissions.forEach((perm: any) => {
						this.permissionOBJ.push({
							name: perm.name,
							enabled: perm.enabled,
							locked: perm.locked,
							allowOverride: perm.allowOverride,
							attrs: {}
						});
					});
				});
			});
		} else {
			roledata.permissions.forEach((eli: any, index: any) => {
				eli.sections.forEach((section: any, ind: any) => {
					section.permissions.forEach((perm: any, perIndex: any) => {
						const findDuplicate = this.permissionOBJ.find(
							(x: any) => x.name === perm.name
						);
						if (findDuplicate) {
							if (findDuplicate.enabled || perm.enabled) {
								this.userCurrentRoleListForForm[0].permissions[
									index
								].sections[ind].permissions[perIndex].enabled =
									true;
							}
							if (findDuplicate.locked || perm.locked) {
								this.userCurrentRoleListForForm[0].permissions[
									index
								].sections[ind].permissions[perIndex].locked =
									true;
							}
							if (
								findDuplicate.allowOverride ||
								perm.allowOverride
							) {
								this.userCurrentRoleListForForm[0].permissions[
									index
								].sections[ind].permissions[
									perIndex
								].allowOverride = true;
							}
						} else {
							this.permissionOBJ.push({
								name: perm.name,
								enabled: perm.enabled,
								locked: perm.locked,
								allowOverride: perm.allowOverride,
								attrs: {}
							});
						}
					});
				});
			});
		}
	}

	selectLegelEntity(Obj: any) {
		console.log(Obj);
		this.selectedLegelEntity = Obj.name;
		this.Form.value.permissions.map((module: any) => {
			module.sections.map((section: any) => {
				section.permissions.map((permission: any) => {
					permission.attrs = {
						BR: {
							in: [this.selectedLegelEntity]
						}
					};
				});
			});
		});
	}

	selectLocation(Obj: any) {
		console.log(Obj);
		this.selectedLocation = Obj.name;
		this.Form.value.permissions.map((module: any) => {
			module.sections.map((section: any) => {
				section.permissions.map((permission: any) => {
					permission.attrs = {
						BR: {
							in: [this.selectedLocation]
						}
					};
				});
			});
		});
	}

	selectPractice(Obj: any) {
		console.log(Obj);
		this.selectedPractice = Obj.name;
		this.Form.value.permissions.map((module: any) => {
			module.sections.map((section: any) => {
				section.permissions.map((permission: any) => {
					permission.attrs = {
						BR: {
							in: [this.selectedPractice]
						}
					};
				});
			});
		});
	}
}

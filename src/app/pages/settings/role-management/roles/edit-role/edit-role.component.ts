import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { RoleService } from '@services/role/role.service';
import { RoleTemplate } from '../add-role/add-role.component';
import { AuthService } from '@services/auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  @ViewChild('legelEntity') refLegelEntity :ElementRef | any;
	@ViewChild('location') refLocation :ElementRef | any;
	@ViewChild('practice') refPractice :ElementRef | any;

  Form!: FormGroup;
  roleModuleNestedForm!: FormGroup;
  public formData: any | undefined = undefined;
  public roleObj: RoleTemplate = new RoleTemplate();
  legelEntityList: any[] = [];
  locationList: any[] = [];
  practiceList: any[] = [];
  displayCreateRoleYesNoOption: boolean = false;
  roleNestedForm!: FormGroup;
  permissionsList: any[] = [];
  businessGroupDropdownSupscription: Subscription = new Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | any;
  editRoleID: any;
  orgID:any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private roleService: RoleService,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private alertService: AlertService,
    private authService: AuthService,
    public route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    (this.roleService.authService.getOrgId() === 'intelliveer') 
      ? this.displayCreateRoleYesNoOption = true 
      : this.displayCreateRoleYesNoOption = false;
    this.initForm(this.formData);
    this.editRoleID = this.route.snapshot.paramMap.get('id');    
    this.getLegelEntityList();
    this.getLocationList();
    this.getPracticeList();
    this.getPermissionList();
    this.getBgId();
  }
  getBgId(){
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          console.log(bg)
          this.selectedBusinessGroup = bg;
          this.getOrgBgId()
        }
      });
  }
  getRoleById()
  {
    this.roleService.getRoleById(this.editRoleID).subscribe((data: any) => {
      this.roleObj = data;
      this.Form.patchValue(data);
    }, error => {
      console.log(error)
    });
  }
  /** Get role data from role id and BG id */
  getRoleByBgId(id: string,bgId:any)
  {
    this.roleService.getRoleByIdBgId(id,bgId).subscribe((data: any) => {
      this.roleObj = data;
      console.log(this.roleObj)
      this.Form.patchValue(data);
    }, error => {
      console.log(error)
    });
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
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

  save(data: any) {
    this.Form.value.permissions.map((items: any) =>
    {
      delete items.roles;
      delete items.displayShowAdvanced
      items.sections.map((permissionItem: any) =>
      {
        //permissionItem.attrs = {};
        delete permissionItem._id;
        
      })
      delete items._id
    })
    if(this.roleObj.roleTemplateId)
    {
      this.addRoleWithTemplate(this.Form.value)
    }
    else{
      this.saveRoleFromScratch(this.Form.value);
    }
  }

  saveRoleFromScratch(data: any)
  {
    this.alertService.conformAlert('Are you sure?', 'You want to edit a role')
      .then((result: any) => {
        if (result.value) {
          this.roleService.updateRoleFromRoleScratch(data, this.roleObj._id).subscribe((data: any) => {
            this.alertService.success(
              'Success',
              'Role has been edit successfully'
            );
            this.router.navigate([
              '/dashboard/settings/role-management/manage-role'
            ]);
          }, error => {
            console.log(error)
          });
        }
      });
  }

  saveRoleFromTemplate(data: any)
  {
    this.alertService.conformAlert('Are you sure?', 'You want to edit a role')
      .then((result: any) => {
        if (result.value) {
          this.roleService.updateRoleFromRoleTemplate(data, this.roleObj._id).subscribe((data: any) => {
            this.alertService.success(
              'Success',
              'Role has been edit successfully'
            );
            this.router.navigate([
              '/dashboard/settings/role-management/manage-role'
            ]);
          }, error => {
            console.log(error)
          });
        }
      });
  }
  saveRoleFromTemplateBYBgId(data: any)
  {
    this.alertService.conformAlert('Are you sure?', 'You want to edit a role')
      .then((result: any) => {
        if (result.value) {
          this.roleService.updateRoleFromRoleTemplate(data, this.roleObj._id,this.orgID).subscribe((data: any) => {
            this.alertService.success(
              'Success',
              'Role has been edit successfully'
            );
            this.router.navigate([
              '/dashboard/settings/role-management/manage-role'
            ]);
          }, error => {
            console.log(error)
          });
        }
      });
  }

  cancel(){
    this.router.navigate(['dashboard/settings/role-management/manage-role'])
  }

  getLegelEntityList()
  {
    this.roleService.getLegelEntityList().subscribe((list: any) => {
      console.log(list);
      this.legelEntityList = list;
    }, error => {
      console.log(error)
    });
  }

  getLocationList()
  {
    this.roleService.getLocationList().subscribe((list: any) => {
      console.log(list);
      this.locationList = list;
    }, error => {
      console.log(error)
    });
  }

  getPracticeList()
  {
    this.roleService.getPracticeList().subscribe((list: any) => {
      console.log(list);
      this.practiceList = list;
    }, error => {
      console.log(error)
    });
  }

   /** Show data According To Type and BG */
   getOrgBgId(){
    let bgOrdID:any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
    this.orgID = bgOrdID;
		if (user?.__ISSU__) {
      if(bgOrdID == 'intelliveer' || bgOrdID == null){
        this.getRoleById();
      }else{
        this.getRoleByBgId(this.editRoleID,bgOrdID)
      }
      }else{
      this.getRoleByBgId(this.editRoleID,bgOrdID)
    }
	}
  /** Update Role with Template  */
	addRoleWithTemplate(data:any){
		let user = this.authService.getLoggedInUser();
		let bgOrdID:any = localStorage.getItem('selected_business_group');
    this.orgID = bgOrdID;
		if(user?.__ISSU__){
			if(this.roleObj._id != "intelliveer" && bgOrdID != null){
			  this.saveRoleFromTemplateBYBgId(data);
			}else{
			  this.saveRoleFromTemplate(data);
			}
		}else{
			this.saveRoleFromTemplateBYBgId(data)
		}
	}

}

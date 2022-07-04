import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { RoleService } from '@services/role/role.service';
import { RoleTemplate } from '../add-role/add-role.component';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  Form!: FormGroup;
  public formData: any | undefined = undefined;
  public roleObj: RoleTemplate = new RoleTemplate();
  legelEntityList: any[] = [];
  locationList: any[] = [];
  practiceList: any[] = [];
  displayShowAdvanced: boolean = false;
  displayCreateRoleYesNoOption: boolean = false;
  roleNestedForm!: FormGroup;
  permissionsList: any[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private roleService: RoleService,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private alertService: AlertService,
    public route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    (this.roleService.authService.getOrgId() === 'intelliveer') 
      ? this.displayCreateRoleYesNoOption = true 
      : this.displayCreateRoleYesNoOption = false;
    this.initForm(this.formData);
    let id: any = this.route.snapshot.paramMap.get('id');    
    this.getLegelEntityList();
    this.getLocationList();
    this.getPracticeList();
    this.getPermissionList();
    this.getRoleById(id);
  }

  getRoleById(id: string)
  {
    this.roleService.getRoleById(id).subscribe((data: any) => {
      this.roleObj = data;
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

  save(data: any) {
    this.Form.value.permissions.map((items: any) =>
    {
      delete items.roles;
      items.permissions.map((permissionItem: any) =>
      {
        permissionItem.attrs = {};
        delete permissionItem._id;
        
      })
      delete items._id
    })
    if(this.roleObj.roleTemplateId)
    {
      this.saveRoleFromScratch(this.Form.value)
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

}

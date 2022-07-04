import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.getRoleById(id);
    this.getLegelEntityList();
    this.getLocationList();
    this.getPracticeList();
  }

  getRoleById(id: string)
  {
    this.roleService.getRoleById(id).subscribe((data: any) => {
      this.roleObj = data;
    }, error => {
      console.log(error)
    });
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      name: [data?.fName || '', Validators.required],
      description: [data?.lName || '', Validators.required],
    });
  }

  save(data: any) {
    this.roleObj.permissions.map((items: any) =>
    {
      items.permissions.map((permissionItem: any) =>
      {
        permissionItem.attrs = {};
        delete permissionItem._id
      })
      delete items._id
    })
    let roleObj = {
      name: data.name,
      description: data.description,
      permissions: this.roleObj.permissions
    }
    this.businessGroupDropdownService.getBusinessGroups().subscribe(list =>
      {
        if(list.length == 0)
        {
          this.saveRoleFromScratch(roleObj);
        }
        else
        {
          this.saveRoleFromTemplate(roleObj);
        }
      })
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

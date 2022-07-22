import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { BusinessGroupDropdownService } from '@services/business-group-dropdown/business-group-dropdown.service';
import { RolesUsersService } from '@services/settings/role-management/roles-users.service';

import { RolesTemplate, Section,Permissions } from 'src/app/interfaces/settings/role-management/roles-template.model.';

@Component({
  selector: 'app-add-rol-template',
  templateUrl: './add-role-template.component.html',
  styleUrls: ['./add-role-template.component.scss']
})
export class AddRoleTemplateComponent implements OnInit {

  roleTemplateForm!: FormGroup;
  roleNestedForm!: FormGroup;
  roleModuleNestedForm!: FormGroup;
  allRolePermissionsMeta: any;
  isTypeSpecific:boolean = false;
  rolesTemplates: RolesTemplate = new RolesTemplate();
  sectionPermissionObj: Section = new Section()
  sectionPermissions: Permissions = new Permissions()
  getRolesID:any;
  submitted:boolean = false;
  businessGroups: any;
  @Input() formData: any | undefined = undefined;
  roleTemplate = { id: '', name: '', description: '' };
  finalArray:any = [];

  

  constructor(private router: Router,
    private rolesUserServ: RolesUsersService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private _ngZone: NgZone,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm(this.formData);
    this.getRolePermissions();
    this.getRoleTemplateID();
    this.bussinesGroupList();
  }

  initForm(data?: any) {
    data = data || {};
    this.roleTemplateForm = this.fb.group({
      name: ['',Validators.required],
      description: [''],
      businessGroups: [''],
      type: ['',Validators.required],
      permissions: this.fb.array([
        
      ])
    });
  }

  get f() { return this.roleTemplateForm.controls; }

  /** First Array form value*/
  get moduleNested(){
    return (<FormArray>this.roleTemplateForm.get("permissions")).controls;
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
  /** Get ID from Query Params */
  getRoleTemplateID(){
    this.route.queryParams.subscribe((params: any) => {
      if (params._id) {
        this.getRolesID = params._id;
        this.roleTemplateDetail(this.getRolesID);
      }
    })
  }
  /** This array for permission */
  moduleArray() : FormArray {
    return (<FormArray>this.roleTemplateForm.get("permissions"));
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

  
  /** This array for permission */
   permissionArray() : FormArray {
    return (<FormArray>this.roleNestedForm.get("permissions"));
   }
 
  newPermissions(): FormGroup {
    return  this.fb.group({
      name: new FormControl(),
      enabled: new FormControl(false),
      locked: new FormControl(false),
      allowOverride: new FormControl(false),
      attrs: {}
    })
  }

 /** Add and update roles template data */
  saveRoleTemplate() {
    this.submitted = true;
       // stop here if form is invalid
      if (this.roleTemplateForm.invalid) {
        return;
      }
    this.roleTemplateForm.value.permissions.map((item: any) => {
      delete item.roles
    })
    if(this.roleTemplateForm.value.businessGroups =="" || this.roleTemplateForm.value.businessGroups == null || this.roleTemplateForm.value.businessGroups == undefined ){
      this.roleTemplateForm.value.businessGroups = [];
    }
    console.log(this.roleTemplateForm.value);
    if(this.getRolesID){
      this.editRoleTemplateForm();
    }else{
      this.addRoleTemplateForm();
    }
    
  }

  /** Add Role Template */
  addRoleTemplateForm(){
    this.alertService.conformAlert('Are you sure?', 'You want to update a role template')
      .then((result: any) => {
        if (result.value) {
          this.rolesUserServ.createRoleTemplate(this.roleTemplateForm.value).subscribe(res=>{
            this.alertService.success(
              'Success',
              'Role Template has been created successfully'
            );
            this.router.navigate(['/dashboard/settings/role-management/manage-role-template']);
          }, error => {
            console.log(error)
          });
        }
      });
  }

  /** Edit Role Template */
  editRoleTemplateForm(){
    const data = this.roleTemplateForm.value;
    this.alertService.conformAlert('Are you sure?', 'You want to update a role template')
      .then((result: any) => {
        if (result.value) {
          this.rolesUserServ.updateRoleTemplate(data,this.getRolesID).subscribe(res=>{
              this.alertService.success(
                'Success',
                'Role Template has been updated successfully'
              );
              this.router.navigate(['/dashboard/settings/role-management/manage-role-template']);
            }, error => {
              console.log(error)
            });
          }
        });
  }

  /** get Single Role Template */
  roleTemplateDetail(ID:any){
    this._ngZone.run(() => { 
      setTimeout(() => {
      this.rolesUserServ.singleRoleTemplate(ID).subscribe(res=>{
        this.setPermissionWithTemplateId(res);
      })
    }, 500)
    })
  }

  /** Get Permission Data */

  getRolePermissions(){
    this.rolesUserServ.getRoleTemplateMeta().subscribe(res=>{
      localStorage.removeItem('permissions');
      this.allRolePermissionsMeta = res;
      localStorage.setItem('permissions',JSON.stringify(res));
      this.getAllPermissions(this.allRolePermissionsMeta)
      
    })
  }
  
 /** Bussines groups list */

 bussinesGroupList(){
  this.businessGroupDropdownService
      .getBusinessGroups()
      .subscribe((res) => {
        console.log(res);
        if (res && res.length > 0) {
          this.businessGroups = res;
        }
      });
}
/** Get Types */
  roleTypeValue(event:any){
   console.log(event)
   if(event === "specific"){
    this.isTypeSpecific = true;
   }else{
    this.isTypeSpecific = false;
    this.roleTemplateForm.patchValue({businessGroups: ''})
   }
  }
/** Search for Permissions */
  searchPermission(event:any){
    let searchKey = event.target.value;
    let data:any = localStorage.getItem('permissions');
    let permissions =JSON.parse(data);
    console.log(permissions)
    if(searchKey.length < 3){
      if(searchKey.length == 2){
       this.setSearchPermissions(permissions)
      }
      return
    }
   if(this.getRolesID){
    permissions.forEach((per:any,i:any) => {
      per.sections.forEach((element:any,index:any) => {
            let resultArray = element.permissions.filter((s:any) => s.name.toString()
            .toLowerCase()
            .includes(searchKey.toLowerCase()));
            element.permissions = resultArray;
            console.log(element.permissions)
            if(resultArray.length == 0){
             delete per.sections[index]
            }
            if((per.sections.length-1) == index){
              if(permissions[i].sections[0]){
                console.log(permissions[i].sections)
              }else{
                delete permissions[i]
              }
            }
        });
      });
   }else{
    permissions.forEach((per:any,i:any) => {
      per.permissions.forEach((element:any,index:any) => {
            let resultArray = element.permissions.filter((s:any) => s.name.toString()
            .toLowerCase()
            .includes(searchKey.toLowerCase()));
            element.permissions = resultArray;
            if(resultArray.length == 0){
             delete per.permissions[index]
            }
            if((per.permissions.length-1) == index){
              if(permissions[i].permissions[0]){
                console.log(permissions[i].permissions)
              }else{
                delete permissions[i]
              }
            }
        });
      });
   }
    console.log(permissions)
    this.setSearchPermissions(permissions)

  }
/** New set Permissions */
  setSearchPermissions(permissions:any){
    this.roleTemplateForm.reset(this.roleTemplateForm.value);
    this.moduleArray().clear();
    this.sectionsArray().clear()
    this.permissionArray().clear()
    if(this.getRolesID){
      this.getAllPermissionsEditTemplateRole(permissions);
    }else{
      this.getAllPermissionsWithOutTemplatID(permissions);
    }
    // this.roleTemplateForm.patchValue({
    //   permissions: permissions
    // })
  }
  /**Get all Permissions */
  getAllPermissions(data:any){
    if(!this.getRolesID){
      this.getAllPermissionsWithOutTemplatID(data)
    }
  }
  /** Get All modules and permission without ID */
  getAllPermissionsWithOutTemplatID(data:any){
    data.forEach((section:any) => {
      const formGroup = this.newModule();
      section.permissions.forEach((element:any) => {
        const formGroupFirst = this.newSections();
        element.permissions.forEach((perm:any) =>{
          const formGroupSecond = this.newPermissions();
          formGroupSecond.patchValue({name: perm.name, enabled: false, locked: false, allowOverride: false});
          this.permissionArray().push(formGroupSecond);
        })
        formGroupFirst.patchValue({section:element.section});
        this.sectionsArray().push(formGroupFirst)
      });
      formGroup.patchValue({module:section.name})
      this.moduleArray().push(formGroup)
    });
  }
  /** Get All Modules search When role template edit mode */
  getAllPermissionsEditTemplateRole(data:any){
    data.forEach((section:any) => {
      const formGroup = this.newModule();
      section.sections.forEach((elem:any) => {
        console.log(elem,elem.section)
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
    console.log(this.roleTemplateForm.value)
  }
   /** Get All modules and permission with ID */
  getAllPermissionsTemplateID(data:any,permissionsObj?:any){
    localStorage.removeItem('permissions');
    data.forEach((section:any) => {
      const formGroup = this.newModule();
      section.permissions.forEach((element:any) => {
        const formGroupFirst = this.newSections();
        element.permissions.forEach((perm:any) =>{
          let formGroupSecond = this.newPermissions();
          const permOBJ = permissionsObj.find((name:any) => name.name == perm.name);
          if(permOBJ){
            formGroupSecond.patchValue({name: permOBJ.name, enabled: permOBJ.enabled, locked: permOBJ.locked, allowOverride: permOBJ.allowOverride});
          }else{
            formGroupSecond.patchValue({name: perm.name, enabled: false, locked: false, allowOverride: false});
          }
          this.permissionArray().push(formGroupSecond);
        })
        formGroupFirst.patchValue({section:element.section});
        this.sectionsArray().push(formGroupFirst)
      });
      formGroup.patchValue({module:section.name})
      this.moduleArray().push(formGroup)
    });
    localStorage.setItem('permissions',JSON.stringify(this.roleTemplateForm.value.permissions));
  }
  setPermissionWithTemplateId(data:any){
    let allPermissions:any = localStorage.getItem('permissions');
    let permissions =JSON.parse(allPermissions);
    let permissionsObj:Array<any> = [];
    data.permissions.forEach((element:any) => {
      element.sections.forEach((sec:any)=> {
        sec.permissions.forEach((perms:any)=> {
          permissionsObj.push(perms);
        })
      });
    });
    this.getAllPermissionsTemplateID(permissions,permissionsObj);
    this.roleTemplateForm.patchValue({name:data.name,description:data.description,businessGroups:data.businessGroups,type: data.type });
    if(this.roleTemplateForm.value.businessGroups.length == 0){
      this.isTypeSpecific = false;
    }else{
      this.isTypeSpecific = true;
    }
  }
  checkLockedValue(event:any,data:any){
    console.log(event.target.checked)
    if(event.target.checked == false){
      data.controls.allowOverride.value = false
    }
  }
}

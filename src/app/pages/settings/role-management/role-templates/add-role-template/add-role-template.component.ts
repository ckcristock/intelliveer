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
          this.roleTemplateForm.patchValue(res);
          if(this.roleTemplateForm.value.businessGroups.length == 0){
            this.isTypeSpecific = false;
          }else{
            this.isTypeSpecific = true;
          }
      })
    }, 500)
    })
  }

  /** Get Permission Data */

  getRolePermissions(){
    this.rolesUserServ.getRoleTemplateMeta().subscribe(res=>{
      this.allRolePermissionsMeta = res;
      this.allRolePermissionsMeta.forEach((section:any) => {
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
      
    })
    console.log(this.roleTemplateForm)
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
}

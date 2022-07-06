import { Component, Input, NgZone, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
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
  allRolePermissionsMeta: any;
  isTypeSpecific:boolean = false;
  rolesTemplates: RolesTemplate = new RolesTemplate();
  sectionPermissionObj: Section = new Section()
  sectionPermissions: Permissions = new Permissions()
  getRolesID:any;
  submitted:boolean = false;
  @Input() formData: any | undefined = undefined;
  roleTemplate = { id: '', name: '', description: '' };
  finalArray:any = [];

  

  constructor(private router: Router,
    private rolesUserServ: RolesUsersService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private _ngZone: NgZone,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm(this.formData);
    this.getRolePermissions();
    this.getRoleTemplateID();
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
  get sectionNested(){
    return (<FormArray>this.roleTemplateForm.get("permissions")).controls;
  } 

    /** Get Second Array form value*/
  permissionNested(i:any){
    return (<FormArray>this.sectionNested[i].get("permissions")).controls;
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

  /** This array for permission Sections */
  sectionsArray() : FormArray {
    return (<FormArray>this.roleTemplateForm.get("permissions"));
   }

   newSections(): FormGroup {
    return this.roleNestedForm = this.fb.group({
      roles: new FormControl(),
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
        console.log(res);
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
        section.permissions.forEach((element:any) => {
          const formGroup = this.newSections();
          element.permissions.forEach((perm:any) =>{
            const formGroupSecond = this.newPermissions();
            formGroupSecond.patchValue({name: perm.name, enabled: false, locked: false, allowOverride: false});
            this.permissionArray().push(formGroupSecond);           
          })
          
          formGroup.patchValue({section:element.section,roles: section.name});
          this.sectionsArray().push(formGroup)
          
        });
        
      });
      
    })
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

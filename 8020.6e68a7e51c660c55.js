"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8020],{1762:(F,R,a)=>{a.d(R,{B:()=>O});var o=a(5e3),v=a(4996),b=a(9808);const l=function(d){return{active:d}};function h(d,T){if(1&d){const c=o.EpF();o.TgZ(0,"a",7),o.NdJ("click",function(){const B=o.CHM(c).$implicit;return o.oxw().scroll(B)}),o._uU(1),o.qZA()}if(2&d){const c=T.$implicit,g=o.oxw();o.Q6J("ngClass",o.VKq(2,l,g.activeClass===c.id)),o.xp6(1),o.Oqu(c.title)}}function P(d,T){if(1&d){const c=o.EpF();o.TgZ(0,"button",8),o.NdJ("click",function(){return o.CHM(c),o.oxw().handleSaveBtnClicked()}),o._UZ(1,"img",9),o.qZA()}if(2&d){const c=o.oxw();o.Q6J("disabled",c.disableSaveBtn)}}function i(d,T){if(1&d){const c=o.EpF();o.TgZ(0,"button",10),o.NdJ("click",function(){return o.CHM(c),o.oxw().handleAddCancelClicked()}),o._UZ(1,"img",11),o.qZA()}}function e(d,T){if(1&d){const c=o.EpF();o.TgZ(0,"button",10),o.NdJ("click",function(){return o.CHM(c),o.oxw().handleSaveCancelClicked()}),o._UZ(1,"img",12),o.qZA()}}function y(d,T){1&d&&(o.TgZ(0,"button",13),o._UZ(1,"img",14),o.qZA())}function N(d,T){if(1&d){const c=o.EpF();o.TgZ(0,"button",10),o.NdJ("click",function(){o.CHM(c);const Z=o.oxw();return Z.editButtonURL(null==Z.editButton?null:Z.editButton.url)}),o._UZ(1,"img",15),o.qZA()}}let O=(()=>{class d{constructor(c){this.router=c,this.activeClass="init",this.mode="menu",this.saveBtn=!1,this.disableSaveBtn=!1,this.cancelBtn=!1,this.disableCancelBtn=!1,this.addBtn=!1,this.disableAddBtn=!1,this.onCancel=new o.vpe,this.onSave=new o.vpe,this.onAdd=new o.vpe,this.menuItems=[]}ngOnInit(){}ngAfterContentInit(){this.activeClass=0!=this.menuItems.length?this.menuItems[0].id:""}scroll(c){const g=document.getElementById(c.id);g&&g.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}handleSaveBtnClicked(){this.onSave.emit()}handleSaveCancelClicked(){this.onCancel.emit()}handleAddCancelClicked(){this.onAdd.emit()}editButtonURL(c){this.router.navigate([c])}}return d.\u0275fac=function(c){return new(c||d)(o.Y36(v.F0))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-nav-bar-pills"]],inputs:{activeClass:"activeClass",mode:"mode",saveBtn:"saveBtn",disableSaveBtn:"disableSaveBtn",cancelBtn:"cancelBtn",disableCancelBtn:"disableCancelBtn",addBtn:"addBtn",editButton:"editButton",disableAddBtn:"disableAddBtn",menuItems:"menuItems"},outputs:{onCancel:"onCancel",onSave:"onSave",onAdd:"onAdd"},decls:10,vars:6,consts:[["id","navbar-pills"],[1,"left",2,"margin-left","0px"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"right"],["class","save",3,"disabled","click",4,"ngIf"],["class","cancel",3,"click",4,"ngIf"],["class","save",4,"ngIf"],[3,"ngClass","click"],[1,"save",3,"disabled","click"],["src","/assets/icons/save.svg","alt",""],[1,"cancel",3,"click"],["src","/assets/icons/add.svg","alt",""],["src","/assets/icons/cancel.svg","alt",""],[1,"save"],["src","/assets/icons/Add-Patient-Wizard-Green.svg","alt",""],["src","/assets/icons/Add-Patient-Wizard-Red.svg","alt",""]],template:function(c,g){1&c&&(o.TgZ(0,"div")(1,"div",0)(2,"div",1),o.YNc(3,h,2,4,"a",2),o.qZA(),o.TgZ(4,"div",3),o.YNc(5,P,2,1,"button",4),o.YNc(6,i,2,0,"button",5),o.YNc(7,e,2,0,"button",5),o.YNc(8,y,2,0,"button",6),o.YNc(9,N,2,0,"button",5),o.qZA()()()),2&c&&(o.xp6(3),o.Q6J("ngForOf",g.menuItems),o.xp6(2),o.Q6J("ngIf",g.saveBtn),o.xp6(1),o.Q6J("ngIf",g.addBtn),o.xp6(1),o.Q6J("ngIf",g.cancelBtn),o.xp6(1),o.Q6J("ngIf",g.disableSaveBtn&&(null==g.editButton?null:g.editButton.isButton)),o.xp6(1),o.Q6J("ngIf",!g.disableSaveBtn&&(null==g.editButton?null:g.editButton.isButton)))},directives:[b.sg,b.mk,b.O5],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}"]}),d})()},8076:(F,R,a)=>{a.d(R,{F:()=>b});var o=a(9808),v=a(5e3);let b=(()=>{class l{}return l.\u0275fac=function(P){return new(P||l)},l.\u0275mod=v.oAB({type:l}),l.\u0275inj=v.cJS({imports:[[o.ez]]}),l})()},884:(F,R,a)=>{a.d(R,{c:()=>b});var o=a(9808),v=a(5e3);let b=(()=>{class l{}return l.\u0275fac=function(P){return new(P||l)},l.\u0275mod=v.oAB({type:l}),l.\u0275inj=v.cJS({imports:[[o.ez]]}),l})()},8020:(F,R,a)=>{a.r(R),a.d(R,{AddRoleTemplateModule:()=>te});var o=a(9808),v=a(4996),b=a(531),l=a(2382);class h{constructor(){this.businessGroups=[],this.permissions=[P]}}class P{constructor(){this.permissions=[i]}}class i{constructor(){this.enabled=!1,this.locked=!1,this.allowOverride=!1}}var e=a(5e3),y=a(5325),N=a(5730),O=a(7802),d=a(9196),T=a(63),c=a(4524),g=a(9516),Z=a(1762),B=a(4376),x=a(9759);function E(s,m){if(1&s){const t=e.EpF();e.TgZ(0,"div",41)(1,"img",42),e.NdJ("click",function(){return e.CHM(t),e.oxw().checkPermission()}),e.qZA()()}}function M(s,m){1&s&&(e.TgZ(0,"h6",43),e._uU(1,"Create Role Template"),e.qZA())}function S(s,m){1&s&&(e.TgZ(0,"h6",43),e._uU(1,"Edit Role Template"),e.qZA())}function k(s,m){1&s&&(e.TgZ(0,"ng-option",44),e._uU(1,"Private "),e.qZA())}function D(s,m){1&s&&(e.TgZ(0,"ng-option",45),e._uU(1,"Specific "),e.qZA())}function w(s,m){if(1&s&&(e.TgZ(0,"ng-option",48),e._uU(1),e.qZA()),2&s){const t=m.$implicit;e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function U(s,m){if(1&s&&(e.TgZ(0,"div",22)(1,"label",19),e._uU(2,"Business Group"),e.qZA(),e.TgZ(3,"ng-select",46),e.YNc(4,w,2,2,"ng-option",47),e.qZA()()),2&s){const t=e.oxw();e.xp6(3),e.Q6J("multiple",!0),e.xp6(1),e.Q6J("ngForOf",t.businessGroups)}}function J(s,m){if(1&s&&(e.TgZ(0,"div")(1,"p")(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e.qZA()()),2&s){const t=e.oxw().$implicit;e.xp6(3),e.Oqu(t.value.module)}}function G(s,m){if(1&s&&(e.TgZ(0,"p")(1,"strong"),e._uU(2),e.qZA(),e._UZ(3,"br"),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.value.section)}}function Y(s,m){if(1&s&&e._UZ(0,"input",65),2&s){const t=e.oxw().$implicit;e.uIk("disabled",t.value.locked)}}function L(s,m){1&s&&e._UZ(0,"input",65)}function Q(s,m){1&s&&e._UZ(0,"input",66)}function z(s,m){if(1&s){const t=e.EpF();e.TgZ(0,"tr",60)(1,"td"),e.YNc(2,Y,1,1,"input",61),e.YNc(3,L,1,0,"input",61),e.qZA(),e.TgZ(4,"td"),e._UZ(5,"input",62),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"input",63),e.NdJ("change",function(p){const u=e.CHM(t).$implicit;return e.oxw(5).checkLockedValue(p,u)}),e.qZA()(),e.TgZ(9,"td"),e.YNc(10,Q,1,0,"input",64),e.qZA()()}if(2&s){const t=m.$implicit;e.Q6J("formGroupName",m.index),e.xp6(2),e.Q6J("ngIf",t.value.locked),e.xp6(1),e.Q6J("ngIf",!t.value.locked),e.xp6(3),e.Oqu(t.value.name),e.xp6(4),e.Q6J("ngIf",t.value.locked)}}function W(s,m){if(1&s&&(e.TgZ(0,"table",57)(1,"thead")(2,"tr",58),e._UZ(3,"th"),e.TgZ(4,"th"),e._uU(5,"Permission"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Lock"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Allow Override"),e.qZA()()(),e.TgZ(10,"tbody"),e.YNc(11,z,11,5,"tr",59),e.qZA()()),2&s){const t=e.oxw().index,n=e.oxw(2).index,p=e.oxw();e.xp6(11),e.Q6J("ngForOf",p.permissionNested(n,t))}}function V(s,m){1&s&&(e.TgZ(0,"ngb-accordion",53,54)(2,"ngb-panel",55),e.YNc(3,G,4,1,"ng-template",50),e.YNc(4,W,12,1,"ng-template",56),e.qZA()()),2&s&&e.Q6J("formGroupName",m.index)}function $(s,m){if(1&s&&e.YNc(0,V,5,1,"ngb-accordion",52),2&s){const t=e.oxw().index,n=e.oxw();e.Q6J("ngForOf",n.sectionNested(t))}}function j(s,m){if(1&s&&(e.TgZ(0,"ngb-panel",49),e.YNc(1,J,5,1,"ng-template",50),e.YNc(2,$,1,1,"ng-template",51),e.qZA()),2&s){const t=m.index,n=e.oxw();e.Q6J("formGroupName",t)("disabled",n.ngpanelDisabled)}}const K=function(s,m){return{"col-11":s,"col-12":m}},q=[{path:"",component:(()=>{class s{constructor(t,n,p,r,u,_,f,A,C,I,oe){this.router=t,this.rolesUserServ=n,this.route=p,this.alertService=r,this.businessGroupDropdownService=u,this._ngZone=_,this.fb=f,this.globalRoutes=A,this.searchString=C,this.addressFormService=I,this.contactPersonFormService=oe,this.isTypeSpecific=!1,this.rolesTemplates=new h,this.sectionPermissionObj=new P,this.sectionPermissions=new i,this.submitted=!1,this.formData=void 0,this.roleTemplate={id:"",name:"",description:""},this.finalArray=[],this.isSaveButton=!1,this.inEdit=!1,this.ngpanelDisabled=!1}ngOnInit(){var t=this;return(0,b.Z)(function*(){yield t.initForm(t.formData),t.getRolePermissions(),t.getRoleTemplateID(),t.bussinesGroupList(),t.enableAndDisableInputs(),t.manageRoleTemplateUrl=t.globalRoutes.getSettingsRoleManageRoutes()[0].url,t.roleTemplateName="Add Role Template"})()}initForm(t){var n=this;return(0,b.Z)(function*(){t=t||{},n.roleTemplateForm=n.fb.group({name:["",[l.kI.required,l.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],description:[""],businessGroups:[""],isRestrictedTemplate:["",l.kI.required],type:["",l.kI.required],permissions:n.fb.array([])})})()}get f(){return this.roleTemplateForm.controls}get moduleNested(){return this.roleTemplateForm.get("permissions").controls}sectionNested(t){return this.moduleNested[t].get("sections").controls}permissionNested(t,n){return this.moduleNested[t].get("sections").controls[n].get("permissions").controls}getRoleTemplateID(){this.route.queryParams.subscribe(t=>{t._id&&(this.getRolesID=t._id,this.inEdit=!0,this.roleTemplateDetail(this.getRolesID))})}moduleArray(){return this.roleTemplateForm.get("permissions")}newModule(){return this.roleModuleNestedForm=this.fb.group({module:new l.NI,sections:this.fb.array([])})}sectionsArray(){return this.roleModuleNestedForm.get("sections")}newSections(){return this.roleNestedForm=this.fb.group({section:new l.NI,permissions:this.fb.array([])})}permissionArray(){return this.roleNestedForm.get("permissions")}newPermissions(){return this.fb.group({name:new l.NI,enabled:new l.NI(!1),locked:new l.NI(!1),allowOverride:new l.NI(!1),attrs:{}})}saveRoleTemplate(){this.submitted=!0,this.roleTemplateForm.value.isRestrictedTemplate=JSON.parse(this.roleTemplateForm.value.isRestrictedTemplate),!this.roleTemplateForm.invalid&&(this.roleTemplateForm.value.isRestrictedTemplate=JSON.parse(this.roleTemplateForm.value.isRestrictedTemplate),this.roleTemplateForm.value.permissions.map(t=>{delete t.roles}),(""==this.roleTemplateForm.value.businessGroups||null==this.roleTemplateForm.value.businessGroups||null==this.roleTemplateForm.value.businessGroups)&&(this.roleTemplateForm.value.businessGroups=[]),console.log(this.roleTemplateForm.value),this.getRolesID?this.editRoleTemplateForm():this.addRoleTemplateForm())}addRoleTemplateForm(){this.alertService.conformAlert("Are you sure?","You want to update a role template").then(t=>{t.value&&this.rolesUserServ.createRoleTemplate(this.roleTemplateForm.value).subscribe(n=>{this.alertService.success("Success","Role Template has been created successfully"),this.router.navigate(["/dashboard/settings/role-management/manage-role-template"])},n=>{console.log(n)})})}editRoleTemplateForm(){const t=this.roleTemplateForm.value;this.alertService.conformAlert("Are you sure?","You want to update a role template").then(n=>{n.value&&this.rolesUserServ.updateRoleTemplate(t,this.getRolesID).subscribe(p=>{this.alertService.success("Success","Role Template has been updated successfully"),this.router.navigate(["/dashboard/settings/role-management/manage-role-template"])},p=>{console.log(p)})})}roleTemplateDetail(t){this._ngZone.run(()=>{setTimeout(()=>{this.rolesUserServ.singleRoleTemplate(t).subscribe(n=>{this.getRoleTemplateType=n.type,this.roleTemplateName=n.name,this.rolesUserServ.setRoleTemplateName(n.name),this.setPermissionWithTemplateId(n),this.inEdit="VALID"==this.roleTemplateForm.status})},500)})}getRolePermissions(){this.rolesUserServ.getRoleTemplateMeta().subscribe(t=>{localStorage.removeItem("permissions"),this.allRolePermissionsMeta=t,localStorage.setItem("permissions",JSON.stringify(t)),this.getAllPermissions(this.allRolePermissionsMeta)})}bussinesGroupList(){this.businessGroupDropdownService.getBusinessGroups().subscribe(t=>{console.log(t),t&&t.length>0&&(this.businessGroups=t)})}roleTypeValue(t){console.log(t),"specific"===t?this.isTypeSpecific=!0:(this.isTypeSpecific=!1,this.roleTemplateForm.patchValue({businessGroups:""}))}searchPermission(t){let n=t.target.value,p=localStorage.getItem("permissions"),r=JSON.parse(p);console.log(r),n.length<3?2==n.length&&this.setSearchPermissions(r):(r.forEach(this.getRolesID?(u,_)=>{u.sections.forEach((f,A)=>{let C=f.permissions.filter(I=>I.name.toString().toLowerCase().includes(n.toLowerCase()));f.permissions=C,console.log(f.permissions),0==C.length&&delete u.sections[A],u.sections.length-1==A&&(r[_].sections[0]?console.log(r[_].sections):delete r[_])})}:(u,_)=>{u.permissions.forEach((f,A)=>{let C=f.permissions.filter(I=>I.name.toString().toLowerCase().includes(n.toLowerCase()));f.permissions=C,0==C.length&&delete u.permissions[A],u.permissions.length-1==A&&(r[_].permissions[0]?console.log(r[_].permissions):delete r[_])})}),console.log(r),this.setSearchPermissions(r))}setSearchPermissions(t){this.roleTemplateForm.reset(this.roleTemplateForm.value),this.moduleArray().clear(),this.sectionsArray().clear(),this.permissionArray().clear(),this.getRolesID?this.getAllPermissionsEditTemplateRole(t):this.getAllPermissionsWithOutTemplatID(t)}getAllPermissions(t){this.getRolesID||this.getAllPermissionsWithOutTemplatID(t)}getAllPermissionsWithOutTemplatID(t){t.forEach(n=>{const p=this.newModule();n.permissions.forEach(r=>{const u=this.newSections();r.permissions.forEach(_=>{const f=this.newPermissions();f.patchValue({name:_.name,enabled:!1,locked:!1,allowOverride:!1}),this.permissionArray().push(f)}),u.patchValue({section:r.section}),this.sectionsArray().push(u)}),p.patchValue({module:n.name}),this.moduleArray().push(p)})}getAllPermissionsEditTemplateRole(t){t.forEach(n=>{const p=this.newModule();n.sections.forEach(r=>{console.log(r,r.section);const u=this.newSections();r.permissions.forEach(_=>{const f=this.newPermissions();f.patchValue({name:_.name,enabled:_.enabled,locked:_.locked,allowOverride:_.allowOverride}),this.permissionArray().push(f)}),u.patchValue({section:r.section}),this.sectionsArray().push(u)}),p.patchValue({module:n.module}),this.moduleArray().push(p)}),console.log(this.roleTemplateForm.value)}getAllPermissionsTemplateID(t,n){localStorage.removeItem("permissions"),t.forEach(p=>{const r=this.newModule();p.permissions.forEach(u=>{const _=this.newSections();u.permissions.forEach(f=>{let A=this.newPermissions();const C=n.find(I=>I.name==f.name);A.patchValue(C?{name:C.name,enabled:C.enabled,locked:C.locked,allowOverride:C.allowOverride}:{name:f.name,enabled:!1,locked:!1,allowOverride:!1}),this.permissionArray().push(A)}),_.patchValue({section:u.section}),this.sectionsArray().push(_)}),r.patchValue({module:p.name}),this.moduleArray().push(r)}),localStorage.setItem("permissions",JSON.stringify(this.roleTemplateForm.value.permissions))}setPermissionWithTemplateId(t){var n;let p=localStorage.getItem("permissions"),r=JSON.parse(p),u=[];t.permissions.forEach(_=>{_.sections.forEach(f=>{f.permissions.forEach(A=>{u.push(A)})})}),this.getAllPermissionsTemplateID(r,u),this.roleTemplateForm.patchValue({name:t.name,description:t.description,businessGroups:t.businessGroups,type:t.type,isRestrictedTemplate:t.isRestrictedTemplate.toString()}),this.isTypeSpecific=0!=(null===(n=this.roleTemplateForm)||void 0===n?void 0:n.value.businessGroups.length)}checkLockedValue(t,n){console.log(t.target.checked),0==t.target.checked&&(n.controls.allowOverride.value=!1)}changeAdmin(){this.roleTemplateForm.value.permissions[0].sections.map(t=>{t.permissions.map(n=>{("templateBasedRestrictedRoles"==t.section||"templateBasedUnRestrictedRoles"==t.section)&&(n.enabled=!0,n.locked=!0)})}),this.roleTemplateForm.patchValue(this.roleTemplateForm.value),console.log(this.roleTemplateForm.value)}changeNonAdmin(){this.roleTemplateForm.value.permissions[0].sections.map(t=>{t.permissions.map(n=>{"templateBasedRestrictedRoles"==t.section?(n.enabled=!1,n.locked=!1):"templateBasedUnRestrictedRoles"==t.section&&("CAN_RETRIEVE_TEMPLATE_BASED_UNRESTRICTED_ROLE"==n.name?n.enabled=!0:(n.enabled=!1,n.locked=!1))})}),this.roleTemplateForm.patchValue(this.roleTemplateForm.value),console.log(this.roleTemplateForm.value)}checkPermission(){let t=this.globalRoutes.getSettingsRoleManageRoutes(),n=this.searchString.transform("title",t,"Manage Role Templates");this.roleTemplateEdit=this.searchString.transform("title",n[0].child,"Edit"),this.roleTemplateEdit[0].isEnabled?(this.isSaveButton=!0,this.enableAndDisableInputs()):this.roleTemplateEdit.isEnable||(this.isSaveButton=!1)}enableAndDisableInputs(){var t,n;console.log("inEdit",this.inEdit),this.inEdit&&(this.isSaveButton?this.isSaveButton&&(null===(n=this.roleTemplateForm)||void 0===n||n.enable(),this.FormDisable=!1,this.ngpanelDisabled=!1):(null===(t=this.roleTemplateForm)||void 0===t||t.disable(),this.FormDisable=!0,this.ngpanelDisabled=!0),this.addressFormService.setDisabledOrEnabled(this.FormDisable),this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(v.F0),e.Y36(y.C),e.Y36(v.gz),e.Y36(N.c),e.Y36(O.Y),e.Y36(e.R0b),e.Y36(l.qu),e.Y36(d.o),e.Y36(T.E),e.Y36(c.W),e.Y36(g.V))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-add-rol-template"]],inputs:{formData:"formData"},decls:60,vars:17,consts:[[1,"row"],[1,"col-2"],[1,"settings-row","pointer",3,"routerLink"],[1,"bi","bi-arrow-left-circle",2,"font-size","2rem","cursor","pointer"],[1,""],[1,"ul",2,"margin-top","27px"],[1,"active"],[1,"col-10","component-view"],["autocomplete","off",3,"formGroup"],["f","ngForm"],[1,"row","sticky",2,"width","101%"],[3,"ngClass"],[1,"col"],[3,"cancelBtn","saveBtn","onSave"],["class","col-1 d-flex justify-content-center align-items-start","style","background-color: transparent;",4,"ngIf"],["id","main",1,"section"],["class","heading",4,"ngIf"],[1,"row","formrow"],[1,"col-6"],[1,"label-input-gap"],["type","text","formControlName","name",1,"form-control","mandatory-field"],["type","text","formControlName","description",1,"form-control"],[1,"col-3"],["placeholder","Select","formControlName","type",1,"mandatory-field",3,"change"],["value","public"],["value","private",4,"ngIf"],["value","specific",4,"ngIf"],["class","col-3",4,"ngIf"],[1,"col-md-6"],[1,"mainformset"],["role","group","aria-label","Basic radio toggle button group",1,"btn-group",2,"margin-top","7px"],[1,"subscriber-divs",2,"margin-right","12px !important"],["formControlName","isRestrictedTemplate","type","radio","name","isRestrictedTemplate","id","btnradio1","value","true",1,"form-check-input",3,"change"],["for","btnradio1",1,"form-check-label"],["formControlName","isRestrictedTemplate","type","radio","name","isRestrictedTemplate","id","btnradio2","value","false",1,"form-check-input",3,"change"],["for","btnradio2",1,"form-check-label"],["type","text","placeholder","Search permissions ...",1,"form-control",3,"disabled","input"],[1,"col-12",2,"margin-top","6px"],["activeIds","ngb-panel-0","formArrayName","permissions"],["acc","ngbAccordion"],["cardClass","onboarding",3,"formGroupName","disabled",4,"ngFor","ngForOf"],[1,"col-1","d-flex","justify-content-center","align-items-start",2,"background-color","transparent"],["src","/assets/icons/Edit.svg","alt","",2,"width","37px","height","37px","cursor","pointer",3,"click"],[1,"heading"],["value","private"],["value","specific"],["placeholder","Select","formControlName","businessGroups",3,"multiple"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["cardClass","onboarding",3,"formGroupName","disabled"],["ngbPanelTitle",""],["ngbPanelContent","","formArrayName","sections"],["activeIds","ngb-panel-0",3,"formGroupName",4,"ngFor","ngForOf"],["activeIds","ngb-panel-0",3,"formGroupName"],["accOnboarding","ngbAccordion"],["cardClass","businessg"],["ngbPanelContent","","formArrayName","permissions"],[1,"table"],[2,"background-color","#f1f2f2","height","30px"],[3,"formGroupName",4,"ngFor","ngForOf"],[3,"formGroupName"],["type","checkbox","formControlName","enabled",4,"ngIf"],["type","hidden","formControlName","name"],["type","checkbox","formControlName","locked",3,"change"],["type","checkbox","formControlName","allowOverride",4,"ngIf"],["type","checkbox","formControlName","enabled"],["type","checkbox","formControlName","allowOverride"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e.TgZ(4,"p",4),e._uU(5,"Manage Role Templates"),e.qZA()(),e.TgZ(6,"ul",5)(7,"div")(8,"li",6),e._uU(9),e.qZA()()()(),e.TgZ(10,"div",7)(11,"form",8,9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"app-nav-bar-pills",13),e.NdJ("onSave",function(){return n.saveRoleTemplate()}),e.qZA()()(),e.YNc(17,E,2,0,"div",14),e.qZA(),e.TgZ(18,"div",15),e.YNc(19,M,2,0,"h6",16),e.YNc(20,S,2,0,"h6",16),e.TgZ(21,"div",17)(22,"div",18)(23,"label",19),e._uU(24,"Name of Role Template"),e.qZA(),e._UZ(25,"input",20),e.qZA(),e.TgZ(26,"div",18)(27,"label",19),e._uU(28,"Description"),e.qZA(),e._UZ(29,"input",21),e.qZA()(),e.TgZ(30,"div",17)(31,"div",22)(32,"label",19),e._uU(33,"Type"),e.qZA(),e.TgZ(34,"ng-select",23),e.NdJ("change",function(r){return n.roleTypeValue(r)}),e.TgZ(35,"ng-option",24),e._uU(36,"Public"),e.qZA(),e.YNc(37,k,2,0,"ng-option",25),e.YNc(38,D,2,0,"ng-option",26),e.qZA()(),e.YNc(39,U,5,2,"div",27),e.TgZ(40,"div",28)(41,"div",29),e._UZ(42,"p"),e.TgZ(43,"div",30)(44,"div",31)(45,"input",32),e.NdJ("change",function(){return n.changeAdmin()}),e.qZA(),e.TgZ(46,"label",33),e._uU(47,"Admin"),e.qZA()(),e.TgZ(48,"div",31)(49,"input",34),e.NdJ("change",function(){return n.changeNonAdmin()}),e.qZA(),e.TgZ(50,"label",35),e._uU(51,"Non-Admin"),e.qZA()()()()()(),e.TgZ(52,"div",17)(53,"div",22)(54,"input",36),e.NdJ("input",function(r){return n.searchPermission(r)}),e.qZA()()(),e.TgZ(55,"div",17)(56,"div",37)(57,"ngb-accordion",38,39),e.YNc(59,j,3,2,"ngb-panel",40),e.qZA()()()()()()()),2&t&&(e.xp6(2),e.Q6J("routerLink",n.manageRoleTemplateUrl),e.xp6(7),e.hij(" ",n.roleTemplateName," "),e.xp6(2),e.Q6J("formGroup",n.roleTemplateForm),e.xp6(3),e.Q6J("ngClass",e.WLB(14,K,!n.isSaveButton,!n.inEdit)),e.xp6(2),e.Q6J("cancelBtn",n.isSaveButton||!n.inEdit)("saveBtn",n.isSaveButton||!n.inEdit),e.xp6(1),e.Q6J("ngIf",!n.isSaveButton&&n.inEdit),e.xp6(2),e.Q6J("ngIf","Add Role Template"===n.roleTemplateName),e.xp6(1),e.Q6J("ngIf","Add Role Template"!==n.roleTemplateName),e.xp6(17),e.Q6J("ngIf","private"===n.getRoleTemplateType||""==n.getRoleTemplateType),e.xp6(1),e.Q6J("ngIf","public"!=n.getRoleTemplateType||""==n.getRoleTemplateType),e.xp6(1),e.Q6J("ngIf",n.isTypeSpecific),e.xp6(15),e.Q6J("disabled",n.ngpanelDisabled),e.xp6(5),e.Q6J("ngForOf",n.moduleNested))},directives:[v.rH,l._Y,l.JL,l.sg,o.mk,Z.B,o.O5,l.Fj,l.JJ,l.u,B.w9,B.jq,o.sg,l._,x.gY,l.CE,x.Gk,l.x0,x.Cu,x.gW,l.Wl],styles:[".accordion-button[_ngcontent-%COMP%]:not(.collapsed){color:#0c63e4;background-color:#000;box-shadow:inset 0 -1px #00000021}.accordion-button[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212922;text-align:left;background-color:#000;border:0;border-radius:0;overflow-anchor:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease}#main[_ngcontent-%COMP%]{height:calc(100vh - 310px);overflow:auto;padding-bottom:5rem}#main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-bottom:5px}input[type=text].form-control.ng-invalid.invalid-errors[_ngcontent-%COMP%]{border:1px solid red!important}.save[_ngcontent-%COMP%]{border:none;background:transparent}.save[_ngcontent-%COMP%]:disabled{opacity:.5}.formrow[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{opacity:.5}"]}),s})()}];let H=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[v.Bz.forChild(q)],v.Bz]}),s})();var X=a(884),ee=a(8076);let te=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[o.ez,H,x.IJ,B.A0,l.u5,l.UX,X.c,ee.F]]}),s})()},4524:(F,R,a)=>{a.d(R,{W:()=>l});var o=a(2382),v=a(1135),b=a(5e3);let l=(()=>{class h{constructor(i){this.fb=i,this.isDisabled$=new v.X(this.isDisabled)}getAddressForm(i,e){return this.fb.group({addressLine1:[(null==(i=i||{})?void 0:i.addressLine1)||"",(e=e||{}).addressLine1&&[o.kI.required,o.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],addressLine2:[(null==i?void 0:i.addressLine2)||"",e.addressLine2&&o.kI.required],city:[(null==i?void 0:i.city)||"",e.city&&o.kI.required],state:[(null==i?void 0:i.state)||"",e.state&&o.kI.required],country:[(null==i?void 0:i.country)||"",e.country&&o.kI.required],zipCode:[(null==i?void 0:i.zipCode)||"",e.zipCode&&o.kI.required]})}setDisabledOrEnabled(i){this.isDisabled=i,this.isDisabled$.next(this.isDisabled)}getDisabledOrEnabled(){return this.isDisabled$}}return h.\u0275fac=function(i){return new(i||h)(b.LFG(o.qu))},h.\u0275prov=b.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},9516:(F,R,a)=>{a.d(R,{V:()=>l});var o=a(2382),v=a(1135),b=a(5e3);let l=(()=>{class h{constructor(i){this.fb=i,this.isDisabled$=new v.X(this.isDisabled)}getContactPersonForm(i,e){var y,N,O,d,T,c;return this.fb.group({designation:[(null==(i=i||{})?void 0:i.designation)||"",(e=e||{}).designation&&o.kI.required],title:[(null==i?void 0:i.title)||"",(null==e?void 0:e.title)&&o.kI.required],firstName:[(null==i?void 0:i.firstName)||"",(null==e?void 0:e.firstName)&&[o.kI.required,o.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],lastName:[(null==i?void 0:i.lastName)||"",(null==e?void 0:e.lastName)&&[o.kI.required,o.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],email:[(null==i?void 0:i.email)||"",(null==e?void 0:e.email)&&[o.kI.required,o.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],phone:this.fb.group({type:[(null===(y=null==i?void 0:i.phone)||void 0===y?void 0:y.type)||"",(null===(N=null==e?void 0:e.phone)||void 0===N?void 0:N.type)&&o.kI.required],countryCode:[(null===(O=null==i?void 0:i.phone)||void 0===O?void 0:O.countryCode)||"",(null===(d=null==e?void 0:e.phone)||void 0===d?void 0:d.countryCode)&&[o.kI.required,o.kI.pattern("^[0-9]*$")]],number:[(null===(T=null==i?void 0:i.phone)||void 0===T?void 0:T.number)||"",(null===(c=null==e?void 0:e.phone)||void 0===c?void 0:c.number)&&[o.kI.required,o.kI.pattern("^[0-9]*$")]]})})}setDisabledOrEnabled(i){this.isDisabled=i,this.isDisabled$.next(this.isDisabled)}getDisabledOrEnabled(){return this.isDisabled$}}return h.\u0275fac=function(i){return new(i||h)(b.LFG(o.qu))},h.\u0275prov=b.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);
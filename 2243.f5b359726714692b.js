"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2243],{1762:(N,R,r)=>{r.d(R,{B:()=>C});var n=r(5e3),e=r(4996),f=r(9808);const u=function(d){return{active:d}};function A(d,m){if(1&d){const _=n.EpF();n.TgZ(0,"a",7),n.NdJ("click",function(){const Z=n.CHM(_).$implicit;return n.oxw().scroll(Z)}),n._uU(1),n.qZA()}if(2&d){const _=m.$implicit,p=n.oxw();n.Q6J("ngClass",n.VKq(2,u,p.activeClass===_.id)),n.xp6(1),n.Oqu(_.title)}}function h(d,m){if(1&d){const _=n.EpF();n.TgZ(0,"button",8),n.NdJ("click",function(){return n.CHM(_),n.oxw().handleSaveBtnClicked()}),n._UZ(1,"img",9),n.qZA()}if(2&d){const _=n.oxw();n.Q6J("disabled",_.disableSaveBtn)}}function M(d,m){if(1&d){const _=n.EpF();n.TgZ(0,"button",10),n.NdJ("click",function(){return n.CHM(_),n.oxw().handleAddCancelClicked()}),n._UZ(1,"img",11),n.qZA()}}function a(d,m){if(1&d){const _=n.EpF();n.TgZ(0,"button",10),n.NdJ("click",function(){return n.CHM(_),n.oxw().handleSaveCancelClicked()}),n._UZ(1,"img",12),n.qZA()}}function g(d,m){1&d&&(n.TgZ(0,"button",13),n._UZ(1,"img",14),n.qZA())}function b(d,m){if(1&d){const _=n.EpF();n.TgZ(0,"button",10),n.NdJ("click",function(){n.CHM(_);const T=n.oxw();return T.editButtonURL(null==T.editButton?null:T.editButton.url)}),n._UZ(1,"img",15),n.qZA()}}let C=(()=>{class d{constructor(_){this.router=_,this.activeClass="init",this.mode="menu",this.saveBtn=!1,this.disableSaveBtn=!1,this.cancelBtn=!1,this.disableCancelBtn=!1,this.addBtn=!1,this.disableAddBtn=!1,this.onCancel=new n.vpe,this.onSave=new n.vpe,this.onAdd=new n.vpe,this.menuItems=[]}ngOnInit(){}ngAfterContentInit(){this.activeClass=0!=this.menuItems.length?this.menuItems[0].id:""}scroll(_){const p=document.getElementById(_.id);p&&p.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}handleSaveBtnClicked(){this.onSave.emit()}handleSaveCancelClicked(){this.onCancel.emit()}handleAddCancelClicked(){this.onAdd.emit()}editButtonURL(_){this.router.navigate([_])}}return d.\u0275fac=function(_){return new(_||d)(n.Y36(e.F0))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-nav-bar-pills"]],inputs:{activeClass:"activeClass",mode:"mode",saveBtn:"saveBtn",disableSaveBtn:"disableSaveBtn",cancelBtn:"cancelBtn",disableCancelBtn:"disableCancelBtn",addBtn:"addBtn",editButton:"editButton",disableAddBtn:"disableAddBtn",menuItems:"menuItems"},outputs:{onCancel:"onCancel",onSave:"onSave",onAdd:"onAdd"},decls:10,vars:6,consts:[["id","navbar-pills"],[1,"left",2,"margin-left","0px"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"right"],["class","save",3,"disabled","click",4,"ngIf"],["class","cancel",3,"click",4,"ngIf"],["class","save",4,"ngIf"],[3,"ngClass","click"],[1,"save",3,"disabled","click"],["src","/assets/icons/save.svg","alt",""],[1,"cancel",3,"click"],["src","/assets/icons/add.svg","alt",""],["src","/assets/icons/cancel.svg","alt",""],[1,"save"],["src","/assets/icons/Add-Patient-Wizard-Green.svg","alt",""],["src","/assets/icons/Add-Patient-Wizard-Red.svg","alt",""]],template:function(_,p){1&_&&(n.TgZ(0,"div")(1,"div",0)(2,"div",1),n.YNc(3,A,2,4,"a",2),n.qZA(),n.TgZ(4,"div",3),n.YNc(5,h,2,1,"button",4),n.YNc(6,M,2,0,"button",5),n.YNc(7,a,2,0,"button",5),n.YNc(8,g,2,0,"button",6),n.YNc(9,b,2,0,"button",5),n.qZA()()()),2&_&&(n.xp6(3),n.Q6J("ngForOf",p.menuItems),n.xp6(2),n.Q6J("ngIf",p.saveBtn),n.xp6(1),n.Q6J("ngIf",p.addBtn),n.xp6(1),n.Q6J("ngIf",p.cancelBtn),n.xp6(1),n.Q6J("ngIf",p.disableSaveBtn&&(null==p.editButton?null:p.editButton.isButton)),n.xp6(1),n.Q6J("ngIf",!p.disableSaveBtn&&(null==p.editButton?null:p.editButton.isButton)))},directives:[f.sg,f.mk,f.O5],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}"]}),d})()},8076:(N,R,r)=>{r.d(R,{F:()=>f});var n=r(9808),e=r(5e3);let f=(()=>{class u{}return u.\u0275fac=function(h){return new(h||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[[n.ez]]}),u})()},5804:(N,R,r)=>{r.d(R,{Z:()=>te,j:()=>y});var n=r(2382),e=r(5e3),f=r(4996),u=r(4001),A=r(5730),h=r(1228),M=r(7802),a=r(4748),g=r(9196),b=r(1762),C=r(9808),d=r(4376),m=r(9759);const _=["legelEntity"],p=["location"],T=["practice"];function Z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",19)(1,"label",15),e._uU(2,"Create using role template?"),e.qZA(),e.TgZ(3,"div",20)(4,"div",21)(5,"input",22),e.NdJ("ngModelChange",function(l){return e.CHM(t),e.oxw().createRoleTemplete=l})("change",function(l){return e.CHM(t),e.oxw().onSelectionChanged(l)}),e.qZA(),e.TgZ(6,"label",23),e._uU(7,"Yes"),e.qZA()(),e.TgZ(8,"div",21)(9,"input",24),e.NdJ("ngModelChange",function(l){return e.CHM(t),e.oxw().createRoleTemplete=l})("change",function(l){return e.CHM(t),e.oxw().onSelectionChanged(l)}),e.qZA(),e.TgZ(10,"label",25),e._uU(11,"No"),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(5),e.Q6J("ngModel",t.createRoleTemplete),e.xp6(4),e.Q6J("ngModel",t.createRoleTemplete)}}function I(i,s){1&i&&(e.TgZ(0,"span",31),e._uU(1," (Non-Admin)"),e.qZA())}function L(i,s){1&i&&(e.TgZ(0,"span",32),e._uU(1," (Admin)"),e.qZA())}function k(i,s){if(1&i&&(e.TgZ(0,"ng-option",28),e._uU(1),e.YNc(2,I,2,0,"span",29),e.YNc(3,L,2,0,"span",30),e.qZA()),2&i){const t=s.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",!(null!=t&&t.isRestrictedTemplate)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.isRestrictedTemplate)}}function S(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",19)(1,"label",15),e._uU(2,"Role Template"),e.qZA(),e.TgZ(3,"ng-select",26),e.NdJ("change",function(l){return e.CHM(t),e.oxw().selectRoleTemplateChange(l)}),e.YNc(4,k,4,4,"ng-option",27),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(3),e.s9C("placeholder",t.roleTemplatePlaceholder),e.xp6(1),e.Q6J("ngForOf",t.roleTemplateList)}}function E(i,s){if(1&i&&(e.TgZ(0,"div")(1,"p")(2,"strong"),e._uU(3),e.qZA()()()),2&i){const t=e.oxw().$implicit;e.xp6(3),e.Oqu(t.value.module)}}function w(i,s){if(1&i&&(e.TgZ(0,"p")(1,"strong"),e._uU(2),e.qZA()()),2&i){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.value.section)}}function U(i,s){if(1&i&&e._UZ(0,"input",58),2&i){const t=e.oxw().$implicit;e.uIk("disabled",t.value.locked)}}function F(i,s){1&i&&e._UZ(0,"input",58)}function D(i,s){if(1&i&&(e._UZ(0,"input",62),e.TgZ(1,"span",63),e._uU(2),e.qZA()),2&i){const t=s.item,o=s.item$,l=s.index;e.MGl("id","item-",l,"")("name","item-",l,""),e.Q6J("checked",o.selected),e.xp6(1),e.MGl("id","item-",l,""),e.xp6(1),e.Oqu(t.name)}}function J(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"ng-select",59,60),e.NdJ("change",function(){return e.CHM(t),e.oxw(7).refLegelEntity.itemsList._selectionModel._selected=[]}),e.YNc(4,D,3,5,"ng-template",61),e.qZA()()()}if(2&i){const t=e.oxw(7);e.xp6(2),e.Q6J("items",t.legelEntityList)("multiple",!0)}}function Y(i,s){if(1&i&&(e._UZ(0,"input",62),e.TgZ(1,"span",66),e._uU(2),e.qZA()),2&i){const t=s.item,o=s.item$,l=s.index;e.MGl("id","item-",l,"")("name","item-",l,""),e.Q6J("checked",o.selected),e.xp6(2),e.Oqu(t.name)}}function G(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"ng-select",64,65),e.NdJ("change",function(){return e.CHM(t),e.oxw(7).refLocation.itemsList._selectionModel._selected=[]}),e.YNc(4,Y,3,4,"ng-template",61),e.qZA()()()}if(2&i){const t=e.oxw(7);e.xp6(2),e.Q6J("items",t.locationList)("multiple",!0)}}function Q(i,s){1&i&&e._UZ(0,"img",67)}function q(i,s){1&i&&e._UZ(0,"img",68)}function $(i,s){1&i&&e._UZ(0,"br")}function W(i,s){if(1&i&&(e._UZ(0,"input",62),e.TgZ(1,"span",66),e._uU(2),e.qZA()),2&i){const t=s.item,o=s.item$,l=s.index;e.MGl("id","item-",l,"")("name","item-",l,""),e.Q6J("checked",o.selected),e.xp6(2),e.Oqu(t.name)}}function K(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"ng-select",69,70),e.NdJ("change",function(){return e.CHM(t),e.oxw(7).refPractice.itemsList._selectionModel._selected=[]}),e.YNc(4,W,3,4,"ng-template",61),e.qZA()()()}if(2&i){const t=e.oxw(7);e.xp6(2),e.Q6J("items",t.practiceList)("multiple",!0)}}function H(i,s){if(1&i&&(e.TgZ(0,"tr",52)(1,"td")(2,"tr")(3,"td"),e.YNc(4,U,1,1,"input",53),e.YNc(5,F,1,0,"input",53),e.qZA()(),e.YNc(6,J,5,2,"tr",54),e.qZA(),e.TgZ(7,"td")(8,"tr")(9,"td"),e._UZ(10,"input",55),e._uU(11),e.qZA()(),e._UZ(12,"br"),e.YNc(13,G,5,2,"tr",54),e.qZA(),e.TgZ(14,"td")(15,"tr")(16,"td"),e.YNc(17,Q,1,0,"img",56),e.YNc(18,q,1,0,"img",57),e.qZA()(),e._UZ(19,"br"),e.YNc(20,$,1,0,"br",54),e.YNc(21,K,5,2,"tr",54),e.qZA()()),2&i){const t=s.$implicit,o=s.index,l=e.oxw(2).$implicit;e.Q6J("formGroupName",o),e.xp6(4),e.Q6J("ngIf",t.value.locked),e.xp6(1),e.Q6J("ngIf",!t.value.locked),e.xp6(1),e.Q6J("ngIf",l.value.displayShowAdvanced),e.xp6(5),e.hij("",t.value.name," "),e.xp6(2),e.Q6J("ngIf",l.value.displayShowAdvanced),e.xp6(4),e.Q6J("ngIf",t.value.locked&&t.value.allowOverride),e.xp6(1),e.Q6J("ngIf",t.value.locked&&!t.value.allowOverride),e.xp6(2),e.Q6J("ngIf",!t.value.locked),e.xp6(1),e.Q6J("ngIf",l.value.displayShowAdvanced)}}function z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",45)(1,"div",46)(2,"input",47),e.NdJ("change",function(){e.CHM(t);const l=e.oxw().$implicit;return l.value.displayShowAdvanced=!l.value.displayShowAdvanced}),e.qZA(),e.TgZ(3,"label",48),e._uU(4," Show Advanced "),e.qZA()()(),e.TgZ(5,"table",49)(6,"thead")(7,"tr",50),e._UZ(8,"th"),e.TgZ(9,"th"),e._uU(10,"Permission"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Lock"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Allow Override"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,H,22,10,"tr",51),e.qZA()()}if(2&i){const t=e.oxw().index,o=e.oxw(2).index,l=e.oxw(2);e.Q6J("align","end"),e.xp6(16),e.Q6J("ngForOf",l.permissionNested(o,t))}}function X(i,s){1&i&&(e.TgZ(0,"ngb-accordion",41,42)(2,"ngb-panel",43),e.YNc(3,w,3,1,"ng-template",38),e.YNc(4,z,17,2,"ng-template",44),e.qZA()()),2&i&&e.Q6J("formGroupName",s.index)}function j(i,s){if(1&i&&e.YNc(0,X,5,1,"ngb-accordion",40),2&i){const t=e.oxw().index,o=e.oxw(2);e.Q6J("ngForOf",o.sectionNested(t))}}function V(i,s){1&i&&(e.TgZ(0,"ngb-panel",37),e.YNc(1,E,4,1,"ng-template",38),e.YNc(2,j,1,1,"ng-template",39),e.qZA()),2&i&&e.Q6J("formGroupName",s.index)}function ee(i,s){if(1&i&&(e.TgZ(0,"div",12)(1,"div",33)(2,"ngb-accordion",34,35),e.YNc(4,V,3,1,"ngb-panel",36),e.qZA()()()),2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.moduleNested)}}class y{constructor(){this.permissions=[],this.businessGroups=[]}}let te=(()=>{class i{constructor(t,o,l,c,v,x,P,O){this.router=t,this.roleService=o,this.alertService=l,this.fb=c,this.authService=v,this.businessGroupDropdownService=x,this.businessGroupService=P,this.routes=O,this.formData=void 0,this.roleTemplateList=[],this.roleTemplate=new y,this.legalEntityLst=[],this.legelEntityList=[],this.locationList=[],this.practiceList=[],this.displayCreateRoleYesNoOption=!1,this.permissionsList=[],this.addRoleTitle="Create Role",this.roleTemplatePlaceholder="Role template name"}ngOnInit(){this.createRoleTemplete="yes",this.initForm(this.formData),this.getLegelEntityList(),this.getLocationList(),this.getPracticeList(),this.businessGroupDropdownService.getBusinessGroups().subscribe(t=>{t.length&&(this.bgName=t[0]._id,console.log(t))}),this.getSelectedBusinessGroupId(),this.urlManageRole=this.routes.getSettingsRoleManageRoutes()[1].url}initForm(t){this.Form=this.fb.group({roletemplate:[(null==(t=t||{})?void 0:t.roletemplate)||"yes"],name:[(null==t?void 0:t.fName)||"",[n.kI.required,n.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],description:[(null==t?void 0:t.lName)||"",[n.kI.required,n.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],permissions:this.fb.array([])})}get moduleNested(){return this.Form.get("permissions").controls}sectionNested(t){return this.moduleNested[t].get("sections").controls}permissionNested(t,o){return this.moduleNested[t].get("sections").controls[o].get("permissions").controls}moduleArray(){return this.Form.get("permissions")}newModule(){return this.roleModuleNestedForm=this.fb.group({module:new n.NI,sections:this.fb.array([])})}sectionsArray(){return this.roleModuleNestedForm.get("sections")}newSections(){return this.roleNestedForm=this.fb.group({section:new n.NI,permissions:this.fb.array([])})}permissionArray(){return this.roleNestedForm.get("permissions")}newPermissions(){return this.fb.group({name:new n.NI,enabled:new n.NI(!1),locked:new n.NI(!1),allowOverride:new n.NI(!1),attrs:{}})}getLegelEntityList(){this.roleService.getLegelEntityList().subscribe(t=>{console.log(t),this.legelEntityList=t},t=>{console.log(t)})}getLocationList(){this.roleService.getLocationList().subscribe(t=>{console.log(t),this.locationList=t},t=>{console.log(t)})}getPracticeList(){this.roleService.getPracticeList().subscribe(t=>{console.log(t),this.practiceList=t},t=>{console.log(t)})}save(t){this.displayCreateRoleYesNoOption?"yes"==this.createRoleTemplete?this.addRoleWithTemplate(t):"no"==this.createRoleTemplete&&this.saveRoleFromScratch(t):this.addRoleWithTemplate(t)}saveRoleFromScratch(t){t.permissions.map(l=>{delete l.roles,delete l.displayShowAdvanced});let o={name:t.name,description:t.description,permissions:t.permissions};console.log(o),this.alertService.conformAlert("Are you sure?","You want to save a role").then(l=>{l.value&&this.roleService.saveRoleFromRoleScratch(o).subscribe(c=>{this.alertService.success("Success","Role has been save successfully"),this.router.navigate(["/dashboard/settings/role-management/manage-role"])},c=>{console.log(c)})})}saveRoleFromTemplate(t){console.log(t,this.bgName);let o={name:t.name,description:t.description,roleTemplateId:this.roleTemplate._id};this.alertService.conformAlert("Are you sure?","You want to save a role").then(l=>{l.value&&this.roleService.saveRoleFromRoleTemplate(o,this.bgName,this.roleType).subscribe(c=>{this.alertService.success("Success","Role has been save successfully"),this.router.navigate(["/dashboard/settings/role-management/manage-role"])},c=>{console.log(c)})})}saveRoleFromTemplateBYBgId(t){console.log(t,this.bgName);let o={name:t.name,description:t.description,roleTemplateId:this.roleTemplate._id};this.alertService.conformAlert("Are you sure?","You want to save a role").then(l=>{l.value&&this.roleService.saveRoleFromRoleTemplate(o,this.bgName,this.roleType,this.orgId).subscribe(c=>{this.alertService.success("Success","Role has been save successfully"),this.router.navigate(["/dashboard/settings/role-management/manage-role"])},c=>{console.log(c)})})}cancel(){this.router.navigate(["/dashboard/settings/role-management/manage-role"])}getRoleList(){this.roleService.getRoleTemplateList().subscribe(t=>{this.roleTemplateList=t},t=>{console.log(t)})}selectRoleTemplateChange(t){let o=Object.assign({},t);this.roleType=t.type,this.roleTemplate=o,this.permissionsList=t.permissions,this.bgName=this.roleTemplate.businessGroups[0]}onSelectionChanged(t){"yes"==t.target.value?this.createRoleTemplete="yes":(this.createRoleTemplete="no",this.getPermissionList())}getPermissionList(){this.roleService.getPermissionList().subscribe(t=>{for(let o=0;o<t.length;o++){const l=this.newModule(),c=t[o].permissions;for(let v=0;v<c.length;v++){const x=this.newSections(),P=c[v].permissions;for(let O=0;O<P.length;O++){const B=this.newPermissions();B.patchValue({name:P[O].name,enabled:!1,locked:!1,allowOverride:!1,attrs:{}}),this.permissionArray().push(B)}x.patchValue({section:c[v].section,displayShowAdvanced:!1}),this.sectionsArray().push(x)}l.patchValue({module:t[o].name}),this.moduleArray().push(l)}this.permissionsList=t},t=>{console.log(t)})}getRoleListSpecific(){this.roleService.getSpecificRoleTemplateList(this.orgId).subscribe(t=>{this.roleService.getPublicRoleTemplateList().subscribe(o=>{this.roleTemplateList=t.concat(o)},o=>{console.log(o)})},t=>{console.log(t)})}getSelectedBusinessGroupId(){this.orgId=this.authService.getOrgId(),this.bgName=this.orgId;let t=localStorage.getItem("selected_business_group");console.log(t,this.orgId);let o=localStorage.getItem("permissionSet");o=JSON.parse(o),console.log(o),(null==o?void 0:o.__ISSU__)?(this.orgId=t,"intelliveer"!=this.orgId&&null!=t?(this.addRoleTitle="Create Role from Role Template",this.roleTemplatePlaceholder="Select role template",this.displayCreateRoleYesNoOption=!1,this.getRoleListSpecific()):(this.addRoleTitle="Create Role",this.roleTemplatePlaceholder="Role template name",this.displayCreateRoleYesNoOption=!0,this.getRoleList(),console.log("roles"))):(null==o?void 0:o.isBGAdmin)?(this.orgId=t,this.bgName=t,this.addRoleTitle="Create Role from Role Template",this.roleTemplatePlaceholder="Select role template",this.displayCreateRoleYesNoOption=!1,this.getRoleListSpecific()):(this.bgName=this.orgId,this.addRoleTitle="Create Role from Role Template",this.roleTemplatePlaceholder="Select role template",this.displayCreateRoleYesNoOption=!1,this.getRoleListSpecific())}addRoleWithTemplate(t){let o=localStorage.getItem("permissionSet");o=JSON.parse(o);let l=localStorage.getItem("selected_business_group");this.bgName=l,(null==o?void 0:o.__ISSU__)?"intelliveer"!=this.orgId&&null!=l?this.saveRoleFromTemplateBYBgId(t):this.saveRoleFromTemplate(t):(null==o?void 0:o.isBGAdmin)?(this.bgName=l,this.saveRoleFromTemplateBYBgId(t)):(this.bgName=this.orgId,this.saveRoleFromTemplateBYBgId(t))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.F0),e.Y36(u.N),e.Y36(A.c),e.Y36(n.qu),e.Y36(h.e),e.Y36(M.Y),e.Y36(a.Z),e.Y36(g.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-role"]],viewQuery:function(t,o){if(1&t&&(e.Gf(_,5),e.Gf(p,5),e.Gf(T,5)),2&t){let l;e.iGM(l=e.CRH())&&(o.refLegelEntity=l.first),e.iGM(l=e.CRH())&&(o.refLocation=l.first),e.iGM(l=e.CRH())&&(o.refPractice=l.first)}},decls:31,vars:11,consts:[[1,"row"],[1,"col-2"],[1,"settings-row","pointer",3,"routerLink"],[1,"bi","bi-arrow-left-circle",2,"font-size","2rem","cursor","pointer"],[1,"ul",2,"margin-top","27px"],[1,"active"],[1,"col-10","component-view"],[3,"cancelBtn","saveBtn","disableSaveBtn","onCancel","onSave"],["autocomplete","off",3,"formGroup","submit"],["f","ngForm"],["id","main",1,"section"],[1,"heading"],[1,"row","formrow"],["class","col-3",4,"ngIf"],[1,"col-6"],[1,"label-input-gap"],["type","text","formControlName","name",1,"form-control","mandatory-field",3,"ngModel","ngModelChange"],["type","text","formControlName","description",1,"form-control","mandatory-field",3,"ngModel","ngModelChange"],["class","row formrow",4,"ngIf"],[1,"col-3"],[1,"two-radios"],[1,"yes-no-radio"],["type","radio","id","roletemplate1","name","roletemplate","value","yes","formControlName","roletemplate",1,"form-check-input",3,"ngModel","ngModelChange","change"],["for","roletemplate1",1,"form-check-label"],["type","radio","id","roletemplate2","name","roletemplate","value","no","formControlName","roletemplate",1,"form-check-input",3,"ngModel","ngModelChange","change"],["for","roletemplate2",1,"form-check-label"],[3,"placeholder","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","non-adminURRT",4,"ngIf"],["class","adminRRT",4,"ngIf"],[1,"non-adminURRT"],[1,"adminRRT"],[1,"col-12",2,"margin-top","6px"],["activeIds","ngb-panel-0","formArrayName","permissions"],["acc","ngbAccordion"],["cardClass","onboarding",3,"formGroupName",4,"ngFor","ngForOf"],["cardClass","onboarding",3,"formGroupName"],["ngbPanelTitle",""],["ngbPanelContent","","formArrayName","sections"],["activeIds","ngb-panel-0",3,"formGroupName",4,"ngFor","ngForOf"],["activeIds","ngb-panel-0",3,"formGroupName"],["accOnboarding","ngbAccordion"],["cardClass","businessg"],["ngbPanelContent","","formArrayName","permissions"],[3,"align"],[1,"form-check"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input",2,"float","none",3,"change"],["for","flexCheckDefault",1,"form-check-label"],[1,"table"],[2,"background-color","#f1f2f2","height","30px"],[3,"formGroupName",4,"ngFor","ngForOf"],[3,"formGroupName"],["type","checkbox","formControlName","enabled",4,"ngIf"],[4,"ngIf"],["type","hidden","formControlName","name"],["src","assets/icons/locked_green.svg","width","20","height","20","placement","bottom","ngbTooltip","Permission can be Override",4,"ngIf"],["src","assets/icons/locked_red.svg","width","20","height","20","placement","bottom","ngbTooltip","Permission can not be Override",4,"ngIf"],["type","checkbox","formControlName","enabled"],["bindLabel","name","placeholder","Legal Entity",1,"ng-selection",2,"border","0px",3,"items","multiple","change"],["legelEntity",""],["ng-option-tmp",""],["type","checkbox",2,"margin","auto",3,"id","name","checked"],[2,"padding","8px",3,"id"],["bindLabel","name","placeholder","Location",1,"ng-selection",2,"border","0px",3,"items","multiple","change"],["location",""],[2,"padding","8px"],["src","assets/icons/locked_green.svg","width","20","height","20","placement","bottom","ngbTooltip","Permission can be Override"],["src","assets/icons/locked_red.svg","width","20","height","20","placement","bottom","ngbTooltip","Permission can not be Override"],["bindLabel","name","placeholder","Practice",1,"ng-selection",2,"border","0px",3,"items","multiple","change"],["practice",""]],template:function(t,o){if(1&t){const l=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e.TgZ(4,"p"),e._uU(5,"Manage Role"),e.qZA()(),e.TgZ(6,"ul",4)(7,"ul",4)(8,"div")(9,"li",5),e._uU(10," Add Role "),e.qZA()()()()(),e.TgZ(11,"div",6)(12,"app-nav-bar-pills",7),e.NdJ("onCancel",function(){return o.cancel()})("onSave",function(){return o.save(o.Form.value)}),e.qZA(),e.TgZ(13,"form",8,9),e.NdJ("submit",function(){e.CHM(l);const v=e.MAs(14);return o.save(v.value)}),e.TgZ(15,"div",10)(16,"h6",11),e._uU(17),e.qZA(),e.TgZ(18,"div",12),e.YNc(19,Z,12,2,"div",13),e.YNc(20,S,5,2,"div",13),e.qZA(),e.TgZ(21,"div",12)(22,"div",14)(23,"label",15),e._uU(24,"Name of role"),e.qZA(),e.TgZ(25,"input",16),e.NdJ("ngModelChange",function(v){return o.roleTemplate.name=v}),e.qZA()(),e.TgZ(26,"div",14)(27,"label",15),e._uU(28,"Description"),e.qZA(),e.TgZ(29,"input",17),e.NdJ("ngModelChange",function(v){return o.roleTemplate.description=v}),e.qZA()()(),e.YNc(30,ee,5,1,"div",18),e.qZA()()()()}2&t&&(e.xp6(2),e.Q6J("routerLink",o.urlManageRole),e.xp6(10),e.Q6J("cancelBtn",!0)("saveBtn",!0)("disableSaveBtn",o.Form.invalid),e.xp6(1),e.Q6J("formGroup",o.Form),e.xp6(4),e.Oqu(o.addRoleTitle),e.xp6(2),e.Q6J("ngIf",o.displayCreateRoleYesNoOption),e.xp6(1),e.Q6J("ngIf","yes"===o.createRoleTemplete),e.xp6(5),e.Q6J("ngModel",o.roleTemplate.name),e.xp6(4),e.Q6J("ngModel",o.roleTemplate.description),e.xp6(1),e.Q6J("ngIf","no"==o.createRoleTemplete))},directives:[f.rH,b.B,n._Y,n.JL,n.sg,C.O5,n._,n.Fj,n.JJ,n.u,d.w9,C.sg,d.jq,m.gY,n.CE,m.Gk,n.x0,m.Cu,m.gW,n.Wl,d.ir,m._L],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}#main[_ngcontent-%COMP%]{height:calc(100vh - 310px);overflow:auto;padding-bottom:5rem}#main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-bottom:5px}.formrow[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{opacity:.5}.ng-selection[_ngcontent-%COMP%]{position:relative;display:block;box-sizing:border-box;width:24rem}.non-adminURRT[_ngcontent-%COMP%]{color:green;font-size:10px}.adminRRT[_ngcontent-%COMP%]{color:red;font-size:10px}"]}),i})()},4001:(N,R,r)=>{r.d(R,{N:()=>A});var n=r(7448),e=r(5e3),f=r(520),u=r(1228);let A=(()=>{class h{constructor(a,g){this.http=a,this.authService=g,this.header={headers:{"X-ORG-ID":this.authService.getOrgId()}}}getSpecificRoleTemplateList(a){return this.http.get(`${n.k.backend.host}/role/role-template/specific?bg=`+a,{headers:{"X-ORG-ID":this.authService.getOrgId()}})}getPublicRoleTemplateList(){return this.http.get(`${n.k.backend.host}/role/role-template/public`,{headers:{"X-ORG-ID":this.authService.getOrgId()}})}getRoleTemplateList(){return this.http.get(`${n.k.backend.host}/role/role-template`,this.header)}getRoleList(){return this.http.get(`${n.k.backend.host}/role/role/`,this.header)}getRoleListByID(a){return this.http.get(`${n.k.backend.host}/role/template-based-role/restricted-roles/`,{headers:{"X-ORG-ID":a}})}getRoleListByIDUnRestricted(a){return this.http.get(`${n.k.backend.host}/role/template-based-role/unrestricted-roles/`,{headers:{"X-ORG-ID":a}})}getRoleTemplateById(a,g){return this.http.get(`${n.k.backend.host}/role/role-template/`+g,{headers:{"X-ORG-ID":a}})}saveRoleFromRoleTemplate(a,g,b,C){return C||(C="intelliveer"),console.log(C),this.http.post(`${n.k.backend.host}/role/template-based-role/`+b+"?bg="+g,a,{headers:{"X-ORG-ID":C}})}updateRoleFromRoleTemplate(a,g,b){return b||(b="intelliveer"),console.log(b),this.http.put(`${n.k.backend.host}/role/template-based-role/`+g,a,{headers:{"X-ORG-ID":b}})}saveRoleFromRoleScratch(a){return this.http.post(`${n.k.backend.host}/role/role/`,a,this.header)}updateRoleFromRoleScratch(a,g){return this.http.put(`${n.k.backend.host}/role/role/`+g,a,this.header)}deleteRole(a,g){return g||(g="intelliveer"),this.http.delete(`${n.k.backend.host}/role/role/`+a,{headers:{"X-ORG-ID":g}})}getRoleById(a){return this.http.get(`${n.k.backend.host}/role/role/`+a,this.header)}getRoleByIdBgId(a,g){return this.http.get(`${n.k.backend.host}/role/role/`+a,{headers:{"X-ORG-ID":g}})}getLegelEntityList(){return this.http.get(`${n.k.backend.host}/bg/legal-entity`,this.header)}getLocationList(){return this.http.get(`${n.k.backend.host}/bg/location`,this.header)}getPracticeList(){return this.http.get(`${n.k.backend.host}/bg/practice`,this.header)}getPermissionList(){return this.http.get(`${n.k.backend.host}/role/role-template/permissions/meta`,this.header)}}return h.\u0275fac=function(a){return new(a||h)(e.LFG(f.eN),e.LFG(u.e))},h.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);
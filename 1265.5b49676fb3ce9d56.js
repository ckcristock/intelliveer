"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1265],{5417:(P,p,i)=>{i.d(p,{j:()=>e});var n=i(5e3);let e=(()=>{class c{constructor(a){this._el=a,this.spiedTags=["DIV"],this.offsetIncrement=70,this.sectionChange=new n.vpe,this.currentSection=""}onScroll(a){let _="";const t=this._el.nativeElement.children,s=a.target.scrollTop,C=a.target.offsetTop+this.offsetIncrement;for(let g=0;g<t.length;g++){const I=t[g];this.spiedTags.some(l=>l===I.tagName)&&I.offsetTop-C<=s&&(_=I.id)}_!==this.currentSection&&(this.currentSection=_,this.sectionChange.emit(this.currentSection))}}return c.\u0275fac=function(a){return new(a||c)(n.Y36(n.SBq))},c.\u0275dir=n.lG2({type:c,selectors:[["","scrollSpy",""]],hostBindings:function(a,_){1&a&&n.NdJ("scroll",function(s){return _.onScroll(s)})},inputs:{spiedTags:"spiedTags",offsetIncrement:"offsetIncrement"},outputs:{sectionChange:"sectionChange"}}),c})()},3459:(P,p,i)=>{i.d(p,{n:()=>F});var n=i(531),e=i(5e3),c=i(2382),r=i(727),a=i(4996),_=i(1228),t=i(5360),s=i(7802),C=i(9516),g=i(1887),I=i(4524),l=i(9808),f=i(1762),d=i(5417),m=i(4376);function E(h,b){if(1&h){const o=e.EpF();e.TgZ(0,"div",21)(1,"img",22),e.NdJ("click",function(){return e.CHM(o),e.oxw(2).checkPermission()}),e.qZA()()}}function D(h,b){if(1&h&&(e.TgZ(0,"ng-option",23),e._uU(1),e.qZA()),2&h){const o=b.$implicit;e.Q6J("value",o._id),e.xp6(1),e.hij(" ",o.profile.insurancePlanName,"")}}const B=function(h,b){return{"col-11":h,"col-12":b}},S=function(h,b){return{"mandatory-field-saved":h,"mandatory-field":b}};function A(h,b){if(1&h){const o=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"app-nav-bar-pills",5),e.NdJ("onCancel",function(){return e.CHM(o),e.oxw().cancel()})("onSave",function(){e.CHM(o);const u=e.oxw();return u.save(u.Form.value)}),e.qZA()()(),e.YNc(5,E,2,0,"div",6),e.qZA(),e.TgZ(6,"form",7,8),e.NdJ("submit",function(){e.CHM(o);const u=e.MAs(7);return e.oxw().save(u.value)}),e.TgZ(8,"div",9),e.NdJ("sectionChange",function(u){return e.CHM(o),e.oxw().onSectionChange(u)}),e.TgZ(9,"div",10)(10,"div",1)(11,"h6",11),e._uU(12,"Insurance Group Information"),e.qZA()(),e.TgZ(13,"div",12)(14,"div",13)(15,"label",14),e._uU(16,"Group Number"),e.qZA(),e._UZ(17,"input",15),e.qZA(),e.TgZ(18,"div",13)(19,"label",14),e._uU(20,"Group Name"),e.qZA(),e._UZ(21,"input",16),e.qZA(),e.TgZ(22,"div",13)(23,"label",14),e._uU(24,"Insurance Plan"),e.qZA(),e.TgZ(25,"ng-select",17),e.NdJ("change",function(){return e.CHM(o),e.oxw().inputChanged("insurancePlanId")}),e.YNc(26,D,2,2,"ng-option",18),e.qZA()()(),e.TgZ(27,"div",1)(28,"div",19)(29,"button",20),e.NdJ("click",function(){return e.CHM(o),e.oxw().moveToOrthodontic()}),e._uU(30,"Next"),e.qZA()()()()()()()}if(2&h){const o=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(12,B,!o.isSaveButton,!o.inEdit)),e.xp6(2),e.Q6J("menuItems",o.menuItems)("activeClass",o.currentSelection)("cancelBtn",o.isSaveButton||!o.inEdit)("saveBtn",o.isSaveButton||!o.inEdit)("disableSaveBtn",!1),e.xp6(1),e.Q6J("ngIf",!o.isSaveButton&&o.inEdit),e.xp6(1),e.Q6J("formGroup",o.Form),e.xp6(19),e.Q6J("ngClass",e.WLB(15,S,o.mandAndRequiredFields[0].mandSaved,!o.mandAndRequiredFields[0].mandSaved)),e.xp6(1),e.Q6J("ngForOf",o.insuranceList),e.xp6(2),e.Q6J("align","end"),e.xp6(1),e.Q6J("disabled",o.FormDisable)}}let F=(()=>{class h{constructor(o,v,u,O,T,y,x,L){this.fb=o,this.router=v,this.authService=u,this.insurancePlanService=O,this.businessGroupDropdownService=T,this.contactPersonFormService=y,this.fieldValidationServ=x,this.addressFormService=L,this.formData=void 0,this.onCancel=new e.vpe,this.onSubmit=new e.vpe,this.currentSelection="",this.menuItems=[],this.businessGroupDropdownSupscription=new r.w0,this.insuranceList=[],this.isSaveButton=!1,this.inEdit=!1,this.imageUpLoaderDisable=!0,this.mandAndRequiredFields=[{name:"insurancePlanId",type:"dropdown",mandSaved:!1,required:!1,valid:!1}],this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(M=>{M&&(this.selectedBusinessGroup=M,this.getOrgBgId())})}ngOnInit(){this.initForm(this.formData)}ngAfterViewInit(){var o=this;return(0,n.Z)(function*(){o.enableAndDisableInputs()})()}initForm(o){o=o||{},0!=Object.keys(o).length?(this.inEdit=!0,this.FormDisable=!0):0==Object.keys(o).length&&(this.inEdit=!1,this.FormDisable=!1),this.Form=this.fb.group({groupNumber:[(null==o?void 0:o.number)||""],groupName:[(null==o?void 0:o.name)||""],insurancePlanId:[o.insurancePlanId||"",c.kI.required]})}onSectionChange(o){this.currentSelection=o}getOrgBgId(){let o=localStorage.getItem("selected_business_group"),v=this.authService.getOrgId(),u=localStorage.getItem("permissionSet");u=JSON.parse(u),(null==u?void 0:u.__ISSU__)?"intelliveer"==o||null==o?(this.bgId="intelliveer",this.getInsurancePlanList("intelliveer")):(this.bgId=o,this.getInsurancePlanList(o)):(null==u?void 0:u.isBGAdmin)?(this.bgId=o,this.getInsurancePlanList(o)):(("intelliveer"==o||null==o)&&(o=v),this.bgId=o,this.getInsurancePlanList(o))}getInsurancePlanList(o){this.insurancePlanService.getList(o).subscribe(v=>{this.insuranceList=v})}moveToOrthodontic(){var o;this.save(null===(o=this.Form)||void 0===o?void 0:o.value)}save(o){var v,u;if(this.mandAndRequiredFields.forEach(O=>{O.mandSaved=!0}),(null===(v=this.Form)||void 0===v?void 0:v.valid)&&!(null===(u=this.Form)||void 0===u?void 0:u.pristine)){let O={insurancePlanId:o.insurancePlanId,name:o.groupName,number:o.groupNumber};localStorage.setItem("insurancePlanId",o.insurancePlanId),this.onSubmit.emit(O)}}cancel(){this.onCancel.emit()}fieldValidation(o,v){var u=this;return(0,n.Z)(function*(){u.mandAndRequiredFields=u.fieldValidationServ.fieldValidation(o,v,u.Form)})()}checkPermission(){this.isSaveButton=!0,this.enableAndDisableInputs(),this.imageUpLoaderDisable=!1}enableAndDisableInputs(){var o,v;this.inEdit&&(this.isSaveButton?this.isSaveButton&&(null===(v=this.Form)||void 0===v||v.enable(),this.FormDisable=!1):(null===(o=this.Form)||void 0===o||o.disable(),this.FormDisable=!0),this.addressFormService.setDisabledOrEnabled(this.FormDisable),this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable))}inputChanged(o){this.mandAndRequiredFields.forEach(v=>{v.name==o&&(v.mandSaved=!1)})}}return h.\u0275fac=function(o){return new(o||h)(e.Y36(c.qu),e.Y36(a.F0),e.Y36(_.e),e.Y36(t.$),e.Y36(s.Y),e.Y36(C.V),e.Y36(g.Z),e.Y36(I.W))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-insurance-group-information-form"]],inputs:{formData:"formData"},outputs:{onCancel:"onCancel",onSubmit:"onSubmit"},decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"row","sticky",2,"width","101%"],[3,"ngClass"],[1,"col"],[3,"menuItems","activeClass","cancelBtn","saveBtn","disableSaveBtn","onCancel","onSave"],["class","col-1 d-flex justify-content-center align-items-start","style","background-color: transparent;",4,"ngIf"],[3,"formGroup","submit"],["f","ngForm"],["id","main","scrollSpy","",1,"col-12",3,"sectionChange"],[1,"section"],[1,"heading"],[1,"row","mb-3"],[1,"col-3"],[1,"required"],["type","text","formControlName","groupNumber",1,"form-control"],["type","text","formControlName","groupName",1,"form-control"],["placeholder","Select","formControlName","insurancePlanId",1,"mandatory-field",3,"ngClass","change"],[3,"value",4,"ngFor","ngForOf"],[1,"col",3,"align"],["type","button",1,"btn","btn-dark","btn-dark-custom",3,"disabled","click"],[1,"col-1","d-flex","justify-content-center","align-items-start",2,"background-color","transparent"],["src","/assets/icons/Edit.svg","alt","",2,"width","37px","height","37px","cursor","pointer",3,"click"],[3,"value"]],template:function(o,v){1&o&&e.YNc(0,A,31,18,"div",0),2&o&&e.Q6J("ngIf",v.Form)},directives:[l.O5,l.mk,f.B,c._Y,c.JL,c.sg,d.j,c.Fj,c.JJ,c.u,m.w9,l.sg,m.jq],styles:[""]}),h})()},569:(P,p,i)=>{i.d(p,{v:()=>t});var n=i(9808),e=i(2382),c=i(8076),r=i(884),a=i(4376),_=i(5e3);let t=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=_.oAB({type:s}),s.\u0275inj=_.cJS({imports:[[n.ez,e.u5,e.UX,c.F,a.A0,r.c]]}),s})()},1762:(P,p,i)=>{i.d(p,{B:()=>I});var n=i(5e3),e=i(4996),c=i(9808);const r=function(l){return{active:l}};function a(l,f){if(1&l){const d=n.EpF();n.TgZ(0,"a",7),n.NdJ("click",function(){const D=n.CHM(d).$implicit;return n.oxw().scroll(D)}),n._uU(1),n.qZA()}if(2&l){const d=f.$implicit,m=n.oxw();n.Q6J("ngClass",n.VKq(2,r,m.activeClass===d.id)),n.xp6(1),n.Oqu(d.title)}}function _(l,f){if(1&l){const d=n.EpF();n.TgZ(0,"button",8),n.NdJ("click",function(){return n.CHM(d),n.oxw().handleSaveBtnClicked()}),n._UZ(1,"img",9),n.qZA()}if(2&l){const d=n.oxw();n.Q6J("disabled",d.disableSaveBtn)}}function t(l,f){if(1&l){const d=n.EpF();n.TgZ(0,"button",10),n.NdJ("click",function(){return n.CHM(d),n.oxw().handleAddCancelClicked()}),n._UZ(1,"img",11),n.qZA()}}function s(l,f){if(1&l){const d=n.EpF();n.TgZ(0,"button",10),n.NdJ("click",function(){return n.CHM(d),n.oxw().handleSaveCancelClicked()}),n._UZ(1,"img",12),n.qZA()}}function C(l,f){1&l&&(n.TgZ(0,"button",13),n._UZ(1,"img",14),n.qZA())}function g(l,f){if(1&l){const d=n.EpF();n.TgZ(0,"button",10),n.NdJ("click",function(){n.CHM(d);const E=n.oxw();return E.editButtonURL(null==E.editButton?null:E.editButton.url)}),n._UZ(1,"img",15),n.qZA()}}let I=(()=>{class l{constructor(d){this.router=d,this.activeClass="init",this.mode="menu",this.saveBtn=!1,this.disableSaveBtn=!1,this.cancelBtn=!1,this.disableCancelBtn=!1,this.addBtn=!1,this.disableAddBtn=!1,this.onCancel=new n.vpe,this.onSave=new n.vpe,this.onAdd=new n.vpe,this.menuItems=[]}ngOnInit(){}ngAfterContentInit(){this.activeClass=0!=this.menuItems.length?this.menuItems[0].id:""}scroll(d){const m=document.getElementById(d.id);m&&m.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}handleSaveBtnClicked(){this.onSave.emit()}handleSaveCancelClicked(){this.onCancel.emit()}handleAddCancelClicked(){this.onAdd.emit()}editButtonURL(d){this.router.navigate([d])}}return l.\u0275fac=function(d){return new(d||l)(n.Y36(e.F0))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-nav-bar-pills"]],inputs:{activeClass:"activeClass",mode:"mode",saveBtn:"saveBtn",disableSaveBtn:"disableSaveBtn",cancelBtn:"cancelBtn",disableCancelBtn:"disableCancelBtn",addBtn:"addBtn",editButton:"editButton",disableAddBtn:"disableAddBtn",menuItems:"menuItems"},outputs:{onCancel:"onCancel",onSave:"onSave",onAdd:"onAdd"},decls:10,vars:6,consts:[["id","navbar-pills"],[1,"left",2,"margin-left","0px"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"right"],["class","save",3,"disabled","click",4,"ngIf"],["class","cancel",3,"click",4,"ngIf"],["class","save",4,"ngIf"],[3,"ngClass","click"],[1,"save",3,"disabled","click"],["src","/assets/icons/save.svg","alt",""],[1,"cancel",3,"click"],["src","/assets/icons/add.svg","alt",""],["src","/assets/icons/cancel.svg","alt",""],[1,"save"],["src","/assets/icons/Add-Patient-Wizard-Green.svg","alt",""],["src","/assets/icons/Add-Patient-Wizard-Red.svg","alt",""]],template:function(d,m){1&d&&(n.TgZ(0,"div")(1,"div",0)(2,"div",1),n.YNc(3,a,2,4,"a",2),n.qZA(),n.TgZ(4,"div",3),n.YNc(5,_,2,1,"button",4),n.YNc(6,t,2,0,"button",5),n.YNc(7,s,2,0,"button",5),n.YNc(8,C,2,0,"button",6),n.YNc(9,g,2,0,"button",5),n.qZA()()()),2&d&&(n.xp6(3),n.Q6J("ngForOf",m.menuItems),n.xp6(2),n.Q6J("ngIf",m.saveBtn),n.xp6(1),n.Q6J("ngIf",m.addBtn),n.xp6(1),n.Q6J("ngIf",m.cancelBtn),n.xp6(1),n.Q6J("ngIf",m.disableSaveBtn&&(null==m.editButton?null:m.editButton.isButton)),n.xp6(1),n.Q6J("ngIf",!m.disableSaveBtn&&(null==m.editButton?null:m.editButton.isButton)))},directives:[c.sg,c.mk,c.O5],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}"]}),l})()},8076:(P,p,i)=>{i.d(p,{F:()=>c});var n=i(9808),e=i(5e3);let c=(()=>{class r{}return r.\u0275fac=function(_){return new(_||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[n.ez]]}),r})()},884:(P,p,i)=>{i.d(p,{c:()=>c});var n=i(9808),e=i(5e3);let c=(()=>{class r{}return r.\u0275fac=function(_){return new(_||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[n.ez]]}),r})()},4524:(P,p,i)=>{i.d(p,{W:()=>r});var n=i(2382),e=i(1135),c=i(5e3);let r=(()=>{class a{constructor(t){this.fb=t,this.isDisabled$=new e.X(this.isDisabled)}getAddressForm(t,s){return this.fb.group({addressLine1:[(null==(t=t||{})?void 0:t.addressLine1)||"",(s=s||{}).addressLine1&&[n.kI.required,n.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],addressLine2:[(null==t?void 0:t.addressLine2)||"",s.addressLine2&&n.kI.required],city:[(null==t?void 0:t.city)||"",s.city&&n.kI.required],state:[(null==t?void 0:t.state)||"",s.state&&n.kI.required],country:[(null==t?void 0:t.country)||"",s.country&&n.kI.required],zipCode:[(null==t?void 0:t.zipCode)||"",s.zipCode&&n.kI.required]})}setDisabledOrEnabled(t){this.isDisabled=t,this.isDisabled$.next(this.isDisabled)}getDisabledOrEnabled(){return this.isDisabled$}}return a.\u0275fac=function(t){return new(t||a)(c.LFG(n.qu))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},9516:(P,p,i)=>{i.d(p,{V:()=>r});var n=i(2382),e=i(1135),c=i(5e3);let r=(()=>{class a{constructor(t){this.fb=t,this.isDisabled$=new e.X(this.isDisabled)}getContactPersonForm(t,s){var C,g,I,l,f,d;return this.fb.group({designation:[(null==(t=t||{})?void 0:t.designation)||"",(s=s||{}).designation&&n.kI.required],title:[(null==t?void 0:t.title)||"",(null==s?void 0:s.title)&&n.kI.required],firstName:[(null==t?void 0:t.firstName)||"",(null==s?void 0:s.firstName)&&[n.kI.required,n.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],lastName:[(null==t?void 0:t.lastName)||"",(null==s?void 0:s.lastName)&&[n.kI.required,n.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],email:[(null==t?void 0:t.email)||"",(null==s?void 0:s.email)&&[n.kI.required,n.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],phone:this.fb.group({type:[(null===(C=null==t?void 0:t.phone)||void 0===C?void 0:C.type)||"",(null===(g=null==s?void 0:s.phone)||void 0===g?void 0:g.type)&&n.kI.required],countryCode:[(null===(I=null==t?void 0:t.phone)||void 0===I?void 0:I.countryCode)||"",(null===(l=null==s?void 0:s.phone)||void 0===l?void 0:l.countryCode)&&[n.kI.required,n.kI.pattern("^[0-9]*$")]],number:[(null===(f=null==t?void 0:t.phone)||void 0===f?void 0:f.number)||"",(null===(d=null==s?void 0:s.phone)||void 0===d?void 0:d.number)&&[n.kI.required,n.kI.pattern("^[0-9]*$")]]})})}setDisabledOrEnabled(t){this.isDisabled=t,this.isDisabled$.next(this.isDisabled)}getDisabledOrEnabled(){return this.isDisabled$}}return a.\u0275fac=function(t){return new(t||a)(c.LFG(n.qu))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},1887:(P,p,i)=>{i.d(p,{Z:()=>c});var n=i(2382),e=i(5e3);let c=(()=>{class r{constructor(){this.Form=new n.cw({}),this.mandAndRequiredFields=[{name:"name",type:"string",mandSaved:!1,required:!1,valid:!1},{name:"TIN",type:"string",mandSaved:!1,required:!1,valid:!1},{name:"designation",type:"string",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"title",type:"dropdown",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"firstName",type:"string",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"lastName",type:"string",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"email",type:"email",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"type",type:"string",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"countryCode",type:"number",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"number",type:"number",mandatory:!1,mandSaved:!1,required:!1,valid:!1}]}fieldValidation(_,t,s){var C,g,I,l;let f;return this.Form=s,console.log("forminserices",this.Form),f=t?(null===(C=this.Form.get(_))||void 0===C?void 0:C.valid)&&null!=(null===(g=this.Form.get(_))||void 0===g?void 0:g.value)&&0!=(null===(I=this.Form.get(_))||void 0===I?void 0:I.value):null!=(null===(l=this.Form.get(_))||void 0===l?void 0:l.value),this.mandAndRequiredFields.forEach(d=>{d.name==_&&(d.valid=f)}),this.mandAndRequiredFields}}return r.\u0275fac=function(_){return new(_||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},5360:(P,p,i)=>{i.d(p,{$:()=>r});var n=i(7448),e=i(5e3),c=i(520);let r=(()=>{class a{constructor(t){this.http=t}save(t,s){return this.http.post(`${n.k.backend.host}/bg/insurance-plan`,t,{headers:{"X-ORG-ID":s}})}getList(t){return this.http.get(`${n.k.backend.host}/bg/insurance-plan`,{headers:{"X-ORG-ID":t}})}getSingleData(t,s){return this.http.get(`${n.k.backend.host}/bg/insurance-plan/`+s,{headers:{"X-ORG-ID":t}})}update(t,s){return this.http.put(`${n.k.backend.host}/bg/insurance-plan`,t,{headers:{"X-ORG-ID":s}})}delete(t,s){return this.http.delete(`${n.k.backend.host}/bg/insurance-plan/`+s,{headers:{"X-ORG-ID":t}})}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(c.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5942],{1762:(C,y,r)=>{r.d(y,{B:()=>b});var e=r(5e3),_=r(4996),t=r(9808);const p=function(c){return{active:c}};function P(c,h){if(1&c){const s=e.EpF();e.TgZ(0,"a",7),e.NdJ("click",function(){const N=e.CHM(s).$implicit;return e.oxw().scroll(N)}),e._uU(1),e.qZA()}if(2&c){const s=h.$implicit,u=e.oxw();e.Q6J("ngClass",e.VKq(2,p,u.activeClass===s.id)),e.xp6(1),e.Oqu(s.title)}}function i(c,h){if(1&c){const s=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){return e.CHM(s),e.oxw().handleSaveBtnClicked()}),e._UZ(1,"img",9),e.qZA()}if(2&c){const s=e.oxw();e.Q6J("disabled",s.disableSaveBtn)}}function o(c,h){if(1&c){const s=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(s),e.oxw().handleAddCancelClicked()}),e._UZ(1,"img",11),e.qZA()}}function d(c,h){if(1&c){const s=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(s),e.oxw().handleSaveCancelClicked()}),e._UZ(1,"img",12),e.qZA()}}function x(c,h){1&c&&(e.TgZ(0,"button",13),e._UZ(1,"img",14),e.qZA())}function M(c,h){if(1&c){const s=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(s);const v=e.oxw();return v.editButtonURL(null==v.editButton?null:v.editButton.url)}),e._UZ(1,"img",15),e.qZA()}}let b=(()=>{class c{constructor(s){this.router=s,this.activeClass="init",this.mode="menu",this.saveBtn=!1,this.disableSaveBtn=!1,this.cancelBtn=!1,this.disableCancelBtn=!1,this.addBtn=!1,this.disableAddBtn=!1,this.onCancel=new e.vpe,this.onSave=new e.vpe,this.onAdd=new e.vpe,this.menuItems=[]}ngOnInit(){}ngAfterContentInit(){this.activeClass=0!=this.menuItems.length?this.menuItems[0].id:""}scroll(s){const u=document.getElementById(s.id);u&&u.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}handleSaveBtnClicked(){this.onSave.emit()}handleSaveCancelClicked(){this.onCancel.emit()}handleAddCancelClicked(){this.onAdd.emit()}editButtonURL(s){this.router.navigate([s])}}return c.\u0275fac=function(s){return new(s||c)(e.Y36(_.F0))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-nav-bar-pills"]],inputs:{activeClass:"activeClass",mode:"mode",saveBtn:"saveBtn",disableSaveBtn:"disableSaveBtn",cancelBtn:"cancelBtn",disableCancelBtn:"disableCancelBtn",addBtn:"addBtn",editButton:"editButton",disableAddBtn:"disableAddBtn",menuItems:"menuItems"},outputs:{onCancel:"onCancel",onSave:"onSave",onAdd:"onAdd"},decls:10,vars:6,consts:[["id","navbar-pills"],[1,"left",2,"margin-left","0px"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"right"],["class","save",3,"disabled","click",4,"ngIf"],["class","cancel",3,"click",4,"ngIf"],["class","save",4,"ngIf"],[3,"ngClass","click"],[1,"save",3,"disabled","click"],["src","/assets/icons/save.svg","alt",""],[1,"cancel",3,"click"],["src","/assets/icons/add.svg","alt",""],["src","/assets/icons/cancel.svg","alt",""],[1,"save"],["src","/assets/icons/Add-Patient-Wizard-Green.svg","alt",""],["src","/assets/icons/Add-Patient-Wizard-Red.svg","alt",""]],template:function(s,u){1&s&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1),e.YNc(3,P,2,4,"a",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,i,2,1,"button",4),e.YNc(6,o,2,0,"button",5),e.YNc(7,d,2,0,"button",5),e.YNc(8,x,2,0,"button",6),e.YNc(9,M,2,0,"button",5),e.qZA()()()),2&s&&(e.xp6(3),e.Q6J("ngForOf",u.menuItems),e.xp6(2),e.Q6J("ngIf",u.saveBtn),e.xp6(1),e.Q6J("ngIf",u.addBtn),e.xp6(1),e.Q6J("ngIf",u.cancelBtn),e.xp6(1),e.Q6J("ngIf",u.disableSaveBtn&&(null==u.editButton?null:u.editButton.isButton)),e.xp6(1),e.Q6J("ngIf",!u.disableSaveBtn&&(null==u.editButton?null:u.editButton.isButton)))},directives:[t.sg,t.mk,t.O5],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}"]}),c})()},8076:(C,y,r)=>{r.d(y,{F:()=>t});var e=r(9808),_=r(5e3);let t=(()=>{class p{}return p.\u0275fac=function(i){return new(i||p)},p.\u0275mod=_.oAB({type:p}),p.\u0275inj=_.cJS({imports:[[e.ez]]}),p})()},5942:(C,y,r)=>{r.r(y),r.d(y,{PaymentPartyModule:()=>G});var e=r(9808),_=r(4996),t=r(5e3),p=r(4540),P=r(9196),i=r(2382),o=r(8046),d=r(1228),x=r(7802),M=r(1762),b=r(9759);function c(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"img",7),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).showRelationList=!0}),t.qZA()}}function h(a,l){1&a&&t._UZ(0,"img",8)}function s(a,l){if(1&a&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&a){const n=l.$implicit;t.Q6J("ngValue",n.value),t.xp6(1),t.hij(" ",n.value," ")}}function u(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"form",10)(2,"select",15),t.NdJ("change",function(){return t.CHM(n),t.oxw(4).showList=!0}),t.TgZ(3,"option",16),t._uU(4," Select Relationship "),t.qZA(),t.YNc(5,s,2,2,"option",17),t.qZA()()()}if(2&a){const n=t.oxw(4);t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(4),t.Q6J("ngForOf",n.relationships)}}function v(a,l){if(1&a&&(t.TgZ(0,"div")(1,"form",10)(2,"div",11),t._UZ(3,"div",12),t.TgZ(4,"div",13),t.YNc(5,u,6,2,"div",1),t.qZA(),t._UZ(6,"div",14),t.qZA()()()),2&a){const n=t.oxw(3);t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(4),t.Q6J("ngIf",n.form)}}function N(a,l){if(1&a&&(t.TgZ(0,"div",9)(1,"p"),t._uU(2,"What is the relationship of new Payment Party to patient?"),t.qZA(),t.YNc(3,v,7,2,"div",1),t.qZA()),2&a){const n=t.oxw(2);t.xp6(3),t.Q6J("ngIf",n.form)}}function S(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"li")(1,"button",34),t.NdJ("click",function(){const f=t.CHM(n).$implicit;return t.oxw(5).handleSearchResultsClick(f)}),t.TgZ(2,"span"),t._uU(3),t.qZA()()()}if(2&a){const n=l.$implicit;t.xp6(3),t.hij(" ",n.profile.firstName,"")}}function I(a,l){if(1&a&&(t.TgZ(0,"ul"),t.YNc(1,S,4,1,"li",33),t.qZA()),2&a){const n=t.oxw(4);t.xp6(1),t.Q6J("ngForOf",n.paymentPartySearchLst)}}function Z(a,l){1&a&&(t.TgZ(0,"div",35)(1,"p"),t._uU(2,"No matches found"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Would you like to create a new one?"),t.qZA()())}function B(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"div",28),t.YNc(1,I,2,1,"ul",1),t.YNc(2,Z,5,0,"div",29),t.TgZ(3,"div",30)(4,"div",31)(5,"button",32),t.NdJ("click",function(){return t.CHM(n),t.oxw(3).goToAddPaymentParty()}),t._uU(6," Create new Payment Party "),t.qZA()()()()}if(2&a){const n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",0!=(null==n.paymentPartySearchLst?null:n.paymentPartySearchLst.length)),t.xp6(1),t.Q6J("ngIf",0==(null==n.paymentPartySearchLst?null:n.paymentPartySearchLst.length))}}function A(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"div",9)(1,"p"),t._uU(2,"Please search first If not found, create a new one"),t.qZA(),t.TgZ(3,"div",19),t._UZ(4,"div",12),t.TgZ(5,"div",20)(6,"div",21,22),t.YNc(8,B,7,2,"div",23),t.TgZ(9,"div",24)(10,"span",25),t._UZ(11,"i",26),t.qZA(),t.TgZ(12,"input",27),t.NdJ("ngModelChange",function(g){return t.CHM(n),t.oxw(2).searchWord=g})("keyup",function(g){return t.CHM(n),t.oxw(2).fetchSearch(g)})("focus",function(){return t.CHM(n),t.oxw(2).searchFocus=!0}),t.qZA()()()(),t._UZ(13,"div",14),t.qZA()()}if(2&a){const n=t.oxw(2);t.xp6(8),t.Q6J("ngIf",n.searchFocus),t.xp6(4),t.Q6J("ngModel",n.searchWord)}}function J(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"button",36),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).addAsPaymentParty()}),t._uU(2," Add as a Payment Party "),t.qZA()()}}function F(a,l){if(1&a&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div")(3,"h5")(4,"b"),t._uU(5,"You haven\u2019t added yet"),t.qZA()(),t.TgZ(6,"p"),t._uU(7," Click here, "),t.YNc(8,c,1,0,"img",4),t.YNc(9,h,1,0,"img",5),t._uU(10," to add Payment Party "),t.qZA()(),t.YNc(11,N,4,1,"div",6),t.YNc(12,A,14,2,"div",6),t.YNc(13,J,3,0,"div",1),t.qZA()()),2&a){const n=t.oxw();t.xp6(8),t.Q6J("ngIf",!n.showRelationList),t.xp6(1),t.Q6J("ngIf",n.showRelationList),t.xp6(2),t.Q6J("ngIf",n.showRelationList),t.xp6(1),t.Q6J("ngIf",n.showList),t.xp6(1),t.Q6J("ngIf",n.showSelectedPatient)}}function L(a,l){if(1&a&&(t.TgZ(0,"div",39)(1,"div",40)(2,"div",11)(3,"div",41)(4,"div",42)(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"div",43)(8,"span"),t._uU(9),t.qZA()()()(),t.TgZ(10,"div",44)(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA()(),t.TgZ(17,"div",45)(18,"p"),t._uU(19," Prefered mail method: "),t.TgZ(20,"span"),t._uU(21),t.qZA()(),t.TgZ(22,"p"),t._uU(23," Primary Phone number: "),t.TgZ(24,"span"),t._uU(25),t.qZA()(),t.TgZ(26,"p"),t._uU(27," Email: "),t.TgZ(28,"span"),t._uU(29),t.qZA()(),t.TgZ(30,"p"),t._uU(31," No. of mutual patient: "),t.TgZ(32,"span"),t._uU(33),t.qZA()()(),t.TgZ(34,"div",46)(35,"div",47),t._UZ(36,"i",48),t.TgZ(37,"ul",49)(38,"li",50),t._uU(39," Edit "),t.qZA(),t.TgZ(40,"li",51),t._uU(41),t.qZA()()()()()()()),2&a){const n=l.$implicit;t.xp6(3),t.MGl("routerLink","/dashboard/patient/patient-user/payment-party/edit/",n._id,""),t.xp6(3),t.Oqu(n.profile.firstName.charAt(0)),t.xp6(3),t.Oqu("PRIMARY"),t.xp6(1),t.MGl("routerLink","/dashboard/patient/patient-user/payment-party/edit/",n._id,""),t.xp6(2),t.AsE(" ",n.profile.firstName," ",n.profile.lastName," "),t.xp6(2),t.Oqu(n.practiceName),t.xp6(2),t.Oqu(n.specialty),t.xp6(1),t.MGl("routerLink","/dashboard/patient/patient-user/payment-party/edit/",n._id,""),t.xp6(4),t.Oqu(n.contact.email),t.xp6(4),t.Oqu(n.contact.primaryPhone.number),t.xp6(4),t.Oqu(n.contact.email),t.xp6(4),t.Oqu(n.mutualPatient),t.xp6(5),t.MGl("routerLink","/dashboard/patient/patient-user/payment-party/edit/",n._id,""),t.xp6(3),t.hij(" ",n.isDisabled?"Reactivate":"Deactivate"," ")}}function w(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"app-nav-bar-pills",37),t.NdJ("onAdd",function(){return t.CHM(n),t.oxw().onAdd()}),t.qZA(),t.YNc(2,L,42,15,"div",38),t.qZA()}if(2&a){const n=t.oxw();t.xp6(1),t.Q6J("menuItems",n.menuItems)("activeClass","")("cancelBtn",!1)("saveBtn",!1)("addBtn",!0),t.xp6(1),t.Q6J("ngForOf",n.paymentPartyList)}}const k=[{path:"",component:(()=>{class a{constructor(n,m,g,f,T,R,D){this.router=n,this.patientUserServ=m,this.globalRoutes=g,this.fb=f,this.paymentPartyService=T,this.authService=R,this.businessGroupDropdownService=D,this.searchFocus=!1,this.showSelectedPatient=!1,this.showList=!1,this.showRelationList=!1,this.paymentPartyList=[],this.patientList=[],this.searchWord="",this.relationships=[{id:0,value:"Father"},{id:1,value:"Mother"},{id:2,value:"Sister"},{id:3,value:"Brother"}],this.menuItems=[],this.paymentPartySearchLst=[],this.form=this.fb.group({relationship:[""]}),this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(O=>{O&&(this.selectedBusinessGroup=O,this.getOrgBgId())})}ngOnInit(){this.paymentPartySearchLst=this.paymentPartyList}handleSearchResultsClick(n){console.log(n),n.active&&(this.searchFocus=!1,this.showSelectedPatient=!0,this.selectedPatient=n,this.searchWord=n.user)}fetchSearch(n){""===n.target.value&&(this.paymentPartySearchLst=this.paymentPartyList),this.paymentPartySearchLst=this.paymentPartyList.filter(m=>m.profile.firstName.toLowerCase().startsWith(n.target.value.toLowerCase()))}addAsPaymentParty(){this.paymentPartyList.push({image:"",user:this.selectedPatient.user,practiceName:"Practice Name",specialty:"Specialty",pemail:"abc@gmail.com",phone:"8484848484",email:"abcd@gmail.com",mutualPatient:"5"})}goToAddPaymentParty(){console.log("Form",this.form),this.patientUserServ.setPaymPartyToPati(this.form.value.relationship),this.router.navigate([this.globalRoutes.getPatientUserRoutes()[2].child[0].url])}getOrgBgId(){var n,m;let g=localStorage.getItem("selected_business_group"),f=this.authService.getLoggedInUser();(null==f?void 0:f.__ISSU__)?"intelliveer"==g||null==g?(this.bgId="intelliveer",this.getList()):(this.bgId=null===(n=this.selectedBusinessGroup)||void 0===n?void 0:n.bgId,this.getList()):(this.bgId=null===(m=this.selectedBusinessGroup)||void 0===m?void 0:m.bgId,this.getList())}onAdd(){this.router.navigate(["/dashboard/patient/patient-user/payment-party/add"])}getList(){this.paymentPartyService.getList(this.bgId).subscribe(n=>{this.paymentPartyList=n,this.paymentPartySearchLst=this.paymentPartyList})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(_.F0),t.Y36(p.r),t.Y36(P.o),t.Y36(i.qu),t.Y36(o.Z),t.Y36(d.e),t.Y36(x.Y))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-payment-party"]],decls:2,vars:2,consts:[["class","section","style","height: 90%",4,"ngIf"],[4,"ngIf"],[1,"section",2,"height","90%"],[2,"text-align","center","padding-top","7%"],["class","pointer","src","assets/icons/add.svg","width","36","height","36",3,"click",4,"ngIf"],["src","assets/icons/add-disabled.png","width","36","height","36",4,"ngIf"],["class","mb-3",4,"ngIf"],["src","assets/icons/add.svg","width","36","height","36",1,"pointer",3,"click"],["src","assets/icons/add-disabled.png","width","36","height","36"],[1,"mb-3"],[3,"formGroup"],[1,"row"],[1,"col-4"],[1,"col-6"],[1,"col-3"],["formControlName","relationship",1,"form-select",2,"width","64.8%",3,"change"],["value","","disabled","","selected",""],["aria-placeholder","Select Relationship",3,"ngValue",4,"ngFor","ngForOf"],["aria-placeholder","Select Relationship",3,"ngValue"],[1,"row","gy-2"],[1,"col-6",2,"text-align","center"],[1,"search"],["searchDivRef",""],["class","search-results",4,"ngIf"],[1,"input-group","justify-content-between"],["id","basic-addon1",1,"input-group-text","bg-transparent"],[1,"bi","bi-search"],["type","text","placeholder","Type Name","aria-describedby","basic-addon1",1,"form-control",2,"border-left-style","none",3,"ngModel","ngModelChange","keyup","focus"],[1,"search-results"],["class","padding justify-content-between",4,"ngIf"],[1,"d-flex","gap-3","ps-4","align-items-center"],[1,"btn-group","me-3"],["type","button",1,"btn","button-create-new",3,"click"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between",3,"click"],[1,"padding","justify-content-between"],[1,"btn","btn-dark",3,"click"],[3,"menuItems","activeClass","cancelBtn","saveBtn","addBtn","onAdd"],["class","container",4,"ngFor","ngForOf"],[1,"container"],[1,"section"],[1,"col-2","pointer",3,"routerLink"],[1,"letter"],["id","orange"],[1,"col-3","pointer",3,"routerLink"],[1,"col-6","pointer",3,"routerLink"],[1,"col-1"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic","ngbDropdownToggle","",1,"bi","bi-three-dots-vertical","pointer"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic"],["ngbDropdownItem","",3,"routerLink"],["ngbDropdownItem",""]],template:function(n,m){1&n&&(t.YNc(0,F,14,5,"div",0),t.YNc(1,w,3,6,"div",1)),2&n&&(t.Q6J("ngIf",0==(null==m.paymentPartyList?null:m.paymentPartyList.length)),t.xp6(1),t.Q6J("ngIf",0!=(null==m.paymentPartyList?null:m.paymentPartyList.length)))},directives:[e.O5,i._Y,i.JL,i.sg,i.EJ,i.JJ,i.u,i.YN,i.Kr,e.sg,i.Fj,i.On,M.B,_.rH,b.jt,b.iD,b.Vi,b.TH],styles:[".search[_ngcontent-%COMP%]{width:342px;background-color:#fff;display:flex;justify-content:center;align-items:center;position:relative}.search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{position:absolute;padding-bottom:15px;width:342px;background:#f2f2f2;top:42px;left:0;box-shadow:0 6px 12px #0000002e;z-index:999}.search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:10px}.search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:none;line-height:2;display:block;width:90%;margin:5px 5px 2px}.search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span.inactive[_ngcontent-%COMP%]{background-color:var(--bs-gray-400);padding:0 6px;border-radius:4px}.search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--bs-gray-200)}.bottom-right[_ngcontent-%COMP%]{position:absolute;bottom:0px;right:0px;background-color:var(--primary-color);color:#fff;border-top-left-radius:2px;padding:0 3px;font-size:6px;font-weight:600}.inactive[_ngcontent-%COMP%]{position:absolute;bottom:0px;right:0px;background-color:gray;color:#fff;border-top-left-radius:2px;padding:0 3px;font-size:6px;font-weight:600}"]}),a})()}];let U=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[_.Bz.forChild(k)],_.Bz]}),a})();var E=r(8076);let G=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[e.ez,U,i.UX,i.u5,E.F,b.IJ]]}),a})()},4540:(C,y,r)=>{r.d(y,{r:()=>t});var e=r(531),_=r(5e3);let t=(()=>{class p{constructor(){this.familyMembers=[{role:"Father",info:[]},{role:"Mother",info:[]},{role:"Brother",info:[]},{role:"Sister",info:[]}],this.patientNotPristi=!1,this.legalGuardNotPristi=!1,this.paymentPartyNotPristi=!1,this.insuranSubscNotPristi=!1,this.exterProvNotPristi=!1,this.referrerNotPristi=!1,this.familyMembNotPristi=!1,this.conditions=[]}setPatientFamiMemb(i,o){for(let d=0;d<this.familyMembers.length;d++)this.familyMembers[d].role==i&&(this.familyMembers[d].info=o);localStorage.setItem("patientFamilyMembers",JSON.stringify(this.familyMembers))}setLegalGuardToPati(i){var o=this;return(0,e.Z)(function*(){o.LegalGuardToPati=i,localStorage.setItem("LegalGuardToPati",JSON.stringify(i)),o.LegalGuardToPati=yield JSON.parse(localStorage.getItem("LegalGuardToPati"))})()}getLegalGuardToPati(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("LegalGuardToPati"))})()}getLegalGuardFamiMemb(){var i=this;return(0,e.Z)(function*(){null!=JSON.parse(localStorage.getItem("patientFamilyMembers"))&&(i.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),i.familyMembers.filter(d=>d.role==JSON.parse(localStorage.getItem("LegalGuardToPati"))))})()}setLegalGuard(i){localStorage.setItem("LegalGuardian",JSON.stringify(i))}getLegalGuard(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("LegalGuardian"))})()}setPaymPartyToPati(i){var o=this;return(0,e.Z)(function*(){o.PaymPartyToPati=i,localStorage.setItem("PaymPartyToPati",JSON.stringify(i)),o.PaymPartyToPati=yield JSON.parse(localStorage.getItem("PaymPartyToPati"))})()}getPaymPartyToPati(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("PaymPartyToPati"))})()}getPaymPartyFamiMemb(){var i=this;return(0,e.Z)(function*(){null!=JSON.parse(localStorage.getItem("patientFamilyMembers"))&&(i.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),i.familyMembers.filter(d=>d.role==JSON.parse(localStorage.getItem("PaymPartyToPati"))))})()}setPaymParty(i){localStorage.setItem("PaymParty",JSON.stringify(i))}getPaymParty(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("PaymParty"))})()}setInsuSubscToPati(i){var o=this;return(0,e.Z)(function*(){o.InsuSubscToPati=i,localStorage.setItem("InsuSubscToPati",JSON.stringify(i)),o.InsuSubscToPati=yield JSON.parse(localStorage.getItem("InsuSubscToPati"))})()}getInsuSubscToPati(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("InsuSubscToPati"))})()}getInsuSubscFamiMemb(){var i=this;return(0,e.Z)(function*(){if(null!=JSON.parse(localStorage.getItem("patientFamilyMembers")))return i.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),i.familyMembers.filter(d=>d.role==JSON.parse(localStorage.getItem("InsuSubscToPati")))[0].info})()}setInsuSubsc(i){localStorage.setItem("InsuSubsc",JSON.stringify(i))}getInsuSubsc(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("InsuSubsc"))})()}setFamylMembToPati(i){var o=this;return(0,e.Z)(function*(){o.FamylMembToPati=i,localStorage.setItem("FamylMembToPati",JSON.stringify(i)),o.FamylMembToPati=yield JSON.parse(localStorage.getItem("FamylMembToPati"))})()}getFamylMembToPati(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("FamylMembToPati"))})()}getFamylMembFamylMemb(){var i=this;return(0,e.Z)(function*(){if(null!=JSON.parse(localStorage.getItem("patientFamilyMembers")))return i.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),i.familyMembers.filter(d=>d.role==JSON.parse(localStorage.getItem("FamylMembToPati")))[0].info})()}setFamyMemb(i){localStorage.setItem("FamyMemb",JSON.stringify(i))}getFamyMemb(){return(0,e.Z)(function*(){return JSON.parse(localStorage.getItem("FamyMemb"))})()}setpatientNotPristine(i){this.patientNotPristi=i}getpatientNotPristine(){return this.patientNotPristi}setlegalGuardNotPristine(i){this.legalGuardNotPristi=i}getlegalGuardNotPristine(){return this.legalGuardNotPristi}setpaymentPartyNotPristine(i){this.paymentPartyNotPristi=i}getpaymentPartyNotPristine(){return this.paymentPartyNotPristi}setinsuranSubscNotPristine(i){this.insuranSubscNotPristi=i}getinsuranSubscNotPristine(){return this.insuranSubscNotPristi}setExterProvNotPristine(i){this.exterProvNotPristi=i}getExterProvNotPristine(){return this.exterProvNotPristi}setReferrerNotPristine(i){this.referrerNotPristi=i}getReferrerNotPristine(){return this.referrerNotPristi}setFamilyMembNotPristine(i){this.familyMembNotPristi=i}getFamilyMembNotPristine(){return this.familyMembNotPristi}setFalseAllNotPristine(){this.setpatientNotPristine(!1),this.setlegalGuardNotPristine(!1),this.setpaymentPartyNotPristine(!1),this.setinsuranSubscNotPristine(!1),this.setExterProvNotPristine(!1),this.setReferrerNotPristine(!1),this.setFamilyMembNotPristine(!1)}setConditions(){this.conditions=[],this.conditions.push({section:"patient",condition:this.getpatientNotPristine()}),this.conditions.push({section:"legalGuard",condition:this.getlegalGuardNotPristine()}),this.conditions.push({section:"referrer",condition:this.getReferrerNotPristine()}),this.conditions.push({section:"insuranSubsc",condition:this.getinsuranSubscNotPristine()}),this.conditions.push({section:"exterprov",condition:this.getExterProvNotPristine()}),this.conditions.push({section:"paymentParty",condition:this.getpaymentPartyNotPristine()}),this.conditions.push({section:"familyMemb",condition:this.getFamilyMembNotPristine()})}getConditions(){return this.conditions}}return p.\u0275fac=function(i){return new(i||p)},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},8046:(C,y,r)=>{r.d(y,{Z:()=>p});var e=r(7448),_=r(5e3),t=r(520);let p=(()=>{class P{constructor(o){this.http=o}save(o,d){return this.http.post(`${e.k.backend.host}/bg/payment-party`,o,{headers:{"X-ORG-ID":d}})}getList(o){return this.http.get(`${e.k.backend.host}/bg/payment-party?skip=0&limit=10`,{headers:{"X-ORG-ID":o}})}getSingleData(o,d){return this.http.get(`${e.k.backend.host}/bg/payment-party/`+d,{headers:{"X-ORG-ID":o}})}update(o,d){return this.http.put(`${e.k.backend.host}/bg/payment-party/`,o,{headers:{"X-ORG-ID":d}})}}return P.\u0275fac=function(o){return new(o||P)(_.LFG(t.eN))},P.\u0275prov=_.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),P})()}}]);
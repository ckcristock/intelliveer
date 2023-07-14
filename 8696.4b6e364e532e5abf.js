"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8696],{7924:(E,y,o)=>{o.d(y,{I:()=>c});var s=o(5e3),m=o(2651),p=o(192),t=o(4357),g=o(528),n=o(4540);let c=(()=>{class u{constructor(M,T,D,N,F){this.canDeactivateRouteService=M,this.addPatientServ=T,this.insuranceServ=D,this.onboardingServ=N,this.patientUserServ=F,this.conditions=[]}ngOnInit(){}canActivate(M,T){return!0}canDeactivate(M,T,D,N){this.conditions=[],localStorage.setItem("sendRedirectObj",null==N?void 0:N.url),this.addPatientServ.setConditions(),this.insuranceServ.setConditions(),this.onboardingServ.setConditions(),this.patientUserServ.setConditions(),this.conditions=this.addPatientServ.getConditions(),this.conditions.push(...this.insuranceServ.getConditions()),this.conditions.push(...this.onboardingServ.getConditions()),this.conditions.push(...this.patientUserServ.getConditions()),console.log("this.conditions",this.conditions);for(let S=0;S<this.conditions.length;S++)if(this.conditions[S].condition)return this.canDeactivateRouteService.openDialog(),this.canDeactivateRouteService.modalChoice$;return!0}}return u.\u0275fac=function(M){return new(M||u)(s.LFG(m.d),s.LFG(p.S),s.LFG(t.y),s.LFG(g.D),s.LFG(n.r))},u.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},7408:(E,y,o)=>{o.d(y,{o:()=>K});var s=o(531),m=o(2382),p=o(1176),t=o(5e3),g=o(4996),n=o(4540),c=o(192),u=o(4357),I=o(528),M=o(4685),T=o(1228),D=o(7802),N=o(5730),F=o(9759),S=o(9808),A=o(4376);function L(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"a",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().openTextarea()}),t._uU(1,"Add Script"),t.qZA()}}function Z(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"div",28)(1,"a",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeSaveCancelFunc()}),t._uU(2,"Save Script"),t.qZA(),t.TgZ(3,"a",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeSaveCancelFunc()}),t._uU(4,"Cancel"),t.qZA()()}}function B(l,h){1&l&&t._UZ(0,"textarea",29)}function J(l,h){if(1&l&&(t.TgZ(0,"ng-option",22),t._uU(1),t.qZA()),2&l){const e=h.$implicit;t.Q6J("value",e._id),t.xp6(1),t.Oqu(e.name)}}function U(l,h){if(1&l&&(t.TgZ(0,"ng-option",22),t._uU(1),t.qZA()),2&l){const e=h.$implicit;t.Q6J("value",e._id),t.xp6(1),t.Oqu(e.name)}}function G(l,h){if(1&l&&(t.TgZ(0,"ng-option",22),t._uU(1),t.qZA()),2&l){const e=h.$implicit;t.Q6J("value",e._id),t.xp6(1),t.Oqu(e.name)}}function W(l,h){1&l&&(t.TgZ(0,"p",38),t._uU(1," Would you like to discard or save it? "),t.qZA())}function k(l,h){1&l&&(t.TgZ(0,"p",38),t._uU(1," Mandatory fields are required to save. "),t.qZA())}function w(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"div",30),t._UZ(1,"h4",31),t.TgZ(2,"button",32),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.qZA()(),t.TgZ(3,"div",33),t.YNc(4,W,2,0,"p",34),t.YNc(5,k,2,0,"p",34),t.qZA(),t.TgZ(6,"div",35)(7,"button",36),t.NdJ("click",function(){return t.CHM(e),t.oxw().savePatientForm()}),t._uU(8," Save "),t.qZA(),t.TgZ(9,"button",37),t.NdJ("click",function(){return t.CHM(e),t.oxw().discardPatient()}),t._uU(10," Discard "),t.qZA()()}if(2&l){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",null==e.Form?null:e.Form.valid),t.xp6(1),t.Q6J("ngIf",null==e.Form?null:e.Form.invalid),t.xp6(2),t.Q6J("disabled",null==e.Form?null:e.Form.invalid)}}const R=function(l){return{"mandatory-field":l}};let K=(()=>{class l{constructor(e,i,a,d,r,f,v,P,b,_,C){this.router=e,this.fb=i,this.patientUserServ=a,this.addPatientServ=d,this.insuranceServ=r,this.onboardingServ=f,this.patientDetailService=v,this.authService=P,this.businessGroupDropdownService=b,this.alertService=_,this.modalService=C,this.callersInfo={phoneNumber:"",firstName:"",lastName:"",callerSelfPatient:!0},this.patient={practice:"",firstName:"",lastName:"",dateBirth:"",gender:""},this.patientArray={practice:"",firstName:"",lastName:"",dateBirth:"",gender:"",location:"",legalEntity:""},this.menuItemsOfCordinate=p.U,this.menuItemsOfQuickAdd=p.z,this.formData=void 0,this.tab="",this.showButtonSaveCancel=!1,this.openTextAreaVar=!1,this.practiceList=[],this.locationList=[],this.legalEntityList=[],this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(O=>{O&&(this.selectedBusinessGroup=O,this.getOrgBgId(),setTimeout(()=>{this.patientID&&this.getPatentDataWithID()},500))})}ngOnInit(){var e=this;return(0,s.Z)(function*(){var i,a;e.initForm(e.formData),e.patientUserServ.setFalseAllNotPristine(),e.addPatientServ.setFalseAllNotPristineCWP(),e.insuranceServ.setFalseAllNotPristine(),e.onboardingServ.setFalseAllNotPristine(),e.patientData=yield e.addPatientServ.getPatientCWP(),e.callersInfo=yield e.addPatientServ.getCallerInfoCWP(),e.patientID=null===(i=e.patientData)||void 0===i?void 0:i._id,1==e.callersInfo.callerSelfPatient&&(e.patient.firstName=e.callersInfo.firstName,e.patient.lastName=e.callersInfo.lastName,e.patient.dateBirth=e.patientArray.DOB),null===(a=e.Form)||void 0===a||a.statusChanges.subscribe(d=>{var r,f,v,P,b,_;if(!e.Form.pristine){e.addPatientServ.setPatientNotPristineCWP(!0),e.addPatientServ.setPatentMandatoryFields(!!e.Form.invalid);let C={practiceId:null===(r=e.Form.value)||void 0===r?void 0:r.practice,profile:{title:"",firstName:null===(f=e.Form.value)||void 0===f?void 0:f.firstName,middleName:"",lastName:null===(v=e.Form.value)||void 0===v?void 0:v.lastName,DOB:null===(P=e.Form.value)||void 0===P?void 0:P.DOB,gender:null===(b=e.Form.value)||void 0===b?void 0:b.gender,preferredPronoun:"",language:"",maritalStatus:""},information:{preferredName:"",pronounciation:"",school:"",interests:"",tags:""},preferences:{location:null===(_=e.Form.value)||void 0===_?void 0:_.location,billingProvider:"",treatingProvider:"",newPatientCoordinator:"",chairSideAssistant:"",treatmentCoordinator:""},emergencyContact:{name:"",contactPerson:"",emergencyContact:""},notes:""};e.addPatientServ.getPatientFromCompone(C)}})})()}getPatient(){return[this.patient]}continueToLegalGuar(e){if("coordWithProspect"==this.tab){this.addPatientServ.setPatientNotPristineCWP(!1),this.addPatientServ.setPatientCWP(e);let i=JSON.parse(localStorage.getItem("visitedArray")||"[]");i.push("Patient"),localStorage.setItem("visitedArray",JSON.stringify(i)),this.router.navigate([this.menuItemsOfCordinate[2].url])}else if("quickAdd"==this.tab){this.addPatientServ.setPatientCWP(e);let i=JSON.parse(localStorage.getItem("visitedArrayQuick")||"[]");i.push("Patient"),localStorage.setItem("visitedArrayQuick",JSON.stringify(i)),this.router.navigate([this.menuItemsOfQuickAdd[1].url])}}initForm(e){this.Form=this.fb.group({practice:[(null==(e=e||{})?void 0:e.practice)||"",m.kI.required],firstName:[(null==e?void 0:e.firstName)||"",m.kI.required],lastName:[(null==e?void 0:e.lastName)||"",m.kI.required],DOB:[(null==e?void 0:e.DOB)||"",m.kI.required],gender:[(null==e?void 0:e.gender)||""],location:[(null==e?void 0:e.location)||""],legalEntity:[(null==e?void 0:e.legalEntity)||""]})}fieldValidation(e,i){var a,d,r;return i?(null===(a=this.Form.get(e))||void 0===a?void 0:a.valid)&&null!=(null===(d=this.Form.get(e))||void 0===d?void 0:d.value):null!=(null===(r=this.Form.get(e))||void 0===r?void 0:r.value)}save(e){var i,a,d,r,f,v;let P={practiceId:null===(i=e.value)||void 0===i?void 0:i.practice,profile:{title:"",firstName:null===(a=e.value)||void 0===a?void 0:a.firstName,middleName:"",lastName:null===(d=e.value)||void 0===d?void 0:d.lastName,DOB:null===(r=e.value)||void 0===r?void 0:r.DOB,gender:null===(f=e.value)||void 0===f?void 0:f.gender,preferredPronoun:"",language:"",maritalStatus:""},information:{preferredName:"",pronounciation:"",school:"",interests:"",tags:""},preferences:{location:null===(v=e.value)||void 0===v?void 0:v.location,billingProvider:"",treatingProvider:"",newPatientCoordinator:"",chairSideAssistant:"",treatmentCoordinator:""},emergencyContact:{name:"",contactPerson:"",emergencyContact:""},notes:""};this.addPatientServ.getPatientCWP().then(b=>{b._id?(P._id=b._id,this.patientDetailService.updatePatient(P,this.bgId).subscribe(_=>{this.alertService.success("Success","Patient has been updated successfully"),this.continueToLegalGuar(P)},_=>{console.log(_)})):this.patientDetailService.savePatient(P,this.bgId).subscribe(_=>{this.alertService.success("Success","Patient has been save successfully"),this.continueToLegalGuar(_)},_=>{console.log(_)})})}showButtonSaveCancelFunc(){this.showButtonSaveCancel=!0}closeSaveCancelFunc(){this.openTextAreaVar=!1,this.showButtonSaveCancel=!1}openTextarea(){this.openTextAreaVar=!0,this.showButtonSaveCancel=!0}getOrgBgId(){var e,i,a,d,r,f,v,P,b,_;let C=localStorage.getItem("selected_business_group"),O=this.authService.getLoggedInUser();(null==O?void 0:O.__ISSU__)?"intelliveer"==C||null==C?(this.bgId="intelliveer",this.getPracticesList("intelliveer"),this.getLocationList("intelliveer"),this.getLegalEntityList("intelliveer"),this.patientDetailService.getMapping("intelliveer").subscribe(x=>{console.log(x)})):(this.bgId=null===(e=this.selectedBusinessGroup)||void 0===e?void 0:e.bgId,this.getPracticesList(null===(i=this.selectedBusinessGroup)||void 0===i?void 0:i.bgId),this.getLocationList(null===(a=this.selectedBusinessGroup)||void 0===a?void 0:a.bgId),this.getLegalEntityList(null===(d=this.selectedBusinessGroup)||void 0===d?void 0:d.bgId),this.patientDetailService.getMapping(null===(r=this.selectedBusinessGroup)||void 0===r?void 0:r.bgId).subscribe(x=>{console.log(x)})):(this.bgId=null===(f=this.selectedBusinessGroup)||void 0===f?void 0:f.bgId,this.getPracticesList(null===(v=this.selectedBusinessGroup)||void 0===v?void 0:v.bgId),this.getLocationList(null===(P=this.selectedBusinessGroup)||void 0===P?void 0:P.bgId),this.getLegalEntityList(null===(b=this.selectedBusinessGroup)||void 0===b?void 0:b.bgId),this.patientDetailService.getMapping(null===(_=this.selectedBusinessGroup)||void 0===_?void 0:_.bgId).subscribe(x=>{console.log(x)}))}getPracticesList(e){this.patientDetailService.getPracticesList(e).subscribe(i=>{this.practiceList=i})}getLocationList(e){this.patientDetailService.getLocationsList(e).subscribe(i=>{this.locationList=i})}getLegalEntityList(e){this.patientDetailService.getLegalEntitesList(e).subscribe(i=>{this.legalEntityList=i})}openModel(e){let i=this.Form.value.firstName;null==i&&(i="");let a=this.Form.value.lastName;null==a&&(a="");let d=this.Form.value.DOB;null==d&&(d=""),""!=i||""!=a||""!=this.Form.value.gender||""!=this.Form.value.legalEntity||""!=this.Form.value.practice||""!=this.Form.value.location||""!=d?(this.Form.valid?(this.alertText="Would you like to discard or save it?",this.confirmButtonText="Save",this.cancelButtonText="Discard"):this.Form.invalid&&(this.alertText="Mandatory fields are required to save.",this.confirmButtonText=!1,this.cancelButtonText="Discard"),this.alertService.conformAlertNavigate("Please confirm",this.alertText,this.cancelButtonText,this.confirmButtonText).then(r=>{r.isConfirmed?this.discardPatient():r.isDismissed&&"cancel"==r.dismiss&&this.savePatientForm()})):(this.addPatientServ.setPatientNotPristineCWP(!1),this.router.navigate(["/dashboard/home"]))}discardPatient(){this.modalService.dismissAll(),this.addPatientServ.setPatientNotPristineCWP(!1),this.router.navigate(["/dashboard/home"])}savePatientForm(){this.modalService.dismissAll(),this.save(this.Form)}getPatentDataWithID(){this.patientDetailService.getSinglePatientData(this.bgId,this.patientID).subscribe(e=>{this.patientArray={practice:e.practiceId,firstName:e.profile.firstName,lastName:e.profile.lastName,gender:e.profile.gender,DOB:e.profile.DOB,location:e.preferences.location},this.Form.patchValue(this.patientArray),this.addPatientServ.setPatientCWP(e)},e=>{console.log(e)})}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(g.F0),t.Y36(m.qu),t.Y36(n.r),t.Y36(c.S),t.Y36(u.y),t.Y36(I.D),t.Y36(M.Z),t.Y36(T.e),t.Y36(D.Y),t.Y36(N.c),t.Y36(F.FF))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-patient-form"]],inputs:{formData:"formData",tab:"tab"},decls:62,vars:16,consts:[[3,"formGroup","submit"],["f","ngForm"],[1,"mainformsection"],[1,"two-items"],[1,"heading",2,"font-weight","bolder"],["class","heading a-link",3,"click",4,"ngIf"],["class","two-little-button",4,"ngIf"],[1,"row",2,"margin-top","-4px","margin-bottom","18px"],["class","form-control","placeholder","Leave a comment here","id","floatingTextarea2","style","\n\t\t\t\t\theight: 98px;\n\t\t\t\t\tpadding: 5px 10px 8px 6px;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tline-height: 20px;\n\t\t\t\t\tborder: 2px solid #7a7a7c;\n\t\t\t\t\tfont-style: oblique;\n\t\t\t\t\tresize: none;\n\t\t\t\t",4,"ngIf"],[1,"row","mb-3"],[1,"col"],[1,"mainformset"],[1,"label-input-gap"],["placeholder","Select","formControlName","practice",1,"mandatory-field"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select","formControlName","location"],["placeholder","Select","formControlName","legalEntity"],["type","text","placeholder","","name","","formControlName","firstName",1,"form-control","mandatory-field",3,"ngModel","ngModelChange"],["type","text","placeholder","","name","","formControlName","lastName",1,"form-control","mandatory-field",3,"ngModel","ngModelChange"],["type","date","placeholder","","name","","formControlName","DOB",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"required"],["placeholder","Select","formControlName","gender"],[3,"value"],[1,"row","two-final-buttons"],[1,"btn","btn-light","btn-light-custom",3,"click"],["type","button",1,"btn","btn-dark","btn-dark-custom",3,"disabled","click"],["content",""],[1,"heading","a-link",3,"click"],[1,"two-little-button"],["placeholder","Leave a comment here","id","floatingTextarea2",1,"form-control",2,"height","98px","padding","5px 10px 8px 6px","font-size","12px","line-height","20px","border","2px solid #7a7a7c","font-style","oblique","resize","none"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","text-center"],["style"," font-size: 20px; padding: 0px 20px;",4,"ngIf"],[1,"modal-footer","text-center"],["type","button",1,"btn","btn-dark",3,"disabled","click"],["type","button",1,"btn","btn-dark",3,"click"],[2,"font-size","20px","padding","0px 20px"]],template:function(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"form",0,1),t.NdJ("submit",function(){t.CHM(a);const r=t.MAs(1);return i.save(r.value)}),t.TgZ(2,"div",2)(3,"div",3)(4,"h6",4),t._uU(5,"Patient"),t.qZA(),t.YNc(6,L,2,0,"a",5),t.YNc(7,Z,5,0,"div",6),t.qZA(),t.TgZ(8,"div",7),t.YNc(9,B,1,0,"textarea",8),t.qZA(),t.TgZ(10,"div",9)(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14,"Practice"),t.qZA(),t.TgZ(15,"ng-select",13),t.YNc(16,J,2,2,"ng-option",14),t.qZA()()(),t.TgZ(17,"div",10)(18,"div",11)(19,"label",12),t._uU(20,"Location"),t.qZA(),t.TgZ(21,"ng-select",15),t.YNc(22,U,2,2,"ng-option",14),t.qZA()()(),t.TgZ(23,"div",10)(24,"div",11)(25,"label",12),t._uU(26,"Legal Entity"),t.qZA(),t.TgZ(27,"ng-select",16),t.YNc(28,G,2,2,"ng-option",14),t.qZA()()()(),t.TgZ(29,"div",9)(30,"div",10)(31,"div",11)(32,"label",12),t._uU(33,"What is First Name of the Patient?"),t.qZA(),t.TgZ(34,"input",17),t.NdJ("ngModelChange",function(r){return i.patient.firstName=r}),t.qZA()()(),t.TgZ(35,"div",10)(36,"div",11)(37,"label",12),t._uU(38,"Last Name"),t.qZA(),t.TgZ(39,"input",18),t.NdJ("ngModelChange",function(r){return i.patient.lastName=r}),t.qZA()()(),t.TgZ(40,"div",10)(41,"div",11)(42,"label",12),t._uU(43,"Date of Birth"),t.qZA(),t.TgZ(44,"input",19),t.NdJ("ngModelChange",function(r){return i.patient.dateBirth=r}),t.qZA()()(),t.TgZ(45,"div",10)(46,"div",11)(47,"label",20),t._uU(48,"Gender"),t.qZA(),t.TgZ(49,"ng-select",21)(50,"ng-option",22),t._uU(51,"Male"),t.qZA(),t.TgZ(52,"ng-option",22),t._uU(53,"Female"),t.qZA()()()()(),t.TgZ(54,"div",23)(55,"div",3)(56,"a",24),t.NdJ("click",function(){t.CHM(a);const r=t.MAs(61);return i.openModel(r)}),t._uU(57,"Exit"),t.qZA(),t.TgZ(58,"button",25),t.NdJ("click",function(){return i.save(i.Form)}),t._uU(59," Save and continue "),t.qZA()()()()(),t.YNc(60,w,11,3,"ng-template",null,26,t.W1O)}2&e&&(t.Q6J("formGroup",i.Form),t.xp6(6),t.Q6J("ngIf",0==i.showButtonSaveCancel),t.xp6(1),t.Q6J("ngIf",1==i.showButtonSaveCancel),t.xp6(2),t.Q6J("ngIf",1==i.openTextAreaVar),t.xp6(7),t.Q6J("ngForOf",i.practiceList),t.xp6(6),t.Q6J("ngForOf",i.locationList),t.xp6(6),t.Q6J("ngForOf",i.legalEntityList),t.xp6(6),t.Q6J("ngModel",i.patient.firstName),t.xp6(5),t.Q6J("ngModel",i.patient.lastName),t.xp6(5),t.Q6J("ngClass",t.VKq(14,R,"coordWithProspect"==i.tab))("ngModel",i.patient.dateBirth),t.xp6(6),t.Q6J("value","male"),t.xp6(2),t.Q6J("value","female"),t.xp6(6),t.Q6J("disabled",i.Form.invalid))},directives:[m._Y,m.JL,m.sg,S.O5,A.w9,m.JJ,m.u,S.sg,A.jq,m.Fj,S.mk],styles:[".formstyle[_ngcontent-%COMP%]{height:82%;overflow:auto}.row.sticky[_ngcontent-%COMP%]{z-index:999;background:#fff}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{display:flex;align-items:center}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:22px;margin-left:4px}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   label.btn.btnoutlinesecondary[_ngcontent-%COMP%]{background:#39383a;height:38px;line-height:38px;width:130px!important;display:block;padding:0;margin:0!important;min-width:inherit!important;flex:none;border-radius:6px 0 0 6px}.mainformsection[_ngcontent-%COMP%]   .formrow[_ngcontent-%COMP%]   .buttoninput[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:#fff;border:1px solid #ced4da;border-right:0;border-radius:6px 0 0 6px;padding:0 8px}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btnoutlinesecondary2[_ngcontent-%COMP%]{background:#fff;height:38px!important;line-height:39px;width:110px!important;display:block;padding:0 0 0 16px;margin:0!important;min-width:inherit!important;flex:none;border-radius:0 6px 6px 0!important;color:#000;border-color:#bcbec0!important;text-align:left;border-left:0!important;box-shadow:none!important}.mainformsection[_ngcontent-%COMP%]   input.btnoutlinesecondary3[_ngcontent-%COMP%]{background:#fff;height:38px!important;line-height:39px;width:110px!important;display:block;padding:0 0 0 16px;margin:0!important;min-width:inherit!important;flex:none;border-radius:0 6px 6px 0!important;color:#000;border-color:#bcbec0;text-align:left;border-left:0!important}.pluscentered[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.type-width[_ngcontent-%COMP%]{width:15%}.large-width[_ngcontent-%COMP%]{width:35%}.two-items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.start[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:10px}.step[_ngcontent-%COMP%]{position:relative;min-height:1em;left:2px}.title[_ngcontent-%COMP%]{line-height:1.5em;font-weight:700}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-top:1.5em}.step[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:static;height:0}.step[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){margin-left:1.5em;padding-left:1em}.active-circle[_ngcontent-%COMP%]{background:white;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #f9ac42}.later-circle[_ngcontent-%COMP%]{background:#bcbec0;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #bcbec0}.complete-circle[_ngcontent-%COMP%]{background:#f9ac42;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #f9ac42}.step[_ngcontent-%COMP%]:last-child   .circle[_ngcontent-%COMP%]:after{display:none}.step.step-active[_ngcontent-%COMP%]{font-weight:700}.step.step-active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:#fff;outline-color:#000;outline:violet}.vertical-line-active[_ngcontent-%COMP%]{border-left:2px solid #f9ac42;height:2rem;margin-left:8px;margin-top:-3px}.vertical-line-not-active[_ngcontent-%COMP%]{border-left:2px solid #bcbec0;height:2rem;margin-left:8px;margin-top:-3px}.active[_ngcontent-%COMP%]{color:#000!important;font-weight:400}.nav-link[_ngcontent-%COMP%]{display:block;padding:.5rem 1rem;color:#000;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{color:#ec6e4d!important;background-color:transparent!important;border-bottom:2px solid #ec6e4d}"]}),l})()},865:(E,y,o)=>{o.d(y,{_:()=>n});var s=o(9808),m=o(9759),p=o(4376),t=o(2382),g=o(5e3);let n=(()=>{class c{}return c.\u0275fac=function(I){return new(I||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[[s.ez,m.IJ,p.A0,t.u5,t.UX]]}),c})()},4540:(E,y,o)=>{o.d(y,{r:()=>p});var s=o(531),m=o(5e3);let p=(()=>{class t{constructor(){this.familyMembers=[{role:"Father",info:[]},{role:"Mother",info:[]},{role:"Brother",info:[]},{role:"Sister",info:[]}],this.patientNotPristi=!1,this.legalGuardNotPristi=!1,this.paymentPartyNotPristi=!1,this.insuranSubscNotPristi=!1,this.exterProvNotPristi=!1,this.referrerNotPristi=!1,this.familyMembNotPristi=!1,this.conditions=[]}setPatientFamiMemb(n,c){for(let u=0;u<this.familyMembers.length;u++)this.familyMembers[u].role==n&&(this.familyMembers[u].info=c);localStorage.setItem("patientFamilyMembers",JSON.stringify(this.familyMembers))}setLegalGuardToPati(n){var c=this;return(0,s.Z)(function*(){c.LegalGuardToPati=n,localStorage.setItem("LegalGuardToPati",JSON.stringify(n)),c.LegalGuardToPati=yield JSON.parse(localStorage.getItem("LegalGuardToPati"))})()}getLegalGuardToPati(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("LegalGuardToPati"))})()}getLegalGuardFamiMemb(){var n=this;return(0,s.Z)(function*(){null!=JSON.parse(localStorage.getItem("patientFamilyMembers"))&&(n.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),n.familyMembers.filter(u=>u.role==JSON.parse(localStorage.getItem("LegalGuardToPati"))))})()}setLegalGuard(n){localStorage.setItem("LegalGuardian",JSON.stringify(n))}getLegalGuard(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("LegalGuardian"))})()}setPaymPartyToPati(n){var c=this;return(0,s.Z)(function*(){c.PaymPartyToPati=n,localStorage.setItem("PaymPartyToPati",JSON.stringify(n)),c.PaymPartyToPati=yield JSON.parse(localStorage.getItem("PaymPartyToPati"))})()}getPaymPartyToPati(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("PaymPartyToPati"))})()}getPaymPartyFamiMemb(){var n=this;return(0,s.Z)(function*(){null!=JSON.parse(localStorage.getItem("patientFamilyMembers"))&&(n.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),n.familyMembers.filter(u=>u.role==JSON.parse(localStorage.getItem("PaymPartyToPati"))))})()}setPaymParty(n){localStorage.setItem("PaymParty",JSON.stringify(n))}getPaymParty(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("PaymParty"))})()}setInsuSubscToPati(n){var c=this;return(0,s.Z)(function*(){c.InsuSubscToPati=n,localStorage.setItem("InsuSubscToPati",JSON.stringify(n)),c.InsuSubscToPati=yield JSON.parse(localStorage.getItem("InsuSubscToPati"))})()}getInsuSubscToPati(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("InsuSubscToPati"))})()}getInsuSubscFamiMemb(){var n=this;return(0,s.Z)(function*(){if(null!=JSON.parse(localStorage.getItem("patientFamilyMembers")))return n.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),n.familyMembers.filter(u=>u.role==JSON.parse(localStorage.getItem("InsuSubscToPati")))[0].info})()}setInsuSubsc(n){localStorage.setItem("InsuSubsc",JSON.stringify(n))}getInsuSubsc(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("InsuSubsc"))})()}setFamylMembToPati(n){var c=this;return(0,s.Z)(function*(){c.FamylMembToPati=n,localStorage.setItem("FamylMembToPati",JSON.stringify(n)),c.FamylMembToPati=yield JSON.parse(localStorage.getItem("FamylMembToPati"))})()}getFamylMembToPati(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("FamylMembToPati"))})()}getFamylMembFamylMemb(){var n=this;return(0,s.Z)(function*(){if(null!=JSON.parse(localStorage.getItem("patientFamilyMembers")))return n.familyMembers=yield JSON.parse(localStorage.getItem("patientFamilyMembers")),n.familyMembers.filter(u=>u.role==JSON.parse(localStorage.getItem("FamylMembToPati")))[0].info})()}setFamyMemb(n){localStorage.setItem("FamyMemb",JSON.stringify(n))}getFamyMemb(){return(0,s.Z)(function*(){return JSON.parse(localStorage.getItem("FamyMemb"))})()}setpatientNotPristine(n){this.patientNotPristi=n}getpatientNotPristine(){return this.patientNotPristi}setlegalGuardNotPristine(n){this.legalGuardNotPristi=n}getlegalGuardNotPristine(){return this.legalGuardNotPristi}setpaymentPartyNotPristine(n){this.paymentPartyNotPristi=n}getpaymentPartyNotPristine(){return this.paymentPartyNotPristi}setinsuranSubscNotPristine(n){this.insuranSubscNotPristi=n}getinsuranSubscNotPristine(){return this.insuranSubscNotPristi}setExterProvNotPristine(n){this.exterProvNotPristi=n}getExterProvNotPristine(){return this.exterProvNotPristi}setReferrerNotPristine(n){this.referrerNotPristi=n}getReferrerNotPristine(){return this.referrerNotPristi}setFamilyMembNotPristine(n){this.familyMembNotPristi=n}getFamilyMembNotPristine(){return this.familyMembNotPristi}setFalseAllNotPristine(){this.setpatientNotPristine(!1),this.setlegalGuardNotPristine(!1),this.setpaymentPartyNotPristine(!1),this.setinsuranSubscNotPristine(!1),this.setExterProvNotPristine(!1),this.setReferrerNotPristine(!1),this.setFamilyMembNotPristine(!1)}setConditions(){this.conditions=[],this.conditions.push({section:"patient",condition:this.getpatientNotPristine()}),this.conditions.push({section:"legalGuard",condition:this.getlegalGuardNotPristine()}),this.conditions.push({section:"referrer",condition:this.getReferrerNotPristine()}),this.conditions.push({section:"insuranSubsc",condition:this.getinsuranSubscNotPristine()}),this.conditions.push({section:"exterprov",condition:this.getExterProvNotPristine()}),this.conditions.push({section:"paymentParty",condition:this.getpaymentPartyNotPristine()}),this.conditions.push({section:"familyMemb",condition:this.getFamilyMembNotPristine()})}getConditions(){return this.conditions}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},528:(E,y,o)=>{o.d(y,{D:()=>m});var s=o(5e3);let m=(()=>{class p{constructor(){this.businessGroupNotPristi=!1,this.legalEntityNotPristi=!1,this.locationNotPristi=!1,this.practiceNotPristi=!1,this.conditions=[]}setbusinessGroupNotPristine(g){this.businessGroupNotPristi=g}getbusinessGroupNotPristine(){return this.businessGroupNotPristi}setlegalEntityBenfNotPristine(g){this.legalEntityNotPristi=g}getlegalEntityBenfNotPristine(){return this.legalEntityNotPristi}setlocationNotPristine(g){this.locationNotPristi=g}getlocationNotPristine(){return this.locationNotPristi}setpracticeNotPristine(g){this.practiceNotPristi=g}getpracticeNotPristine(){return this.practiceNotPristi}setFalseAllNotPristine(){this.setbusinessGroupNotPristine(!1),this.setlegalEntityBenfNotPristine(!1),this.setlocationNotPristine(!1),this.setpracticeNotPristine(!1)}setConditions(){this.conditions=[],this.conditions.push({section:"businessgroup",condition:this.getbusinessGroupNotPristine()}),this.conditions.push({section:"legalentity",condition:this.getlegalEntityBenfNotPristine()}),this.conditions.push({section:"location",condition:this.getlocationNotPristine()}),this.conditions.push({section:"practice",condition:this.getpracticeNotPristine()})}getConditions(){return this.conditions}}return p.\u0275fac=function(g){return new(g||p)},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
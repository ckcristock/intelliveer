"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[4180],{4180:(O,m,a)=>{a.r(m),a.d(m,{FamilyMembersModule:()=>T});var d=a(9808),s=a(4996),h=a(1176),e=a(5e3),u=a(192),g=a(9196),l=a(2382);const f=["radio1"],b=["radio2"],_=["radio3"];function C(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"a",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().openTextarea()}),e._uU(1,"Add Script"),e.qZA()}}function M(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",23)(1,"a",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeSaveCancelFunc()}),e._uU(2,"Save Script"),e.qZA(),e.TgZ(3,"a",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeSaveCancelFunc()}),e._uU(4,"Cancel"),e.qZA()()}}function x(i,r){1&i&&e._UZ(0,"textarea",24)}function v(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",10)(1,"p",11),e._uU(2,"How many?"),e.qZA(),e.TgZ(3,"div",12)(4,"div",13)(5,"input",25,26),e.NdJ("change",function(n){return e.CHM(t),e.oxw().checkFamilyMemberCount(n)}),e.qZA(),e.TgZ(7,"label",27),e._uU(8,"1"),e.qZA()(),e.TgZ(9,"div",13)(10,"input",28,29),e.NdJ("click",function(n){return e.CHM(t),e.oxw().uncheck(n)})("change",function(n){return e.CHM(t),e.oxw().checkFamilyMemberCount(n)}),e.qZA(),e.TgZ(12,"label",30),e._uU(13,"2"),e.qZA()(),e.TgZ(14,"div",13)(15,"input",31,32),e.NdJ("click",function(n){return e.CHM(t),e.oxw().uncheck(n)})("change",function(n){return e.CHM(t),e.oxw().checkFamilyMemberCount(n)}),e.qZA(),e.TgZ(17,"label",33),e._uU(18,"3"),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(5),e.Q6J("checked",1==t.whichIsChecked),e.uIk("disabled",t.disableYesNo),e.xp6(5),e.Q6J("checked",2==t.whichIsChecked),e.uIk("disabled",t.disableRadioBTowThree[0][0]),e.xp6(5),e.Q6J("checked",3==t.whichIsChecked),e.uIk("disabled",t.disableRadioBTowThree[1][1])}}let p=(()=>{class i{constructor(t,o,n){this.router=t,this.addPatientServ=o,this.routes=n,this.menuItems=h.U,this.provideFamilyMember=!0,this.whichIsChecked=1,this.showButtonSaveCancel=!1,this.openTextAreaVar=!1,this.coordWithProspRoutes=[],this.disableYesNo=null,this.disableRadioBTowThree=[{0:null},{1:null}]}ngOnInit(){try{this.addPatientServ.getPatientsSavedUnsaved().subscribe(t=>{var o;this.disableYesNo=!0===(null===(o=t[0])||void 0===o?void 0:o.saved)?"disabled":null;for(let n=0;n<t.length-1;n++)console.log("i",n),this.disableRadioBTowThree[n][n]=1==t[n+1].saved?"disabled":null})}catch(t){this.errors="Us a error"}this.whichIsChecked=localStorage.getItem("familyMemberCount"),console.log(this.whichIsChecked),null==this.whichIsChecked&&(this.whichIsChecked=1,localStorage.setItem("familyMemberCount","1"),this.provideFamilyMember=!0)}continueToAppointment(){this.coordWithProspRoutes=this.routes.getCoordWithProspRoutes(),this.router.navigate([this.coordWithProspRoutes[6].child[0].url])}checkFamilyMemberCount(t){localStorage.setItem("familyMemberCount",t.target.value),this.addPatientServ.setTaken(localStorage.getItem("familyMemberCount"))}changeProvideFM(t){console.log(t.target.value),"true"===t.target.value?(this.provideFamilyMember=!0,this.whichIsChecked=1,localStorage.setItem("familyMemberCount","1")):(this.provideFamilyMember=!1,localStorage.setItem("familyMemberCount","0"))}showButtonSaveCancelFunc(){this.showButtonSaveCancel=!0}closeSaveCancelFunc(){this.openTextAreaVar=!1,this.showButtonSaveCancel=!1}openTextarea(){this.openTextAreaVar=!0,this.showButtonSaveCancel=!0}uncheck(t){let o=t.target.value,n=parseInt(localStorage.getItem("familyMemberCount")||"0");2==n&&2==o?(this.radio1.nativeElement.checked=!0,this.whichIsChecked=1,localStorage.setItem("familyMemberCount","1"),this.addPatientServ.setTaken(localStorage.getItem("familyMemberCount"))):3==n&&3==o&&(this.radio2.nativeElement.checked=!0,this.whichIsChecked=2,localStorage.setItem("familyMemberCount","2"),this.addPatientServ.setTaken(localStorage.getItem("familyMemberCount")))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.F0),e.Y36(u.S),e.Y36(g.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-family-members"]],viewQuery:function(t,o){if(1&t&&(e.Gf(f,5),e.Gf(b,5),e.Gf(_,5)),2&t){let n;e.iGM(n=e.CRH())&&(o.radio1=n.first),e.iGM(n=e.CRH())&&(o.radio2=n.first),e.iGM(n=e.CRH())&&(o.radio3=n.first)}},decls:31,vars:6,consts:[["autocomplete","off"],[1,"mainformsection"],[1,"two-items"],[1,"heading",2,"font-weight","bolder"],["class","heading a-link",3,"click",4,"ngIf"],["class","two-little-button",4,"ngIf"],[1,"row",2,"margin-top","11px","margin-bottom","18px"],["class","form-control","placeholder","Leave a comment here","id","floatingTextarea2","style","height: 98px; padding: 5px 10px 8px 6px; font-size: 12px; line-height : 20px; border: 2px solid #7a7a7c; font-style: oblique; resize: none;",4,"ngIf"],[1,"row",2,"margin-top","-15px !important"],[1,"col-6"],[1,"mainformset"],[1,"required"],["role","group","aria-label","Basic radio toggle button group",1,"btn-group",2,"margin-top","-3px !important"],[1,"label-input-gap"],["type","radio","name","radioyesno","id","btnradio1","autocomplete","off","checked","","value","true",1,"form-check-input",3,"change"],["for","btnradio1",1,"form-check-label"],["type","radio","name","radioyesno","id","btnradio2","autocomplete","off","value","false",1,"form-check-input",3,"change"],["for","btnradio2",1,"form-check-label"],["class","mainformset",4,"ngIf"],[1,"row","two-final-buttons",2,"margin-top","59px !important"],[1,"btn","btn-light","btn-light-custom"],["type","button",1,"btn","btn-dark","btn-dark-custom",3,"click"],[1,"heading","a-link",3,"click"],[1,"two-little-button"],["placeholder","Leave a comment here","id","floatingTextarea2",1,"form-control",2,"height","98px","padding","5px 10px 8px 6px","font-size","12px","line-height","20px","border","2px solid #7a7a7c","font-style","oblique","resize","none"],["type","radio","name","membersCount","id","members1","autocomplete","off","value","1",1,"form-check-input",3,"checked","change"],["radio1",""],["for","members1",1,"form-check-label"],["type","radio","name","membersCount","id","members2","value","2",1,"form-check-input",3,"checked","click","change"],["radio2",""],["for","members2",1,"form-check-label"],["type","radio","name","membersCount","id","members3","autocomplete","off","value","3",1,"form-check-input",3,"checked","click","change"],["radio3",""],["for","members3",1,"form-check-label"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h6",3),e._uU(4,"Family Members"),e.qZA(),e.YNc(5,C,2,0,"a",4),e.YNc(6,M,5,0,"div",5),e.qZA(),e.TgZ(7,"div",6),e.YNc(8,x,1,0,"textarea",7),e.qZA(),e.TgZ(9,"div",8)(10,"div",9)(11,"div",10)(12,"p",11),e._uU(13," Are there any other family members that would like to be seen? "),e.qZA(),e.TgZ(14,"div",12)(15,"div",13)(16,"input",14),e.NdJ("change",function(c){return o.changeProvideFM(c)}),e.qZA(),e.TgZ(17,"label",15),e._uU(18,"Yes"),e.qZA()(),e.TgZ(19,"div",13)(20,"input",16),e.NdJ("change",function(c){return o.changeProvideFM(c)}),e.qZA(),e.TgZ(21,"label",17),e._uU(22,"No"),e.qZA()()()()(),e.TgZ(23,"div",9),e.YNc(24,v,19,6,"div",18),e.qZA()(),e.TgZ(25,"div",19)(26,"div",2)(27,"button",20),e._uU(28,"Exit"),e.qZA(),e.TgZ(29,"button",21),e.NdJ("click",function(){return o.continueToAppointment()}),e._uU(30,"Next"),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",0==o.showButtonSaveCancel),e.xp6(1),e.Q6J("ngIf",1==o.showButtonSaveCancel),e.xp6(2),e.Q6J("ngIf",1==o.openTextAreaVar),e.xp6(8),e.uIk("disabled",o.disableYesNo),e.xp6(4),e.uIk("disabled",o.disableYesNo),e.xp6(4),e.Q6J("ngIf",o.provideFamilyMember))},directives:[l._Y,l.JL,l.F,d.O5],styles:[".formstyle[_ngcontent-%COMP%]{height:82%;overflow:auto}.row.sticky[_ngcontent-%COMP%]{z-index:999;background:#fff}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{display:flex;align-items:center}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:22px;margin-left:4px}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   label.btn.btnoutlinesecondary[_ngcontent-%COMP%]{background:#39383a;height:38px;line-height:38px;width:130px!important;display:block;padding:0;margin:0!important;min-width:inherit!important;flex:none;border-radius:6px 0 0 6px}.mainformsection[_ngcontent-%COMP%]   .formrow[_ngcontent-%COMP%]   .buttoninput[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:#fff;border:1px solid #ced4da;border-right:0;border-radius:6px 0 0 6px;padding:0 8px}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btnoutlinesecondary2[_ngcontent-%COMP%]{background:#fff;height:38px!important;line-height:39px;width:110px!important;display:block;padding:0 0 0 16px;margin:0!important;min-width:inherit!important;flex:none;border-radius:0 6px 6px 0!important;color:#000;border-color:#bcbec0!important;text-align:left;border-left:0!important;box-shadow:none!important}.mainformsection[_ngcontent-%COMP%]   input.btnoutlinesecondary3[_ngcontent-%COMP%]{background:#fff;height:38px!important;line-height:39px;width:110px!important;display:block;padding:0 0 0 16px;margin:0!important;min-width:inherit!important;flex:none;border-radius:0 6px 6px 0!important;color:#000;border-color:#bcbec0;text-align:left;border-left:0!important}.pluscentered[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.type-width[_ngcontent-%COMP%]{width:15%}.large-width[_ngcontent-%COMP%]{width:35%}.two-items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.start[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:10px}.step[_ngcontent-%COMP%]{position:relative;min-height:1em;left:2px}.title[_ngcontent-%COMP%]{line-height:1.5em;font-weight:700}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-top:1.5em}.step[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:static;height:0}.step[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){margin-left:1.5em;padding-left:1em}.active-circle[_ngcontent-%COMP%]{background:white;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #f9ac42}.later-circle[_ngcontent-%COMP%]{background:#bcbec0;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #bcbec0}.complete-circle[_ngcontent-%COMP%]{background:#f9ac42;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #f9ac42}.step[_ngcontent-%COMP%]:last-child   .circle[_ngcontent-%COMP%]:after{display:none}.step.step-active[_ngcontent-%COMP%]{font-weight:700}.step.step-active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:#fff;outline-color:#000;outline:violet}.vertical-line-active[_ngcontent-%COMP%]{border-left:2px solid #f9ac42;height:2rem;margin-left:8px;margin-top:-3px}.vertical-line-not-active[_ngcontent-%COMP%]{border-left:2px solid #bcbec0;height:2rem;margin-left:8px;margin-top:-3px}.active[_ngcontent-%COMP%]{color:#000!important;font-weight:400}.nav-link[_ngcontent-%COMP%]{display:block;padding:.5rem 1rem;color:#000;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{color:#ec6e4d!important;background-color:transparent!important;border-bottom:2px solid #ec6e4d}"]}),i})();const y=[{path:"",component:p,children:[{path:"",component:p}]}];let k=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[s.Bz.forChild(y)],s.Bz]}),i})();var w=a(9759),P=a(4376);let T=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.ez,k,w.IJ,P.A0,l.u5,l.UX]]}),i})()}}]);
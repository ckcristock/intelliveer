"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2208],{2208:(g,l,e)=>{e.r(l),e.d(l,{PatientModule:()=>f});var u=e(9808),a=e(4996),c=e(877),n=e(5e3),p=e(9196),s=e(9759);function m(t,r){if(1&t&&(n.TgZ(0,"li"),n._UZ(1,"img",8),n.qZA()),2&t){const o=r.$implicit;n.Tol(null==o?null:o.class),n.xp6(1),n.s9C("src",o.icon,n.LSH),n.s9C("ngbTooltip",o.title),n.Q6J("routerLink",o.url)}}const d=[{path:"",component:(()=>{class t{constructor(o,i){this.router=o,this.routes=i,this.menuItems=c.nI,this.navbarOpen=!1,this.navbarNumb=1,this.patientInfo=[{preferredName:"Preferred Name",pronunciation:"Pronunciation",time:"11 y 5 m",letter:"M",gender:"She",active:"Active Tx",phase:"Phase 1",hes:"Hes.",js:"Js"}]}ngOnInit(){}setNavbarNum(o){this.navbarNumb=o,console.log("num",o)}insurances(){return!!this.router.url.includes(this.routes.getPatientInsuranceUrl())}patientUser(){return!!this.router.url.includes(this.routes.getPatientUserUrl())}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(a.F0),n.Y36(p.o))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-patient"]],decls:42,vars:10,consts:[[1,"container","content",2,"padding-top","0px"],[1,"row","mini-icon-navbar","d-flex","justify-content-center","align-content-center","mb-3",2,"margin-top","0px","height","90px !important"],[1,"d-flex","justify-content-center","align-content-center",2,"gap","4.5rem"],[3,"class",4,"ngFor","ngForOf"],[1,"separator"],[2,"margin-left","20px"],[1,"row"],[1,"col","component-view"],["alt","","routerLinkActive","active",3,"src","routerLink","ngbTooltip"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"ul",2),n.YNc(3,m,2,6,"li",3),n.qZA()(),n.TgZ(4,"div",4)(5,"span",5),n._uU(6),n.qZA(),n.TgZ(7,"span"),n._uU(8,"\u2022"),n.qZA(),n.TgZ(9,"span"),n._uU(10),n.qZA(),n.TgZ(11,"span"),n._uU(12,"\u2022"),n.qZA(),n.TgZ(13,"span"),n._uU(14),n.qZA(),n.TgZ(15,"span"),n._uU(16,"\u2022"),n.qZA(),n.TgZ(17,"span"),n._uU(18),n.qZA(),n.TgZ(19,"span"),n._uU(20,"\u2022"),n.qZA(),n.TgZ(21,"span"),n._uU(22),n.qZA(),n.TgZ(23,"span"),n._uU(24,"\u2022"),n.qZA(),n.TgZ(25,"span"),n._uU(26),n.qZA(),n.TgZ(27,"span"),n._uU(28,"\u2022"),n.qZA(),n.TgZ(29,"span"),n._uU(30),n.qZA(),n.TgZ(31,"span"),n._uU(32,"\u2022"),n.qZA(),n.TgZ(33,"span"),n._uU(34),n.qZA(),n.TgZ(35,"span"),n._uU(36,"\u2022"),n.qZA(),n.TgZ(37,"span"),n._uU(38),n.qZA()(),n.TgZ(39,"div",6)(40,"div",7),n._UZ(41,"router-outlet"),n.qZA()()()),2&o&&(n.xp6(3),n.Q6J("ngForOf",i.menuItems),n.xp6(3),n.Oqu(i.patientInfo[0].preferredName),n.xp6(4),n.Oqu(i.patientInfo[0].pronunciation),n.xp6(4),n.Oqu(i.patientInfo[0].time),n.xp6(4),n.Oqu(i.patientInfo[0].letter),n.xp6(4),n.Oqu(i.patientInfo[0].gender),n.xp6(4),n.Oqu(i.patientInfo[0].active),n.xp6(4),n.Oqu(i.patientInfo[0].phase),n.xp6(4),n.Oqu(i.patientInfo[0].hes),n.xp6(4),n.Oqu(i.patientInfo[0].js))},directives:[u.sg,a.Od,a.rH,s._L,a.lC],styles:['.mini-icon-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.mini-icon-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.mini-icon-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:18px}.mini-icon-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .mini-icon-navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{filter:invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:3}.component-view[_ngcontent-%COMP%]{height:calc(100vh - 200px);overflow-x:hidden;overflow-y:auto}.ol[_ngcontent-%COMP%]{margin-left:8px;padding:2px;list-style:none}.accord[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]{background-color:#fff;border:none!important}ol[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]:hover{color:var(--primary)}.title[_ngcontent-%COMP%]{width:25px;height:2px;display:flex;justify-content:center;align-items:center}.icon[_ngcontent-%COMP%]{height:25px!important}.separator[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;margin-bottom:20px;font-weight:550}.separator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:20px}.separator[_ngcontent-%COMP%]:before, .separator[_ngcontent-%COMP%]:after{content:"";flex:1;border-bottom:1px solid #ededee}.separator[_ngcontent-%COMP%]:not(:empty):before{margin-right:.25em}.separator[_ngcontent-%COMP%]:not(:empty):after{margin-left:.25em}']}),t})(),children:[{path:"",redirectTo:"patient-user",pathMatch:"full"},{path:"patient-user",loadChildren:()=>Promise.all([e.e(8592),e.e(3133)]).then(e.bind(e,3133)).then(t=>t.PatientUserModule)},{path:"insurance",loadChildren:()=>e.e(602).then(e.bind(e,602)).then(t=>t.InsuranceModule)},{path:"consultation",loadChildren:()=>e.e(3260).then(e.bind(e,1534)).then(t=>t.ConsultationModule)},{path:"camera",loadChildren:()=>e.e(8488).then(e.bind(e,8488)).then(t=>t.CameraModule)}]}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.Bz.forChild(d)],a.Bz]}),t})();var P=e(5503);let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.ez,h,P.D,s.Gs,s.HK]]}),t})()},5503:(g,l,e)=>{e.d(l,{D:()=>c});var u=e(9808),a=e(5e3);let c=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[u.ez]]}),n})()}}]);
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3016],{5417:(M,h,c)=>{c.d(h,{j:()=>_});var e=c(5e3);let _=(()=>{class p{constructor(u){this._el=u,this.spiedTags=["DIV"],this.offsetIncrement=70,this.sectionChange=new e.vpe,this.currentSection=""}onScroll(u){let m="";const C=this._el.nativeElement.children,b=u.target.scrollTop,Z=u.target.offsetTop+this.offsetIncrement;for(let T=0;T<C.length;T++){const x=C[T];this.spiedTags.some(r=>r===x.tagName)&&x.offsetTop-Z<=b&&(m=x.id)}m!==this.currentSection&&(this.currentSection=m,this.sectionChange.emit(this.currentSection))}}return p.\u0275fac=function(u){return new(u||p)(e.Y36(e.SBq))},p.\u0275dir=e.lG2({type:p,selectors:[["","scrollSpy",""]],hostBindings:function(u,m){1&u&&e.NdJ("scroll",function(b){return m.onScroll(b)})},inputs:{spiedTags:"spiedTags",offsetIncrement:"offsetIncrement"},outputs:{sectionChange:"sectionChange"}}),p})()},1762:(M,h,c)=>{c.d(h,{B:()=>x});var e=c(5e3),_=c(4996),p=c(9808);const t=function(r){return{active:r}};function u(r,g){if(1&r){const l=e.EpF();e.TgZ(0,"a",7),e.NdJ("click",function(){const O=e.CHM(l).$implicit;return e.oxw().scroll(O)}),e._uU(1),e.qZA()}if(2&r){const l=g.$implicit,d=e.oxw();e.Q6J("ngClass",e.VKq(2,t,d.activeClass===l.id)),e.xp6(1),e.Oqu(l.title)}}function m(r,g){if(1&r){const l=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){return e.CHM(l),e.oxw().handleSaveBtnClicked()}),e._UZ(1,"img",9),e.qZA()}if(2&r){const l=e.oxw();e.Q6J("disabled",l.disableSaveBtn)}}function C(r,g){if(1&r){const l=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(l),e.oxw().handleAddCancelClicked()}),e._UZ(1,"img",11),e.qZA()}}function b(r,g){if(1&r){const l=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){return e.CHM(l),e.oxw().handleSaveCancelClicked()}),e._UZ(1,"img",12),e.qZA()}}function Z(r,g){1&r&&(e.TgZ(0,"button",13),e._UZ(1,"img",14),e.qZA())}function T(r,g){if(1&r){const l=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(l);const f=e.oxw();return f.editButtonURL(null==f.editButton?null:f.editButton.url)}),e._UZ(1,"img",15),e.qZA()}}let x=(()=>{class r{constructor(l){this.router=l,this.activeClass="init",this.mode="menu",this.saveBtn=!1,this.disableSaveBtn=!1,this.cancelBtn=!1,this.disableCancelBtn=!1,this.addBtn=!1,this.disableAddBtn=!1,this.onCancel=new e.vpe,this.onSave=new e.vpe,this.onAdd=new e.vpe,this.menuItems=[]}ngOnInit(){}ngAfterContentInit(){this.activeClass=0!=this.menuItems.length?this.menuItems[0].id:""}scroll(l){const d=document.getElementById(l.id);d&&d.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}handleSaveBtnClicked(){this.onSave.emit()}handleSaveCancelClicked(){this.onCancel.emit()}handleAddCancelClicked(){this.onAdd.emit()}editButtonURL(l){this.router.navigate([l])}}return r.\u0275fac=function(l){return new(l||r)(e.Y36(_.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-nav-bar-pills"]],inputs:{activeClass:"activeClass",mode:"mode",saveBtn:"saveBtn",disableSaveBtn:"disableSaveBtn",cancelBtn:"cancelBtn",disableCancelBtn:"disableCancelBtn",addBtn:"addBtn",editButton:"editButton",disableAddBtn:"disableAddBtn",menuItems:"menuItems"},outputs:{onCancel:"onCancel",onSave:"onSave",onAdd:"onAdd"},decls:10,vars:6,consts:[["id","navbar-pills"],[1,"left",2,"margin-left","0px"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"right"],["class","save",3,"disabled","click",4,"ngIf"],["class","cancel",3,"click",4,"ngIf"],["class","save",4,"ngIf"],[3,"ngClass","click"],[1,"save",3,"disabled","click"],["src","/assets/icons/save.svg","alt",""],[1,"cancel",3,"click"],["src","/assets/icons/add.svg","alt",""],["src","/assets/icons/cancel.svg","alt",""],[1,"save"],["src","/assets/icons/Add-Patient-Wizard-Green.svg","alt",""],["src","/assets/icons/Add-Patient-Wizard-Red.svg","alt",""]],template:function(l,d){1&l&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1),e.YNc(3,u,2,4,"a",2),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,m,2,1,"button",4),e.YNc(6,C,2,0,"button",5),e.YNc(7,b,2,0,"button",5),e.YNc(8,Z,2,0,"button",6),e.YNc(9,T,2,0,"button",5),e.qZA()()()),2&l&&(e.xp6(3),e.Q6J("ngForOf",d.menuItems),e.xp6(2),e.Q6J("ngIf",d.saveBtn),e.xp6(1),e.Q6J("ngIf",d.addBtn),e.xp6(1),e.Q6J("ngIf",d.cancelBtn),e.xp6(1),e.Q6J("ngIf",d.disableSaveBtn&&(null==d.editButton?null:d.editButton.isButton)),e.xp6(1),e.Q6J("ngIf",!d.disableSaveBtn&&(null==d.editButton?null:d.editButton.isButton)))},directives:[p.sg,p.mk,p.O5],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}"]}),r})()},8076:(M,h,c)=>{c.d(h,{F:()=>p});var e=c(9808),_=c(5e3);let p=(()=>{class t{}return t.\u0275fac=function(m){return new(m||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[[e.ez]]}),t})()},884:(M,h,c)=>{c.d(h,{c:()=>p});var e=c(9808),_=c(5e3);let p=(()=>{class t{}return t.\u0275fac=function(m){return new(m||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[[e.ez]]}),t})()},3016:(M,h,c)=>{c.r(h),c.d(h,{QuestionnaireModule:()=>U});var e=c(9808),_=c(4996),p=c(2382),t=c(5e3),u=c(1762),m=c(5417);function C(i,s){if(1&i&&(t.TgZ(0,"div",29)(1,"div",52)(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"div",9),t._UZ(5,"input",53),t.qZA()()),2&i){const n=s.index;t.xp6(3),t.hij("",n+1,".")}}function b(i,s){if(1&i&&(t.TgZ(0,"span",58)(1,"div",59),t._UZ(2,"input",60),t.TgZ(3,"label",56),t._uU(4),t.qZA()()()),2&i){const n=s.$implicit,a=s.index,o=t.oxw().index,v=t.oxw(2);t.xp6(2),t.s9C("type",n.inputType),t.MGl("name","inlineRadioOptions",o+1,"")("id","inlineRadio",a+1,""),t.Q6J("disabled",!v.teethTreatmentList[o].checkValue),t.xp6(1),t.MGl("for","inlineRadio",a+1,""),t.xp6(1),t.Oqu(n.title)}}function Z(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"div",19)(1,"div",54)(2,"input",55),t.NdJ("change",function(o){const y=t.CHM(n).index;return t.oxw(2).getCheckboxValue(o,y)}),t.qZA(),t.TgZ(3,"label",56),t._uU(4),t.qZA()(),t.TgZ(5,"div",8),t.YNc(6,b,5,6,"span",57),t.qZA()()}if(2&i){const n=s.$implicit,a=s.index,o=t.oxw(2);t.xp6(2),t.s9C("type",n.inputType),t.MGl("id","defaultCheck",a+1,""),t.Q6J("checked",o.teethTreatmentList[a].checkValue),t.xp6(1),t.MGl("for","defaultCheck",a+1,""),t.xp6(1),t.hij(" ",n.title," "),t.xp6(2),t.Q6J("ngForOf",n.child)}}function T(i,s){if(1&i&&(t.TgZ(0,"div",29)(1,"div",52)(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"div",9),t._UZ(5,"input",61),t.qZA()()),2&i){const n=s.index;t.xp6(3),t.hij("",n+1,".")}}function x(i,s){if(1&i&&(t.TgZ(0,"span",63)(1,"div",64),t._UZ(2,"input",65),t.TgZ(3,"label",56),t._uU(4),t.qZA()()()),2&i){const n=s.$implicit,a=s.index,o=t.oxw().index;t.xp6(2),t.s9C("type",n.inputType),t.MGl("name","inlineRadioOptions",o+1,"")("id","inlineRadio",a+1,""),t.xp6(1),t.MGl("for","inlineRadio",a+1,""),t.xp6(1),t.Oqu(n.title)}}function r(i,s){if(1&i&&(t.TgZ(0,"div",19)(1,"label",10),t._uU(2),t.qZA(),t.TgZ(3,"div",8),t.YNc(4,x,5,5,"span",62),t.qZA()()),2&i){const n=s.$implicit;t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Q6J("ngForOf",n.child)}}function g(i,s){if(1&i&&(t.TgZ(0,"div",29)(1,"div",52)(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"div",9),t._UZ(5,"input",61),t.qZA()()),2&i){const n=s.index;t.xp6(3),t.hij("",n+1,".")}}function l(i,s){1&i&&(t.TgZ(0,"div",35)(1,"label",10),t._uU(2,"Please describe"),t.qZA(),t._UZ(3,"textarea",66),t.qZA())}function d(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"div",1)(1,"app-nav-bar-pills",2),t.NdJ("onCancel",function(){return t.CHM(n),t.oxw().cancel()})("onSave",function(){t.CHM(n);const o=t.oxw();return o.save(o.Form.value)}),t.qZA(),t.TgZ(2,"form",3,4),t.NdJ("submit",function(){t.CHM(n);const o=t.MAs(3);return t.oxw().save(o.value)}),t.TgZ(4,"div",5),t.NdJ("sectionChange",function(o){return t.CHM(n),t.oxw().onSectionChange(o)}),t.TgZ(5,"div",6)(6,"h6",7),t._uU(7,"Treatment Preferences"),t.qZA(),t.TgZ(8,"div",8)(9,"div",9)(10,"p",10),t._uU(11," Are you interested in: (Please indicate all that apply) "),t.qZA(),t.TgZ(12,"div",11)(13,"div",12),t._UZ(14,"input",13),t.TgZ(15,"label",14),t._uU(16,"Information"),t.qZA()(),t.TgZ(17,"div",12),t._UZ(18,"input",15),t.TgZ(19,"label",16),t._uU(20,"Treatment at this time"),t.qZA()(),t.TgZ(21,"div",12),t._UZ(22,"input",17),t.TgZ(23,"label",18),t._uU(24,"Clarification of previously recieved or conflicting information"),t.qZA()()()()(),t.TgZ(25,"div",8)(26,"div",19)(27,"p",10),t._uU(28," Would you prefer that facial apperance NOT to be discussed in front of your child? "),t.qZA(),t.TgZ(29,"div",20)(30,"div",21),t._UZ(31,"input",22),t.TgZ(32,"label",23),t._uU(33,"Yes"),t.qZA()(),t.TgZ(34,"div",21),t._UZ(35,"input",24),t.TgZ(36,"label",25),t._uU(37,"No"),t.qZA()()()()()(),t.TgZ(38,"div",26)(39,"h6",7),t._uU(40,"Chief Complaint"),t.qZA(),t.TgZ(41,"div",8)(42,"div",27)(43,"label",10),t._uU(44,"Please decribe all the concern's you have about patient's teeth"),t.qZA(),t.YNc(45,C,6,1,"div",28),t.TgZ(46,"div",29)(47,"div",9)(48,"button",30),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return null==o.chiefComplaintList?null:o.chiefComplaintList.push(1)}),t._UZ(49,"img",31),t._uU(50,"\xa0\xa0Add more "),t.qZA()()()(),t._UZ(51,"div",32),t.qZA()(),t.TgZ(52,"div",33)(53,"h6",7),t._uU(54,"Expectations"),t.qZA(),t.TgZ(55,"div",8)(56,"label",10),t._uU(57,"If patient's teeth were to be changed, how would you like them changed?"),t.qZA(),t.YNc(58,Z,7,6,"div",34),t.TgZ(59,"div",35)(60,"label",10),t._uU(61,"Other"),t.qZA(),t.YNc(62,T,6,1,"div",28),t.TgZ(63,"div",29)(64,"div",9)(65,"button",30),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return null==o.expectationsList?null:o.expectationsList.push(1)}),t._UZ(66,"img",31),t._uU(67,"\xa0\xa0Add more "),t.qZA()()()()(),t.TgZ(68,"div",8)(69,"label",10),t._uU(70,"If any features of the face could be changed, what would you like to see?"),t.qZA(),t.YNc(71,r,5,2,"div",34),t.TgZ(72,"div",35)(73,"label",10),t._uU(74,"Other"),t.qZA(),t.YNc(75,g,6,1,"div",28),t.TgZ(76,"div",29)(77,"div",9)(78,"button",30),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return null==o.expectationsList?null:o.expectationsList.push(1)}),t._UZ(79,"img",31),t._uU(80,"\xa0\xa0Add more "),t.qZA()()()()()(),t.TgZ(81,"div",36)(82,"h6",7),t._uU(83,"Family History"),t.qZA(),t.TgZ(84,"div",8)(85,"div",35)(86,"label",10),t._uU(87,"Is there any significant family history of jaw or teeth problems?"),t.qZA(),t.TgZ(88,"div",20)(89,"div",21)(90,"input",37),t.NdJ("change",function(){return t.CHM(n),t.oxw().showFamilyHistoryInputFeild="yes"}),t.qZA(),t.TgZ(91,"label",38),t._uU(92,"Yes"),t.qZA()(),t.TgZ(93,"div",21)(94,"input",39),t.NdJ("change",function(){return t.CHM(n),t.oxw().showFamilyHistoryInputFeild="no"}),t.qZA(),t.TgZ(95,"label",40),t._uU(96,"No"),t.qZA()()()(),t.YNc(97,l,4,0,"div",41),t._UZ(98,"div",42),t.qZA()(),t.TgZ(99,"div",43)(100,"div",8)(101,"div",44)(102,"h6",7),t._uU(103,"Legal Guardian's Signature"),t.qZA(),t._UZ(104,"div",45),t.qZA(),t.TgZ(105,"div",44)(106,"h6",7),t._uU(107,"Provider's Signature"),t.qZA(),t._UZ(108,"div",45),t.qZA()(),t.TgZ(109,"div",8)(110,"div",46)(111,"label",10),t._uU(112,"Legal Guardian's Name"),t.qZA(),t.TgZ(113,"select",47)(114,"option",48),t._uU(115,"Name1"),t.qZA(),t.TgZ(116,"option",49),t._uU(117,"Name2"),t.qZA(),t.TgZ(118,"option",50),t._uU(119,"Name3"),t.qZA()()(),t.TgZ(120,"div",46)(121,"label",10),t._uU(122,"Date"),t.qZA(),t._UZ(123,"input",51),t.qZA(),t.TgZ(124,"div",46)(125,"label",10),t._uU(126,"Provider's Name"),t.qZA(),t.TgZ(127,"select",47)(128,"option",48),t._uU(129,"Name1"),t.qZA(),t.TgZ(130,"option",49),t._uU(131,"Name2"),t.qZA(),t.TgZ(132,"option",50),t._uU(133,"Name3"),t.qZA()()(),t.TgZ(134,"div",46)(135,"label",10),t._uU(136,"Date"),t.qZA(),t._UZ(137,"input",51),t.qZA()()()()()()}if(2&i){const n=t.oxw();t.xp6(1),t.Q6J("menuItems",n.menuItems)("activeClass",n.currentSelection)("cancelBtn",!0)("saveBtn",!0)("disableSaveBtn",n.Form.invalid),t.xp6(1),t.Q6J("formGroup",n.Form),t.xp6(43),t.Q6J("ngForOf",n.chiefComplaintList),t.xp6(13),t.Q6J("ngForOf",n.teethTreatmentList),t.xp6(4),t.Q6J("ngForOf",n.expectationsList),t.xp6(9),t.Q6J("ngForOf",n.faceTreatmentList),t.xp6(4),t.Q6J("ngForOf",n.expectationsList),t.xp6(22),t.Q6J("ngIf","yes"==n.showFamilyHistoryInputFeild)}}const O=[{path:"",component:(()=>{class i{constructor(n,a){this.fb=n,this.router=a,this.currentSelection="",this.formData=void 0,this.menuItems=[{title:"Treatment Preferences",id:"treatmentPreference"},{title:"Chief Complaint",id:"chiefComplaint"},{title:"Expectations",id:"expectations"},{title:"Family History",id:"familyHistory"},{title:"Signature",id:"signature"}],this.showFamilyHistoryInputFeild="yes",this.teethTreatmentList=[],this.faceTreatmentList=[],this.chiefComplaintList=[1],this.expectationsList=[1]}ngOnInit(){this.initForm(this.formData),this.getTeethChangeList(),this.getFaceChangeList()}initForm(n){this.Form=this.fb.group({check1:[(null==(n=n||{})?void 0:n.check1)||"",p.kI.required],check2:[(null==n?void 0:n.check2)||"",p.kI.required]})}onSectionChange(n){this.currentSelection=n}save(n){}cancel(){this.router.navigate(["/dashboard/patient/consultation/consultation"])}getTeethChangeList(){this.teethTreatmentList.push({title:"Move upper teeth",inputType:"checkbox",checkValue:!1,child:[{title:"Forward",inputType:"radio"},{title:"Backward",inputType:"radio"}]}),this.teethTreatmentList.push({title:"Move lower teeth",inputType:"checkbox",checkValue:!1,child:[{title:"Forward",inputType:"radio"},{title:"Backward",inputType:"radio"}]}),this.teethTreatmentList.push({title:"Upper teeth up because gums show too much",inputType:"checkbox",checkValue:!1,child:[]}),this.teethTreatmentList.push({title:"Close spaces",inputType:"checkbox",checkValue:!1,child:[{title:"Upper",inputType:"checkbox"},{title:"Lower",inputType:"checkbox"}]}),this.teethTreatmentList.push({title:"Straighten crowded teeth",inputType:"checkbox",checkValue:!1,child:[{title:"Upper",inputType:"checkbox"},{title:"Lower",inputType:"checkbox"}]}),this.teethTreatmentList.push({title:"Improve the appearance of",inputType:"checkbox",checkValue:!1,child:[{title:"Chipped",inputType:"checkbox"},{title:"Cracked",inputType:"checkbox"},{title:"Stained",inputType:"checkbox"},{title:"Dark",inputType:"checkbox"},{title:"Pointed Teeth",inputType:"checkbox"}]})}getFaceChangeList(){this.faceTreatmentList.push({title:"Move upper lip",child:[{title:"Forward",inputType:"radio"},{title:"Backward",inputType:"radio"}]}),this.faceTreatmentList.push({title:"Move lower lip",child:[{title:"Forward",inputType:"radio"},{title:"Backward",inputType:"radio"}]}),this.faceTreatmentList.push({title:"Move upper jaw",child:[{title:"Forward",inputType:"radio"},{title:"Backward",inputType:"radio"}]}),this.faceTreatmentList.push({title:"Move lower jaw",child:[{title:"Forward",inputType:"radio"},{title:"Backward",inputType:"radio"}]}),this.faceTreatmentList.push({title:"Chin",child:[{title:"Larger",inputType:"radio"},{title:"Smaller",inputType:"radio"}]}),this.faceTreatmentList.push({title:"Nose",child:[{title:"Larger",inputType:"radio"},{title:"Smaller",inputType:"radio"},{title:"Different Shape",inputType:"radio"}]})}getCheckboxValue(n,a){this.teethTreatmentList[a].checkValue=n.target.checked}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(p.qu),t.Y36(_.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-questionnaire"]],inputs:{formData:"formData"},decls:1,vars:1,consts:[["class","formrow",4,"ngIf"],[1,"formrow"],[3,"menuItems","activeClass","cancelBtn","saveBtn","disableSaveBtn","onCancel","onSave"],[3,"formGroup","submit"],["f","ngForm"],["id","main","scrollSpy","",1,"col-12",3,"sectionChange"],["id","treatmentPreference",1,"section"],[1,"heading"],[1,"row","formrow"],[1,"col"],[1,"label-input-gap"],[1,"more-two-radios"],[1,"rowinputs"],["type","checkbox","id","interest1","value","option1",1,"form-check-input"],["for","interest1",1,"form-check-label"],["type","checkbox","id","interest2","value","option2",1,"form-check-input"],["for","interest2",1,"form-check-label"],["type","checkbox","id","interest3","value","option3",1,"form-check-input"],["for","interest3",1,"form-check-label"],[1,"col-12"],[1,"two-radios"],[1,"yes-no-radio"],["type","radio","id","facialapp1","name","facialapp","value","yes","checked","",1,"form-check-input"],["for","facialapp1",1,"form-check-label"],["type","radio","id","facialapp2","name","facialapp","value","no",1,"form-check-input"],["for","facialapp2",1,"form-check-label"],["id","chiefComplaint",1,"section"],[1,"col-8"],["class","row mb-3",4,"ngFor","ngForOf"],[1,"row","mb-3"],["type","button",1,"btn","btn-light",3,"click"],["src","/assets/icons/add.svg","alt","","width","20","height","20"],[1,"col-4"],["id","expectations",1,"section"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-5"],["id","familyHistory",1,"section"],["type","radio","id","latexRadio1","name","latexRadio","value","yes","checked","",1,"form-check-input",3,"change"],["for","latexRadio1",1,"form-check-label"],["type","radio","id","latexRadio2","name","latexRadio","value","no",1,"form-check-input",3,"change"],["for","latexRadio2",1,"form-check-label"],["class","col-5",4,"ngIf"],[1,"col-2"],[1,"section"],[1,"col-6"],[1,"box"],[1,"col-3"],["aria-label","Default select example",1,"form-select"],["value","1"],["value","2"],["value","3"],["type","text","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","disabled","",1,"form-control"],[1,"col-1"],["type","text","placeholder","Chief Complaint",1,"form-control",2,"width","60%"],[1,"form-check"],[1,"form-check-input",3,"type","id","checked","change"],[1,"form-check-label",3,"for"],["class","to-span",4,"ngFor","ngForOf"],[1,"to-span"],[1,"d-flex","align-items-center","m-0"],[1,"form-check-input","to-input",3,"type","name","id","disabled"],["type","text","placeholder","Expectations",1,"form-control"],["class","to-span2",4,"ngFor","ngForOf"],[1,"to-span2"],[1,"d-flex","align-items-center"],[1,"form-check-input","to-input",3,"type","name","id"],["placeholder","Leave a comment here","id","floatingTextarea2",1,"form-control",2,"height","100px"]],template:function(n,a){1&n&&t.YNc(0,d,138,12,"div",0),2&n&&t.Q6J("ngIf",a.Form)},directives:[e.O5,u.B,p._Y,p.JL,p.sg,m.j,e.sg,p.YN,p.Kr],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}#main[_ngcontent-%COMP%]{height:calc(100vh - 310px);overflow:auto;padding-bottom:5rem}#main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-bottom:5px}.box[_ngcontent-%COMP%]{height:10rem;border:1px solid lightgrey;background-color:#fff}.radio-label[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:155px;gap:5px}.radio-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:0!important;margin:0!important}.to-span[_ngcontent-%COMP%]{width:120px;margin:3px 0;padding:0}.to-span2[_ngcontent-%COMP%]{width:120px;margin:3px 0 3px 9px;padding:0}.to-input[_ngcontent-%COMP%]{margin:0!important;padding:0!important}.section[_ngcontent-%COMP%]{padding:2rem}form[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]{border-color:#fff}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.Bz.forChild(O)],_.Bz]}),i})();var k=c(8076),B=c(884);let U=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[e.ez,A,p.u5,p.UX,k.F,B.c]]}),i})()}}]);
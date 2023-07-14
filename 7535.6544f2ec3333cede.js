"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7535],{7535:(y,d,a)=>{a.r(d),a.d(d,{HealthHistoryModule:()=>H});var s=a(9808),r=a(4996),t=a(5e3),l=a(9759);function c(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"div",1)(2,"div")(3,"h5")(4,"b"),t._uU(5,"You haven\u2019t added yet"),t.qZA()(),t.TgZ(6,"p"),t._uU(7," Click here, "),t.TgZ(8,"img",2),t.NdJ("click",function(){return t.CHM(n),t.oxw().addHealthHistory()}),t.qZA(),t._uU(9," to add Health History "),t.qZA()()()()}}function u(o,e){if(1&o&&(t.TgZ(0,"span",31),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(null==n?null:n.status)}}function h(o,e){if(1&o&&(t.TgZ(0,"span",32),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(null==n?null:n.status)}}function g(o,e){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"input",20),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t.YNc(8,u,2,1,"span",21),t.YNc(9,h,2,1,"span",22),t.qZA(),t.TgZ(10,"td")(11,"div",23)(12,"button",24),t._UZ(13,"i",25),t.qZA(),t.TgZ(14,"div",26)(15,"div",27)(16,"button",28),t._uU(17," Send a link "),t._UZ(18,"i",29),t.qZA(),t.TgZ(19,"div",26)(20,"button",30),t._uU(21," Via text "),t.qZA(),t.TgZ(22,"button",30),t._uU(23," Via email "),t.qZA(),t.TgZ(24,"button",30),t._uU(25," To kiosk "),t.qZA(),t.TgZ(26,"button",30),t._uU(27," To patient app "),t.qZA()()(),t.TgZ(28,"button",30),t._uU(29," Export as a pdf "),t.qZA(),t.TgZ(30,"button",30),t._uU(31,"Print"),t.qZA(),t.TgZ(32,"button",30),t._uU(33,"Delete"),t.qZA()()()()()),2&o){const n=e.$implicit,i=e.index;t.xp6(2),t.s9C("value",i),t.xp6(2),t.Oqu(null==n?null:n.date),t.xp6(2),t.Oqu(null==n?null:n.name),t.xp6(2),t.Q6J("ngIf","Completed"===(null==n?null:n.status)),t.xp6(1),t.Q6J("ngIf","Review"===(null==n?null:n.status))}}function p(o,e){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,g,34,5,"tr",19),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.healthHistoryList)}}function b(o,e){if(1&o&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4),t._UZ(3,"div",5),t.TgZ(4,"div",6)(5,"button",7),t._UZ(6,"img",8),t.qZA(),t.TgZ(7,"button",9),t._UZ(8,"img",10),t.qZA(),t.TgZ(9,"button",9),t._UZ(10,"img",11),t.qZA(),t.TgZ(11,"button",12),t._UZ(12,"img",13),t.qZA()()()(),t.TgZ(13,"div",14)(14,"div",15)(15,"table",16)(16,"thead")(17,"tr")(18,"th",17),t._UZ(19,"input",18),t.qZA(),t.TgZ(20,"th",17),t._uU(21,"Creation Date"),t.qZA(),t.TgZ(22,"th",17),t._uU(23,"Name"),t.qZA(),t.TgZ(24,"th",17),t._uU(25,"Status"),t.qZA(),t.TgZ(26,"th",17),t._uU(27,"Actions"),t.qZA()()(),t.YNc(28,p,2,1,"tbody",0),t.qZA()()()()),2&o){const n=t.oxw();t.xp6(7),t.Q6J("disabled",!0),t.xp6(2),t.Q6J("disabled",!0),t.xp6(19),t.Q6J("ngIf",n.healthHistoryList)}}const _=[{path:"",component:(()=>{class o{constructor(n){this.router=n,this.healthHistoryList=[]}ngOnInit(){this.healthHistoryList.push({date:"2022/04/10",name:"Health History v1",status:"Completed"}),this.healthHistoryList.push({date:"2022/04/09",name:"Health History v2",status:"Review"})}addHealthHistory(){this.router.navigate(["/dashboard/patient/consultation/consultation/add/health-history/add"])}endMove(n){let i=Array.from(n.target.parentNode.parentNode.children);i.indexOf(n.target.parentNode)>i.indexOf(this.row)?n.target.parentNode.after(this.row):n.target.parentNode.before(this.row)}move(n){this.row=n.target}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-health-history"]],decls:2,vars:2,consts:[[4,"ngIf"],[2,"text-align","center","padding-top","7%"],["src","assets/icons/add.svg","width","36","height","36",3,"click"],[1,"container"],[1,"d-flex","justify-content-between","call-to-actions"],[1,"col-4"],[1,"d-flex","gap-2"],["disabled","",1,"add_btn"],["src","/assets/icons/export.svg","alt",""],[1,"add_btn",3,"disabled"],["src","/assets/icons/print.svg","alt",""],["src","/assets/icons/delete.svg","alt",""],["routerLink","/dashboard/patient/consultation/consultation/add/health-history/add",1,"add_btn"],["src","/assets/icons/add.svg","alt",""],[1,"container","mt-4"],[1,"row"],[1,"table"],["scope","col"],["type","checkbox"],[4,"ngFor","ngForOf"],["type","checkbox",3,"value"],["style","color: #3bbb7b",4,"ngIf"],["style","text-decoration: underline",4,"ngIf"],["ngbDropdown","","container","body","placement","bottom-end"],["ngbDropdownToggle","",1,"btn","btn-light","btn-sm","more_btn"],[1,"bi","bi-three-dots-vertical"],["ngbDropdownMenu",""],["ngbDropdown","","container","body","placement","right-top"],["ngbDropdownToggle","",1,"btn","btn-light",2,"width","100%","text-align","start","background-color","transparent"],[1,"bi","bi-chevron-right",2,"margin-left","1rem"],["ngbDropdownItem",""],[2,"color","#3bbb7b"],[2,"text-decoration","underline"]],template:function(n,i){1&n&&(t.YNc(0,c,10,0,"div",0),t.YNc(1,b,29,3,"div",0)),2&n&&(t.Q6J("ngIf",0==(null==i.healthHistoryList?null:i.healthHistoryList.length)),t.xp6(1),t.Q6J("ngIf",0!=(null==i.healthHistoryList?null:i.healthHistoryList.length)))},directives:[s.O5,r.rH,s.sg,l.jt,l.iD,l.Vi,l.TH],styles:[".add_btn[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}.add_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px}.search_box[_ngcontent-%COMP%]{border:1px solid #dbdcdd;border-radius:6px}tr[_ngcontent-%COMP%]{line-height:3}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:1px solid currentColor}.more_btn[_ngcontent-%COMP%]{font-size:16px;font-weight:700;background-color:transparent;border:none}table.table[_ngcontent-%COMP%]{table-layout:fixed}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;text-align:start}table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1){width:min-content}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(_)],r.Bz]}),o})(),H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,Z,l.IJ]]}),o})()}}]);
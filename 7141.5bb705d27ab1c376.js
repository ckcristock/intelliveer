"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7141],{7141:(p,d,e)=>{e.r(d),e.d(d,{EditUserModule:()=>C});var r=e(9808),l=e(4996),t=e(5e3),a=e(9196),c=e(9709);function g(n,i){if(1&n&&(t.TgZ(0,"li",8),t._uU(1),t.qZA()),2&n){const o=t.oxw().$implicit;t.Q6J("routerLink",o.url),t.xp6(1),t.hij(" ",o.title," ")}}function u(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,g,2,2,"li",7),t.qZA()),2&n){const o=i.$implicit;t.xp6(1),t.Q6J("ngIf",o.isEnabled)}}const h=[{path:"",component:(()=>{class n{constructor(o,s,M){this.router=o,this.globalRoutes=s,this.userServ=M,this.menuItems=[],this.urlManageUser=this.globalRoutes.getSettingsUserManageUrl(),this.menuItems=this.globalRoutes.getSettingsUserManageRoutes()[1].child}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(l.F0),t.Y36(a.o),t.Y36(c.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-user"]],decls:10,vars:2,consts:[[1,"row"],[1,"col-2"],[1,"settings-row","pointer",3,"routerLink"],[1,"bi","bi-arrow-left-circle",2,"font-size","2rem"],[1,"ul",2,"margin-top","23px"],[4,"ngFor","ngForOf"],[1,"col-10","component-view"],["class","pointer","routerLinkActive","active",3,"routerLink",4,"ngIf"],["routerLinkActive","active",1,"pointer",3,"routerLink"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"i",3),t.TgZ(4,"p"),t._uU(5,"Manage Users"),t.qZA()(),t.TgZ(6,"ul",4),t.YNc(7,u,2,1,"div",5),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"router-outlet"),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("routerLink",s.urlManageUser),t.xp6(5),t.Q6J("ngForOf",s.menuItems))},directives:[l.rH,r.sg,r.O5,l.Od,l.lC],styles:[".add_btn[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}.add_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px}.search_box[_ngcontent-%COMP%]{border:1px solid #dbdcdd;border-radius:6px}tr[_ngcontent-%COMP%]{line-height:3}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:1px solid currentColor}.more_btn[_ngcontent-%COMP%]{font-size:16px;font-weight:700;background-color:transparent;border:none}table.table[_ngcontent-%COMP%]{table-layout:fixed}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;text-align:start}table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1){width:min-content}ul[_ngcontent-%COMP%]{font-size:13px;font-weight:700}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:3.2}"]}),n})(),children:[{path:"",redirectTo:"assign-role",pathMatch:"full"},{path:"personal-info",data:{isEnabled:!0,value:"CAN_UPDATE_USER_PROFILE"},loadChildren:()=>Promise.all([e.e(4376),e.e(9770),e.e(4610)]).then(e.bind(e,4610)).then(n=>n.PersonalInfoModule)},{path:"user-policy",loadChildren:()=>Promise.all([e.e(4376),e.e(2975)]).then(e.bind(e,2975)).then(n=>n.UserPolicyModule)},{path:"assign-role",data:{isEnabled:!0,value:"CAN_UPDATE_USER_ROLE"},loadChildren:()=>Promise.all([e.e(4376),e.e(3574)]).then(e.bind(e,3574)).then(n=>n.AssignRoleModule)},{path:"user-provider",loadChildren:()=>e.e(4699).then(e.bind(e,4699)).then(n=>n.UserProviderModule)},{path:"user-document",loadChildren:()=>e.e(9473).then(e.bind(e,9473)).then(n=>n.UserDocumentModule)}]}];let m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(h)],l.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,m]]}),n})()}}]);
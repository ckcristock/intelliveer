"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3928],{3928:(y,c,o)=>{o.r(c),o.d(c,{AddInsurancePlanModule:()=>C});var d=o(9808),a=o(4996),p=o(727),n=o(5e3),v=o(9196),h=o(5730),g=o(5360),m=o(1228),f=o(7802),I=o(2251);const P=[{path:"",component:(()=>{class t{constructor(e,r,s,l,b,M){this.globalRoutes=e,this.router=r,this.alertService=s,this.insurancePlanService=l,this.authService=b,this.businessGroupDropdownService=M,this.insurancePlanMenu=[],this.businessGroupDropdownSupscription=new p.w0,this.urlInsurancePlan=this.globalRoutes.getPracticeInsurancePlanUrl(),this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(u=>{u&&(this.selectedBusinessGroup=u,this.getOrgBgId())})}ngOnInit(){}getOrgBgId(){let e=localStorage.getItem("selected_business_group"),r=this.authService.getOrgId(),s=localStorage.getItem("permissionSet");s=JSON.parse(s),(null==s?void 0:s.__ISSU__)?this.bgId="intelliveer"==e||null==e?"intelliveer":e:((null==s?void 0:s.isBGAdmin)||("intelliveer"==e||null==e)&&(e=r),this.bgId=e)}create(e){this.alertService.conformAlert("Are you sure","you want to save insurance plan").then(r=>{r.isConfirmed&&this.insurancePlanService.save(e,this.bgId).subscribe(s=>{this.alertService.success("Success","Insurance plan has been saved successfully"),this.router.navigate(["/dashboard/practice-tool/practice/insurance-plan"])},s=>{console.log(s)})})}handleCancel(){this.router.navigate(["/dashboard/practice-tool/practice/insurance-plan"])}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(v.o),n.Y36(a.F0),n.Y36(h.c),n.Y36(g.$),n.Y36(m.e),n.Y36(f.Y))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-add-insurance-plan"]],decls:10,vars:1,consts:[[1,"row"],[1,"col-2"],[1,"settings-row","pointer",3,"routerLink"],[1,"bi","bi-arrow-left-circle",2,"font-size","2rem","cursor","pointer"],[1,""],[1,"ul","active",2,"margin-top","27px"],[1,"col-10","component-view"],[3,"onCancel","onSubmit"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"i",3),n.TgZ(4,"p",4),n._uU(5,"Insurance Plan"),n.qZA()(),n.TgZ(6,"ul",5),n._uU(7," Add "),n.qZA()(),n.TgZ(8,"div",6)(9,"app-insurance-plan-form",7),n.NdJ("onCancel",function(){return r.handleCancel()})("onSubmit",function(l){return r.create(l)}),n.qZA()()()),2&e&&(n.xp6(2),n.Q6J("routerLink",r.urlInsurancePlan))},directives:[a.rH,I.m],styles:["ul[_ngcontent-%COMP%]{font-size:13px;font-weight:700}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:3.2}.component-view[_ngcontent-%COMP%]{height:calc(100vh - 200px);overflow-x:hidden;overflow-y:auto}"]}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.Bz.forChild(P)],a.Bz]}),t})();var A=o(7803);let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,S,A.n]]}),t})()}}]);
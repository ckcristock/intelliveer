"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2348],{2348:(Y,c,o)=>{o.r(c),o.d(c,{DentalModule:()=>G});var u=o(9808),l=o(4996),p=o(727),e=o(5e3),h=o(9196),m=o(5730),g=o(202),v=o(1228),f=o(7802),D=o(628);function b(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"app-dental-form",1),e.NdJ("onCancel",function(){return e.CHM(t),e.oxw().handleCancel()})("onSubmit",function(i){return e.CHM(t),e.oxw().create(i)}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("formData",t.data)}}const S=[{path:"",component:(()=>{class n{constructor(t,r,i,s,y,M,R){this.globalRoutes=t,this.router=r,this.alertService=i,this.insuranceGroupService=s,this.authService=y,this.activeRoute=M,this.businessGroupDropdownService=R,this.insurancePlanMenu=[],this.businessGroupDropdownSupscription=new p.w0,this.urlInsuranceGroup=this.globalRoutes.getPracticeInsuranceGroupUrl(),this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(d=>{d&&(this.selectedBusinessGroup=d,this.getOrgBgId())})}ngOnInit(){}getOrgBgId(){let t=localStorage.getItem("selected_business_group"),r=this.authService.getOrgId(),i=localStorage.getItem("permissionSet");i=JSON.parse(i),(null==i?void 0:i.__ISSU__)?"intelliveer"==t||null==t?(this.bgId="intelliveer",this.activeRoute.params.subscribe(s=>{s.id&&(this.id=s.id,this.getData())})):(this.bgId=t,this.activeRoute.params.subscribe(s=>{s.id&&(this.id=s.id,this.getData())})):(null==i?void 0:i.isBGAdmin)?(this.bgId=t,this.activeRoute.params.subscribe(s=>{s.id&&(this.id=s.id,this.getData())})):(("intelliveer"==t||null==t)&&(t=r),this.bgId=t,this.activeRoute.params.subscribe(s=>{s.id&&(this.id=s.id,this.getData())}))}getData(){this.insuranceGroupService.getSingleData(this.bgId,this.id).subscribe(t=>{this.data=t})}create(t){t._id=this.id,this.alertService.conformAlert("Are you sure","you want to save dental").then(r=>{r.isConfirmed&&this.insuranceGroupService.update(t,this.bgId).subscribe(i=>{this.alertService.success("Success","Dental has been saved successfully"),this.router.navigate(["/dashboard/practice-tool/practice/insurance-group"])},i=>{console.log(i)})})}handleCancel(){this.router.navigate(["/dashboard/practice-tool/practice/insurance-group"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.o),e.Y36(l.F0),e.Y36(m.c),e.Y36(g.H),e.Y36(v.e),e.Y36(l.gz),e.Y36(f.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dental"]],decls:1,vars:1,consts:[[3,"formData","onCancel","onSubmit",4,"ngIf"],[3,"formData","onCancel","onSubmit"]],template:function(t,r){1&t&&e.YNc(0,b,1,1,"app-dental-form",0),2&t&&e.Q6J("ngIf",r.data)},directives:[u.O5,D.o],styles:[""]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.Bz.forChild(S)],l.Bz]}),n})();var I=o(4952);let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,C,I.u]]}),n})()}}]);
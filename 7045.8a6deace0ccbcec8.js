"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7045],{7045:(D,c,o)=>{o.r(c),o.d(c,{EditProviderModule:()=>E});var u=o(9808),v=o(3214),a=o(4996),p=o(7924),t=o(5e3),h=o(9815),m=o(1228),f=o(7802),g=o(5730),b=o(3717);function C(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",1)(1,"app-provider-form",2),t.NdJ("onCancel",function(){return t.CHM(e),t.oxw().handleCancel()})("onSubmit",function(s){return t.CHM(e),t.oxw().update(s)}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("title","Edit Provider")("formData",e.data)}}const S=[{path:"",component:(()=>{class i{constructor(e,r,s,n,I,y){this.router=e,this.dentistService=r,this.authService=s,this.activeRoute=n,this.businessGroupDropdownService=I,this.alertService=y,this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(l=>{l&&(this.selectedBusinessGroup=l,this.getOrgBgId())})}ngOnInit(){}update(e){let r={_id:this.id,firstName:e.firstName,lastName:e.lastName,officeName:e.officeName,officeAddress:{addressLine1:e.address.addressLine1,addressLine2:e.address.addressLine2,city:e.address.city,state:e.address.state,country:e.address.country,zipCode:e.address.zipCode},officePhoneNumber:{type:"",countryCode:"",number:e.pPhoneNumber}};this.alertService.conformAlert("Are you sure","you want to update provider").then(s=>{s.isConfirmed&&this.dentistService.update(r,this.bgId).subscribe(n=>{this.alertService.success("Success","Provider has been updated successfully"),this.router.navigate(["/dashboard/patient/patient-user/provider"])},n=>{console.log(n)})})}handleCancel(){this.router.navigate(["/dashboard/patient/patient-user/provider"])}getOrgBgId(){var e,r;let s=localStorage.getItem("selected_business_group"),n=this.authService.getLoggedInUser();(null==n?void 0:n.__ISSU__)?"intelliveer"==s||null==s?(this.bgId="intelliveer",this.getData()):(this.bgId=null===(e=this.selectedBusinessGroup)||void 0===e?void 0:e.bgId,this.getData()):(this.bgId=null===(r=this.selectedBusinessGroup)||void 0===r?void 0:r.bgId,this.getData())}getData(){this.activeRoute.params.subscribe(e=>{e.id&&(this.id=e.id,this.dentistService.getSingleData(this.bgId,e.id).subscribe({next:r=>{this.data=r},error:()=>{}}))})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(a.F0),t.Y36(h.H),t.Y36(m.e),t.Y36(a.gz),t.Y36(f.Y),t.Y36(g.c))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-edit-provider"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[3,"title","formData","onCancel","onSubmit"]],template:function(e,r){1&e&&t.YNc(0,C,2,2,"div",0),2&e&&t.Q6J("ngIf",r.data)},directives:[u.O5,b.b],styles:[""]}),i})(),canDeactivate:[p.I]}];let P=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.Bz.forChild(S)],a.Bz]}),i})(),E=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.ez,v.X,P]]}),i})()}}]);
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1579],{1579:(A,l,s)=>{s.r(l),s.d(l,{AddInsuranceSubscriberModule:()=>y});var d=s(9808),b=s(4733),c=s(4996),m=s(7924),n=s(5e3),p=s(1228),h=s(7802),S=s(5730),v=s(2080),g=s(1483);const f=[{path:"",component:(()=>{class r{constructor(e,i,t,o,C){this.router=e,this.authService=i,this.businessGroupDropdownService=t,this.alertService=o,this.insuranceSubscriberService=C,this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(a=>{a&&(this.selectedBusinessGroup=a,this.getOrgBgId())})}ngOnInit(){}create(e){console.log(e);let i={profile:{relationshipWithPatient:e.relationship,title:e.title,firstName:e.firstName,middleName:e.middleName,lastName:e.lastName,DOB:e.DOB,gender:e.gender,preferredPronoun:e.pronoun,language:e.language,maritalStatus:e.maritalStatus},address:e.address,contact:{email:e.emailId,primaryPhone:{type:e.primaryPhoneType,countryCode:"",number:e.primaryPhoneNumber},secondaryPhone:{type:e.secondaryPhoneType,countryCode:"",number:e.secondaryPhoneNumber},primaryPreferredCommunicationMethod:e.primaryPreferredCommunicationMethod,secondaryPreferredCommunicationMethod:e.secondaryPreferredCommunicationMethod,preferredTimingForCall:e.preferredTimingForCall},financials:{workStatus:e.workStatus,occupation:e.occupation,employer:e.employer,creditRating:e.creditRating,SSN:e.SSN},notes:e.note};console.log(i),this.alertService.conformAlert("Are you sure","you want to save insurance subscriber").then(t=>{t.isConfirmed&&this.insuranceSubscriberService.save(i,this.bgId).subscribe(o=>{this.alertService.success("Success","Insurance Subscriber has been saved successfully"),this.router.navigate(["/dashboard/patient/patient-user/insurance-subscriber"])},o=>{console.log(o)})})}handleCancel(){this.router.navigate(["/dashboard/patient/patient-user/insurance-subscriber"])}getOrgBgId(){var e,i;let t=localStorage.getItem("selected_business_group"),o=this.authService.getLoggedInUser();this.bgId=(null==o?void 0:o.__ISSU__)?"intelliveer"==t||null==t?"intelliveer":null===(e=this.selectedBusinessGroup)||void 0===e?void 0:e.bgId:null===(i=this.selectedBusinessGroup)||void 0===i?void 0:i.bgId}}return r.\u0275fac=function(e){return new(e||r)(n.Y36(c.F0),n.Y36(p.e),n.Y36(h.Y),n.Y36(S.c),n.Y36(v.r))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-add-insurance-subscriber"]],decls:2,vars:1,consts:[[1,"container"],[3,"title","onCancel","onSubmit"]],template:function(e,i){1&e&&(n.TgZ(0,"div",0)(1,"app-insurance-subscriber-form",1),n.NdJ("onCancel",function(){return i.handleCancel()})("onSubmit",function(o){return i.create(o)}),n.qZA()()),2&e&&(n.xp6(1),n.Q6J("title","Create New Family Member"))},directives:[g.A],styles:[""]}),r})(),canDeactivate:[m.I]}];let I=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),r})(),y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[d.ez,b.R,I]]}),r})()}}]);
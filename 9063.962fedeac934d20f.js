"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[9063],{9063:(A,d,n)=>{n.r(d),n.d(d,{AddPracticeModule:()=>f});var l=n(9808),a=n(4996),u=n(7924),c=n(5e3),p=n(7802),m=n(4889),g=n(5522);const h=[{path:"",component:(()=>{class t{constructor(e,r,i){this.router=e,this.bgDropdownService=r,this.practiceLocation=i,this.bgDropdownSubscription=this.bgDropdownService.businessGroup().subscribe(s=>{s&&(this.selectedBusinessGroup=s,this.getUserOrdID())})}ngOnInit(){}ngOnDestroy(){this.bgDropdownSubscription.unsubscribe()}create(e){var r;this.bgId||(this.bgId=null===(r=this.selectedBusinessGroup)||void 0===r?void 0:r.bgId),this.selectedBusinessGroup&&(e.slug="",this.practiceLocation.createPractice(this.bgId,e).subscribe({next:i=>{this.router.navigate(["/dashboard/settings/onboarding/practice"])},error:()=>{}}))}handleCancel(){this.router.navigate(["/dashboard/settings/onboarding/practice"])}getUserOrdID(){this.bgId=null==localStorage.getItem("selected_business_group")?"intelliveer":null}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(a.F0),c.Y36(p.Y),c.Y36(m.i))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-add-practice"]],decls:2,vars:1,consts:[[1,""],[3,"title","onCancel","onSubmit"]],template:function(e,r){1&e&&(c.TgZ(0,"div",0)(1,"app-practice-form",1),c.NdJ("onCancel",function(){return r.handleCancel()})("onSubmit",function(s){return r.create(s)}),c.qZA()()),2&e&&(c.xp6(1),c.Q6J("title","Create New Practice"))},directives:[g.e],styles:[""]}),t})(),canDeactivate:[u.I]}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),t})();var b=n(842);let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[l.ez,b.G,v]]}),t})()}}]);
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5255],{5255:(b,u,i)=>{i.r(u),i.d(u,{EditRefererModule:()=>C});var c=i(9808),p=i(1554),d=i(4996),h=i(7924),e=i(5e3),l=i(7802),n=i(4889),o=i(4336);function m(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",1)(1,"app-referer-form",2),e.NdJ("onCancel",function(){return e.CHM(t),e.oxw().handleCancel()})("onSubmit",function(f){return e.CHM(t),e.oxw().update(f)}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("title","Edit Referer")("formData",t.data)}}const R=[{path:"",component:(()=>{class r{constructor(t,s,f,g){this.router=t,this.activeRoute=s,this.bgDropdownService=f,this.practiceLocation=g,this.bgDropdownSubscription=this.bgDropdownService.businessGroup().subscribe(v=>{v&&(this.selectedBusinessGroup=v)}),this.bgDropdownService.disable(!0)}ngOnInit(){this.activeRoute.params.subscribe(t=>{t.id&&(this.id=t.id,this.getPractice(t.id))})}ngOnDestroy(){this.bgDropdownService.disable(!1),this.bgDropdownSubscription.unsubscribe()}getPractice(t){this.selectedBusinessGroup&&t&&this.practiceLocation.getPractice(this.selectedBusinessGroup.bgId,t).subscribe({next:s=>{this.data=s},error:()=>{}})}update(t){this.id&&this.selectedBusinessGroup&&this.practiceLocation.updatePractice(this.selectedBusinessGroup.bgId,this.id,t).subscribe({next:s=>{this.router.navigate(["/dashboard/patient/patient-user/referer"])},error:()=>{}})}handleCancel(){this.router.navigate(["/dashboard/patient/patient-user/referer"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d.F0),e.Y36(d.gz),e.Y36(l.Y),e.Y36(n.i))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-edit-referer"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[3,"title","formData","onCancel","onSubmit"]],template:function(t,s){1&t&&e.YNc(0,m,2,2,"div",0),2&t&&e.Q6J("ngIf",s.data)},directives:[c.O5,o.d],styles:[""]}),r})(),canDeactivate:[h.I]}];let E=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.Bz.forChild(R)],d.Bz]}),r})(),C=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,p._,E]]}),r})()},4889:(b,u,i)=>{i.d(u,{i:()=>h});var c=i(7448),p=i(5e3),d=i(520);let h=(()=>{class e{constructor(n){this.http=n}getPractices(n){return this.http.get(`${c.k.backend.host}/bg/practice`,{headers:{"X-ORG-ID":n}})}getPractice(n,o){return this.http.get(`${c.k.backend.host}/bg/practice/${o}`,{headers:{"X-ORG-ID":n}})}createPractice(n,o){return this.http.post(`${c.k.backend.host}/bg/practice`,o,{headers:{"X-ORG-ID":n}})}updatePractice(n,o,m){return this.http.put(`${c.k.backend.host}/bg/practice/${o}`,m,{headers:{"X-ORG-ID":n}})}deletePractice(n,o){return this.http.delete(`${c.k.backend.host}/bg/practice/${o}`,{headers:{"X-ORG-ID":n}})}}return e.\u0275fac=function(n){return new(n||e)(p.LFG(d.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);
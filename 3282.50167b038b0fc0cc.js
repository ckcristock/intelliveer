"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3282],{3282:(f,a,e)=>{e.r(a),e.d(a,{AddPatientModule:()=>m});var d=e(9808),r=e(4996),p=e(9300),n=e(5e3);const l=function(t){return[t]},s=[{path:"",component:(()=>{class t{constructor(o){this.router=o,this.selectTab="",o.events.pipe((0,p.h)(i=>i instanceof r.m2)).subscribe(i=>{this.selectTab=i.url.includes("coor-with-prospect")?"coordWithProspect":i.url.includes("quick-add")?"quickadd":"coordWithProspect"})}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(r.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-add-patient"]],decls:12,vars:8,consts:[[1,"container","content"],[1,"row"],[1,"col","pills",2,"margin-left","200px"],[1,"nav","menu-items"],[1,"nav-item"],[3,"ngClass","routerLink","click"],[2,"margin-top","-15px"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),n.NdJ("click",function(){return i.selectTab="quickadd"}),n._uU(6,"Quick add"),n.qZA()(),n.TgZ(7,"li",4)(8,"a",5),n.NdJ("click",function(){return i.selectTab="coordWithProspect"}),n._uU(9,"Coordinate with prospect"),n.qZA()()()()(),n.TgZ(10,"div",6),n._UZ(11,"router-outlet"),n.qZA()()),2&o&&(n.xp6(5),n.Q6J("ngClass",n.VKq(4,l,"quickadd"==i.selectTab?"active":"inactive"))("routerLink","/dashboard/home/add-patient/quick-add"),n.xp6(3),n.Q6J("ngClass",n.VKq(6,l,"coordWithProspect"==i.selectTab?"active":"inactive"))("routerLink","/dashboard/home/add-patient/coor-with-prospect"))},directives:[r.yS,d.mk,r.lC],styles:[".formstyle[_ngcontent-%COMP%]{height:82%;overflow:auto}.row.sticky[_ngcontent-%COMP%]{z-index:999;background:#fff}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{display:flex;align-items:center}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:22px;margin-left:4px}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   label.btn.btnoutlinesecondary[_ngcontent-%COMP%]{background:#39383a;height:38px;line-height:38px;width:130px!important;display:block;padding:0;margin:0!important;min-width:inherit!important;flex:none;border-radius:6px 0 0 6px}.mainformsection[_ngcontent-%COMP%]   .formrow[_ngcontent-%COMP%]   .buttoninput[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;background:#fff;border:1px solid #ced4da;border-right:0;border-radius:6px 0 0 6px;padding:0 8px}.mainformsection[_ngcontent-%COMP%]   .mainformset[_ngcontent-%COMP%]   .btnoutlinesecondary2[_ngcontent-%COMP%]{background:#fff;height:38px!important;line-height:39px;width:110px!important;display:block;padding:0 0 0 16px;margin:0!important;min-width:inherit!important;flex:none;border-radius:0 6px 6px 0!important;color:#000;border-color:#bcbec0!important;text-align:left;border-left:0!important;box-shadow:none!important}.mainformsection[_ngcontent-%COMP%]   input.btnoutlinesecondary3[_ngcontent-%COMP%]{background:#fff;height:38px!important;line-height:39px;width:110px!important;display:block;padding:0 0 0 16px;margin:0!important;min-width:inherit!important;flex:none;border-radius:0 6px 6px 0!important;color:#000;border-color:#bcbec0;text-align:left;border-left:0!important}.pluscentered[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}.type-width[_ngcontent-%COMP%]{width:15%}.large-width[_ngcontent-%COMP%]{width:35%}.two-items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.start[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:10px}.step[_ngcontent-%COMP%]{position:relative;min-height:1em;left:2px}.title[_ngcontent-%COMP%]{line-height:1.5em;font-weight:700}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-top:1.5em}.step[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:static;height:0}.step[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){margin-left:1.5em;padding-left:1em}.active-circle[_ngcontent-%COMP%]{background:white;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #f9ac42}.later-circle[_ngcontent-%COMP%]{background:#bcbec0;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #bcbec0}.complete-circle[_ngcontent-%COMP%]{background:#f9ac42;position:relative;width:1.2em;height:1.2em;line-height:1.2em;border-radius:100%;color:#fff;text-align:center;box-shadow:0 0 0 2px #f9ac42}.step[_ngcontent-%COMP%]:last-child   .circle[_ngcontent-%COMP%]:after{display:none}.step.step-active[_ngcontent-%COMP%]{font-weight:700}.step.step-active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:#fff;outline-color:#000;outline:violet}.vertical-line-active[_ngcontent-%COMP%]{border-left:2px solid #f9ac42;height:2rem;margin-left:8px;margin-top:-3px}.vertical-line-not-active[_ngcontent-%COMP%]{border-left:2px solid #bcbec0;height:2rem;margin-left:8px;margin-top:-3px}.active[_ngcontent-%COMP%]{color:#000!important;font-weight:400}.nav-link[_ngcontent-%COMP%]{display:block;padding:.5rem 1rem;color:#000;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{color:#ec6e4d!important;background-color:transparent!important;border-bottom:2px solid #ec6e4d}.pills[_ngcontent-%COMP%]{font-size:1rem;display:flex;justify-content:space-between;margin-bottom:1rem;background:transparent!important;padding:0 10px;border-radius:5px;line-height:3}.pills[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{text-decoration:none;line-height:3;border-bottom:2px solid var(--primary);padding-bottom:6px;color:var(--primary)}.pills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important;padding-bottom:6px}.menu-items[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:35px;padding:0;margin:0}"]}),t})(),children:[{path:"",redirectTo:"coor-with-prospect",pathMatch:"full"},{path:"coor-with-prospect",loadChildren:()=>Promise.all([e.e(8592),e.e(9175)]).then(e.bind(e,9175)).then(t=>t.CoorWithProspectModule)},{path:"quick-add",loadChildren:()=>Promise.all([e.e(8592),e.e(3985)]).then(e.bind(e,3985)).then(t=>t.QuickAddModule)}]}];let g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[r.Bz.forChild(s)],r.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,g]]}),t})()}}]);
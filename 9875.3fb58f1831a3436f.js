"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[9875],{9875:(g,p,s)=>{s.r(p),s.d(p,{OverbiteModule:()=>v});var n=s(9808),c=s(4996),m=s(877),t=s(5e3),d=s(2356);function a(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"input",10),t.NdJ("change",function(l){const b=t.CHM(e).$implicit;return t.oxw().selectOption(l,b)}),t.qZA(),t.TgZ(4,"label",11),t._uU(5),t.qZA()()()()}if(2&i){const e=r.$implicit,o=r.index;t.xp6(3),t.s9C("value",e.title),t.MGl("id","flexCheckDefault",o,""),t.xp6(1),t.MGl("for","flexCheckDefault",o,""),t.xp6(1),t.hij(" ",e.title," ")}}const u=[{path:"",component:(()=>{class i{constructor(e,o){this.router=e,this.problemListService=o,this.overbiteLst=[{title:"Lorem ipsum 3",id:1},{title:"Lorem ipsum 3",id:2},{title:"Lorem ipsum 3",id:3},{title:"Lorem ipsum 3",id:4},{title:"Lorem ipsum 3",id:5},{title:"Lorem ipsum 3",id:6},{title:"Lorem ipsum 3",id:7},{title:"Lorem ipsum 3",id:8},{title:"Lorem ipsum 3",id:9}],this.problemLst=m.OP}ngOnInit(){let e=this.router.url.split("/");this.title=e[e.length-1]}moveToNext(){let e=JSON.parse(localStorage.getItem("diagnosisVisitedArray")||"[]");e.push("Overbite"),localStorage.setItem("diagnosisVisitedArray",JSON.stringify(e)),this.router.navigate(["/dashboard/patient/consultation/consultation/add/diagnosis/category1"])}selectOption(e,o){if(o.checked=e.target.checked,localStorage.setItem("selectObj",JSON.stringify(o)),e.target.checked)this.problemLst[2].child.push(o),this.problemListService.problemList=this.problemLst,o.id>4&&(this.problemListService.toothChartList=o);else{for(let l=0;l<this.problemLst[2].child.length;l++)this.problemLst[2].child[l].id===o.id&&this.problemLst[2].child.splice(l,1);this.problemListService.problemList=this.problemLst}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.F0),t.Y36(d.R))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-overbite"]],decls:11,vars:4,consts:[[1,"container"],[1,"heading"],[1,"scroll"],["class","row",4,"ngFor","ngForOf"],[1,"row","gap-3"],[1,"col","p-2"],[1,"btn","btn-dark",3,"click"],[1,"row"],[1,"col"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"value","id","change"],[1,"form-check-label",3,"for"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h6",1),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",2),t.YNc(6,a,6,4,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"button",6),t.NdJ("click",function(){return o.moveToNext()}),t._uU(10,"Next"),t.qZA()()()()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,2,o.title)),t.xp6(4),t.Q6J("ngForOf",o.overbiteLst))},directives:[n.sg],pipes:[n.rS],styles:[""]}),i})()}];let h=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),i})(),v=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[n.ez,h]]}),i})()}}]);
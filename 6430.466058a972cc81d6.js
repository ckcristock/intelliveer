"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6430],{6430:(C,a,s)=>{s.r(a),s.d(a,{Category1Module:()=>h});var n=s(9808),c=s(4996),p=s(877),t=s(5e3),d=s(2356);function m(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"input",10),t.NdJ("change",function(l){const y=t.CHM(e).$implicit;return t.oxw().selectOption(l,y)}),t.qZA(),t.TgZ(4,"label",11),t._uU(5),t.qZA()()()()}if(2&o){const e=r.$implicit,i=r.index;t.xp6(3),t.s9C("value",e.title),t.MGl("id","flexCheckDefault",i,""),t.xp6(1),t.MGl("for","flexCheckDefault",i,""),t.xp6(1),t.hij(" ",e.title," ")}}const u=[{path:"",component:(()=>{class o{constructor(e,i){this.router=e,this.problemListService=i,this.category1Lst=[{title:"Lorem ipsum 3",id:1},{title:"Lorem ipsum 3",id:2},{title:"Lorem ipsum 3",id:3},{title:"Lorem ipsum 3",id:4},{title:"Lorem ipsum 3",id:5},{title:"Lorem ipsum 3",id:6},{title:"Lorem ipsum 3",id:7}],this.problemLst=p.OP}ngOnInit(){let e=this.router.url.split("/");this.title=e[e.length-1]}moveToNext(){let e=JSON.parse(localStorage.getItem("diagnosisVisitedArray")||"[]");e.push("Category 1"),localStorage.setItem("diagnosisVisitedArray",JSON.stringify(e)),this.router.navigate(["/dashboard/patient/consultation/consultation/add/diagnosis/category2"])}selectOption(e,i){if(i.checked=e.target.checked,localStorage.setItem("selectObj",JSON.stringify(i)),e.target.checked)this.problemLst[3].child.push(i),this.problemListService.problemList=this.problemLst,i.id>4&&(this.problemListService.toothChartList=i);else{for(let l=0;l<this.problemLst[3].child.length;l++)this.problemLst[3].child[l].id===i.id&&this.problemLst[3].child.splice(l,1);this.problemListService.problemList=this.problemLst}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.F0),t.Y36(d.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-category_1"]],decls:11,vars:4,consts:[[1,"container"],[1,"heading"],[1,"scroll"],["class","row",4,"ngFor","ngForOf"],[1,"row","gap-3"],[1,"col","p-2"],[1,"btn","btn-dark",3,"click"],[1,"row"],[1,"col"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"value","id","change"],[1,"form-check-label",3,"for"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h6",1),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t._UZ(4,"hr"),t.TgZ(5,"div",2),t.YNc(6,m,6,4,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"button",6),t.NdJ("click",function(){return i.moveToNext()}),t._uU(10,"Next"),t.qZA()()()()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,2,i.title)),t.xp6(4),t.Q6J("ngForOf",i.category1Lst))},directives:[n.sg],pipes:[n.rS],styles:[""]}),o})()}];let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,g]]}),o})()}}]);
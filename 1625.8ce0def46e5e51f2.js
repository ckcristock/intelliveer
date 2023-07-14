"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1625],{5417:(h,v,l)=>{l.d(v,{j:()=>g});var t=l(5e3);let g=(()=>{class d{constructor(s){this._el=s,this.spiedTags=["DIV"],this.offsetIncrement=70,this.sectionChange=new t.vpe,this.currentSection=""}onScroll(s){let m="";const n=this._el.nativeElement.children,e=s.target.scrollTop,c=s.target.offsetTop+this.offsetIncrement;for(let r=0;r<n.length;r++){const u=n[r];this.spiedTags.some(i=>i===u.tagName)&&u.offsetTop-c<=e&&(m=u.id)}m!==this.currentSection&&(this.currentSection=m,this.sectionChange.emit(this.currentSection))}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(t.SBq))},d.\u0275dir=t.lG2({type:d,selectors:[["","scrollSpy",""]],hostBindings:function(s,m){1&s&&t.NdJ("scroll",function(e){return m.onScroll(e)})},inputs:{spiedTags:"spiedTags",offsetIncrement:"offsetIncrement"},outputs:{sectionChange:"sectionChange"}}),d})()},809:(h,v,l)=>{l.d(v,{$:()=>m});var t=l(5e3),g=l(7448),d=l(520),a=l(9808);function s(n,e){1&n&&(t.TgZ(0,"div",5),t._UZ(1,"div",6),t.qZA())}let m=(()=>{class n{constructor(c){this.http=c,this.processing=!1,this.imageUrl="",this.isPublicImage=!1,this.imageUpLoaderDisable=!1,this.onUpload=new t.vpe}ngOnInit(){this.imageUrl&&this.setImage({url:this.imageUrl,isPublic:this.isPublicImage})}uploadImage(c){if(c.target.files&&c.target.files[0]){const r=c.target.files[0],u=new FileReader;let i=r.name.split(".").reverse("")[0];u.onload=p=>this.imageSrc=u.result,u.readAsDataURL(r),this.http.get(`${g.k.backend.host}/auth/storage/signed-url-for-file-upload?filext=${i}`).subscribe({next:p=>{this.processing=!0;let o=p;o.signedUrl&&this.http.put(o.signedUrl,r,{headers:{"Content-Type":r.type}}).subscribe({next:()=>{this.onUpload.emit({url:o.filePath})},error:()=>{},complete:()=>{this.processing=!1}})},error:()=>{}})}}getImage(c){this.processing=!0,this.imageSrc="https://via.placeholder.com/150?text=...",this.http.get(`${g.k.backend.host}/auth/storage/get-file?${c.split("?").reverse("")[0]}`).subscribe({next:r=>{r&&r.signedUrl&&(this.imageSrc=r.signedUrl)},error:()=>{},complete:()=>{this.processing=!1}})}setImage({url:c,isPublic:r}){if(c)try{const u=new URL(c);r?this.imageSrc=u:this.getImage(c)}catch(u){console.error("Invalid image url")}}}return n.\u0275fac=function(c){return new(c||n)(t.Y36(d.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-image-uploader"]],inputs:{imageUrl:"imageUrl",isPublicImage:"isPublicImage",imageUpLoaderDisable:"imageUpLoaderDisable"},outputs:{onUpload:"onUpload"},decls:5,vars:4,consts:[[1,"img-uploader-main",3,"click"],["class","loader-overlay",4,"ngIf"],[3,"src"],["type","file","accept","image/*",2,"font-size","11px","margin-top","5px",3,"hidden","disabled","change"],["uploader",""],[1,"loader-overlay"],[1,"lds-dual-ring"]],template:function(c,r){if(1&c){const u=t.EpF();t.TgZ(0,"div",0),t.NdJ("click",function(){return t.CHM(u),t.MAs(4).click()}),t.YNc(1,s,2,0,"div",1),t._UZ(2,"img",2),t.TgZ(3,"input",3,4),t.NdJ("change",function(p){return r.uploadImage(p)}),t.qZA()()}2&c&&(t.xp6(1),t.Q6J("ngIf",r.processing),t.xp6(1),t.Q6J("src",r.imageSrc||"/assets/images/img_upload_placeholder.png",t.LSH),t.xp6(1),t.Q6J("hidden",!0)("disabled",r.imageUpLoaderDisable))},directives:[a.O5],styles:['div.img-uploader-main[_ngcontent-%COMP%]{position:relative;height:100px;width:100px;border-radius:8px;overflow:hidden}div.img-uploader-main[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]{position:absolute;background:rgba(255,255,255,.7);top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center}div.img-uploader-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;border-radius:8px}.lds-dual-ring[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px}.lds-dual-ring[_ngcontent-%COMP%]:after{content:" ";display:block;width:32px;height:32px;margin:4px;border-radius:50%;border:6px solid var(--primary);border-color:var(--primary) transparent var(--primary) transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']}),n})()},84:(h,v,l)=>{l.d(v,{B:()=>d});var t=l(9808),g=l(5e3);let d=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[[t.ez]]}),a})()},1762:(h,v,l)=>{l.d(v,{B:()=>u});var t=l(5e3),g=l(4996),d=l(9808);const a=function(i){return{active:i}};function s(i,p){if(1&i){const o=t.EpF();t.TgZ(0,"a",7),t.NdJ("click",function(){const C=t.CHM(o).$implicit;return t.oxw().scroll(C)}),t._uU(1),t.qZA()}if(2&i){const o=p.$implicit,_=t.oxw();t.Q6J("ngClass",t.VKq(2,a,_.activeClass===o.id)),t.xp6(1),t.Oqu(o.title)}}function m(i,p){if(1&i){const o=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){return t.CHM(o),t.oxw().handleSaveBtnClicked()}),t._UZ(1,"img",9),t.qZA()}if(2&i){const o=t.oxw();t.Q6J("disabled",o.disableSaveBtn)}}function n(i,p){if(1&i){const o=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){return t.CHM(o),t.oxw().handleAddCancelClicked()}),t._UZ(1,"img",11),t.qZA()}}function e(i,p){if(1&i){const o=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){return t.CHM(o),t.oxw().handleSaveCancelClicked()}),t._UZ(1,"img",12),t.qZA()}}function c(i,p){1&i&&(t.TgZ(0,"button",13),t._UZ(1,"img",14),t.qZA())}function r(i,p){if(1&i){const o=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(o);const f=t.oxw();return f.editButtonURL(null==f.editButton?null:f.editButton.url)}),t._UZ(1,"img",15),t.qZA()}}let u=(()=>{class i{constructor(o){this.router=o,this.activeClass="init",this.mode="menu",this.saveBtn=!1,this.disableSaveBtn=!1,this.cancelBtn=!1,this.disableCancelBtn=!1,this.addBtn=!1,this.disableAddBtn=!1,this.onCancel=new t.vpe,this.onSave=new t.vpe,this.onAdd=new t.vpe,this.menuItems=[]}ngOnInit(){}ngAfterContentInit(){this.activeClass=0!=this.menuItems.length?this.menuItems[0].id:""}scroll(o){const _=document.getElementById(o.id);_&&_.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}handleSaveBtnClicked(){this.onSave.emit()}handleSaveCancelClicked(){this.onCancel.emit()}handleAddCancelClicked(){this.onAdd.emit()}editButtonURL(o){this.router.navigate([o])}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(g.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-nav-bar-pills"]],inputs:{activeClass:"activeClass",mode:"mode",saveBtn:"saveBtn",disableSaveBtn:"disableSaveBtn",cancelBtn:"cancelBtn",disableCancelBtn:"disableCancelBtn",addBtn:"addBtn",editButton:"editButton",disableAddBtn:"disableAddBtn",menuItems:"menuItems"},outputs:{onCancel:"onCancel",onSave:"onSave",onAdd:"onAdd"},decls:10,vars:6,consts:[["id","navbar-pills"],[1,"left",2,"margin-left","0px"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"right"],["class","save",3,"disabled","click",4,"ngIf"],["class","cancel",3,"click",4,"ngIf"],["class","save",4,"ngIf"],[3,"ngClass","click"],[1,"save",3,"disabled","click"],["src","/assets/icons/save.svg","alt",""],[1,"cancel",3,"click"],["src","/assets/icons/add.svg","alt",""],["src","/assets/icons/cancel.svg","alt",""],[1,"save"],["src","/assets/icons/Add-Patient-Wizard-Green.svg","alt",""],["src","/assets/icons/Add-Patient-Wizard-Red.svg","alt",""]],template:function(o,_){1&o&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1),t.YNc(3,s,2,4,"a",2),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,m,2,1,"button",4),t.YNc(6,n,2,0,"button",5),t.YNc(7,e,2,0,"button",5),t.YNc(8,c,2,0,"button",6),t.YNc(9,r,2,0,"button",5),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("ngForOf",_.menuItems),t.xp6(2),t.Q6J("ngIf",_.saveBtn),t.xp6(1),t.Q6J("ngIf",_.addBtn),t.xp6(1),t.Q6J("ngIf",_.cancelBtn),t.xp6(1),t.Q6J("ngIf",_.disableSaveBtn&&(null==_.editButton?null:_.editButton.isButton)),t.xp6(1),t.Q6J("ngIf",!_.disableSaveBtn&&(null==_.editButton?null:_.editButton.isButton)))},directives:[d.sg,d.mk,d.O5],styles:["#navbar-pills[_ngcontent-%COMP%]{height:40px;display:grid;grid-template-columns:1fr auto;margin-bottom:10px}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background:#f9f9f9;display:flex;gap:15px;align-items:center;padding-left:10px;border-radius:6px;white-space:nowrap;overflow-y:auto}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 15px;text-decoration:none;color:#000;line-height:2.6;border-bottom:2px solid transparent}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;border-bottom:2px solid var(--primary);color:var(--primary)!important}#navbar-pills[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)!important;border-bottom:2px solid var(--primary);font-weight:400}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background:transparent;display:flex;gap:5px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.5}#navbar-pills[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px}"]}),i})()},8076:(h,v,l)=>{l.d(v,{F:()=>d});var t=l(9808),g=l(5e3);let d=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[[t.ez]]}),a})()},884:(h,v,l)=>{l.d(v,{c:()=>d});var t=l(9808),g=l(5e3);let d=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[[t.ez]]}),a})()},9516:(h,v,l)=>{l.d(v,{V:()=>a});var t=l(2382),g=l(1135),d=l(5e3);let a=(()=>{class s{constructor(n){this.fb=n,this.isDisabled$=new g.X(this.isDisabled)}getContactPersonForm(n,e){var c,r,u,i,p,o;return this.fb.group({designation:[(null==(n=n||{})?void 0:n.designation)||"",(e=e||{}).designation&&t.kI.required],title:[(null==n?void 0:n.title)||"",(null==e?void 0:e.title)&&t.kI.required],firstName:[(null==n?void 0:n.firstName)||"",(null==e?void 0:e.firstName)&&[t.kI.required,t.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],lastName:[(null==n?void 0:n.lastName)||"",(null==e?void 0:e.lastName)&&[t.kI.required,t.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],email:[(null==n?void 0:n.email)||"",(null==e?void 0:e.email)&&[t.kI.required,t.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],phone:this.fb.group({type:[(null===(c=null==n?void 0:n.phone)||void 0===c?void 0:c.type)||"",(null===(r=null==e?void 0:e.phone)||void 0===r?void 0:r.type)&&t.kI.required],countryCode:[(null===(u=null==n?void 0:n.phone)||void 0===u?void 0:u.countryCode)||"",(null===(i=null==e?void 0:e.phone)||void 0===i?void 0:i.countryCode)&&[t.kI.required,t.kI.pattern("^[0-9]*$")]],number:[(null===(p=null==n?void 0:n.phone)||void 0===p?void 0:p.number)||"",(null===(o=null==e?void 0:e.phone)||void 0===o?void 0:o.number)&&[t.kI.required,t.kI.pattern("^[0-9]*$")]]})})}setDisabledOrEnabled(n){this.isDisabled=n,this.isDisabled$.next(this.isDisabled)}getDisabledOrEnabled(){return this.isDisabled$}}return s.\u0275fac=function(n){return new(n||s)(d.LFG(t.qu))},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);
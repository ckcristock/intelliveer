"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5803],{5803:(x,h,r)=>{r.r(h),r.d(h,{PracticeModule:()=>y});var l=r(9808),_=r(4996),t=r(5e3),b=r(7802),p=r(4889),m=r(63),s=r(9196),a=r(2382),u=r(9759);function C(n,c){if(1&n&&(t.TgZ(0,"li",10),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("routerLink",e.url),t.xp6(1),t.hij(" ",e.title," ")}}function v(n,c){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,C,2,2,"li",9),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",e.isEnabled)}}function P(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"img",14),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).addPractice()}),t.qZA()}}function T(n,c){if(1&n&&(t.TgZ(0,"div",11)(1,"div",12)(2,"h5")(3,"b"),t._uU(4,"You haven\u2019t added yet"),t.qZA()(),t.TgZ(5,"p"),t._uU(6,"Click here, "),t.YNc(7,P,1,0,"img",13),t._uU(8," to add Practice"),t.qZA()()()),2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngIf",e.practiceAdd[0].isEnabled)}}function Z(n,c){1&n&&(t.TgZ(0,"div",26)(1,"button",27),t._UZ(2,"img",28),t.qZA()())}function w(n,c){if(1&n&&(t.TgZ(0,"button",36),t._uU(1," Edit "),t.qZA()),2&n){const e=t.oxw().$implicit;t.MGl("routerLink","/dashboard/settings/onboarding/practice/edit/",e._id,"")}}function M(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",37),t.NdJ("click",function(){t.CHM(e);const d=t.oxw().$implicit;return t.oxw(3).delete(d._id)}),t._uU(1," Delete "),t.qZA()}}function A(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"span",29),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(3).editPractice(null==o?null:o._id)}),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"span",29),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(3).editPractice(null==o?null:o._id)}),t._uU(6),t.qZA()(),t.TgZ(7,"td")(8,"span",29),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(3).editPractice(null==o?null:o._id)}),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"span",29),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(3).editPractice(null==o?null:o._id)}),t._uU(12),t.qZA()(),t.TgZ(13,"td")(14,"span",29),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(3).editPractice(null==o?null:o._id)}),t._uU(15),t.ALo(16,"date"),t.qZA()(),t.TgZ(17,"td")(18,"div",30)(19,"button",31),t._UZ(20,"i",32),t.qZA(),t.TgZ(21,"div",33),t.YNc(22,w,2,1,"button",34),t.YNc(23,M,2,0,"button",35),t.qZA()()()()}if(2&n){const e=c.$implicit,i=t.oxw(3);t.xp6(3),t.Oqu(null==e?null:e._id),t.xp6(3),t.Oqu(null==e?null:e.name),t.xp6(3),t.AsE("",null==e||null==e.contactPerson?null:e.contactPerson.firstName,"\xa0",null==e||null==e.contactPerson?null:e.contactPerson.lastName,""),t.xp6(3),t.Oqu(null==e||null==e.contactPerson||null==e.contactPerson.phone?null:e.contactPerson.phone.number),t.xp6(3),t.Oqu(t.xi3(16,8,null==e?null:e.createdAt,"mediumDate")),t.xp6(7),t.Q6J("ngIf",i.practiceEdit[0].isEnabled),t.xp6(1),t.Q6J("ngIf",i.practiceDelete[0].isEnabled)}}function O(n,c){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,A,24,11,"tr",5),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.data)}}const k=function(){return{standalone:!0}};function I(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",15)(2,"div",16)(3,"div",17)(4,"div",18)(5,"span",19),t._UZ(6,"i",20),t.qZA(),t.TgZ(7,"input",21),t.NdJ("ngModelChange",function(d){return t.CHM(e),t.oxw().searchText=d})("keyup",function(){return t.CHM(e),t.oxw().search()}),t.qZA()()(),t.YNc(8,Z,3,0,"div",22),t.qZA()(),t.TgZ(9,"div",23)(10,"div",0)(11,"table",24)(12,"thead")(13,"tr")(14,"th",25),t._uU(15,"ID"),t.qZA(),t.TgZ(16,"th",25),t._uU(17,"Name"),t.qZA(),t.TgZ(18,"th",25),t._uU(19,"Contact Person"),t.qZA(),t.TgZ(20,"th",25),t._uU(21,"Phone no."),t.qZA(),t.TgZ(22,"th",25),t._uU(23,"Created on"),t.qZA(),t.TgZ(24,"th",25),t._uU(25,"Actions"),t.qZA()()(),t.YNc(26,O,2,1,"tbody",8),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngModel",e.searchText)("ngModelOptions",t.DdM(4,k)),t.xp6(1),t.Q6J("ngIf",e.practiceAdd[0].isEnabled),t.xp6(18),t.Q6J("ngIf",e.data)}}const D=[{path:"",component:(()=>{class n{constructor(e,i,d,o,g){this.businessGroupDropdownService=e,this.practiceService=i,this.router=d,this.searchString=o,this.globalRoutes=g,this.searchCount=0,this.onBoardingMenu=this.globalRoutes.getSettingsOnboardingRoutes(),this.businessGroupDropdownSupscription=this.businessGroupDropdownService.businessGroup().subscribe(f=>{f&&(this.selectedBusinessGroup=f,this.getUserOrdID())})}ngOnInit(){this.checkPermission(),this.urlSettings=this.globalRoutes.getSettingsUrl()}ngOnDestroy(){this.businessGroupDropdownSupscription.unsubscribe()}fetchList(){this.selectedBusinessGroup&&this.practiceService.getPractices(this.selectedBusinessGroup.bgId).subscribe({next:e=>{this.data=e},error:()=>{}})}fetchListSuperUser(e){this.practiceService.getPractices(e).subscribe({next:i=>{this.data=i},error:()=>{}})}delete(e){var i;this.bgId||(this.bgId=null===(i=this.selectedBusinessGroup)||void 0===i?void 0:i.bgId),this.selectedBusinessGroup&&e&&this.practiceService.deletePractice(this.bgId,e).subscribe({next:d=>{this.getUserOrdID()},error:()=>{}})}addPractice(){this.router.navigate(["/dashboard/settings/onboarding/practice/add"])}getUserOrdID(){let e=localStorage.getItem("selected_business_group");null==e?(console.log(e),this.fetchListSuperUser("intelliveer"),this.bgId="intelliveer"):(this.bgId="",this.fetchList())}search(){this.searchCount++,1==this.searchCount&&(this.dataBackup=this.data),this.data=this.dataBackup;let e=this.data.filter(i=>i._id.toLowerCase().includes(this.searchText.toLowerCase())||i.name.toLowerCase().includes(this.searchText.toLowerCase())||i.contactPerson.firstName.toLowerCase().includes(this.searchText.toLowerCase())||i.contactPerson.lastName.toLowerCase().includes(this.searchText.toLowerCase())||i.contactPerson.phone.number.toLowerCase().includes(this.searchText.toLowerCase())||i.createdAt.toString().toLowerCase().includes(this.searchText.toLowerCase())||i.contactPerson.firstName.toLowerCase().concat(" ").concat(i.contactPerson.lastName.toLowerCase()).includes(this.searchText.toLowerCase()));this.data=e}checkPermission(){let e=this.globalRoutes.getSettingsOnboardingRoutes(),i=this.searchString.transform("title",e,"Practice");this.practiceAdd=this.searchString.transform("title",i[0].child,"Add"),this.practiceEdit=this.searchString.transform("title",i[0].child,"Edit"),this.practiceDelete=this.searchString.transform("title",i[0].child,"Delete")}editPractice(e){this.router.navigate([`${this.globalRoutes.getSettingsOnboardingRoutes()[3].child[1].url}/${e}`])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.Y),t.Y36(p.i),t.Y36(_.F0),t.Y36(m.E),t.Y36(s.o))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-practice"]],decls:11,vars:4,consts:[[1,"row"],[1,"col-2"],[1,"settings-row","pointer",3,"routerLink"],[1,"bi","bi-arrow-left-circle",2,"font-size","2rem","cursor","pointer"],[1,"ul",2,"margin-top","27px"],[4,"ngFor","ngForOf"],[1,"col-10","component-view"],["class","section","style","height: 90%;",4,"ngIf"],[4,"ngIf"],["class","pointer","routerLinkActive","active",3,"routerLink",4,"ngIf"],["routerLinkActive","active",1,"pointer",3,"routerLink"],[1,"section",2,"height","90%"],[2,"text-align","center","padding-top","7%"],["src","assets/icons/add.svg","width","36","height","36",3,"click",4,"ngIf"],["src","assets/icons/add.svg","width","36","height","36",3,"click"],[1,"container"],[1,"d-flex","justify-content-between","call-to-actions"],[1,"col-4"],[1,"input-group","search_box"],["id","basic-addon1",1,"input-group-text","border-0","bg-transparent"],[1,"bi","bi-search"],["ngbTooltip","For date use format: AAAA-MM-DD","tooltipClass","tooltip-class","type","text","placeholder","Search","aria-describedby","basic-addon1",1,"form-control","border-0",3,"ngModel","ngModelOptions","ngModelChange","keyup"],["class","d-flex gap-2",4,"ngIf"],[1,"container","mt-4"],[1,"table"],["scope","col"],[1,"d-flex","gap-2"],["routerLink","/dashboard/settings/onboarding/practice/add",1,"add_btn"],["src","/assets/icons/add.svg","alt",""],[1,"pointer",3,"click"],["ngbDropdown","","container","body","placement","bottom-end"],["ngbDropdownToggle","",1,"btn","btn-light","btn-sm","more_btn"],[1,"bi","bi-three-dots-vertical"],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"routerLink",4,"ngIf"],["ngbDropdownItem","",3,"click",4,"ngIf"],["ngbDropdownItem","",3,"routerLink"],["ngbDropdownItem","",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"i",3),t.TgZ(4,"p"),t._uU(5,"Settings"),t.qZA()(),t.TgZ(6,"ul",4),t.YNc(7,v,2,1,"div",5),t.qZA()(),t.TgZ(8,"div",6),t.YNc(9,T,9,1,"div",7),t.YNc(10,I,27,5,"div",8),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("routerLink",i.urlSettings),t.xp6(5),t.Q6J("ngForOf",i.onBoardingMenu),t.xp6(2),t.Q6J("ngIf",!i.data),t.xp6(1),t.Q6J("ngIf",i.data))},directives:[_.rH,l.sg,l.O5,_.Od,a.Fj,u._L,a.JJ,a.On,u.jt,u.iD,u.Vi,u.TH],pipes:[l.uU],styles:[".add_btn[_ngcontent-%COMP%]{border:none;background:transparent;width:34px}.add_btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px}.search_box[_ngcontent-%COMP%]{border:1px solid #dbdcdd;border-radius:6px}tr[_ngcontent-%COMP%]{line-height:3}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:1px solid currentColor}.more_btn[_ngcontent-%COMP%]{font-size:16px;font-weight:700;background-color:transparent;border:none}table.table[_ngcontent-%COMP%]{table-layout:fixed}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;text-align:start}table.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1){width:min-content}ul[_ngcontent-%COMP%]{font-size:13px;font-weight:700}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:3.2}.component-view[_ngcontent-%COMP%]{height:calc(100vh - 200px);overflow-x:hidden;overflow-y:auto}"]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_.Bz.forChild(D)],_.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,u.XC,L,u.IJ,a.u5,a.UX]]}),n})()},4889:(x,h,r)=>{r.d(h,{i:()=>b});var l=r(7448),_=r(5e3),t=r(520);let b=(()=>{class p{constructor(s){this.http=s}getPractices(s){return this.http.get(`${l.k.backend.host}/bg/practice`,{headers:{"X-ORG-ID":s}})}getPractice(s,a){return this.http.get(`${l.k.backend.host}/bg/practice/${a}`,{headers:{"X-ORG-ID":s}})}createPractice(s,a){return this.http.post(`${l.k.backend.host}/bg/practice`,a,{headers:{"X-ORG-ID":s}})}updatePractice(s,a,u){return this.http.put(`${l.k.backend.host}/bg/practice/${a}`,u,{headers:{"X-ORG-ID":s}})}deletePractice(s,a){return this.http.delete(`${l.k.backend.host}/bg/practice/${a}`,{headers:{"X-ORG-ID":s}})}}return p.\u0275fac=function(s){return new(s||p)(_.LFG(t.eN))},p.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[9770],{9693:(q,h,o)=>{o.d(h,{C:()=>U});var s=o(531),g=o(4825),n=o(5e3),A=o(520),u=o(703),c=o(4524),d=o(9808),_=o(2382),N=o(4376);function I(a,f){if(1&a&&(n.TgZ(0,"ng-option",13),n._uU(1),n.qZA()),2&a){const e=f.$implicit;n.Q6J("value",e.iso3),n.xp6(1),n.hij("",e.name," ")}}function Z(a,f){if(1&a&&(n.TgZ(0,"ng-option",13),n._uU(1),n.qZA()),2&a){const e=f.$implicit;n.Q6J("value",e.state_code),n.xp6(1),n.Oqu(e.name)}}function P(a,f){if(1&a&&(n.TgZ(0,"ng-option",13),n._uU(1),n.qZA()),2&a){const e=f.$implicit;n.Q6J("value",e.name),n.xp6(1),n.Oqu(e.name)}}const y=function(a,f,e,i,t){return{"valid-required-field":a,"red-bottom-line":f,"valid-mandatory-field":e,"mandatory-field ng-invalid":i,"mandatory-field-saved":t}};function G(a,f){if(1&a){const e=n.EpF();n.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),n._uU(6,"Address Line 1"),n.qZA(),n.TgZ(7,"input",6),n.NdJ("input",function(){n.CHM(e);const t=n.oxw();return t.isNotRequiredField("addressLine1","string"),t.isRequiredField("addressLine1"),t.inputChanged("addressLine1")}),n.qZA()(),n.TgZ(8,"div",4)(9,"label",5),n._uU(10,"Address Line 2"),n.qZA(),n.TgZ(11,"input",7),n.NdJ("input",function(){n.CHM(e);const t=n.oxw();return t.isNotRequiredField("addressLine2","string"),t.isRequiredField("addressLine2"),t.inputChanged("addressLine2")}),n.qZA()()(),n.TgZ(12,"div",3)(13,"div",4)(14,"label",5),n._uU(15,"Country"),n.qZA(),n.TgZ(16,"ng-select",8),n.NdJ("ngModelChange",function(t){return n.CHM(e),n.oxw().selectedCountry=t})("change",function(t){return n.CHM(e),n.oxw().getStates(t)})("clear",function(){n.CHM(e);const t=n.oxw();return t.resetState(),t.resetCity()})("change",function(){n.CHM(e);const t=n.oxw();return t.isNotRequiredField("country","dropdown"),t.isRequiredField("country"),t.inputChanged("country")}),n._uU(17,"> "),n.YNc(18,I,2,2,"ng-option",9),n.qZA()(),n.TgZ(19,"div",4)(20,"label",5),n._uU(21),n.qZA(),n.TgZ(22,"ng-select",10),n.NdJ("ngModelChange",function(t){return n.CHM(e),n.oxw().selectedState=t})("change",function(t){return n.CHM(e),n.oxw().getCities(t)})("open",function(){return n.CHM(e),n.oxw().stateOptionIsOpened()})("clear",function(){return n.CHM(e),n.oxw().resetCity()})("change",function(){n.CHM(e);const t=n.oxw();return t.isNotRequiredField("state","dropdown"),t.isRequiredField("state"),t.inputChanged("state")}),n.YNc(23,Z,2,2,"ng-option",9),n.qZA()(),n.TgZ(24,"div",4)(25,"label",5),n._uU(26),n.qZA(),n.TgZ(27,"ng-select",11),n.NdJ("ngModelChange",function(t){return n.CHM(e),n.oxw().selectedCity=t})("open",function(){return n.CHM(e),n.oxw().cityOptionIsOpened()})("change",function(){n.CHM(e);const t=n.oxw();return t.isNotRequiredField("city","dropdown"),t.isRequiredField("city"),t.inputChanged("city")}),n.YNc(28,P,2,2,"ng-option",9),n.qZA()(),n.TgZ(29,"div",4)(30,"label",5),n._uU(31,"Zip Code"),n.qZA(),n.TgZ(32,"input",12),n.NdJ("input",function(){n.CHM(e);const t=n.oxw();return t.isNotRequiredField("zipCode","dropdown"),t.isRequiredField("zipCode"),t.inputChanged("zipCode")}),n.qZA()()()()()()}if(2&a){const e=n.oxw();n.xp6(1),n.Q6J("formGroup",e.parentGroup),n.xp6(1),n.Q6J("formGroupName",e.formGroupName),n.xp6(5),n.Q6J("ngClass",n.qbA(17,y,e.mandAndRequiredFields[0].valid&&0==e.formDisabled,!e.mandAndRequiredFields[0].valid,e.mandAndRequiredFields[0].valid&&!e.formDisabled&&e.mandAndRequiredFields[0].mandatory,!e.mandAndRequiredFields[0].valid&&e.mandAndRequiredFields[0].mandatory,e.mandAndRequiredFields[0].mandSaved&&e.mandAndRequiredFields[0].mandatory)),n.xp6(4),n.Q6J("ngClass",n.qbA(23,y,e.mandAndRequiredFields[1].valid&&0==e.formDisabled,!e.mandAndRequiredFields[1].valid,e.mandAndRequiredFields[1].valid&&!e.formDisabled&&e.mandAndRequiredFields[1].mandatory,!e.mandAndRequiredFields[1].valid&&e.mandAndRequiredFields[1].mandatory,e.mandAndRequiredFields[1].mandSaved&&e.mandAndRequiredFields[1].mandatory)),n.xp6(5),n.Q6J("ngModel",e.selectedCountry)("searchFn",e.customSearchFn)("ngClass",n.qbA(29,y,e.mandAndRequiredFields[2].valid&&0==e.formDisabled,!e.mandAndRequiredFields[2].valid,e.mandAndRequiredFields[2].valid&&!e.formDisabled&&e.mandAndRequiredFields[2].mandatory,!e.mandAndRequiredFields[2].valid&&e.mandAndRequiredFields[2].mandatory,e.mandAndRequiredFields[2].mandSaved&&e.mandAndRequiredFields[2].mandatory)),n.xp6(2),n.Q6J("ngForOf",e.countries),n.xp6(3),n.hij("State ",e.mandAndRequiredFields[3].valid,""),n.xp6(1),n.Q6J("ngModel",e.selectedState)("ngClass",n.qbA(35,y,e.mandAndRequiredFields[3].valid&&0==e.formDisabled&&e.mandAndRequiredFields[3].required,!e.mandAndRequiredFields[3].valid&&e.mandAndRequiredFields[3].required,e.mandAndRequiredFields[3].valid&&!e.formDisabled&&e.mandAndRequiredFields[3].mandatory,!e.mandAndRequiredFields[3].valid&&e.mandAndRequiredFields[3].mandatory,e.mandAndRequiredFields[3].mandSaved&&e.mandAndRequiredFields[3].mandatory)),n.xp6(1),n.Q6J("ngForOf",e.states),n.xp6(3),n.hij("City ",e.mandAndRequiredFields[4].valid,""),n.xp6(1),n.Q6J("ngModel",e.selectedCity)("ngClass",n.qbA(41,y,e.mandAndRequiredFields[4].valid&&0==e.formDisabled,!e.mandAndRequiredFields[4].valid,e.mandAndRequiredFields[4].valid&&!e.formDisabled&&e.mandAndRequiredFields[4].mandatory,!e.mandAndRequiredFields[4].valid&&e.mandAndRequiredFields[4].mandatory,e.mandAndRequiredFields[4].mandSaved&&e.mandAndRequiredFields[4].mandatory)),n.xp6(1),n.Q6J("ngForOf",e.cities),n.xp6(4),n.Q6J("ngClass",n.qbA(47,y,e.mandAndRequiredFields[5].valid&&0==e.formDisabled,!e.mandAndRequiredFields[5].valid,e.mandAndRequiredFields[5].valid&&!e.formDisabled&&e.mandAndRequiredFields[5].mandatory,!e.mandAndRequiredFields[5].valid&&e.mandAndRequiredFields[5].mandatory,e.mandAndRequiredFields[5].mandSaved&&e.mandAndRequiredFields[5].mandatory))}}let U=(()=>{class a{constructor(e,i,t){this.http=e,this.geoService=i,this.addressFormService=t,this.mandAndRequiredFields=[{name:"addressLine1",type:"string",mandatory:!1,mandSaved:!1,required:!0,valid:!1},{name:"addressLine2",type:"string",mandatory:!1,mandSaved:!1,required:!1,valid:!1},{name:"country",type:"dropdown",mandatory:!1,mandSaved:!1,required:!0,valid:!1},{name:"state",type:"dropdown",mandatory:!1,mandSaved:!1,required:!0,valid:!1},{name:"city",type:"dropdown",mandatory:!1,mandSaved:!1,required:!0,valid:!1},{name:"zipCode",type:"number",mandatory:!1,mandSaved:!1,required:!0,valid:!1}],this.geoService.getCountries().pipe((0,g.g)(100)).subscribe({next:r=>{this.countries=r.sort((m,l)=>m.name>l.name?1:-1),setTimeout(()=>{this.loadIp()},100)}})}ngOnInit(){var e=this;return(0,s.Z)(function*(){e.addressFormService.getDisabledOrEnabled().subscribe(i=>{e.formDisabled=i,null==e.formDisabled&&(e.formDisabled=!1)})})()}reviewInputs(){var e=this;return(0,s.Z)(function*(){e.mandAndRequiredFields.forEach(function(){var i=(0,s.Z)(function*(t){yield e.isNotRequiredField(t.name,t.type)});return function(t){return i.apply(this,arguments)}}()),e.mandAndRequiredFields.forEach(i=>{e.isRequiredField(i.name)&&(i.mandatory=!0,i.required=!1)})})()}isNotRequiredField(e,i){var t=this;return(0,s.Z)(function*(){var r,p,M,E,D,O;const C=t.parentGroup.get(t.formGroupName).get(e);let v;if(t.form_field=C,"state"==e&&console.log("form_field_main",null==C?void 0:C.value),null==C?void 0:C.value)if("number"==i)v=!!Number(null===(r=t.form_field)||void 0===r?void 0:r.value);else if("string"==i)v=!!isNaN(null===(p=t.form_field)||void 0===p?void 0:p.value);else if("dropdown"==i){console.log("droooop",null===(M=t.form_field)||void 0===M?void 0:M.value);const F=isNaN(null===(E=t.form_field)||void 0===E?void 0:E.value);console.log("num",F),v=null!=(null===(D=t.form_field)||void 0===D?void 0:D.value)}else v="email"!=i||!!(null===(O=t.form_field)||void 0===O?void 0:O.value).match("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");else v=!1;t.mandAndRequiredFields.forEach(F=>{F.name==e&&(F.valid=v,t.form_field=null)})})()}isRequiredField(e){const t=this.parentGroup.get(this.formGroupName).get(e);if(this.form_field=t,!this.form_field||!this.form_field.validator)return!1;const r=this.form_field.validator({});return!!r&&r&&r.required}getStates(e){var i=this;return(0,s.Z)(function*(){if(i.resetState(),i.resetCity(),i.countries){const t=i.countries.filter(r=>r.iso3===e);t&&1==t.length&&i.geoService.getStates(t[0].id).subscribe({next:(r=(0,s.Z)(function*(m){i.states=yield m.sort((l,p)=>l.name>p.name?1:-1)}),function(l){return r.apply(this,arguments)})})}var r})()}getCities(e){var i=this;return(0,s.Z)(function*(){if(i.resetCity(),i.states){const t=i.states.filter(r=>r.state_code===e);t&&1==t.length&&i.geoService.getCities(t[0].id).subscribe({next:(r=(0,s.Z)(function*(m){i.cities=yield m.sort((p,R)=>p.name>R.name?1:-1);let l=i.cities.filter(p=>p.name.trim().split(/\s+/)[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"")==i.userLocaInfo.city.name.trim().split(/\s+/)[0].normalize("NFD").replace(/[\u0300-\u036f]/g,""));i.selectedCity=l[0].name,i.validatorCity=!0,setTimeout(()=>{i.reviewInputs()},110)}),function(l){return r.apply(this,arguments)})})}var r})()}stateOptionIsOpened(){var e;if(!this.states){const i=null===(e=this.parentGroup.controls[this.formGroupName].get("country"))||void 0===e?void 0:e.value;i&&this.getStates(i)}}emailValid(){}cityOptionIsOpened(){var e;if(!this.cities){const i=null===(e=this.parentGroup.controls[this.formGroupName].get("state"))||void 0===e?void 0:e.value;i&&this.getCities(i)}}resetState(){var e;this.parentGroup.controls[this.formGroupName].patchValue({state:null}),this.states=[],null===(e=this.parentGroup.controls.state)||void 0===e||e.setValue(null),this.validatorState=!1}resetCity(){var e;this.parentGroup.controls[this.formGroupName].patchValue({city:null}),this.cities=[],null===(e=this.parentGroup.controls.city)||void 0===e||e.setValue(null),this.validatorCity=!1}customSearchFn(e,i){let t=(e=e.toLowerCase()).split(" ").filter(l=>l),r=[];return t.forEach(l=>{let p=i.toLowerCase();r.push(-1!=p.indexOf(l))}),r.every(l=>l)}loadIp(){var e=this;return(0,s.Z)(function*(){e.http.get("https://api.geoapify.com/v1/ipinfo?&apiKey=f6ddac945f434391ace75449f5fbcb18").pipe().subscribe(function(){var i=(0,s.Z)(function*(t){e.userLocaInfo=t;let r=e.countries.filter(m=>m.name==e.userLocaInfo.country.name);e.selectedCountry=r[0].iso3,e.validatorCountry=!0,yield e.getStates(e.selectedCountry),setTimeout(()=>{let m=e.states.filter(l=>l.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"")==e.userLocaInfo.state.name);e.selectedState=m[0].state_code,e.validatorState=!0,e.getCities(e.selectedState)},1e3)});return function(t){return i.apply(this,arguments)}}())})()}inputChanged(e){this.mandAndRequiredFields.forEach(i=>{i.name==e&&(i.mandSaved=!1)})}saved(){this.mandAndRequiredFields.forEach(e=>{e.mandSaved=!0})}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(A.eN),n.Y36(u.p),n.Y36(c.W))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-address-form"]],inputs:{parentGroup:"parentGroup",formGroupName:"formGroupName",referrer:"referrer"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup"],[3,"formGroupName"],[1,"row","formrow"],[1,"col"],[1,"label-input-gap"],["type","text","formControlName","addressLine1","placeholder","Street address, P.O box",1,"form-control","input-upper",3,"ngClass","input"],["type","text","formControlName","addressLine2","placeholder","Apartment, Suite, Unit, Building, Floor, etc.",1,"form-control","input-upper",3,"ngClass","input"],["formControlName","country",1,"input-upper",3,"ngModel","searchFn","ngClass","ngModelChange","change","clear"],[3,"value",4,"ngFor","ngForOf"],["formControlName","state",1,"input-upper",3,"ngModel","ngClass","ngModelChange","change","open","clear"],["formControlName","city",1,"input-upper",3,"ngModel","ngClass","ngModelChange","open","change"],["type","text","formControlName","zipCode",1,"form-control","input-upper",3,"ngClass","input"],[3,"value"]],template:function(e,i){1&e&&n.YNc(0,G,33,53,"div",0),2&e&&n.Q6J("ngIf",i.parentGroup)},directives:[d.O5,_.JL,_.sg,_.x0,_.Fj,_.JJ,_.u,d.mk,N.w9,d.sg,N.jq],styles:[".input-disabled[_ngcontent-%COMP%]{border:1px solid #c1c3c5!important}"]}),a})()},7263:(q,h,o)=>{o.d(h,{q:()=>u});var s=o(9808),g=o(2382),n=o(4376),A=o(5e3);let u=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=A.oAB({type:c}),c.\u0275inj=A.cJS({imports:[[s.ez,g.u5,g.UX,n.A0]]}),c})()},4524:(q,h,o)=>{o.d(h,{W:()=>A});var s=o(2382),g=o(1135),n=o(5e3);let A=(()=>{class u{constructor(d){this.fb=d,this.isDisabled$=new g.X(this.isDisabled)}getAddressForm(d,_){return this.fb.group({addressLine1:[(null==(d=d||{})?void 0:d.addressLine1)||"",(_=_||{}).addressLine1&&[s.kI.required,s.kI.pattern("[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]")]],addressLine2:[(null==d?void 0:d.addressLine2)||"",_.addressLine2&&s.kI.required],city:[(null==d?void 0:d.city)||"",_.city&&s.kI.required],state:[(null==d?void 0:d.state)||"",_.state&&s.kI.required],country:[(null==d?void 0:d.country)||"",_.country&&s.kI.required],zipCode:[(null==d?void 0:d.zipCode)||"",_.zipCode&&s.kI.required]})}setDisabledOrEnabled(d){this.isDisabled=d,this.isDisabled$.next(this.isDisabled)}getDisabledOrEnabled(){return this.isDisabled$}}return u.\u0275fac=function(d){return new(d||u)(n.LFG(s.qu))},u.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},703:(q,h,o)=>{o.d(h,{p:()=>A});var s=o(7448),g=o(5e3),n=o(520);let A=(()=>{class u{constructor(d){this.http=d}getCountries(){return this.http.get(`${s.k.backend.host}/auth/global-data/countries`)}getStates(d){return this.http.get(`${s.k.backend.host}/auth/global-data/states/${d}`)}getCities(d){return this.http.get(`${s.k.backend.host}/auth/global-data/cities/${d}`)}}return u.\u0275fac=function(d){return new(d||u)(g.LFG(n.eN))},u.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);
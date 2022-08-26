import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor() { }

  businessGroupPristi: boolean = false;
  legalEntityPristi: boolean = false;
  locationPristi: boolean = false;
  practicePristi: boolean = false;

  //Conditions for canDeactive Popup
  conditions:any [] = [];

  setbusinessGroupNotPristine(value: boolean){
    this.businessGroupPristi = value;
  }

  getbusinessGroupNotPristine(){
    return this.businessGroupPristi;
  }

  setlegalEntityBenfNotPristine(value: boolean){
    this.legalEntityPristi = value;
  }

  getlegalEntityBenfNotPristine(){
    return this.legalEntityPristi;
  }

  setlocationNotPristine(value: boolean){
    this.locationPristi = value;
  }

  getlocationNotPristine(){
    return this.locationPristi;
  }

  setpracticeNotPristine(value: boolean){
    this.practicePristi = value;
  }

  getpracticeNotPristine(){
    return this.practicePristi;
  }

  setFalseAllNotPristine() {
    this.setbusinessGroupNotPristine(false);
    this.setlegalEntityBenfNotPristine(false);
    this.setlocationNotPristine(false);
    this.setpracticeNotPristine(false);
  }

  setConditions(){
    this.conditions = [];
		this.conditions.push({ section: "businessgroup", condition: this.getbusinessGroupNotPristine() });
		this.conditions.push({ section: "legalentity", condition: this.getlegalEntityBenfNotPristine() });
		this.conditions.push({ section: "location", condition: this.getlocationNotPristine() });
		this.conditions.push({ section: "practice", condition: this.getpracticeNotPristine() });
  }

  getConditions(){
    return this.conditions;
  }
}

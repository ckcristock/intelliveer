import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor() { }

  businessGroupNotPristi: boolean = false;
  legalEntityNotPristi: boolean = false;
  locationNotPristi: boolean = false;
  practiceNotPristi: boolean = false;

  //Conditions for canDeactive Popup
  conditions:any [] = [];

  setbusinessGroupNotPristine(value: boolean){
    this.businessGroupNotPristi = value;
  }

  getbusinessGroupNotPristine(){
    return this.businessGroupNotPristi;
  }

  setlegalEntityBenfNotPristine(value: boolean){
    this.legalEntityNotPristi = value;
  }

  getlegalEntityBenfNotPristine(){
    return this.legalEntityNotPristi;
  }

  setlocationNotPristine(value: boolean){
    this.locationNotPristi = value;
  }

  getlocationNotPristine(){
    return this.locationNotPristi;
  }

  setpracticeNotPristine(value: boolean){
    this.practiceNotPristi = value;
  }

  getpracticeNotPristine(){
    return this.practiceNotPristi;
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor() { }

  policyInfoPristi: boolean = false;
  orthodonticPristi: boolean = false;
  dentalBenfPristi: boolean = false;
  billingPristi: boolean = false;

  //Conditions for canDeactive Popup
  conditions:any [] = [];

  setPolicyInfoNotPristine(value: boolean){
    this.policyInfoPristi = value;
  }

  getPolicyInfoNotPristine(){
    return this.policyInfoPristi;
  }

  setOrthodonticBenfNotPristine(value: boolean){
    this.orthodonticPristi = value;
  }

  getOrthodonticBenfNotPristine(){
    return this.orthodonticPristi;
  }

  setDentalBenfNotPristine(value: boolean){
    this.dentalBenfPristi = value;
  }

  getDentalBenfNotPristine(){
    return this.dentalBenfPristi;
  }

  setBillingNotPristine(value: boolean){
    this.billingPristi = value;
  }

  getBillingNotPristine(){
    return this.billingPristi;
  }

  setFalseAllNotPristine() {
    this.setPolicyInfoNotPristine(false);
    this.setOrthodonticBenfNotPristine(false);
    this.setDentalBenfNotPristine(false);
    this.setBillingNotPristine(false);
  }

  setConditions(){
    this.conditions = [];
		this.conditions.push({ section: "policy", condition: this.getPolicyInfoNotPristine() });
		this.conditions.push({ section: "orthodontic", condition: this.getOrthodonticBenfNotPristine() });
		this.conditions.push({ section: "dentalbenefits", condition: this.getDentalBenfNotPristine() });
		this.conditions.push({ section: "billing", condition: this.getBillingNotPristine() });
  }

  getConditions(){
    return this.conditions;
  }
}

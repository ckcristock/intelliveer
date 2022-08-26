import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor() { }

  policyInfoNotPristi: boolean = false;
  orthodonticNotPristi: boolean = false;
  dentalBenfNotPristi: boolean = false;
  billingNotPristi: boolean = false;

  //Conditions for canDeactive Popup
  conditions:any [] = [];

  setPolicyInfoNotPristine(value: boolean){
    this.policyInfoNotPristi = value;
  }

  getPolicyInfoNotPristine(){
    return this.policyInfoNotPristi;
  }

  setOrthodonticBenfNotPristine(value: boolean){
    this.orthodonticNotPristi = value;
  }

  getOrthodonticBenfNotPristine(){
    return this.orthodonticNotPristi;
  }

  setDentalBenfNotPristine(value: boolean){
    this.dentalBenfNotPristi = value;
  }

  getDentalBenfNotPristine(){
    return this.dentalBenfNotPristi;
  }

  setBillingNotPristine(value: boolean){
    this.billingNotPristi = value;
  }

  getBillingNotPristine(){
    return this.billingNotPristi;
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientUserService {

  constructor() { }

  private familyMembers: any[] = [
    { role: 'Father', info: [] },
    { role: 'Mother', info: [] },
    { role: 'Brother', info: [] },
    { role: 'Sister', info: [] },
  ];

  private LegalGuardToPati!: string;
  private PaymPartyToPati!: string;
  private InsuSubscToPati!: string;
  private FamylMembToPati!: string;

  setPatientFamiMemb(role: any, data: any) {
    for (let i = 0; i < this.familyMembers.length; i++) {
      if (this.familyMembers[i].role == role) {
        this.familyMembers[i].info = data;
      }
    }
    localStorage.setItem("patientFamilyMembers", JSON.stringify(this.familyMembers));
  }

  //The relationship of Legal Guardian to Patient
  async setLegalGuardToPati(value: string) {
    this.LegalGuardToPati = value;
    localStorage.setItem("LegalGuardToPati", JSON.stringify(value));
    this.LegalGuardToPati = await JSON.parse(localStorage.getItem('LegalGuardToPati')!);
  }

  async getLegalGuardToPati() {
    return JSON.parse(localStorage.getItem('LegalGuardToPati')!);
  }

  async getLegalGuardFamiMemb() {
    if (JSON.parse(localStorage.getItem('patientFamilyMembers')!) != null) {
      this.familyMembers = await JSON.parse(localStorage.getItem('patientFamilyMembers')!);
      let familyMember = this.familyMembers.filter((familyMemb) => {
        return familyMemb.role == JSON.parse(localStorage.getItem('LegalGuardToPati')!);
      })
      // return familyMember[0]['info'];
    }
  }

  setLegalGuard(data: any) {
    localStorage.setItem("LegalGuardian", JSON.stringify(data));
  }

  async getLegalGuard() {
    return JSON.parse(localStorage.getItem('LegalGuardian')!);
  }


  //The relationship of Payment Party to Patient

  async setPaymPartyToPati(value: string) {
    this.PaymPartyToPati = value;
    localStorage.setItem("PaymPartyToPati", JSON.stringify(value));
    this.PaymPartyToPati = await JSON.parse(localStorage.getItem('PaymPartyToPati')!);
  }

  async getPaymPartyToPati() {
    return JSON.parse(localStorage.getItem('PaymPartyToPati')!);
  }

  async getPaymPartyFamiMemb() {
    if (JSON.parse(localStorage.getItem('patientFamilyMembers')!) != null) {
      this.familyMembers = await JSON.parse(localStorage.getItem('patientFamilyMembers')!);
      let familyMember = this.familyMembers.filter((familyMemb) => {
        return familyMemb.role == JSON.parse(localStorage.getItem('PaymPartyToPati')!);
      })
      // return familyMember[0]['info'];
    }
  }

  setPaymParty(data: any) {
    localStorage.setItem("PaymParty", JSON.stringify(data));
  }

  async getPaymParty() {
    return JSON.parse(localStorage.getItem('PaymParty')!);
  }


  //The relationship of Insurance Subscriber to Patient

  async setInsuSubscToPati(value: string) {
    this.InsuSubscToPati = value;
    localStorage.setItem("InsuSubscToPati", JSON.stringify(value));
    this.InsuSubscToPati = await JSON.parse(localStorage.getItem('InsuSubscToPati')!);
  }

  async getInsuSubscToPati() {
    return JSON.parse(localStorage.getItem('InsuSubscToPati')!);
  }

  async getInsuSubscFamiMemb() {
    if (JSON.parse(localStorage.getItem('patientFamilyMembers')!) != null) {
      this.familyMembers = await JSON.parse(localStorage.getItem('patientFamilyMembers')!);
      let familyMember = this.familyMembers.filter((familyMemb) => {
        return familyMemb.role == JSON.parse(localStorage.getItem('InsuSubscToPati')!);
      })
      return familyMember[0]['info'];
    }
  }

  setInsuSubsc(data: any) {
    localStorage.setItem("InsuSubsc", JSON.stringify(data));
  }

  async getInsuSubsc() {
    return JSON.parse(localStorage.getItem('InsuSubsc')!);
  }

  //The relationship of Family Members to Patient

  async setFamylMembToPati(value: string) {
    this.FamylMembToPati = value;
    localStorage.setItem("FamylMembToPati", JSON.stringify(value));
    this.FamylMembToPati = await JSON.parse(localStorage.getItem('FamylMembToPati')!);
  }

  async getFamylMembToPati() {
    return JSON.parse(localStorage.getItem('FamylMembToPati')!);
  }

  async getFamylMembFamylMemb() {
    if (JSON.parse(localStorage.getItem('patientFamilyMembers')!) != null) {
      this.familyMembers = await JSON.parse(localStorage.getItem('patientFamilyMembers')!);
      let familyMember = this.familyMembers.filter((familyMemb) => {
        return familyMemb.role == JSON.parse(localStorage.getItem('FamylMembToPati')!);
      })
      return familyMember[0]['info'];
    }
  }

  setFamyMemb(data: any) {
    localStorage.setItem("FamyMemb", JSON.stringify(data));
  }

  async getFamyMemb() {
    return JSON.parse(localStorage.getItem('FamyMemb')!);
  }

  /////////////////////////////////////////////////////////

  // For canDeactive Popup

  patientNotPristi: boolean = false;
  legalGuardNotPristi: boolean = false;
  paymentPartyNotPristi: boolean = false;
  insuranSubscNotPristi: boolean = false;
  exterProvNotPristi: boolean = false;
  referrerNotPristi: boolean = false;
  familyMembNotPristi: boolean = false;

  //Conditions for canDeactive Popup
  conditions: any[] = [];

  setpatientNotPristine(value: boolean) {
    this.patientNotPristi = value;
  }

  getpatientNotPristine() {
    return this.patientNotPristi;
  }

  setlegalGuardNotPristine(value: boolean) {
    this.legalGuardNotPristi = value;
  }

  getlegalGuardNotPristine() {
    return this.legalGuardNotPristi;
  }

  setpaymentPartyNotPristine(value: boolean) {
    this.paymentPartyNotPristi = value;
  }

  getpaymentPartyNotPristine() {
    return this.paymentPartyNotPristi;
  }

  setinsuranSubscNotPristine(value: boolean) {
    this.insuranSubscNotPristi = value;
  }

  getinsuranSubscNotPristine() {
    return this.insuranSubscNotPristi;
  }

  setExterProvNotPristine(value: boolean) {
    this.exterProvNotPristi = value;
  }

  getExterProvNotPristine() {
    return this.exterProvNotPristi;
  }

  setReferrerNotPristine(value: boolean) {
    this.referrerNotPristi = value;
  }

  getReferrerNotPristine() {
    return this.referrerNotPristi;
  }

  setFamilyMembNotPristine(value: boolean) {
    this.familyMembNotPristi = value;
  }

  getFamilyMembNotPristine() {
    return this.familyMembNotPristi;
  }

  setFalseAllNotPristine() {
    this.setpatientNotPristine(false);
    this.setlegalGuardNotPristine(false);
    this.setpaymentPartyNotPristine(false);
    this.setinsuranSubscNotPristine(false);
    this.setExterProvNotPristine(false);
    this.setReferrerNotPristine(false);
    this.setFamilyMembNotPristine(false);
  }

  setConditions() {
    this.conditions = [];
    this.conditions.push({ section: "patient", condition: this.getpatientNotPristine() });
    this.conditions.push({ section: "legalGuard", condition: this.getlegalGuardNotPristine() });
    this.conditions.push({ section: "referrer", condition: this.getReferrerNotPristine() });
    this.conditions.push({ section: "insuranSubsc", condition: this.getinsuranSubscNotPristine() });
    this.conditions.push({ section: "exterprov", condition: this.getExterProvNotPristine() });
    this.conditions.push({ section: "paymentParty", condition: this.getpaymentPartyNotPristine() });
    this.conditions.push({ section: "familyMemb", condition: this.getFamilyMembNotPristine() });
  }

  getConditions() {
    return this.conditions;
  }


}

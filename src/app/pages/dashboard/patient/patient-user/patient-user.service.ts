import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientUserService {

  constructor() { }

  private LegalGuardToPati!: string;
  private PaymPartyToPati!: string;
  private InsuSubscToPati!: string;
  private FamylMembToPati!: string;

  //The relationship of Legal Guardian to Patient
  setLegalGuardToPati(value: string){
    this.LegalGuardToPati = value;
  }

  getLegalGuardToPati(){
    return this.LegalGuardToPati;
  }

  //The relationship of Payment Party to Patient

  setPaymPartyToPati(value: string){
    this.PaymPartyToPati = value;
  }

  getPaymPartyToPati(){
    return this.PaymPartyToPati;
  }

  //The relationship of Insurance Subscriber to Patient

  setInsuSubscToPati(value: string){
    this.InsuSubscToPati = value;
  }

  getInsuSubscToPati(){
    return this.InsuSubscToPati;
  }

  //The relationship of Family Members to Patient

  setFamylMembToPati(value: string){
    this.FamylMembToPati = value;
  }

  getFamylMembToPati(){
    return this.FamylMembToPati;
  }


}

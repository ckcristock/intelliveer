import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {

  constructor() { }

  // Forms Pristine Add Patient Coordinate with Prospect

  callerInfoNotPristiCWP: boolean = false;
  patientNotPristiCWP: boolean = false;
  legalGuardNotPristiCWP: boolean = false;
  dentistNotPristiCWP: boolean = false;
  referrerNotPristiCWP: boolean = false;
  insuranceNotPristiCWP: boolean = false;
  patient2NotPristiCWP: boolean = false;
  patient3NotPristiCWP: boolean = false;
  patient4NotPristiCWP: boolean = false;
  appointmNotPristiCWP: boolean = false;
  conclusionNotPristiCWP: boolean = false;

  private patientsSavedUnsaved: any[] = [
    {
      name: 'Patient 2',
      taken: true,
      saved: false
    },
    {
      name: 'Patient 3',
      taken: false,
      saved: false
    },
    {
      name: 'Patient 4',
      taken: false,
      saved: false
    }
  ];

  private patientsSavedUnsaved$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  //List Data For Coordinate With Prospect
  private lgList: any[] = [
    {
      relationshipPatToLG: "",
      firstName: "Legal",
      lastName: "Guardian 1",
      selected: true,
      activated: true
    },
    {
      relationshipPatToLG: "",
      firstName: "Legal",
      lastName: "Guardian 2",
      selected: false,
      activated: true
    },
    {
      relationshipPatToLG: "",
      firstName: "Legal",
      lastName: "Guardian 3",
      selected: false,
      activated: true
    }
  ];

  private dentists: any[] = [
    {
      officeName: "Dentist 1’s office name",
      firstName: "Dentist",
      lastName: "One",
      officePhoneNumb: "Dentist 1’s office ph. no.",
      selected: true,
      activated: true
    },
    {
      officeName: "Dentist 2’s office name",
      firstName: "Dentist",
      lastName: "Two",
      officePhoneNumb: "Dentist 2’s office ph. no.",
      selected: false,
      activated: true
    }
  ];

  private referrers: any[] = [
    {
      companyName: "Company 1",
      firstName: "Referrer",
      lastName: "One",
      phoneNumb: "Referrer 1’s ph. no.",
      selected: true,
      activated: true
    },
    {
      companyName: "Company 2",
      firstName: "Referrer",
      lastName: "Two",
      phoneNumb: "Referrer 2’s ph. no.",
      selected: false,
      activated: true
    }
  ];

  private insurances1: any[] = [
    {
      insuranName: "Insurance One",
      phoneNumb: "0123456789",
      selected: true,
      activated: true
    },
    {
      insuranName: "Insurance Two",
      phoneNumb: "0123456645",
      selected: false,
      activated: true
    }
  ];

  private insurances2: any[] = [
    {
      insuranName: "Insurance One",
      phoneNumb: "0123456789",
      selected: true,
      activated: true
    },
    {
      insuranName: "Insurance Two",
      phoneNumb: "0123456645",
      selected: false,
      activated: true
    }
  ];

  private insurances3: any[] = [
    {
      insuranName: "Insurance One",
      phoneNumb: "0123456789",
      selected: true,
      activated: true
    },
    {
      insuranName: "Insurance Two",
      phoneNumb: "0123456645",
      selected: false,
      activated: true
    }
  ];

  private subscribers1: any[] = [
    {
      firstName: "Subscriber",
      lastName: "One",
      relationship: "Subscriber 1’s relationship",
      DOB: "",
      SSNID: "",
      phoneNumb: "",
      selected: true,
      activated: true
    },
    {
      firstName: "Subscriber",
      lastName: "Two",
      relationship: "Subscriber 2’s relationship",
      DOB: "",
      SSNID: "",
      phoneNumb: "",
      selected: false,
      activated: true
    }
  ];
  private subscribers2: any[] = [
    {
      firstName: "Subscriber",
      lastName: "One",
      relationship: "Subscriber 1’s relationship",
      DOB: "",
      SSNID: "",
      phoneNumb: "",
      selected: true,
      activated: true
    },
    {
      firstName: "Subscriber",
      lastName: "Two",
      relationship: "Subscriber 2’s relationship",
      DOB: "",
      SSNID: "",
      phoneNumb: "",
      selected: false,
      activated: true
    }
  ];

  private subscribers3: any[] = [
    {
      firstName: "Subscriber",
      lastName: "One",
      relationship: "Subscriber 1’s relationship",
      DOB: "",
      SSNID: "",
      phoneNumb: "",
      selected: true,
      activated: true
    },
    {
      firstName: "Subscriber",
      lastName: "Two",
      relationship: "Subscriber 2’s relationship",
      DOB: "",
      SSNID: "",
      phoneNumb: "",
      selected: false,
      activated: true
    }
  ];

  // End List Data for Coordinate With Prospect

  // For CanDeactive Popup
  callersInfoFunctionCWP!: () => any;
  patientFunctionCWP!: () => any;
  legalGuardFunctionCWP!: () => any;
  dentistFunctionCWP!: () => any;
  referrerFunctionCWP!: () => any;
  insuranceFunctionCWP!: () => any;
  patient2FunctionCWP!: () => any;
  patient3FunctionCWP!: () => any;
  patient4FunctionCWP!: () => any;


  conditions:any [] = [];


  //Get Lists Data for Coordinate With Prospect

  async getlgListCwpApi() {
    return this.lgList;
  }

  async getdentistsCwpApi() {
    return this.dentists;
  }

  async getreferrersCwpApi() {
    return this.referrers;
  }

  async getinsurances1CwpApi() {
    return this.insurances1;
  }

  async getinsurances2CwpApi() {
    return this.insurances2;
  }

  async getinsurances3CwpApi() {
    return this.insurances3;
  }

  async getsubscribers1CwpApi() {
    return this.subscribers1;
  }

  async getsubscribers2CwpApi() {
    return this.subscribers2;
  }
  async getsubscribers3CwpApi() {
    return this.subscribers3;
  }

  //End Get Lists Data for Coordinate With Prospect

  //Set Forms Patient1 Coordinate With Prospect

  setCallerInfoCWP(callersInfo: any) {
    localStorage.setItem("callerCoorWithProsp", JSON.stringify(callersInfo));
  }

  setPatientCWP(patient: any) {
    localStorage.setItem("patientCoorWithProsp", JSON.stringify(patient));
  }

  setLegalGuardCWP(LG: any, index: number) {
    localStorage.setItem(`legalGuard${index}CoorWithProsp`, JSON.stringify(LG));
  }

  setDentistCWP(dentist: any) {
    localStorage.setItem("dentistCoorWithProsp", JSON.stringify(dentist));
  }

  setReferrerCWP(referrer: any) {
    localStorage.setItem("referrerCoorWithProsp", JSON.stringify(referrer));
  }

  setInsuranceP1CWP(insurance: any) {
    localStorage.setItem("insuranceP1CoorWithProsp", JSON.stringify(insurance));
  }

  //End Set Forms Patient1

  //Get Forms Patient1 Coordinate With Prospect

  async getCallerInfoCWP() {
    return JSON.parse(localStorage.getItem("callerCoorWithProsp") || '[]');
  }

  async getPatientCWP() {
    return JSON.parse(localStorage.getItem("patientCoorWithProsp") || '[]');
  }

  async getLegalGuardCWP(index: number) {
    return JSON.parse(localStorage.getItem(`legalGuard${index}CoorWithProsp`) || '[]');
  }

  async getDentistCWP() {
    return JSON.parse(localStorage.getItem("dentistCoorWithProsp") || '[]');
  }

  async getReferrerCWP() {
    return JSON.parse(localStorage.getItem("referrerCoorWithProsp") || '[]');
  }

  async getinsurancesP1Cwp() {
    return JSON.parse(localStorage.getItem("insuranceP1CoorWithProsp") || '[]');
  }

  //End get Forms Patient1

  //Set Forms Patient1 Quick Add

  setPatientQuiAdd(patient: any) {
    localStorage.setItem("patientQuickAdd", JSON.stringify(patient));
  }

  setLegalGuardQuiAdd(LG: any) {
    localStorage.setItem(`legalGuardQuickAdd`, JSON.stringify(LG));
  }

  setDentistQuiAdd(dentist: any) {
    localStorage.setItem("dentistQuickAdd", JSON.stringify(dentist));
  }

  setReferrerQuiAdd(referrer: any) {
    localStorage.setItem("referrerQuickAdd", JSON.stringify(referrer));
  }

  //End Set Forms Patient1 Quick Add

  //Get Forms Patient1 Quick Add

  async getPatientQuiAdd() {
    return JSON.parse(localStorage.getItem("patientQuickAdd") || '[]');
  }

  async getLegalGuardQuiAdd() {
    return JSON.parse(localStorage.getItem(`legalGuardQuickAdd`) || '[]');
  }

  async getDentistQuiAdd() {
    return JSON.parse(localStorage.getItem("dentistQuickAdd") || '[]');
  }

  async getReferrerQuiAdd() {
    return JSON.parse(localStorage.getItem("referrerQuickAdd") || '[]');
  }

  //End get Forms Patient1 Quick Add

  setTaken(numb: any) {
    for (let i = 0; i < numb; i++) {
      this.patientsSavedUnsaved[i].taken = true;
      this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
    }
    for (let j = numb; j < this.patientsSavedUnsaved.length; j++) {
      this.patientsSavedUnsaved[j].taken = false;
      this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
    }

  }

  setPatientCWPSaved(id: number) {
    this.patientsSavedUnsaved[id].saved = true;
    this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
  }

  get$() {
    this.patientsSavedUnsaved$.next(this.patientsSavedUnsaved);
  }

  getPatientsSavedUnsaved(): Observable<any[]> {
    return this.patientsSavedUnsaved$;
  }

  getCheckAllSaved() {
    let patientsUnsaved: any[] = [];
    patientsUnsaved = this.patientsSavedUnsaved.filter((x) => {
      return x.saved == false && x.taken == true;
    });

    if (patientsUnsaved.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  getSavedPatientsKeys() {
    let patientsSaved = this.patientsSavedUnsaved.filter((x) => {
      return x.saved == true && x.taken == true;
    });

    var keys: string[] = [];
    patientsSaved.forEach(patientsSaved => {
      let key = patientsSaved.name;
      keys.push(key);
    })
    return keys;
  }

  // Forms Pristine Add Patient Coordinate with Prospect

  setCallerInfoNotPristineCWP(value: boolean) {
    this.callerInfoNotPristiCWP = value;
  }

  getCallerInfoNotPristineCWP() {
    return this.callerInfoNotPristiCWP;
  }

  setPatientNotPristineCWP(value: boolean) {
    this.patientNotPristiCWP = value;
  }

  getPatientNotPristineCWP() {
    return this.patientNotPristiCWP;
  }

  setLegalGuardianNotPristineCWP(value: boolean) {
    this.legalGuardNotPristiCWP = value;
  }

  getLegalGuardianNotPristineCWP() {
    return this.legalGuardNotPristiCWP;
  }

  setDentistNotPristineCWP(value: boolean) {
    this.dentistNotPristiCWP = value;
  }

  getDentistNotPristineCWP() {
    return this.dentistNotPristiCWP;
  }

  setReferrerNotPristineCWP(value: boolean) {
    this.referrerNotPristiCWP = value;
  }

  getReferrerNotPristineCWP() {
    return this.referrerNotPristiCWP;
  }

  setInsuranceNotPristineCWP(value: boolean) {
    this.insuranceNotPristiCWP = value;
  }

  getInsuranceNotPristineCWP() {
    return this.insuranceNotPristiCWP;
  }

  setPatient2NotPristineCWP(value: boolean) {
    this.patient2NotPristiCWP = value;
  }

  getPatient2NotPristineCWP() {
    return this.patient2NotPristiCWP;
  }

  setPatient3NotPristineCWP(value: boolean) {
    this.patient3NotPristiCWP = value;
  }

  getPatient3NotPristineCWP() {
    return this.patient3NotPristiCWP;
  }

  setPatient4NotPristineCWP(value: boolean) {
    this.patient4NotPristiCWP = value;
  }

  getPatient4NotPristineCWP() {
    return this.patient4NotPristiCWP;
  }

  setAppointmNotPristineCWP(value: boolean) {
    this.appointmNotPristiCWP = value;
  }

  getAppointmNotPristineCWP() {
    return this.appointmNotPristiCWP;
  }

  setConclusionNotPristineCWP(value: boolean) {
    this.conclusionNotPristiCWP = value;
  }

  getConclusionNotPristineCWP() {
    return this.conclusionNotPristiCWP;
  }

  setFalseAllNotPristineCWP() {
    this.setCallerInfoNotPristineCWP(false);
    this.setPatientNotPristineCWP(false);
    this.setLegalGuardianNotPristineCWP(false);
    this.setDentistNotPristineCWP(false);
    this.setReferrerNotPristineCWP(false);
    this.setInsuranceNotPristineCWP(false);
    this.setPatient2NotPristineCWP(false);
    this.setPatient3NotPristineCWP(false);
    this.setPatient4NotPristineCWP(false);
    this.setAppointmNotPristineCWP(false);
    this.setConclusionNotPristineCWP(false);
  }

  // For CanDeactive Popup

  // Conditions for canDeactive Guard

  setConditions(){
    this.conditions = [];
		this.conditions.push({ section: "callersinfo", condition: this.getCallerInfoNotPristineCWP() });
		this.conditions.push({ section: "patient", condition: this.getPatientNotPristineCWP() });
		this.conditions.push({ section: "legalguardian", condition: this.getLegalGuardianNotPristineCWP() });
		this.conditions.push({ section: "dentist", condition: this.getDentistNotPristineCWP() });
		this.conditions.push({ section: "referrer", condition: this.getReferrerNotPristineCWP() });
		this.conditions.push({ section: "insurance", condition: this.getInsuranceNotPristineCWP() });
		this.conditions.push({ section: "patient2", condition: this.getPatient2NotPristineCWP() });
		this.conditions.push({ section: "patient3", condition: this.getPatient3NotPristineCWP() });
		this.conditions.push({ section: "patient4", condition: this.getPatient4NotPristineCWP() });
		this.conditions.push({ section: "appointment", condition: this.getAppointmNotPristineCWP() });
		this.conditions.push({ section: "conclusion", condition: this.getConclusionNotPristineCWP() });
  }

  getConditions(){
    return this.conditions;
  }

  getCallersInfoFromCompone(fnCaller: () => void) {
    this.callersInfoFunctionCWP = fnCaller;
  }

  getPatientFromCompone(fnPatient: () => void) {
    this.patientFunctionCWP = fnPatient;
  }

  getLegalGuardFromCompone(fnLegalGuard: () => void) {
    this.legalGuardFunctionCWP = fnLegalGuard;
  }
  
  getDentistFromCompone(fnDentist: () => void) {
    this.dentistFunctionCWP = fnDentist;
  }

  getReferrerFromCompone(fnReferrer: () => void) {
    this.referrerFunctionCWP = fnReferrer;
  }

  getInsuranceFromCompone(fnInsuran: () => void) {
    this.insuranceFunctionCWP = fnInsuran;
  }

  getPatient2FromCompone(fnPatient2: () => void) {
    this.patient2FunctionCWP = fnPatient2;
  }

  getPatient3FromCompone(fnPatient3: () => void) {
    this.patient3FunctionCWP = fnPatient3;
  }

  getPatient4FromCompone(fnPatient4: () => void) {
    this.patient4FunctionCWP = fnPatient4;
  }

  setCallersInfoCWPFromPopup(){
    console.log("callerinfo Data", this.callersInfoFunctionCWP());
    let callerInfo:any [] = this.callersInfoFunctionCWP();
    console.log("callerinfo Data", callerInfo);
    this.setCallerInfoCWP(callerInfo[0]);
  }

  setPatientCWPFromPopup(){
    console.log("patientData", this.patientFunctionCWP());
    let patient:any [] = this.patientFunctionCWP();
    console.log("patientData", patient);
    this.setPatientCWP(patient[0]);
  }

  setLegalGuardCWPFromPopup(){
    console.log("legalGuardData", this.legalGuardFunctionCWP());
    let legalGuard:any [] = this.legalGuardFunctionCWP();
    console.log("legalGuardDataArray", legalGuard);
    this.setLegalGuardCWP(legalGuard[0], legalGuard[1]);
  }

  setDentistCWPFromPopup(){
    console.log("dentist Data", this.dentistFunctionCWP());
    let dentist:any [] = this.dentistFunctionCWP();
    console.log("dentist Data", dentist);
    this.setDentistCWP(dentist[0]);
  }

  setReferrerCWPFromPopup(){
    console.log("Referrer", this.referrerFunctionCWP());
    let referrer:any [] = this.referrerFunctionCWP();
    console.log("Referrer Data", referrer);
    this.setReferrerCWP(referrer[0]);
  }

  setInsuranceCWPFromPopup(){
    console.log("insurance", this.insuranceFunctionCWP());
    let insurance:any [] = this.insuranceFunctionCWP();
    console.log("insurance Data", insurance);
    this.setInsuranceP1CWP(insurance[0]);
  }

}

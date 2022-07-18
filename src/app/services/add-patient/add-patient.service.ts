import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {

  constructor() { }

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

  //Array Data For Coordinate With Prospect
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

  // End Coordinate With Prospect


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

  //section Insurance - Patient 1
  setInsuranceCWP(insurance: any) {
    localStorage.setItem("insuranceCoorWithProsp", JSON.stringify(insurance));
  }

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

  //Functions for Coordinate With Prospect From API
  async getlgListCwpApi() {
    return this.lgList;
  }

  async getdentistsCwpApi() {
    return this.dentists;
  }

  async getreferrersCwpApi() {
    return this.referrers;
  }

  async getinsurancesCwpApi() {
    return JSON.parse(localStorage.getItem("insuranceCoorWithProsp") || '[]');
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

  //End Functions for Coordinate With Prospect


}

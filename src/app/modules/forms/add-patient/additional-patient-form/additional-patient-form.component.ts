import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPatientService } from "@services/add-patient/add-patient.service";
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";

@Component({
  selector: 'app-additional-patient-form',
  templateUrl: './additional-patient-form.component.html',
  styleUrls: ['./additional-patient-form.component.scss']
})
export class AdditionalPatientFormComponent implements OnInit {

  additionalPatient = {
    id:"",
    firstName: "",
    lastName: "",
    birthDate: "",
    gernder: "",
    legalGuardian: {},
    dentist: {
      officeName: "",
      firstName: "",
      lastName: "",
      officePhoneNumb: "",
    },
    referrer: {
      companyName: "",
      firstName: "",
      lastName: "",
      phoneNumb: "",
      selected: true,
      activated: true
    },
    insurances: {
      insurance1: {
        insuranName: "",
        phoneNumb: "",
        subscriber1: {
          firstName: "",
          lastName: "",
          relationship: "",
          DOB: "",
          SSNID: "",
          phoneNumb: "",
        }
      },
      insurance2: {
        insuranName: "",
        phoneNumb: "",
        subscriber2: {
          firstName: "",
          lastName: "",
          relationship: "",
          DOB: "",
          SSNID: "",
          phoneNumb: "",
        }
      },
      insurance3: {
        insuranName: "",
        phoneNumb: "",
        subscriber3: {
          firstName: "",
          lastName: "",
          relationship: "",
          DOB: "",
          SSNID: "",
          phoneNumb: "",
        }
      },
    }
  }

  lgList: any[] = [];
  dentists: any[] = [];
  referrers: any[] = [];
  insurances1: any[] = [];
  insurances2: any[] = [];
  insurances3: any[] = [];
  subscribers1: any[] = [];
  subscribers2: any[] = [];
  subscribers3: any[] = [];

  radioLGuard: number = 1;
  radioDentist: number = 1;
  radioReferrer: number = 1;
  radioInsuran1: number = 1;
  radioInsuran2: number = 1;
  radioInsuran3: number = 1;
  radioSubscriber1: number = 1;
  radioSubscriber2: number = 1;
  radioSubscriber3: number = 1;

  @Input() patientPage: number = 2;
  familyMemberCount: any = 2;
  checkInsuranceCount: number = 1;
  provideInsurance: boolean = true;
  coordWithProspRoutes: any[] = [];
  title: string = "";
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;

  constructor(
    private router: Router,
    private routes: GlobalRoutesService,
    private AddPatientService: AddPatientService) { }

  ngOnInit(): void {
    this.title = `Patient ${this.patientPage}`;
    this.additionalPatient.id = this.patientPage.toString();
    this.getCWPData();
  }

  async getCWPData() {
    this.lgList = await this.AddPatientService.getlgListCwpApi();
    this.dentists = await this.AddPatientService.getdentistsCwpApi();
    this.referrers = await this.AddPatientService.getreferrersCwpApi();
    this.insurances1 = await this.AddPatientService.getinsurances1CwpApi();
    this.insurances2 = await this.AddPatientService.getinsurances2CwpApi();
    this.insurances3 = await this.AddPatientService.getinsurances3CwpApi();
    this.subscribers1 = await this.AddPatientService.getsubscribers1CwpApi();
    this.subscribers2 = await this.AddPatientService.getsubscribers2CwpApi();
    this.subscribers3 = await this.AddPatientService.getsubscribers3CwpApi();
    // For Dentist
    for (let i = 0; i < this.dentists.length; i++) {
      if (this.dentists[i].selected) {
        this.additionalPatient.dentist.firstName = this.dentists[i].firstName;
        this.additionalPatient.dentist.lastName = this.dentists[i].lastName;
        this.additionalPatient.dentist.officeName = this.dentists[i].officeName;
        this.additionalPatient.dentist.officePhoneNumb = this.dentists[i].officePhoneNumb;
      }
    }
    // For Referrer
    for (let i = 0; i < this.referrers.length; i++) {
      if (this.referrers[i].selected) {
        this.additionalPatient.referrer.firstName = this.referrers[i].firstName;
        this.additionalPatient.referrer.lastName = this.referrers[i].lastName;
        this.additionalPatient.referrer.companyName = this.referrers[i].companyName;
        this.additionalPatient.referrer.phoneNumb = this.referrers[i].phoneNumb;
      }
    }
    // For Insurance1
    for (let i = 0; i < this.insurances1.length; i++) {
      if (this.insurances1[i].selected) {
        this.additionalPatient.insurances.insurance1.insuranName = this.insurances1[i].insuranName;
        this.additionalPatient.insurances.insurance1.phoneNumb = this.insurances1[i].phoneNumb;
      }
    }
    // For Insurance2
    for (let i = 0; i < this.insurances2.length; i++) {
      if (this.insurances2[i].selected) {
        this.additionalPatient.insurances.insurance2.insuranName = this.insurances2[i].insuranName;
        this.additionalPatient.insurances.insurance2.phoneNumb = this.insurances2[i].phoneNumb;
      }
    }
    // For Insurance3
    for (let i = 0; i < this.insurances3.length; i++) {
      if (this.insurances3[i].selected) {
        this.additionalPatient.insurances.insurance3.insuranName = this.insurances3[i].insuranName;
        this.additionalPatient.insurances.insurance3.phoneNumb = this.insurances3[i].phoneNumb;
      }
    }
    // For Subscriber1
    for (let i = 0; i < this.subscribers1.length; i++) {
      if (this.subscribers1[i].selected) {
        this.additionalPatient.insurances.insurance1.subscriber1.firstName = this.subscribers1[i].firstName;
        this.additionalPatient.insurances.insurance1.subscriber1.lastName = this.subscribers1[i].lastName;
      }
    }
    // For Subscriber2
    for (let i = 0; i < this.subscribers2.length; i++) {
      if (this.subscribers2[i].selected) {
        this.additionalPatient.insurances.insurance2.subscriber2.firstName = this.subscribers2[i].firstName;
        this.additionalPatient.insurances.insurance2.subscriber2.lastName = this.subscribers2[i].lastName;
      }
    }
    // For Subscriber3
    for (let i = 0; i < this.subscribers3.length; i++) {
      if (this.subscribers3[i].selected) {
        this.additionalPatient.insurances.insurance3.subscriber3.firstName = this.subscribers3[i].firstName;
        this.additionalPatient.insurances.insurance3.subscriber3.lastName = this.subscribers3[i].lastName;
      }
    }
  }

  moveToAnotherTab() {
    this.familyMemberCount = localStorage.getItem('familyMemberCount');
    this.familyMemberCount = parseInt(this.familyMemberCount);
    this.coordWithProspRoutes = this.routes.getCoordWithProspRoutes();


    if (this.patientPage == 4) {
      this.AddPatientService.setPatientCWPSaved(2);
      this.router.navigate([this.coordWithProspRoutes[7].url]);

      return;
    }

    for (let i = 1; i <= this.familyMemberCount; i++) {
      if (this.patientPage == (i + 1) && this.familyMemberCount === i) {
        this.AddPatientService.setPatientCWPSaved(i - 1);
        this.router.navigate([this.coordWithProspRoutes[7].url]);
      } else if (this.patientPage == (i + 1)) {
        this.AddPatientService.setPatientCWPSaved(i - 1);
        this.router.navigate([this.coordWithProspRoutes[6].child[i].url]);

      }
    }
  }

  showButtonSaveCancelFunc() {
    this.showButtonSaveCancel = true;
  }

  closeSaveCancelFunc() {
    this.openTextAreaVar = false;
    this.showButtonSaveCancel = false;
  }

  openTextarea() {
    this.openTextAreaVar = true;
    this.showButtonSaveCancel = true;
  }

  changeSelDent(dentIndex: number, value: boolean) {

    if (this.dentists[dentIndex].activated) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (i == dentIndex && !this.dentists[i].selected) {
          this.dentists[i].selected = true;
        } else {
          this.dentists[i].selected = false;
          this.additionalPatient.dentist.firstName = "";
          this.additionalPatient.dentist.lastName = "";
          this.additionalPatient.dentist.officeName = "";
          this.additionalPatient.dentist.officePhoneNumb = "";
        }
      }
    }

    for (let i = 0; i < this.dentists.length; i++) {
      if (this.dentists[i].selected) {
        this.additionalPatient.dentist.firstName = this.dentists[i].firstName;
        this.additionalPatient.dentist.lastName = this.dentists[i].lastName;
        this.additionalPatient.dentist.officeName = this.dentists[i].officeName;
        this.additionalPatient.dentist.officePhoneNumb = this.dentists[i].officePhoneNumb;
      }
    }
  }

  changeSelRefe(referIndex: number, value: boolean) {

    if (this.referrers[referIndex].activated) {
      for (let i = 0; i < this.referrers.length; i++) {
        if (i == referIndex && !this.referrers[i].selected) {
          this.referrers[i].selected = true;
        } else {
          this.referrers[i].selected = false;
          this.additionalPatient.referrer.firstName = "";
          this.additionalPatient.referrer.lastName = "";
          this.additionalPatient.referrer.companyName = "";
          this.additionalPatient.referrer.phoneNumb = "";
        }
      }
    }

    for (let i = 0; i < this.referrers.length; i++) {
      if (this.referrers[i].selected) {
        this.additionalPatient.referrer.firstName = this.referrers[i].firstName;
        this.additionalPatient.referrer.lastName = this.referrers[i].lastName;
        this.additionalPatient.referrer.companyName = this.referrers[i].companyName;
        this.additionalPatient.referrer.phoneNumb = this.referrers[i].phoneNumb;
      }
    }
  }

  changeSelIns1(insuranIndex1: number, value: boolean) {

    if (this.insurances1[insuranIndex1].activated) {
      for (let i = 0; i < this.insurances1.length; i++) {
        if (i == insuranIndex1 && !this.insurances1[i].selected) {
          this.insurances1[i].selected = true;
        } else {
          this.insurances1[i].selected = false;
          this.additionalPatient.insurances.insurance1.insuranName = "";
          this.additionalPatient.insurances.insurance1.phoneNumb = "";
        }
      }
    }

    for (let i = 0; i < this.insurances1.length; i++) {
      if (this.insurances1[i].selected) {
        this.additionalPatient.insurances.insurance1.insuranName = this.insurances1[i].insuranName;
        this.additionalPatient.insurances.insurance1.phoneNumb = this.insurances1[i].phoneNumb;
      }
    }
  }

  changeSelIns2(insuranIndex2: number, value: boolean) {

    if (this.insurances2[insuranIndex2].activated) {
      for (let i = 0; i < this.insurances2.length; i++) {
        if (i == insuranIndex2 && !this.insurances2[i].selected) {
          this.insurances2[i].selected = true;
        } else {
          this.insurances2[i].selected = false;
          this.additionalPatient.insurances.insurance2.insuranName = "";
          this.additionalPatient.insurances.insurance2.phoneNumb = "";
        }
      }
    }

    for (let i = 0; i < this.insurances2.length; i++) {
      if (this.insurances2[i].selected) {
        this.additionalPatient.insurances.insurance2.insuranName = this.insurances2[i].insuranName;
        this.additionalPatient.insurances.insurance2.phoneNumb = this.insurances2[i].phoneNumb;
      }
    }
  }

  changeSelIns3(insuranIndex3: number, value: boolean) {

    if (this.insurances3[insuranIndex3].activated) {
      for (let i = 0; i < this.insurances3.length; i++) {
        if (i == insuranIndex3 && !this.insurances3[i].selected) {
          this.insurances3[i].selected = true;
        } else {
          this.insurances3[i].selected = false;
          this.additionalPatient.insurances.insurance3.insuranName = "";
          this.additionalPatient.insurances.insurance3.phoneNumb = "";
        }
      }
    }

    for (let i = 0; i < this.insurances3.length; i++) {
      if (this.insurances3[i].selected) {
        this.additionalPatient.insurances.insurance3.insuranName = this.insurances3[i].insuranName;
        this.additionalPatient.insurances.insurance3.phoneNumb = this.insurances3[i].phoneNumb;
      }
    }
  }

  changeSelSubsc1(subscIndex: number, value: boolean) {

    if (this.subscribers1[subscIndex].activated) {
      for (let i = 0; i < this.subscribers1.length; i++) {
        if (i == subscIndex && !this.subscribers1[i].selected) {
          this.subscribers1[i].selected = true;
        } else {
          this.subscribers1[i].selected = false;
          this.additionalPatient.insurances.insurance1.subscriber1.firstName = "";
          this.additionalPatient.insurances.insurance1.subscriber1.lastName = "";
        }
      }
    }

    for (let i = 0; i < this.subscribers1.length; i++) {
      if (this.subscribers1[i].selected) {
        this.additionalPatient.insurances.insurance1.subscriber1.firstName = this.subscribers1[i].firstName;
        this.additionalPatient.insurances.insurance1.subscriber1.lastName = this.subscribers1[i].lastName;
      }
    }
  }

  changeSelSubsc2(subscIndex: number, value: boolean) {

    if (this.subscribers2[subscIndex].activated) {
      for (let i = 0; i < this.subscribers2.length; i++) {
        if (i == subscIndex && !this.subscribers2[i].selected) {
          this.subscribers2[i].selected = true;
        } else {
          this.subscribers2[i].selected = false;
          this.additionalPatient.insurances.insurance2.subscriber2.firstName = "";
          this.additionalPatient.insurances.insurance2.subscriber2.lastName = "";
        }
      }
    }

    for (let i = 0; i < this.subscribers2.length; i++) {
      if (this.subscribers2[i].selected) {
        this.additionalPatient.insurances.insurance2.subscriber2.firstName = this.subscribers2[i].firstName;
        this.additionalPatient.insurances.insurance2.subscriber2.lastName = this.subscribers2[i].lastName;
      }
    }
  }

  changeSelSubsc3(subscIndex: number, value: boolean) {

    if (this.subscribers3[subscIndex].activated) {
      for (let i = 0; i < this.subscribers3.length; i++) {
        if (i == subscIndex && !this.subscribers3[i].selected) {
          this.subscribers3[i].selected = true;
        } else {
          this.subscribers3[i].selected = false;
          this.additionalPatient.insurances.insurance3.subscriber3.firstName = "";
          this.additionalPatient.insurances.insurance3.subscriber3.lastName = "";
        }
      }
    }

    for (let i = 0; i < this.subscribers3.length; i++) {
      if (this.subscribers3[i].selected) {
        this.additionalPatient.insurances.insurance3.subscriber3.firstName = this.subscribers3[i].firstName;
        this.additionalPatient.insurances.insurance3.subscriber3.lastName = this.subscribers3[i].lastName;
      }
    }
  }

  activeDent(dentIndex: number, value: boolean) {
    for (let i = 0; i < this.dentists.length; i++) {
      if (i == dentIndex) {
        if (!this.dentists[i].activated) {
          this.dentists[i].activated = true;
        } else {
          this.dentists[i].activated = false;
          if (this.dentists[i].selected) {
            this.dentists[i].selected = false;
            this.additionalPatient.dentist.firstName = "";
            this.additionalPatient.dentist.lastName = "";
            this.additionalPatient.dentist.officeName = "";
            this.additionalPatient.dentist.officePhoneNumb = "";
          }
        }
      }
    }
  }

  activeRefe(referIndex: number, value: boolean) {
    for (let i = 0; i < this.referrers.length; i++) {
      if (i == referIndex) {
        if (!this.referrers[i].activated) {
          this.referrers[i].activated = true;
        } else {
          this.referrers[i].activated = false;
          if (this.referrers[i].selected) {
            this.referrers[i].selected = false;
            this.additionalPatient.referrer.firstName = "";
            this.additionalPatient.referrer.lastName = "";
            this.additionalPatient.referrer.companyName = "";
            this.additionalPatient.referrer.phoneNumb = "";
          }
        }
      }
    }
  }

  activeIns1(insuranIndex: number, value: boolean) {
    for (let i = 0; i < this.insurances1.length; i++) {
      if (i == insuranIndex) {
        if (!this.insurances1[i].activated) {
          this.insurances1[i].activated = true;
        } else {
          this.insurances1[i].activated = false;
          if (this.insurances1[i].selected) {
            this.insurances1[i].selected = false;
            this.additionalPatient.insurances.insurance1.insuranName = "";
            this.additionalPatient.insurances.insurance1.phoneNumb = "";
          }
        }
      }
    }
  }
  activeIns2(insuranIndex: number, value: boolean) {
    for (let i = 0; i < this.insurances2.length; i++) {
      if (i == insuranIndex) {
        if (!this.insurances2[i].activated) {
          this.insurances2[i].activated = true;
        } else {
          this.insurances2[i].activated = false;
          if (this.insurances2[i].selected) {
            this.insurances2[i].selected = false;
            this.additionalPatient.insurances.insurance2.insuranName = "";
            this.additionalPatient.insurances.insurance2.phoneNumb = "";
          }
        }
      }
    }
  }
  activeIns3(referIndex: number, value: boolean) {
    for (let i = 0; i < this.insurances3.length; i++) {
      if (i == referIndex) {
        if (!this.insurances3[i].activated) {
          this.insurances3[i].activated = true;
        } else {
          this.insurances3[i].activated = false;
          if (this.insurances3[i].selected) {
            this.insurances3[i].selected = false;
            this.additionalPatient.insurances.insurance3.insuranName = "";
            this.additionalPatient.insurances.insurance3.phoneNumb = "";
          }
        }
      }
    }
  }

  activeSubsc1(subscIndex: number, value: boolean) {
    for (let i = 0; i < this.subscribers1.length; i++) {
      if (i == subscIndex) {
        if (!this.subscribers1[i].activated) {
          this.subscribers1[i].activated = true;
        } else {
          this.subscribers1[i].activated = false;
          if (this.subscribers1[i].selected) {
            this.subscribers1[i].selected = false;
            this.additionalPatient.insurances.insurance1.subscriber1.firstName = "";
            this.additionalPatient.insurances.insurance1.subscriber1.lastName = "";
          }
        }
      }
    }
  }

  activeSubsc2(subscIndex: number, value: boolean) {
    for (let i = 0; i < this.subscribers2.length; i++) {
      if (i == subscIndex) {
        if (!this.subscribers2[i].activated) {
          this.subscribers2[i].activated = true;
        } else {
          this.subscribers2[i].activated = false;
          if (this.subscribers2[i].selected) {
            this.subscribers2[i].selected = false;
            this.additionalPatient.insurances.insurance2.subscriber2.firstName = "";
            this.additionalPatient.insurances.insurance2.subscriber2.lastName = "";
          }
        }
      }
    }
  }

  activeSubsc3(subscIndex: number, value: boolean) {
    for (let i = 0; i < this.subscribers3.length; i++) {
      if (i == subscIndex) {
        if (!this.subscribers3[i].activated) {
          this.subscribers3[i].activated = true;
        } else {
          this.subscribers3[i].activated = false;
          if (this.subscribers3[i].selected) {
            this.subscribers3[i].selected = false;
            this.additionalPatient.insurances.insurance3.subscriber3.firstName = "";
            this.additionalPatient.insurances.insurance3.subscriber3.lastName = "";
          }
        }
      }
    }
  }

  radioLGuargFunct(value: number) {
    this.radioLGuard = value;
  }

  async radioDentFuct(value: number) {
    this.radioDentist = value;
    this.additionalPatient.dentist.firstName = "";
    this.additionalPatient.dentist.lastName = "";
    this.additionalPatient.dentist.officeName = "";
    this.additionalPatient.dentist.officePhoneNumb = "";
    if (this.radioDentist == 1) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (this.dentists[i].selected) {
          this.additionalPatient.dentist.firstName = this.dentists[i].firstName;
          this.additionalPatient.dentist.lastName = this.dentists[i].lastName;
          this.additionalPatient.dentist.officeName = this.dentists[i].officeName;
          this.additionalPatient.dentist.officePhoneNumb = this.dentists[i].officePhoneNumb;
        }
      }
    } else if (this.radioDentist == 2) {
      let dentistLocStora = await this.AddPatientService.getDentistCWP();
      this.additionalPatient.dentist.firstName = dentistLocStora.firstName;
      this.additionalPatient.dentist.lastName = dentistLocStora.lastName;
      this.additionalPatient.dentist.officeName = dentistLocStora.officeName;
      this.additionalPatient.dentist.officePhoneNumb = dentistLocStora.officePhoneNumb;


    } else if (this.radioDentist == 3) {
      //Push dentist to API
    }
  }

  async radioReferrFuct(value: number) {
    this.radioReferrer = value;
    this.additionalPatient.referrer.firstName = "";
    this.additionalPatient.referrer.lastName = "";
    this.additionalPatient.referrer.companyName = "";
    this.additionalPatient.referrer.phoneNumb = "";

    if (this.radioReferrer == 1) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (this.referrers[i].selected) {
          this.additionalPatient.referrer.firstName = this.referrers[i].firstName;
          this.additionalPatient.referrer.lastName = this.referrers[i].lastName;
          this.additionalPatient.referrer.companyName = this.referrers[i].companyName;
          this.additionalPatient.referrer.phoneNumb = this.referrers[i].phoneNumb;
        }
      }
    } else if (this.radioReferrer == 2) {
      let referrerLocStora = await this.AddPatientService.getReferrerCWP();
      this.additionalPatient.referrer.firstName = referrerLocStora.firstName;
      this.additionalPatient.referrer.lastName = referrerLocStora.lastName;
      this.additionalPatient.referrer.companyName = referrerLocStora.companyName;
      this.additionalPatient.referrer.phoneNumb = referrerLocStora.phoneNumb;


    } else if (this.radioReferrer == 3) {
      //Push dentist to API
    }
  }

  async radioInsuran1Fuct(value: number) {
    this.radioInsuran1 = value;
    this.additionalPatient.insurances.insurance1.insuranName = "";
    this.additionalPatient.insurances.insurance1.phoneNumb = "";

    if (this.radioInsuran1 == 1) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (this.insurances1[i].selected) {
          this.additionalPatient.insurances.insurance1.insuranName = this.insurances1[i].insuranName;
          this.additionalPatient.insurances.insurance1.phoneNumb = this.insurances1[i].phoneNumb;
        }
      }
    } else if (this.radioInsuran1 == 2) {


    } else if (this.radioInsuran1 == 3) {
      //Push dentist to API
    }
  }

  async radioInsuran2Fuct(value: number) {
    this.radioInsuran2 = value;
    this.radioReferrer = value;
    this.additionalPatient.referrer.firstName = "";
    this.additionalPatient.referrer.lastName = "";
    this.additionalPatient.referrer.companyName = "";
    this.additionalPatient.referrer.phoneNumb = "";

    if (this.radioReferrer == 1) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (this.referrers[i].selected) {
          this.additionalPatient.referrer.firstName = this.referrers[i].firstName;
          this.additionalPatient.referrer.lastName = this.referrers[i].lastName;
          this.additionalPatient.referrer.companyName = this.referrers[i].companyName;
          this.additionalPatient.referrer.phoneNumb = this.referrers[i].phoneNumb;
        }
      }
    } else if (this.radioReferrer == 2) {
      let referrerLocStora = await this.AddPatientService.getReferrerCWP();
      this.additionalPatient.referrer.firstName = referrerLocStora.firstName;
      this.additionalPatient.referrer.lastName = referrerLocStora.lastName;
      this.additionalPatient.referrer.companyName = referrerLocStora.companyName;
      this.additionalPatient.referrer.phoneNumb = referrerLocStora.phoneNumb;


    } else if (this.radioReferrer == 3) {
      //Push dentist to API
    }
  }

  async radioInsuran3Fuct(value: number) {
    this.radioInsuran3 = value;
    this.radioReferrer = value;
    this.additionalPatient.referrer.firstName = "";
    this.additionalPatient.referrer.lastName = "";
    this.additionalPatient.referrer.companyName = "";
    this.additionalPatient.referrer.phoneNumb = "";

    if (this.radioReferrer == 1) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (this.referrers[i].selected) {
          this.additionalPatient.referrer.firstName = this.referrers[i].firstName;
          this.additionalPatient.referrer.lastName = this.referrers[i].lastName;
          this.additionalPatient.referrer.companyName = this.referrers[i].companyName;
          this.additionalPatient.referrer.phoneNumb = this.referrers[i].phoneNumb;
        }
      }
    } else if (this.radioReferrer == 2) {
      let referrerLocStora = await this.AddPatientService.getReferrerCWP();
      this.additionalPatient.referrer.firstName = referrerLocStora.firstName;
      this.additionalPatient.referrer.lastName = referrerLocStora.lastName;
      this.additionalPatient.referrer.companyName = referrerLocStora.companyName;
      this.additionalPatient.referrer.phoneNumb = referrerLocStora.phoneNumb;


    } else if (this.radioReferrer == 3) {
      //Push dentist to API
    }
  }

  async radioSubsc1Fuct(value: number) {
    this.radioSubscriber1 = value;
    this.additionalPatient.insurances.insurance1.subscriber1.firstName="";
    this.additionalPatient.insurances.insurance1.subscriber1.lastName="";

    if (this.radioSubscriber1 == 1) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (this.insurances1[i].selected) {
          this.additionalPatient.insurances.insurance1.subscriber1.firstName = this.insurances1[i].insuranName;
          this.additionalPatient.insurances.insurance1.subscriber1.lastName = this.insurances1[i].phoneNumb;
        }
      }
    } else if (this.radioSubscriber1 == 2) {


    } else if (this.radioSubscriber1 == 3) {
      //Push dentist to API
    }
  }

  async radioSubsc2Fuct(value: number) {
    this.radioSubscriber2 = value;
  }

  async radioSubsc3Fuct(value: number) {
    this.radioSubscriber3 = value;
  }
}

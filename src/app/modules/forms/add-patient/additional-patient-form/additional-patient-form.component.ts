import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPatientService } from "@services/add-patient/add-patient.service";
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';

@Component({
  selector: 'app-additional-patient-form',
  templateUrl: './additional-patient-form.component.html',
  styleUrls: ['./additional-patient-form.component.scss']
})
export class AdditionalPatientFormComponent implements OnInit {
 
  isShowSections: boolean = false;
  counter: number = 0;
  @ViewChild('dentistRadio1') dentistRadio1!: ElementRef;
  @ViewChild('dentistRadio2') dentistRadio2!: ElementRef;
  @ViewChild('dentistRadio3') dentistRadio3!: ElementRef;
  @ViewChild('referrerRadio1') referrerRadio1!: ElementRef;
  @ViewChild('referrerRadio2') referrerRadio2!: ElementRef;
  @ViewChild('referrerRadio3') referrerRadio3!: ElementRef;
  @ViewChild('insuYesNoRadio1') insuYesNoRadio1!: ElementRef;
  @ViewChild('insuYesNoRadio2') insuYesNoRadio2!: ElementRef;

  @ViewChild('howManyInsuRadio1') howManyInsuRadio1!: ElementRef;
  @ViewChild('howManyInsuRadio2') howManyInsuRadio2!: ElementRef;
  @ViewChild('howManyInsuRadio3') howManyInsuRadio3!: ElementRef;

  @ViewChild('insuran1Radio1') insuran1Radio1!: ElementRef;
  @ViewChild('insuran1Radio2') insuran1Radio2!: ElementRef;
  @ViewChild('insuran1Radio3') insuran1Radio3!: ElementRef;
  @ViewChild('insuran2Radio1') insuran2Radio1!: ElementRef;
  @ViewChild('insuran2Radio2') insuran2Radio2!: ElementRef;
  @ViewChild('insuran2Radio3') insuran2Radio3!: ElementRef;
  @ViewChild('insuran3Radio1') insuran3Radio1!: ElementRef;
  @ViewChild('insuran3Radio2') insuran3Radio2!: ElementRef;
  @ViewChild('insuran3Radio3') insuran3Radio3!: ElementRef;

  @ViewChild('subscri1Radio1') subscri1Radio1!: ElementRef;
  @ViewChild('subscri1Radio2') subscri1Radio2!: ElementRef;
  @ViewChild('subscri1Radio3') subscri1Radio3!: ElementRef;
  @ViewChild('subscri1Radio4') subscri1Radio4!: ElementRef;

  @ViewChild('subscri2Radio1') subscri2Radio1!: ElementRef;
  @ViewChild('subscri2Radio2') subscri2Radio2!: ElementRef;
  @ViewChild('subscri2Radio3') subscri2Radio3!: ElementRef;
  @ViewChild('subscri2Radio4') subscri2Radio4!: ElementRef;

  @ViewChild('subscri3Radio1') subscri3Radio1!: ElementRef;
  @ViewChild('subscri3Radio2') subscri3Radio2!: ElementRef;
  @ViewChild('subscri3Radio3') subscri3Radio3!: ElementRef;
  @ViewChild('subscri3Radio4') subscri3Radio4!: ElementRef;

  active = 1;

  additionalPatient = {
    id: "",
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

  insurancesP1 = {
    insurance1: {
      insuranName: "",
      phoneNumb: "",
      subscriber1: {
        firstName: "",
        lastName: "",
        relationship: "",
        DOB: "",
        SSNID: "",
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
      }
    },
  }
  insurances1: any[] = [];
  insurances2: any[] = [];
  insurances3: any[] = [];
  subscribers1: any[] = [];
  subscribers2: any[] = [];
  subscribers3: any[] = [];

  radioDentist: number = 1;
  radioReferrer: number = 1;
  radioInsuYesNo: number = 1;
  radioHowManyIns: number = 3;
  radioInsuran1: number = 1;
  radioInsuran2: number = 1;
  radioInsuran3: number = 1;
  radioSubscriber1: number = 1;
  radioSubscriber2: number = 1;
  radioSubscriber3: number = 1;

  @Input() patientPage: number = 2;
  familyMemberCount: any = 2;
  provideInsurance: boolean = true;
  coordWithProspRoutes: any[] = [];
  title: string = "";
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;
  Form!: FormGroup;
  @Input() formData: any | undefined = undefined;

  constructor(
    private router: Router,
    private routes: GlobalRoutesService,
    private patientUserServ: PatientUserService,
    private addPatientServ: AddPatientService,
    private insuranceServ: InsuranceService,
    private onboardingServ: OnboardingService,
    private fb: FormBuilder,) { }

  async ngOnInit() {
    this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
    this.Form.statusChanges.subscribe(
      result => {
        console.log(result)
        if (!this.Form.pristine) {
          if (this.patientPage == 2) {
            this.addPatientServ.setPatient2NotPristineCWP(true);
          } else if (this.patientPage == 3) {
            this.addPatientServ.setPatient3NotPristineCWP(true);
          } else if (this.patientPage == 4) {
            this.addPatientServ.setPatient4NotPristineCWP(true);
          }
        }
      }
    );
    this.title = `Patient ${this.patientPage}`;
    this.additionalPatient.id = this.patientPage.toString();
    this.getCWPData();
  }

  async ngAfterViewInit() {
    this.radioDentist = JSON.parse(localStorage.getItem(`dentistPatie${this.patientPage}`) || '[]');
    this.radioReferrer = JSON.parse(localStorage.getItem(`referrerPatie${this.patientPage}`) || '[]');
    this.radioInsuYesNo = JSON.parse(localStorage.getItem(`insuYesNoPatie${this.patientPage}`) || '[]');
    this.radioHowManyIns = JSON.parse(localStorage.getItem(`howManyInsuPatie${this.patientPage}`) || '[]');
    this.radioInsuran1 = JSON.parse(localStorage.getItem(`insuran1Patie${this.patientPage}`) || '[]');
    this.radioInsuran2 = JSON.parse(localStorage.getItem(`insuran2Patie${this.patientPage}`) || '[]');
    this.radioInsuran3 = JSON.parse(localStorage.getItem(`insuran3Patie${this.patientPage}`) || '[]');
    this.radioSubscriber1 = JSON.parse(localStorage.getItem(`subscri1Patie${this.patientPage}`) || '[]');
    this.radioSubscriber2 = JSON.parse(localStorage.getItem(`subscri2Patie${this.patientPage}`) || '[]');
    this.radioSubscriber3 = JSON.parse(localStorage.getItem(`subscri3Patie${this.patientPage}`) || '[]');
    setTimeout(() => {
      this.checkRadiosStatus();
    }, 20);
  }

  async checkRadiosStatus() {

    //Dentist Radio
    if (this.radioDentist == 0) {
      this.radioDentist = 1;
    }
    if (this.radioDentist == 1) {
      this.dentistRadio1.nativeElement.checked = true;
      this.radioDentFuct(this.radioDentist);
    } else if (this.radioDentist == 2) {
      this.dentistRadio2.nativeElement.checked = true;
      this.radioDentFuct(this.radioDentist);
    } else if (this.radioDentist == 3) {
      this.dentistRadio3.nativeElement.checked = true;
      this.radioDentFuct(this.radioDentist);

    }

    //Referrer Radio
    if (this.radioReferrer == 0) {
      this.radioReferrer = 1;
    }
    if (this.radioReferrer == 1) {
      this.referrerRadio1.nativeElement.checked = true;
      this.radioReferrFuct(this.radioReferrer);
    } else if (this.radioReferrer == 2) {
      this.referrerRadio2.nativeElement.checked = true;
      this.radioReferrFuct(this.radioReferrer);
    } else if (this.radioReferrer == 3) {
      this.referrerRadio3.nativeElement.checked = true;
      this.radioReferrFuct(this.radioReferrer);
    }

    //Insurances Yes No Radio
    if (this.radioInsuYesNo == 0) {
      this.radioInsuYesNo = 1;
    }
    if (this.radioInsuYesNo == 1) {
      this.insuYesNoRadio1.nativeElement.checked = true;
      this.provideInsurance = true;
    } else if (this.radioInsuYesNo == 2) {
      this.insuYesNoRadio2.nativeElement.checked = true;
      this.provideInsurance = false;
    }

    //How Many Insurances Radio
    if (this.radioHowManyIns == 0) {
      this.radioHowManyIns = 1;
    }
    if (this.radioHowManyIns == 1) {
      this.howManyInsuRadio1.nativeElement.checked = true;
    } else if (this.radioHowManyIns == 2) {
      this.howManyInsuRadio2.nativeElement.checked = true;
    } else if (this.radioHowManyIns == 3) {
      this.howManyInsuRadio3.nativeElement.checked = true;
    }

    //Insurance 1 Radio
    if (this.radioInsuran1 == 0) {
      this.radioInsuran1 = 1;
    }
    if (this.radioInsuran1 == 1) {
      this.insuran1Radio1.nativeElement.checked = true;
      this.radioInsuran1Funct(this.radioInsuran1);
    } else if (this.radioInsuran1 == 2) {
      this.insuran1Radio2.nativeElement.checked = true;
      this.radioInsuran1Funct(this.radioInsuran1);
    } else if (this.radioInsuran1 == 3) {
      this.insuran1Radio3.nativeElement.checked = true;
      this.radioInsuran1Funct(this.radioInsuran1);
    }

    //Insurance 2 Radio
    if (this.radioInsuran2 == 0) {
      this.radioInsuran2 = 1;
    }
    if (this.insuran2Radio1 != null) {
      if (this.radioInsuran2 == 1) {
        this.insuran2Radio1.nativeElement.checked = true;
        this.radioInsuran2Funct(this.radioInsuran2);
      } else if (this.radioInsuran2 == 2) {
        this.insuran2Radio2.nativeElement.checked = true;
        this.radioInsuran2Funct(this.radioInsuran2);
      } else if (this.radioInsuran2 == 3) {
        this.insuran2Radio3.nativeElement.checked = true;
        this.radioInsuran2Funct(this.radioInsuran2);
      }
    }

    //Insurance 3 Radio
    if (this.radioInsuran3 == 0) {
      this.radioInsuran3 = 1;
    }
    if (this.insuran3Radio1 != null) {
      if (this.radioInsuran3 == 1) {
        this.insuran3Radio1.nativeElement.checked = true;
        this.radioInsuran3Funct(this.radioInsuran3);
      } else if (this.radioInsuran3 == 2) {
        this.insuran3Radio2.nativeElement.checked = true;
        this.radioInsuran3Funct(this.radioInsuran3);
      } else if (this.radioInsuran3 == 3) {
        this.insuran3Radio3.nativeElement.checked = true;
        this.radioInsuran3Funct(this.radioInsuran3);
      }
    }

    //Subscriber 1 Radio
    if (this.radioSubscriber1 == 0) {
      this.radioSubscriber1 = 1;
    }
    if (this.radioSubscriber1 == 1) {
      this.subscri1Radio1.nativeElement.checked = true;
      this.radioSubsc1Fuct(this.radioSubscriber1);
    } else if (this.radioSubscriber1 == 2) {
      this.subscri1Radio2.nativeElement.checked = true;
      this.radioSubsc1Fuct(this.radioSubscriber1);
    } else if (this.radioSubscriber1 == 3) {
      this.subscri1Radio3.nativeElement.checked = true;
      this.radioSubsc1Fuct(this.radioSubscriber1);
    } else if (this.radioSubscriber1 == 4) {
      this.subscri1Radio4.nativeElement.checked = true;
    }

    //Subscriber 2 Radio
    if (this.radioSubscriber2 == 0) {
      this.radioSubscriber2 = 1;
    }
    if (this.subscri2Radio1 != null) {
      if (this.radioSubscriber2 == 1) {
        this.subscri2Radio1.nativeElement.checked = true;
        this.radioSubsc2Fuct(this.radioSubscriber2);
      } else if (this.radioSubscriber2 == 2) {
        this.subscri2Radio2.nativeElement.checked = true;
        this.radioSubsc2Fuct(this.radioSubscriber2);
      } else if (this.radioSubscriber2 == 3) {
        this.subscri2Radio3.nativeElement.checked = true;
        this.radioSubsc2Fuct(this.radioSubscriber2);
      } else if (this.radioSubscriber2 == 4) {
        this.subscri2Radio4.nativeElement.checked = true;
        this.radioSubsc2Fuct(this.radioSubscriber2);
      }
    }

    //Subscriber 3 Radio
    if (this.radioSubscriber3 == 0) {
      this.radioSubscriber3 = 1;
    }
    if (this.subscri3Radio1 != null) {
      if (this.radioSubscriber3 == 1) {
        this.subscri3Radio1.nativeElement.checked = true;
        this.radioSubsc3Fuct(this.radioSubscriber3);
      } else if (this.radioSubscriber3 == 2) {
        this.subscri3Radio2.nativeElement.checked = true;
        this.radioSubsc3Fuct(this.radioSubscriber3);
      } else if (this.radioSubscriber3 == 3) {
        this.subscri3Radio3.nativeElement.checked = true;
        this.radioSubsc3Fuct(this.radioSubscriber3);
      } else if (this.radioSubscriber3 == 4) {
        this.subscri3Radio4.nativeElement.checked = true;
        this.radioSubsc3Fuct(this.radioSubscriber3);
      }
    }
  }

  radiosInsurances() {
    setTimeout(() => {
      //Insurance 1 Radio
      if (this.radioInsuran1 == 0) {
        this.radioInsuran1 = 1;
      }
      if (this.insuran1Radio1 != null) {
        if (this.radioInsuran1 == 1) {
          this.insuran1Radio1.nativeElement.checked = true;
          this.radioInsuran1Funct(this.radioInsuran1);
        } else if (this.radioInsuran1 == 2) {
          this.insuran1Radio2.nativeElement.checked = true;
          this.radioInsuran1Funct(this.radioInsuran1);
        } else if (this.radioInsuran1 == 3) {
          this.insuran1Radio3.nativeElement.checked = true;
          this.radioInsuran1Funct(this.radioInsuran1);
        }
      }

      //Insurance 2 Radio
      if (this.radioInsuran2 == 0) {
        this.radioInsuran2 = 1;
      }
      if (this.insuran2Radio1 != null) {
        if (this.radioInsuran2 == 1) {
          this.insuran2Radio1.nativeElement.checked = true;
          this.radioInsuran2Funct(this.radioInsuran2);
        } else if (this.radioInsuran2 == 2) {
          this.insuran2Radio2.nativeElement.checked = true;
          this.radioInsuran2Funct(this.radioInsuran2);
        } else if (this.radioInsuran2 == 3) {
          this.insuran2Radio3.nativeElement.checked = true;
          this.radioInsuran2Funct(this.radioInsuran2);
        }
      }

      //Insurance 3 Radio
      if (this.radioInsuran3 == 0) {
        this.radioInsuran3 = 1;
      }
      if (this.insuran3Radio1 != null) {
        if (this.radioInsuran3 == 1) {
          this.insuran3Radio1.nativeElement.checked = true;
          this.radioInsuran3Funct(this.radioInsuran3);
        } else if (this.radioInsuran3 == 2) {
          this.insuran3Radio2.nativeElement.checked = true;
          this.radioInsuran3Funct(this.radioInsuran3);
        } else if (this.radioInsuran3 == 3) {
          this.insuran3Radio3.nativeElement.checked = true;
          this.radioInsuran3Funct(this.radioInsuran3);
        }
      }

      //Subscriber 1 Radio
      if (this.radioSubscriber1 == 0) {
        this.radioSubscriber1 = 1;
      }
      if (this.subscri1Radio1 != null) {
        if (this.radioSubscriber1 == 1) {
          this.subscri1Radio1.nativeElement.checked = true;
          this.radioSubsc1Fuct(this.radioSubscriber1);
        } else if (this.radioSubscriber1 == 2) {
          this.subscri1Radio2.nativeElement.checked = true;
          this.radioSubsc1Fuct(this.radioSubscriber1);
        } else if (this.radioSubscriber1 == 3) {
          this.subscri1Radio3.nativeElement.checked = true;
          this.radioSubsc1Fuct(this.radioSubscriber1);
        } else if (this.radioSubscriber1 == 4) {
          this.subscri1Radio4.nativeElement.checked = true;
        }
      }

      //Subscriber 2 Radio
      if (this.radioSubscriber2 == 0) {
        this.radioSubscriber2 = 1;
      }
      if (this.subscri2Radio1 != null) {
        if (this.radioSubscriber2 == 1) {
          this.subscri2Radio1.nativeElement.checked = true;
          this.radioSubsc2Fuct(this.radioSubscriber2);
        } else if (this.radioSubscriber2 == 2) {
          this.subscri2Radio2.nativeElement.checked = true;
          this.radioSubsc2Fuct(this.radioSubscriber2);
        } else if (this.radioSubscriber2 == 3) {
          this.subscri2Radio3.nativeElement.checked = true;
          this.radioSubsc2Fuct(this.radioSubscriber2);
        } else if (this.radioSubscriber2 == 4) {
          this.subscri2Radio4.nativeElement.checked = true;
          this.radioSubsc2Fuct(this.radioSubscriber2);
        }
      }

      //Subscriber 3 Radio
      if (this.radioSubscriber3 == 0) {
        this.radioSubscriber3 = 1;
      }
      if (this.subscri3Radio1 != null) {
        if (this.radioSubscriber3 == 1) {
          this.subscri3Radio1.nativeElement.checked = true;
          this.radioSubsc3Fuct(this.radioSubscriber3);
        } else if (this.radioSubscriber3 == 2) {
          this.subscri3Radio2.nativeElement.checked = true;
          this.radioSubsc3Fuct(this.radioSubscriber3);
        } else if (this.radioSubscriber3 == 3) {
          this.subscri3Radio3.nativeElement.checked = true;
          this.radioSubsc3Fuct(this.radioSubscriber3);
        } else if (this.radioSubscriber3 == 4) {
          this.subscri3Radio4.nativeElement.checked = true;
          this.radioSubsc3Fuct(this.radioSubscriber3);
        }
      }
    }, 20);
  }

  async getCWPData() {
    this.lgList = await this.addPatientServ.getlgListCwpApi();
    this.dentists = await this.addPatientServ.getdentistsCwpApi();
    this.referrers = await this.addPatientServ.getreferrersCwpApi();
    this.insurancesP1 = await this.addPatientServ.getinsurancesP1Cwp();

    this.insurances1 = await this.addPatientServ.getinsurances1CwpApi();
    this.insurances2 = await this.addPatientServ.getinsurances2CwpApi();
    this.insurances3 = await this.addPatientServ.getinsurances3CwpApi();
    this.subscribers1 = await this.addPatientServ.getsubscribers1CwpApi();
    this.subscribers2 = await this.addPatientServ.getsubscribers2CwpApi();
    this.subscribers3 = await this.addPatientServ.getsubscribers3CwpApi();
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
    if (this.patientPage == 2) {
      this.addPatientServ.setPatient2NotPristineCWP(false);
    } else if (this.patientPage == 3) {
      this.addPatientServ.setPatient3NotPristineCWP(false);
    } else if (this.patientPage == 4) {
      this.addPatientServ.setPatient4NotPristineCWP(false);
    }
    this.familyMemberCount = localStorage.getItem('familyMemberCount');
    this.familyMemberCount = parseInt(this.familyMemberCount);
    this.coordWithProspRoutes = this.routes.getCoordWithProspRoutes();

    if (this.patientPage == 4) {
      this.addPatientServ.setPatientCWPSaved(2);
      this.router.navigate([this.coordWithProspRoutes[7].url]);

      return;
    }

    for (let i = 1; i <= this.familyMemberCount; i++) {
      if (this.patientPage == (i + 1) && this.familyMemberCount === i) {
        this.addPatientServ.setPatientCWPSaved(i - 1);
        this.router.navigate([this.coordWithProspRoutes[7].url]);
      } else if (this.patientPage == (i + 1)) {
        this.addPatientServ.setPatientCWPSaved(i - 1);
        this.router.navigate([this.coordWithProspRoutes[6].child[i].url]);

      }
    }
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      searchFirst: [data?.searchFirst || '',],
      patientFirstName: [data?.patientFirstName || '',],
      patientLastName: [data?.patientLastName || '',],
      patientDOB: [data?.patientDOB || '',],
      patientGender: [data?.patientGender || '',],

      dentistOfficeName: [data?.dentistOfficeName || '',],
      dentistFirstName: [data?.dentistFirstName || '',],
      dentistLastName: [data?.dentistLastName || '',],
      dentistOfficePhoneNumb: [data?.dentistOfficePhoneNumb || '',],
      referrerCompanyName: [data?.referrerCompanyName || '',],
      referrerFirstName: [data?.referrerFirstName || '',],
      referrerLastName: [data?.referrerLastName || '',],
      referrerPhoneNumb: [data?.referrerPhoneNumb || '',],
      insurance1InsuranName: [data?.insurance1InsuranName || '',],
      insurance1PhoneNumb: [data?.insurance1PhoneNumb || '',],
      insurance1Subscriber1FirstName: [data?.insurance1Subscriber1FirstName || '',],
      insurance1Subscriber1LastName: [data?.insurance1Subscriber1LastName || '',],
      insurance2InsuranName: [data?.insurance2InsuranName || '',],
      insurance2PhoneNumb: [data?.insurance2PhoneNumb || '',],
      insurance2Subscriber2FirstName: [data?.insurance2Subscriber2FirstName || '',],
      insurance2Subscriber2LastName: [data?.insurance2Subscriber2LastName || '',],
      insurance3InsuranName: [data?.insurance3InsuranName || '',],
      insurance3PhoneNumb: [data?.insurance3PhoneNumb || '',],
      insurance3Subscriber3FirstName: [data?.insurance3Subscriber3FirstName || '',],
      insurance3Subscriber3LastName: [data?.insurance3Subscriber3LastName || '',],
    });
  }

  save(data: any) {
    console.log(data);
  }

  setRadioStatus(amount: number, section: string) {
    if (section == 'dentist') {
      this.radioDentist = amount;
      localStorage.setItem(`dentistPatie${this.patientPage}`, JSON.stringify(this.radioDentist));
      this.radioDentFuct(amount);
    } else if (section == 'referrer') {
      this.radioReferrer = amount;
      localStorage.setItem(`referrerPatie${this.patientPage}`, JSON.stringify(this.radioReferrer));
      this.radioReferrFuct(amount);
    } else if (section == 'insuYesNo') {
      this.radioInsuYesNo = amount;
      localStorage.setItem(`insuYesNoPatie${this.patientPage}`, JSON.stringify(this.radioInsuYesNo));
      if (amount == 1) {
        this.provideInsurance = true;
      } else if (amount == 2) {
        this.provideInsurance = false;
      }
    } else if (section == 'howManyInsu') {
      this.radioHowManyIns = amount;
      this.radiosInsurances();
      localStorage.setItem(`howManyInsuPatie${this.patientPage}`, JSON.stringify(this.radioHowManyIns));
    } else if (section == 'insuran1') {
      this.radioInsuran1 = amount;
      localStorage.setItem(`insuran1Patie${this.patientPage}`, JSON.stringify(this.radioInsuran1));
      this.radioInsuran1Funct(amount);
    } else if (section == 'insuran2') {
      this.radioInsuran2 = amount;
      localStorage.setItem(`insuran2Patie${this.patientPage}`, JSON.stringify(this.radioInsuran2));
      this.radioInsuran2Funct(amount);
    } else if (section == 'insuran3') {
      this.radioInsuran3 = amount;
      localStorage.setItem(`insuran3Patie${this.patientPage}`, JSON.stringify(this.radioInsuran3));
      this.radioInsuran3Funct(amount);
    } else if (section == 'subscri1') {
      this.radioSubscriber1 = amount;
      localStorage.setItem(`subscri1Patie${this.patientPage}`, JSON.stringify(this.radioSubscriber1));
      this.radioSubsc1Fuct(amount);
    } else if (section == 'subscri2') {
      this.radioSubscriber2 = amount;
      localStorage.setItem(`subscri2Patie${this.patientPage}`, JSON.stringify(this.radioSubscriber2));
      this.radioSubsc2Fuct(amount);
    } else if (section == 'subscri3') {
      this.radioSubscriber3 = amount;
      localStorage.setItem(`subscri3Patie${this.patientPage}`, JSON.stringify(this.radioSubscriber3));
      this.radioSubsc3Fuct(amount);
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

  async radioDentFuct(value: number) {
    this.radioDentist = value;
    this.additionalPatient.dentist.firstName = "";
    this.additionalPatient.dentist.lastName = "";
    this.additionalPatient.dentist.officeName = "";
    this.additionalPatient.dentist.officePhoneNumb = "";
    if (value == 1) {
      for (let i = 0; i < this.dentists.length; i++) {
        if (this.dentists[i].selected) {
          this.additionalPatient.dentist.firstName = this.dentists[i].firstName;
          this.additionalPatient.dentist.lastName = this.dentists[i].lastName;
          this.additionalPatient.dentist.officeName = this.dentists[i].officeName;
          this.additionalPatient.dentist.officePhoneNumb = this.dentists[i].officePhoneNumb;
        }
      }
    } else if (value == 2) {
      let dentistLocStora = await this.addPatientServ.getDentistCWP();
      this.additionalPatient.dentist.firstName = dentistLocStora.firstName;
      this.additionalPatient.dentist.lastName = dentistLocStora.lastName;
      this.additionalPatient.dentist.officeName = dentistLocStora.officeName;
      this.additionalPatient.dentist.officePhoneNumb = dentistLocStora.officePhoneNumb;
    } else if (value == 3) {
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
      let referrerLocStora = await this.addPatientServ.getReferrerCWP();
      this.additionalPatient.referrer.firstName = referrerLocStora.firstName;
      this.additionalPatient.referrer.lastName = referrerLocStora.lastName;
      this.additionalPatient.referrer.companyName = referrerLocStora.companyName;
      this.additionalPatient.referrer.phoneNumb = referrerLocStora.phoneNumb;


    } else if (this.radioReferrer == 3) {
      //Push dentist to API
    }
  }

  async radioInsuran1Funct(value: number) {
    this.radioInsuran1 = value;
    this.additionalPatient.insurances.insurance1.insuranName = "";
    this.additionalPatient.insurances.insurance1.phoneNumb = "";

    if (this.radioInsuran1 == 1) {
      for (let i = 0; i < this.insurances1.length; i++) {
        if (this.insurances1[i].selected) {
          this.additionalPatient.insurances.insurance1.insuranName = this.insurances1[i].insuranName;
          this.additionalPatient.insurances.insurance1.phoneNumb = this.insurances1[i].phoneNumb;
        }
      }
    } else if (this.radioInsuran1 == 2) {
      this.additionalPatient.insurances.insurance1.insuranName = this.insurancesP1.insurance1.insuranName;
      this.additionalPatient.insurances.insurance1.phoneNumb = this.insurancesP1.insurance1.phoneNumb;

    } else if (this.radioInsuran1 == 3) {
      //Push dentist to API
    }
  }

  async radioInsuran2Funct(value: number) {

    this.radioInsuran2 = value;
    this.additionalPatient.insurances.insurance2.insuranName = "";
    this.additionalPatient.insurances.insurance2.phoneNumb = "";

    if (this.radioInsuran2 == 1) {
      for (let i = 0; i < this.insurances2.length; i++) {
        if (this.insurances2[i].selected) {
          this.additionalPatient.insurances.insurance2.insuranName = this.insurances2[i].insuranName;
          this.additionalPatient.insurances.insurance2.phoneNumb = this.insurances2[i].phoneNumb;
        }
      }
    } else if (this.radioInsuran2 == 2) {
      this.additionalPatient.insurances.insurance2.insuranName = this.insurancesP1.insurance2.insuranName;
      this.additionalPatient.insurances.insurance2.phoneNumb = this.insurancesP1.insurance2.phoneNumb;

    } else if (this.radioInsuran2 == 3) {
      //Push dentist to API
    }
  }

  async radioInsuran3Funct(value: number) {
    this.radioInsuran3 = value;
    this.additionalPatient.insurances.insurance3.insuranName = "";
    this.additionalPatient.insurances.insurance3.phoneNumb = "";

    if (this.radioInsuran3 == 1) {
      for (let i = 0; i < this.insurances3.length; i++) {
        if (this.insurances3[i].selected) {
          this.additionalPatient.insurances.insurance3.insuranName = this.insurances3[i].insuranName;
          this.additionalPatient.insurances.insurance3.phoneNumb = this.insurances3[i].phoneNumb;
        }
      }
    } else if (this.radioInsuran3 == 2) {
      this.additionalPatient.insurances.insurance3.insuranName = this.insurancesP1.insurance3.insuranName;
      this.additionalPatient.insurances.insurance3.phoneNumb = this.insurancesP1.insurance3.phoneNumb;

    } else if (this.radioInsuran3 == 3) {
      //Push dentist to API
    }
  }

  async radioSubsc1Fuct(value: number) {
    this.radioSubscriber1 = value;
    this.additionalPatient.insurances.insurance1.subscriber1.firstName = "";
    this.additionalPatient.insurances.insurance1.subscriber1.lastName = "";

    if (this.radioSubscriber1 == 1) {
      for (let i = 0; i < this.subscribers1.length; i++) {
        if (this.subscribers1[i].selected) {
          this.additionalPatient.insurances.insurance1.subscriber1.firstName = this.subscribers1[i].firstName;
          this.additionalPatient.insurances.insurance1.subscriber1.lastName = this.subscribers1[i].lastName;
        }
      }
    } else if (this.radioSubscriber1 == 2) {
      let subsLocStora = await this.addPatientServ.getinsurancesP1Cwp();
      this.additionalPatient.insurances.insurance1.subscriber1.firstName = subsLocStora.insurance1.subscriber1.firstName;
      this.additionalPatient.insurances.insurance1.subscriber1.lastName = subsLocStora.insurance1.subscriber1.lastName;

    } else if (this.radioSubscriber1 == 3) {
      let LGLocStora = await this.addPatientServ.getLegalGuardCWP(1);
      this.additionalPatient.insurances.insurance1.subscriber1.firstName = LGLocStora.firstName;
      this.additionalPatient.insurances.insurance1.subscriber1.lastName = LGLocStora.lastName;

    } else if (this.radioSubscriber1 == 4) {
      //Push dentist to API
    }


  }

  async radioSubsc2Fuct(value: number) {
    this.radioSubscriber2 = value;
    this.additionalPatient.insurances.insurance2.subscriber2.firstName = "";
    this.additionalPatient.insurances.insurance2.subscriber2.lastName = "";

    if (this.radioSubscriber2 == 1) {
      for (let i = 0; i < this.subscribers2.length; i++) {
        if (this.subscribers2[i].selected) {
          this.additionalPatient.insurances.insurance2.subscriber2.firstName = this.subscribers2[i].firstName;
          this.additionalPatient.insurances.insurance2.subscriber2.lastName = this.subscribers2[i].lastName;
        }
      }
    } else if (this.radioSubscriber2 == 2) {
      let subsLocStora = await this.addPatientServ.getinsurancesP1Cwp();
      this.additionalPatient.insurances.insurance2.subscriber2.firstName = subsLocStora.insurance2.subscriber2.firstName;
      this.additionalPatient.insurances.insurance2.subscriber2.lastName = subsLocStora.insurance2.subscriber2.lastName;

    } else if (this.radioSubscriber2 == 3) {
      let LGLocStora = await this.addPatientServ.getLegalGuardCWP(1);
      this.additionalPatient.insurances.insurance2.subscriber2.firstName = LGLocStora.firstName;
      this.additionalPatient.insurances.insurance2.subscriber2.lastName = LGLocStora.lastName;

    } else if (this.radioSubscriber2 == 4) {
      //Push dentist to API
    }


  }

  async radioSubsc3Fuct(value: number) {
    this.radioSubscriber3 = value;
    this.additionalPatient.insurances.insurance3.subscriber3.firstName = "";
    this.additionalPatient.insurances.insurance3.subscriber3.lastName = "";

    if (this.radioSubscriber3 == 1) {
      for (let i = 0; i < this.subscribers3.length; i++) {
        if (this.subscribers3[i].selected) {
          this.additionalPatient.insurances.insurance3.subscriber3.firstName = this.subscribers3[i].firstName;
          this.additionalPatient.insurances.insurance3.subscriber3.lastName = this.subscribers3[i].lastName;
        }
      }
    } else if (this.radioSubscriber3 == 2) {
      let subsLocStora = await this.addPatientServ.getinsurancesP1Cwp();
      this.additionalPatient.insurances.insurance3.subscriber3.firstName = subsLocStora.insurance3.subscriber3.firstName;
      this.additionalPatient.insurances.insurance3.subscriber3.lastName = subsLocStora.insurance3.subscriber3.lastName;

    } else if (this.radioSubscriber3 == 3) {
      let LGLocStora = await this.addPatientServ.getLegalGuardCWP(1);
      this.additionalPatient.insurances.insurance3.subscriber3.firstName = LGLocStora.firstName;
      this.additionalPatient.insurances.insurance3.subscriber3.lastName = LGLocStora.lastName;

    } else if (this.radioSubscriber3 == 4) {
      //Push dentist to API
    }


  }
  hideShowSections(){
   this.isShowSections = true;
  }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';

import { NgbDateStruct, NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { AlertService } from '@services/alert/alert.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {


  @ViewChild('insuYesNoRadio1') insuYesNoRadio1!: ElementRef;
  @ViewChild('insuYesNoRadio2') insuYesNoRadio2!: ElementRef;

  @ViewChild('howManyInsuRadio1') howManyInsuRadio1!: ElementRef;
  @ViewChild('howManyInsuRadio2') howManyInsuRadio2!: ElementRef;
  @ViewChild('howManyInsuRadio3') howManyInsuRadio3!: ElementRef;

  @ViewChild('subscri1Radio1') subscri1Radio1!: ElementRef;
  @ViewChild('subscri1Radio2') subscri1Radio2!: ElementRef;
  @ViewChild('subscri1Radio3') subscri1Radio3!: ElementRef;

  @ViewChild('subscri2Radio1') subscri2Radio1!: ElementRef;
  @ViewChild('subscri2Radio2') subscri2Radio2!: ElementRef;
  @ViewChild('subscri2Radio3') subscri2Radio3!: ElementRef;

  @ViewChild('subscri3Radio1') subscri3Radio1!: ElementRef;
  @ViewChild('subscri3Radio2') subscri3Radio2!: ElementRef;
  @ViewChild('subscri3Radio3') subscri3Radio3!: ElementRef;
  model!:NgbDateStruct
  insurances = {
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

  insurancesP1: any[] = [];

  radioInsuYesNo: number = 1;
  radioHowManyIns: number = 3;
  radioInsuran1: number = 1;
  radioInsuran2: number = 1;
  radioInsuran3: number = 1;
  radioSubscriber1: number = 1;
  radioSubscriber2: number = 1;
  radioSubscriber3: number = 1;

  active: any;
  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  provideInsurance: boolean = true;
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;
  subscriberRadio: number = 1
  Form!: FormGroup;
  alertText:any;
	confirmButtonText:any
	cancelButtonText:any
  @Input() formData: any | undefined = undefined;


  constructor(private router: Router,
    private AddPatientService: AddPatientService,
    private fb: FormBuilder,
    private patientUserServ: PatientUserService,
    private addPatientServ: AddPatientService,
    private insuranceServ: InsuranceService,
    private modalService: NgbModal,
    private alertService: AlertService,
    private onboardingServ: OnboardingService,) { }

  async ngOnInit() {
    this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
    this.addPatientServ.getInsuranceFromCompone(this.getInsurances.bind(this));
    this.Form.statusChanges.subscribe(
      result => {
        if (!this.Form.pristine) {
          this.addPatientServ.setInsuranceNotPristineCWP(true);
          if(this.Form.invalid){
            this.addPatientServ.setInsuranceMandatoryFields(true)
          }else{
            this.addPatientServ.setInsuranceMandatoryFields(false)
          }
        }
      }
    );
    this.insurancesP1[0] = await this.AddPatientService.getinsurancesP1Cwp();
    if (this.insurancesP1[0].length != 0) {
      this.insurances.insurance1.insuranName = await this.insurancesP1[0].insurance1.insuranName;
      this.insurances.insurance1.phoneNumb = await this.insurancesP1[0].insurance1.phoneNumb;
      this.insurances.insurance1.subscriber1.firstName = await this.insurancesP1[0].insurance1.subscriber1.firstName;
      this.insurances.insurance1.subscriber1.lastName = await this.insurancesP1[0].insurance1.subscriber1.lastName;
      this.insurances.insurance1.subscriber1.relationship = await this.insurancesP1[0].insurance1.subscriber1.relationship;
      this.insurances.insurance1.subscriber1.DOB = await this.insurancesP1[0].insurance1.subscriber1.DOB;
      this.insurances.insurance1.subscriber1.SSNID = await this.insurancesP1[0].insurance1.subscriber1.SSNID;


      this.insurances.insurance2.insuranName = await this.insurancesP1[0].insurance2.insuranName;
      this.insurances.insurance2.phoneNumb = await this.insurancesP1[0].insurance2.phoneNumb;
      this.insurances.insurance2.subscriber2.firstName = await this.insurancesP1[0].insurance2.subscriber2.firstName;
      this.insurances.insurance2.subscriber2.lastName = await this.insurancesP1[0].insurance2.subscriber2.lastName;
      this.insurances.insurance2.subscriber2.relationship = await this.insurancesP1[0].insurance2.subscriber2.relationship;
      this.insurances.insurance2.subscriber2.DOB = await this.insurancesP1[0].insurance2.subscriber2.DOB;
      this.insurances.insurance2.subscriber2.SSNID = await this.insurancesP1[0].insurance2.subscriber2.SSNID;

      this.insurances.insurance3.insuranName = await this.insurancesP1[0].insurance3.insuranName;
      this.insurances.insurance3.phoneNumb = await this.insurancesP1[0].insurance3.phoneNumb;
      this.insurances.insurance3.subscriber3.firstName = await this.insurancesP1[0].insurance3.subscriber3.firstName;
      this.insurances.insurance3.subscriber3.lastName = await this.insurancesP1[0].insurance3.subscriber3.lastName;
      this.insurances.insurance3.subscriber3.relationship = await this.insurancesP1[0].insurance3.subscriber3.relationship;
      this.insurances.insurance3.subscriber3.DOB = await this.insurancesP1[0].insurance3.subscriber3.DOB;
      this.insurances.insurance3.subscriber3.SSNID = await this.insurancesP1[0].insurance3.subscriber3.SSNID;
    }

  }

  async ngAfterViewInit() {
    this.radioInsuYesNo = JSON.parse(localStorage.getItem(`insuYesNoPatie1`) || '[]');
    this.radioHowManyIns = JSON.parse(localStorage.getItem(`howManyInsuPatie1`) || '[]');
    this.radioSubscriber1 = JSON.parse(localStorage.getItem(`subscri1Patie1`) || '[]');
    this.radioSubscriber2 = JSON.parse(localStorage.getItem(`subscri2Patie1`) || '[]');
    this.radioSubscriber3 = JSON.parse(localStorage.getItem(`subscri3Patie1`) || '[]');

    setTimeout(() => {
      this.checkRadiosStatus();
    }, 20);
  }

  async checkRadiosStatus() {

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

    //Subscriber 1 Radio
    if (this.radioSubscriber1 == 0) {
      this.radioSubscriber1 = 1;
    }
    if (this.radioSubscriber1 == 1) {
      this.subscri1Radio1.nativeElement.checked = true;
      this.radioSubscFunct(this.radioSubscriber1, 1);
    } else if (this.radioSubscriber1 == 2) {
      this.subscri1Radio2.nativeElement.checked = true;
      this.radioSubscFunct(this.radioSubscriber1, 1);
    } else if (this.radioSubscriber1 == 3) {
      this.radioSubscFunct(this.radioSubscriber1, 1);
      this.subscri1Radio3.nativeElement.checked = true;
    }


  }

  setRadioStatus(amount: number, section: string) {
    if (section == 'insuYesNo') {
      this.radioInsuYesNo = amount;
      localStorage.setItem(`insuYesNoPatie1`, JSON.stringify(this.radioInsuYesNo));
      if (amount == 1) {
        this.provideInsurance = true;
      } else if (amount == 2) {
        this.provideInsurance = false;
      }
    } else if (section == 'howManyInsu') {
      this.radioHowManyIns = amount;
      this.radiosInsurances();
      localStorage.setItem(`howManyInsuPatie1`, JSON.stringify(this.radioHowManyIns));
    } else if (section == 'subscri1') {
      this.radioSubscriber1 = amount;
      localStorage.setItem(`subscri1Patie1`, JSON.stringify(this.radioSubscriber1));
      this.radioSubscFunct(amount, 1);
    } else if (section == 'subscri2') {
      this.radioSubscriber2 = amount;
      localStorage.setItem(`subscri2Patie1`, JSON.stringify(this.radioSubscriber2));
      this.radioSubscFunct(amount, 2);
    } else if (section == 'subscri3') {
      this.radioSubscriber3 = amount;
      localStorage.setItem(`subscri3Patie1`, JSON.stringify(this.radioSubscriber3));
      this.radioSubscFunct(amount, 3);
    }
  }

  radiosInsurances() {
    setTimeout(() => {
      //Subscriber 1 Radio
      if (this.subscri1Radio1 != null) {
        if (this.radioSubscriber1 == 0) {
          this.radioSubscriber1 = 1;
        }
        if (this.radioSubscriber1 == 1) {
          this.subscri1Radio1.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber1, 1);
        } else if (this.radioSubscriber1 == 2) {
          this.subscri1Radio2.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber1, 1);
        } else if (this.radioSubscriber1 == 3) {
          this.radioSubscFunct(this.radioSubscriber1, 1);
          this.subscri1Radio3.nativeElement.checked = true;
        }
      }
      //Subscriber 2 Radio
      if (this.radioSubscriber2 == 0) {
        this.radioSubscriber2 = 1;
      }
      if (this.subscri2Radio1 != null) {
        if (this.radioSubscriber2 == 1) {
          this.subscri2Radio1.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber2, 2);
        } else if (this.radioSubscriber2 == 2) {
          this.subscri2Radio2.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber2, 2);
        } else if (this.radioSubscriber2 == 3) {
          this.subscri2Radio3.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber2, 2);
        }
      }
      //Subscriber 3 Radio
      if (this.radioSubscriber3 == 0) {
        this.radioSubscriber3 = 1;
      }
      if (this.subscri3Radio1 != null) {
        if (this.radioSubscriber3 == 1) {
          this.subscri3Radio1.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber3, 3);
        } else if (this.radioSubscriber3 == 2) {
          this.subscri3Radio2.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber3, 3);
        } else if (this.radioSubscriber3 == 3) {
          this.subscri3Radio3.nativeElement.checked = true;
          this.radioSubscFunct(this.radioSubscriber3, 3);
        }
      }
    }, 20);
  }

  getInsurances() {
    return [this.insurances];
  }

  continueToFamilyMemb() {
    this.AddPatientService.setInsuranceP1CWP(this.insurances);
    this.addPatientServ.setInsuranceNotPristineCWP(false);
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Insurance");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
    this.router.navigate([this.menuItems[6].url]);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      insurance1InsuranName: [data?.insurance1InsuranName || '',],
      insurance1PhoneNumb: [data?.insurance1PhoneNumb || '',],
      subscriber1FirstName: [data?.subscriber1FirstName || '',],
      subscriber1LastName: [data?.subscriber1LastName || '',],
      subscriber1DOB: [data?.subscriber1DOB || '',],
      subscriber1SSNID: [data?.subscriber1SSNID || '',],
      insurance2InsuranName: [data?.insurance2InsuranName || '',],
      insurance2PhoneNumb: [data?.insurance2PhoneNumb || '',],
      subscriber2FirstName: [data?.subscriber2FirstName || '',],
      subscriber2LastName: [data?.subscriber2LastName || '',],
      subscriber2DOB: [data?.subscriber2DOB || '',],
      subscriber2SSNID: [data?.subscriber2SSNID || '',],
      insurance3InsuranName: [data?.insurance3InsuranName || '',],
      insurance3PhoneNumb: [data?.insurance3PhoneNumb || '',],
      subscriber3FirstName: [data?.subscriber3FirstName || '',],
      subscriber3LastName: [data?.subscriber3LastName || '',],
      subscriber3DOB: [data?.subscriber3DOB || '',],
      subscriber3SSNID: [data?.subscriber3SSNID || '',],
    });
  }

  save(data: any) {
    console.log(data);
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      this.active = 1;
    } else if (changeEvent.nextId === 2) {
      this.active = 2;
    } else if (changeEvent.nextId === 3) {
      this.active = 3;
    }
  }

  numberTabs(amount: number) {
    this.radioHowManyIns = amount;
    localStorage.setItem("insuranceP1Tabs", JSON.stringify(this.radioHowManyIns));
  }

  yesfunction() {
    this.provideInsurance = true;
    this.active = 1;
    this.radioHowManyIns = 1;
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

  async radioSubscFunct(value: number, subscriber: number) {
    if (subscriber == 1) {
      this.insurances.insurance1.subscriber1.firstName = "";
      this.insurances.insurance1.subscriber1.lastName = "";
      this.insurances.insurance1.subscriber1.relationship = "";
      this.insurances.insurance1.subscriber1.DOB = "";
      this.insurances.insurance1.subscriber1.SSNID = "";

      if (value == 1) {
        this.insurances.insurance1.subscriber1.firstName = await this.insurancesP1[0].insurance1.subscriber1.firstName;
        this.insurances.insurance1.subscriber1.lastName = await this.insurancesP1[0].insurance1.subscriber1.lastName;
        this.insurances.insurance1.subscriber1.DOB = await this.insurancesP1[0].insurance1.subscriber1.DOB;
      } else if (value == 2) {
        let patientLocStor = await this.AddPatientService.getPatientCWP();

        this.insurances.insurance1.subscriber1.firstName = await patientLocStor.firstName;
        this.insurances.insurance1.subscriber1.lastName = await patientLocStor.lastName;
        this.insurances.insurance1.subscriber1.DOB = await patientLocStor.DOB;


      } else if (value == 3) {
        let LGLocStora = await this.AddPatientService.getLegalGuardCWP(1);
        this.insurances.insurance1.subscriber1.firstName = await LGLocStora.firstName;
        this.insurances.insurance1.subscriber1.lastName = await LGLocStora.lastName;
      }
    } else if (subscriber == 2) {
      this.insurances.insurance2.subscriber2.firstName = "";
      this.insurances.insurance2.subscriber2.lastName = "";
      this.insurances.insurance2.subscriber2.relationship = "";
      this.insurances.insurance2.subscriber2.DOB = "";
      this.insurances.insurance2.subscriber2.SSNID = "";

      if (value == 1) {
        this.insurances.insurance2.subscriber2.firstName = await this.insurancesP1[0].insurance2.subscriber2.firstName;
        this.insurances.insurance2.subscriber2.lastName = await this.insurancesP1[0].insurance2.subscriber2.lastName;
        this.insurances.insurance2.subscriber2.DOB = await this.insurancesP1[0].insurance2.subscriber2.DOB;
      } else if (value == 2) {
        let patientLocStor = await this.AddPatientService.getPatientCWP();

        this.insurances.insurance2.subscriber2.firstName = await patientLocStor.firstName;
        this.insurances.insurance2.subscriber2.lastName = await patientLocStor.lastName;
        this.insurances.insurance2.subscriber2.DOB = await patientLocStor.DOB;


      } else if (value == 3) {
        let LGLocStora = await this.AddPatientService.getLegalGuardCWP(1);
        this.insurances.insurance2.subscriber2.firstName = await LGLocStora.firstName;
        this.insurances.insurance2.subscriber2.lastName = await LGLocStora.lastName;
      }
    } else if (subscriber == 3) {
      this.insurances.insurance3.subscriber3.firstName = "";
      this.insurances.insurance3.subscriber3.lastName = "";
      this.insurances.insurance3.subscriber3.relationship = "";
      this.insurances.insurance3.subscriber3.DOB = "";
      this.insurances.insurance3.subscriber3.SSNID = "";

      if (value == 1) {
        this.insurances.insurance3.subscriber3.firstName = await this.insurancesP1[0].insurance3.subscriber3.firstName;
        this.insurances.insurance3.subscriber3.lastName = await this.insurancesP1[0].insurance3.subscriber3.lastName;
        this.insurances.insurance3.subscriber3.DOB = await this.insurancesP1[0].insurance3.subscriber3.DOB;
      } else if (value == 2) {
        let patientLocStor = await this.AddPatientService.getPatientCWP();

        this.insurances.insurance3.subscriber3.firstName = await patientLocStor.firstName;
        this.insurances.insurance3.subscriber3.lastName = await patientLocStor.lastName;
        this.insurances.insurance3.subscriber3.DOB = await patientLocStor.DOB;


      } else if (value == 3) {
        let LGLocStora = await this.AddPatientService.getLegalGuardCWP(1);
        this.insurances.insurance3.subscriber3.firstName = await LGLocStora.firstName;
        this.insurances.insurance3.subscriber3.lastName = await LGLocStora.lastName;
      }
    }





  }
  // openModel(content: any) {
  //   if(this.Form.value.insurance1InsuranName != '' || this.Form.value.insurance1PhoneNumb != '' || this.Form.value.insurance2InsuranName != '' || 
  //   this.Form.value.insurance2PhoneNumb  != '' || this.Form.value.insurance3InsuranName  != ''|| this.Form.value.insurance3PhoneNumb  != ''
  //   || this.Form.value.subscriber1DOB  != ''|| this.Form.value.subscriber1FirstName  != ''|| this.Form.value.subscriber1LastName  != ''
  //   || this.Form.value.subscriber1SSNID  != ''|| this.Form.value.subscriber2DOB  != ''|| this.Form.value.subscriber2FirstName  != ''
  //   || this.Form.value.subscriber2LastName  != ''|| this.Form.value.subscriber2SSNID  != ''|| this.Form.value.subscriber3DOB  != ''
  //   || this.Form.value.subscriber3FirstName  != ''|| this.Form.value.subscriber3LastName  != ''|| this.Form.value.subscriber3SSNID  != '' ){
	// 		this.modalService.open(content, { centered: true });
	// 	  }else
	// 	  {
  //     this.addPatientServ.setInsuranceNotPristineCWP(false);
	// 		this.router.navigate(['/dashboard/home']);
	// 	  }
	// }
  openModel(content: any) {
    if(this.Form.value.insurance1InsuranName != '' || this.Form.value.insurance1PhoneNumb != '' || this.Form.value.insurance2InsuranName != '' || 
    this.Form.value.insurance2PhoneNumb  != '' || this.Form.value.insurance3InsuranName  != ''|| this.Form.value.insurance3PhoneNumb  != ''
    || this.Form.value.subscriber1DOB  != ''|| this.Form.value.subscriber1FirstName  != ''|| this.Form.value.subscriber1LastName  != ''
    || this.Form.value.subscriber1SSNID  != ''|| this.Form.value.subscriber2DOB  != ''|| this.Form.value.subscriber2FirstName  != ''
    || this.Form.value.subscriber2LastName  != ''|| this.Form.value.subscriber2SSNID  != ''|| this.Form.value.subscriber3DOB  != ''
    || this.Form.value.subscriber3FirstName  != ''|| this.Form.value.subscriber3LastName  != ''|| this.Form.value.subscriber3SSNID  != '' ){
			if(this.Form.valid){
        this.alertText = "Would you like to discard or save it?"
        this.confirmButtonText = "Save";
        this.cancelButtonText = "Discard"
      }else if(this.Form.invalid){
        this.alertText = "Mandatory fields are required to save."
        this.confirmButtonText = false;
        this.cancelButtonText = "Discard"
      }
      this.alertService.conformAlertNavigate('Please confirm', this.alertText,this.cancelButtonText,this.confirmButtonText).then((result: any) => {
        if (result.isConfirmed) {
          this.discardPatient()
        } else if (result.isDismissed && (result.dismiss == "cancel")) {
          this.savePatientForm()
        }
      })
    }else
    {
      this.addPatientServ.setInsuranceNotPristineCWP(false);
      this.router.navigate(['/dashboard/home']);
    }
	}
	discardPatient(){
		this.modalService.dismissAll();
    this.addPatientServ.setCallerInfoNotPristineCWP(false)
		this.router.navigate(['/dashboard/home']);
	}
	savePatientForm(){
		this.modalService.dismissAll();
		this.save(this.Form)
	}
  

}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { CONFIG } from '@config/index';
import { HttpClient } from '@angular/common/http';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '@services/alert/alert.service';

@Component({
  selector: 'app-callers-info',
  templateUrl: './callers-info.component.html',
  styleUrls: ['./callers-info.component.scss']
})
export class CallersInfoComponent implements OnInit {

  @ViewChild('bracesYoursFam1') bracesYoursFam1!: ElementRef;
  @ViewChild('bracesYoursFam2') bracesYoursFam2!: ElementRef;
  @ViewChild('legalGuardPati1') legalGuardPati1!: ElementRef;
  @ViewChild('legalGuardPati2') legalGuardPati2!: ElementRef;

  radioBraces: number = 1;
  radioLegalGuar: number = 1;

  phoneTypes: any = {
    phone: ""
  }
  callerLegarGuar: boolean = true;
  callersInfo = {
    phoneNumber: "",
    firstName: "",
    lastName: "",
    callerSelfPatient: true,
    callerLegarGuar: false,
  }

  callersInfoArray = {
    phoneNumber: "",
    firstName: "",
    lastName: "",
    callerSelfPatient: true,
    callerLegarGuar: false,
  }

  Form!: FormGroup;
  @Input() formData: any | undefined = undefined;
  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  showButtonSaveCancel: boolean = false;
  model!:NgbDateStruct
  alertText:any;
	confirmButtonText:any
	cancelButtonText:any
  constructor(private router: Router,
    private modalService: NgbModal,
    private patientUserServ: PatientUserService,
    private addPatientServ: AddPatientService,
    private insuranceServ: InsuranceService,
    private onboardingServ: OnboardingService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private http: HttpClient) { }

  async ngOnInit() {
    this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
    this.addPatientServ.getCallersInfoFromCompone(this.getCallersInfo.bind(this));
    this.Form.statusChanges.subscribe(
      result => {
        console.log(result)
        if (!this.Form.pristine) {
          console.log("hiiiiii", event);
          console.log("status", this.Form.pristine);

          this.addPatientServ.setCallerInfoNotPristineCWP(true);
        }
      }
    );
    this.callersInfoArray = await this.addPatientServ.getCallerInfoCWP();
    if (this.callersInfoArray != null) {
      this.callersInfo.firstName = this.callersInfoArray.firstName;
      this.callersInfo.lastName = this.callersInfoArray.lastName;
      this.callersInfo.phoneNumber = this.callersInfoArray.phoneNumber;
    }
    this.getStaticData();
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      phoneNumber: [data?.phoneNumber || '',],
      type: [data?.type || '',],
      firstName: [data?.firstName || ''],
      lastName: [data?.lastName || ''],
    });
  }

  async ngAfterViewInit() {
    this.radioBraces = JSON.parse(localStorage.getItem(`bracesPatie1`) || '[]');
    this.radioLegalGuar = JSON.parse(localStorage.getItem(`legalGuaYesNoPatie1`) || '[]');
    this.checkRadiosStatus();
  }

  async checkRadiosStatus() {

    //Braces
    if (this.radioBraces == 0) {
      this.radioBraces = 1;
    }
    if (this.bracesYoursFam1 != null) {
      if (this.radioBraces == 1) {
        this.bracesYoursFam1.nativeElement.checked = true;
        this.callerSelfPatientFunc(true);
      } else if (this.radioBraces == 2) {
        this.bracesYoursFam2.nativeElement.checked = true;
        this.callerSelfPatientFunc(false);
        setTimeout(() => {
          this.radiosLegalGuardian();
        }, 20);
      }
    }
  }

  setRadioStatus(amount: number, section: string) {
    if (section == 'braces') {
      this.radioBraces = amount;
      localStorage.setItem(`bracesPatie1`, JSON.stringify(this.radioBraces));
      if (amount == 1) {
        this.callerSelfPatientFunc(true);
      } else if (amount == 2) {
        this.callerSelfPatientFunc(false);
      }
    } else if (section == 'legalGuardYesNo') {
      this.radioLegalGuar = amount;
      localStorage.setItem(`legalGuaYesNoPatie1`, JSON.stringify(this.radioLegalGuar));
      if (amount == 1) {
        this.callerLegalG(true);
      } else if (amount == 2) {
        this.callerLegalG(false);
      }
    }
  }

  radiosLegalGuardian() {
    setTimeout(() => {
      // Legal guardian of the patient
      if (this.radioLegalGuar == 0) {
        this.radioLegalGuar = 2;
      }
      if (this.legalGuardPati1 != null) {
        if (this.radioLegalGuar == 1) {
          this.legalGuardPati1.nativeElement.checked = true;
          this.callerLegalG(true);
        } else if (this.radioLegalGuar == 2) {
          this.legalGuardPati2.nativeElement.checked = true;
          this.callerLegalG(false);
        }
      }
    }, 20);
  }

  getCallersInfo() {
    return [this.callersInfo];
  }

  continueToPatient() {
    this.addPatientServ.setCallerInfoCWP(this.callersInfo);
    this.addPatientServ.setCallerInfoNotPristineCWP(false);
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Caller’s Info");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
    this.router.navigate([this.menuItems[1].url]);
  }

  showButtonSaveCancelFunc() {
    this.showButtonSaveCancel = true;
  }

  closeSaveCancelFunc() {
    this.showButtonSaveCancel = false;
  }

  save(data: any) {
    // this.onSubmit.emit(data);
  }
  cancel() {
    // this.onCancel.emit();
  }

  callerLegalG(valuelg: boolean) {
    this.callersInfo.callerLegarGuar = valuelg;
    console.log("Calleeeeed");

  }

  callerSelfPatientFunc(value: boolean) {
    this.callersInfo.callerSelfPatient = value;
  }

  getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/global-data/static-types`)
      .subscribe({
        next: (data) => {
          this.phoneTypes = data;
          console.log("typees", this.phoneTypes);

        },
        error: () => { },
        complete: () => { }
      });
  }
  // openModel(content: any) {
  //   let firstName = this.Form.value.firstName;
  //   if(firstName == undefined){
  //     firstName = '';
  //   }
  //   let lastName = this.Form.value.lastName;
  //   if(lastName == undefined){
  //     lastName = ''
  //   }
  //   let phoneNumber = this.Form.value.phoneNumber;
  //   if(phoneNumber == undefined){
  //     phoneNumber = ''
  //   }
  //   console.log(firstName,lastName,phoneNumber,this.Form.value.type)
  //   if(firstName != '' || lastName != '' || this.Form.value.type != '' || phoneNumber != '' ){
  //     this.modalService.open(content, { centered: true });
  //   }else
  //   {
  //     this.addPatientServ.setCallerInfoNotPristineCWP(false)
  //     this.router.navigate(['/dashboard/home']);
  //   }
	// }
  openModel(content: any) {
    let firstName = this.Form.value.firstName;
    if(firstName == undefined){
      firstName = '';
    }
    let lastName = this.Form.value.lastName;
    if(lastName == undefined){
      lastName = ''
    }
    let phoneNumber = this.Form.value.phoneNumber;
    if(phoneNumber == undefined){
      phoneNumber = ''
    }
    console.log(firstName,lastName,phoneNumber,this.Form.value.type)
    if(firstName != '' || lastName != '' || this.Form.value.type != '' || phoneNumber != '' ){
        this.alertText = "Your data will be discarded .You can take note of the details."
        this.confirmButtonText = false;
        this.cancelButtonText = "Discard"
      this.alertService.conformAlertNavigate('Please confirm', this.alertText,this.cancelButtonText,this.confirmButtonText).then((result: any) => {
        if (result.isConfirmed) {
          this.discardCallerInfo()
        }
      })
    }else
    {
      this.addPatientServ.setCallerInfoNotPristineCWP(false)
      this.router.navigate(['/dashboard/home']);
    }
	}
  discardCallerInfo(){
    this.modalService.dismissAll();
    this.addPatientServ.setCallerInfoNotPristineCWP(false)
    this.router.navigate(['/dashboard/home']);
  }

}

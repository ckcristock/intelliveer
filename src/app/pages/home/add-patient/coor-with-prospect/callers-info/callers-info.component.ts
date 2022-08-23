import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { CONFIG } from '@config/index';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router,
    private addPatientServ: AddPatientService,
    private fb: FormBuilder,
    private http: HttpClient) { }

  async ngOnInit() {
    this.initForm(this.formData);
    this.addPatientServ.setFalseAllNotPristineCWP();
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



}

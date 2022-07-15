import { Component, Input, OnInit } from '@angular/core';
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
    this.callersInfoArray = await this.addPatientServ.getCallerInfoCWP();
    if (this.callersInfoArray != null) {
      this.callersInfo.firstName = this.callersInfoArray.firstName;
      this.callersInfo.lastName = this.callersInfoArray.lastName;
      this.callersInfo.phoneNumber = this.callersInfoArray.phoneNumber;
    }
    this.initForm(this.formData);
    this.getStaticData();
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
    });
  }

  continueToPatient() {
    this.addPatientServ.setCallerInfoCWP(this.callersInfo);
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

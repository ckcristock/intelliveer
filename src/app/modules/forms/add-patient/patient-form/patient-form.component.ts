import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  callersInfo: any = {
    phoneNumber: "",
    firstName: "",
    lastName: "",
    callerSelfPatient: true,
  };
  patient: any = {
    practice: "",
    firstName: "",
    lastName: "",
    dateBirth: "",
    gender: "",
  };
  patientArray: any = {
    practice: "",
    firstName: "",
    lastName: "",
    dateBirth: "",
    gender: "",
  };
  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
  Form!: FormGroup;
  @Input() formData: any | undefined = undefined;
  @Input() tab: string = "";
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private addPatientServ: AddPatientService,) { }

  async ngOnInit() {
    if (this.tab == 'coordWithProspect') {
      this.patientArray = await this.addPatientServ.getPatientCWP();
      this.callersInfo = await this.addPatientServ.getCallerInfoCWP();
      if (this.patientArray != null) {
        this.patient.firstName = this.patientArray.firstName;
        this.patient.lastName = this.patientArray.lastName;
        this.patient.dateBirth = this.patientArray.dateBirth;
      }
      if (this.callersInfo.callerSelfPatient == true) {
        this.patient.firstName = this.callersInfo.firstName;
        this.patient.lastName = this.callersInfo.lastName;
        this.patient.dateBirth = this.patientArray.DOB;
      }
    } else if (this.tab == 'quickAdd') {
      this.patientArray = await this.addPatientServ.getPatientQuiAdd();
      if (this.patientArray != null) {
        this.patient.firstName = this.patientArray.firstName;
        this.patient.lastName = this.patientArray.lastName;
        this.patient.dateBirth = this.patientArray.dateBirth;
      }
    }
    this.initForm(this.formData);
  }

  continueToLegalGuar() {
    if (this.tab == "coordWithProspect") {
      this.addPatientServ.setPatientCWP(this.patient);
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Patient");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[2].url]);

    } else if (this.tab == "quickAdd") {
      this.addPatientServ.setPatientQuiAdd(this.patient);
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Patient");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[1].url]);
    }
  }


  initForm(data?: any) {
    data = data || {};
    if (this.tab == "coordWithProspect") {
      this.Form = this.fb.group({
        practice: [data?.practice || ''],
        fName: [data?.fName || '', Validators.required],
        lName: [data?.lName || '', Validators.required],
        DOB: [data?.DOB || '', Validators.required],
        gender: [data?.gender || '']
      });
    } else if (this.tab == "quickAdd") {
      this.Form = this.fb.group({
        practice: [data?.practice || ''],
        fName: [data?.fName || '', Validators.required],
        lName: [data?.lName || '', Validators.required],
        DOB: [data?.DOB || '',],
        gender: [data?.gender || '']
      });
    }
  }

  save(data: any) {
    console.log(data);
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

}

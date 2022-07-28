import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
@Component({
  selector: 'app-dentist-form',
  templateUrl: './dentist-form.component.html',
  styleUrls: ['./dentist-form.component.scss']
})
export class DentistFormComponent implements OnInit {

  dentist = {
    namesGenrDents: "",
    officeName: "",
    firstName: "",
    lastName: "",
    officePhoneNum: "",
  };

  dentistArray = {
    namesGenrDents: "",
    officeName: "",
    firstName: "",
    lastName: "",
    officePhoneNum: "",
  };

  Form!: FormGroup;

  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
  @Input() tab: string = "";
  @Input() formData: any | undefined = undefined;
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;

  constructor(private router: Router,
    private addPatientServ: AddPatientService,
    private fb: FormBuilder,
    private http: HttpClient) { }

  async ngOnInit() {
    if (this.tab == 'coordWithProspect') {
      this.dentistArray = await this.addPatientServ.getDentistCWP();
    } else if (this.tab == 'quickAdd') {
      this.dentistArray = await this.addPatientServ.getDentistQuiAdd();
    }
    if (this.dentistArray != null) {
      this.dentist.namesGenrDents = this.dentistArray.namesGenrDents;
      this.dentist.officeName = this.dentistArray.officeName;
      this.dentist.firstName = this.dentistArray.firstName;
      this.dentist.lastName = this.dentistArray.lastName;
      this.dentist.officePhoneNum = this.dentistArray.officePhoneNum;
    }
    this.initForm(this.formData);
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
    });
  }

  continueToReferrer() {
    if (this.tab == "coordWithProspect") {
      this.addPatientServ.setDentistCWP(this.dentist);
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Dentist");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[4].url]);

    } else if (this.tab == "quickAdd") {
      this.addPatientServ.setDentistQuiAdd(this.dentist);
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Dentist");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[3].url]);
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
}

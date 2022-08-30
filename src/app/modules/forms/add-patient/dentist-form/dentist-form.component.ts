import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
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
    private patientUserServ: PatientUserService,
    private addPatientServ: AddPatientService,
    private insuranceServ: InsuranceService,
    private onboardingServ: OnboardingService,
    private fb: FormBuilder,
    private http: HttpClient) { }

  async ngOnInit() {
    this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
    this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
    this.addPatientServ.getDentistFromCompone(this.getDentist.bind(this));
    if (this.tab == 'coordWithProspect') {
      this.dentistArray = await this.addPatientServ.getDentistCWP();
      this.Form.statusChanges.subscribe(
        result => {
          console.log(result)
          if (!this.Form.pristine) {
            console.log("hiiiiii", event);
            console.log("status", this.Form.pristine);
  
            this.addPatientServ.setDentistNotPristineCWP(true);
          }
        }
      );
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
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      namesGenrDents: [data?.namesGenrDents || '',],
      officeName: [data?.officeName || '',],
      firstName: [data?.firstName || '', Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')],
      lastName: [data?.lastName || '', Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')],
      officePhoneNum: [data?.officePhoneNum || ''],
    });
  }

  firstNameValid() {
    return (this.Form.get('firstName')?.valid && this.Form.get('firstName')?.value != null);
  }

  lastNameValid() {
    return (this.Form.get('lastName')?.valid && this.Form.get('lastName')?.value != null);
  }

  save(data: any) {
    console.log(data);
  }

  getDentist() {
    return [this.dentist];
  }

  continueToReferrer() {
    if (this.tab == "coordWithProspect") {
      this.addPatientServ.setDentistNotPristineCWP(false);
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

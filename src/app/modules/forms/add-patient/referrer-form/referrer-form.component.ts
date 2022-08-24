import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';

@Component({
  selector: 'app-referrer-form',
  templateUrl: './referrer-form.component.html',
  styleUrls: ['./referrer-form.component.scss']
})
export class ReferrerFormComponent implements OnInit {

  @ViewChild('radioReferrer1') radioReferrer1!: ElementRef;
  @ViewChild('radioReferrer2') radioReferrer2!: ElementRef;
  @Input() formData: any | undefined = undefined;

  radioReferrer: number = 1;

  dentist = {
    namesGenrDents: "",
    officeName: "",
    firstName: "",
    lastName: "",
    officePhoneNum: "",
  };

  referrer: any = {
    thanksfor: "",
    companyName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    sameAsDentist: true,
  };

  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
  @Input() tab: string = "";
  Form!: FormGroup;
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;

  constructor(private router: Router,
    private addPatientServ: AddPatientService,
    private fb: FormBuilder,) { }

  async ngOnInit() {
    this.initForm(this.formData);
    if (this.tab == 'coordWithProspect') {
      this.addPatientServ.setFalseAllNotPristineCWP();
      this.addPatientServ.getReferrerFromCompone(this.getReferrer.bind(this));
      this.Form.statusChanges.subscribe(
        result => {
          console.log(result)
          if (!this.Form.pristine) {
            console.log("hiiiiii", event);
            console.log("status", this.Form.pristine);

            this.addPatientServ.setReferrerNotPristineCWP(true);
          }
        }
      );
      this.dentist = await this.addPatientServ.getDentistCWP();
    } else if (this.tab == 'quickAdd') {
      this.dentist = await this.addPatientServ.getDentistQuiAdd();
    }
    if (this.referrer.sameAsDentist == true) {
      this.referrer.firstName = this.dentist.firstName;
      this.referrer.lastName = this.dentist.lastName;
    }
  }

  async ngAfterViewInit() {
    this.radioReferrer = JSON.parse(localStorage.getItem(`referrer${this.tab}`) || '[]');
    this.checkRadiosStatus();
  }

  async checkRadiosStatus() {
    if (this.radioReferrer == 0) {
      this.radioReferrer = 1;
    }
    if (this.radioReferrer1 != null) {
      if (this.radioReferrer == 1) {
        this.radioReferrer1.nativeElement.checked = true;
        this.sameAsDentistFunct(true);
      } else if (this.radioReferrer == 2) {
        this.radioReferrer2.nativeElement.checked = true;
        this.sameAsDentistFunct(false);
      }
    }
  }

  setRadioStatus(amount: number, section: string) {
    if (section == 'referrer') {
      this.radioReferrer = amount;
      localStorage.setItem(`referrer${this.tab}`, JSON.stringify(this.radioReferrer));
      if (amount == 1) {
        this.sameAsDentistFunct(true);
      } else if (amount == 2) {
        this.sameAsDentistFunct(false);
      }
    }
  }

  getReferrer() {
    return [this.referrer];
  }

  continueToInsurance() {
    if (this.tab == "coordWithProspect") {
      this.addPatientServ.setReferrerNotPristineCWP(false);
      this.addPatientServ.setReferrerCWP(this.referrer);
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Referrer");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[5].url]);

    } else if (this.tab == "quickAdd") {
      this.addPatientServ.setReferrerQuiAdd(this.referrer);
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Referrer");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[4].url]);
    }
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      thanksfor: [data?.thanksfor || '',],
      companyName: [data?.companyName || '',],
      firstName: [data?.firstName || ''],
      lastName: [data?.lastName || ''],
      phoneNumber: [data?.phoneNumber || ''],
    });
  }

  save(data: any) {
    console.log(data);
  }

  sameAsDentistFunct(value: boolean) {
    this.referrer.sameAsDentist = value;
    if (this.referrer.sameAsDentist == true) {
      this.referrer.firstName = this.dentist.firstName;
      this.referrer.lastName = this.dentist.lastName;
    } else {
      this.referrer.firstName = "";
      this.referrer.lastName = "";
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

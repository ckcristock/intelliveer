import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';

import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AddPatientService } from '@services/add-patient/add-patient.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {


  @ViewChild('radio1') radio1!: ElementRef;
  @ViewChild('radio2') radio2!: ElementRef;
  @ViewChild('radio3') radio3!: ElementRef;

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

  active: any;
  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  checkInsuranceCount!: number;
  provideInsurance: boolean = true;
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;
  subscriberRadio: number = 1

  constructor(private router: Router,
    private AddPatientService: AddPatientService,) { }

  async ngOnInit() {
    this.insurancesP1[0] = await this.AddPatientService.getinsurancesP1Cwp();
    this.insurances.insurance1 = this.insurancesP1[0].insurance1;
    this.insurances.insurance2 = this.insurancesP1[0].insurance2;
    this.insurances.insurance3 = this.insurancesP1[0].insurance3;
  }

  ngAfterViewInit() {

    //To get and assign the amount of insurances (Tabs)
    this.checkInsuranceCount = JSON.parse(localStorage.getItem("insuranceP1Tabs") || '[]');
    if (this.checkInsuranceCount == 0) {
      this.checkInsuranceCount = 1;
    }
    if (this.checkInsuranceCount == 1) {
      this.radio1.nativeElement.checked = true;
    } else if (this.checkInsuranceCount == 2) {
      this.radio2.nativeElement.checked = true;
    } else if (this.checkInsuranceCount == 3) {
      this.radio3.nativeElement.checked = true;
    }
  }

  continueToFamilyMemb() {
    this.AddPatientService.setInsuranceP1CWP(this.insurances);
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Insurance");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
    this.router.navigate([this.menuItems[6].url]);
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
    this.checkInsuranceCount = amount;
    localStorage.setItem("insuranceP1Tabs", JSON.stringify(this.checkInsuranceCount));
  }

  yesfunction() {
    this.provideInsurance = true;
    this.active = 1;
    this.checkInsuranceCount = 1;
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

  Hi() {
    console.log("hiiiiiii");

  }

}

import { Component, OnInit } from '@angular/core';
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

  insurances!: {
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

  insurances1: any[] = [];
  insurances2: any[] = [];
  insurances3: any[] = [];
  subscribers1: any[] = [];
  subscribers2: any[] = [];
  subscribers3: any[] = [];

  subscriber = {
    firstName: "",
    lastName: "",
    relatToPation: "",
    DOB: "",
    SSNID: "",
  }

  subscriberArray = {
    firstName: "",
    lastName: "",
    relatToPation: "",
    DOB: "",
    SSNID: "",
  }

  active: any;
  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  checkInsuranceCount: number = 1;
  provideInsurance: boolean = true;
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;
  subscriberRadio: number = 1

  constructor(private router: Router,
    private AddPatientService: AddPatientService,) { }

  async ngOnInit() {
    this.insurances1 = await this.AddPatientService.getinsurances1CwpApi();
    this.insurances2 = await this.AddPatientService.getinsurances2CwpApi();
    this.insurances3 = await this.AddPatientService.getinsurances3CwpApi();
    this.subscribers1 = await this.AddPatientService.getsubscribers1CwpApi();
    this.subscribers2 = await this.AddPatientService.getsubscribers2CwpApi();
    this.subscribers3 = await this.AddPatientService.getsubscribers3CwpApi();
    // For Insurance1
    for (let i = 0; i < this.insurances1.length; i++) {
      if (this.insurances1[i].selected) {
        this.insurances.insurance1.insuranName = this.insurances1[i].insuranName;
        this.insurances.insurance1.phoneNumb = this.insurances1[i].phoneNumb;
      }
    }
    // For Subscriber1
    for (let i = 0; i < this.subscribers1.length; i++) {
      if (this.subscribers1[i].selected) {
        this.insurances.insurance1.subscriber1.firstName = this.subscribers1[i].firstName;
        this.insurances.insurance1.subscriber1.lastName = this.subscribers1[i].lastName;
      }
    }
  }

  continueToFamilyMemb() {
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

  async subscriberRadios(index: number) {
    this.subscriberRadio = index;
    if(this.subscriberRadio == 1){
      this.subscriber.firstName = "";
        this.subscriber.lastName = "";
    } else if (this.subscriberRadio == 2) {
      this.subscriberArray = await this.AddPatientService.getPatientCWP();
      console.log("subscriberArray", this.subscriberArray);
      if (this.subscriberArray != null) {
        this.subscriber.firstName = this.subscriberArray.firstName;
        this.subscriber.lastName = this.subscriberArray.lastName;
      }
    } else if (this.subscriberRadio == 3){
      this.subscriberArray = await this.AddPatientService.getLegalGuardCWP(1);
      console.log("subscriberArray", this.subscriberArray);
      if (this.subscriberArray != null) {
        this.subscriber.firstName = this.subscriberArray.firstName;
        this.subscriber.lastName = this.subscriberArray.lastName;
      }
    }
  }

}

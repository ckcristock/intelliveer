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
    private addPatientServ: AddPatientService,) { }

  ngOnInit(): void {
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
      this.subscriberArray = await this.addPatientServ.getPatientCWP();
      console.log("subscriberArray", this.subscriberArray);
      if (this.subscriberArray != null) {
        this.subscriber.firstName = this.subscriberArray.firstName;
        this.subscriber.lastName = this.subscriberArray.lastName;
      }
    } else if (this.subscriberRadio == 3){
      this.subscriberArray = await this.addPatientServ.getLegalGuardCWP(1);
      console.log("subscriberArray", this.subscriberArray);
      if (this.subscriberArray != null) {
        this.subscriber.firstName = this.subscriberArray.firstName;
        this.subscriber.lastName = this.subscriberArray.lastName;
      }
    }
  }

}

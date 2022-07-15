import { Component, Input, OnInit } from '@angular/core';
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
  showButtonSaveCancel:boolean = false;
  openTextAreaVar:boolean = false;

  constructor(private router: Router,
    private addPatientServ: AddPatientService,) { }

  ngOnInit(): void {
    this.dentist = JSON.parse(localStorage.getItem("dentistCoorWithProsp") || '[]');
    if (this.referrer.sameAsDentist == true) {
      this.referrer.firstName = this.dentist.firstName;
      this.referrer.lastName = this.dentist.lastName;
    }
  }

  continueToInsurance(){
    if(this.tab=="coordWithProspect"){
      this.addPatientServ.setReferrerCWP(this.referrer);
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Referrer");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[5].url]);

    } else if(this.tab=="quickAdd"){
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Referrer");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[4].url]);
    }
  }

  sameAsDentistFunct(value: boolean){
    this.referrer.sameAsDentist = value;
    if (this.referrer.sameAsDentist == true) {
      this.referrer.firstName = this.dentist.firstName;
      this.referrer.lastName = this.dentist.lastName;
    } else {
      this.referrer.firstName = "";
      this.referrer.lastName = "";
    }
  }

  showButtonSaveCancelFunc(){
    this.showButtonSaveCancel = true;
  }

  closeSaveCancelFunc(){
    this.openTextAreaVar = false;
    this.showButtonSaveCancel = false;
  }

  openTextarea(){
    this.openTextAreaVar = true;
    this.showButtonSaveCancel = true;
  }


}

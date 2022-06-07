import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';

import {NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  active:any;

  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  checkInsuranceCount: number = 1;
  provideInsurance :boolean = true;
  showButtonSaveCancel:boolean = false;
  openTextAreaVar:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueToFamilyMemb(){
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Insurance");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
    this.router.navigate([this.menuItems[6].url]);
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      this.active=1;
    } else if (changeEvent.nextId === 2) {
      this.active=2;
    } else if (changeEvent.nextId === 3) {
      this.active=3;
    } 
  }

  yesfunction(){
    this.provideInsurance = true;
    this.active=1;
    this.checkInsuranceCount=1;
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

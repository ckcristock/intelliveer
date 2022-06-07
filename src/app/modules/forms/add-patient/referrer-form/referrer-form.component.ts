import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-referrer-form',
  templateUrl: './referrer-form.component.html',
  styleUrls: ['./referrer-form.component.scss']
})
export class ReferrerFormComponent implements OnInit {

  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
  @Input() tab: string = "";
  openFormBool: boolean = true;
  showButtonSaveCancel:boolean = false;
  openTextAreaVar:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueToInsurance(){
    if(this.tab=="coordWithProspect"){
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

  closeForm(){
    this.openFormBool = false;
  }

  openForm(){
    this.openFormBool = true;
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

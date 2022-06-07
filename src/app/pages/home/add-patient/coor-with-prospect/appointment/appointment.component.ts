import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  showButtonSaveCancel:boolean = false;
  openTextAreaVar:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueToConclusion(){
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Appointment");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
    this.router.navigate([this.menuItems[8].url]);
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

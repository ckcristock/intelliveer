import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';

@Component({
  selector: 'app-callers-info',
  templateUrl: './callers-info.component.html',
  styleUrls: ['./callers-info.component.scss']
})
export class CallersInfoComponent implements OnInit {

  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  showButtonSaveCancel:boolean = false;

  constructor(private router: Router,
    private addPatientServ: AddPatientService) { }

  ngOnInit(): void {
  }

  continueToPatient(){
    this.addPatientServ.get$();
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Caller’s Info");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
    this.router.navigate([this.menuItems[1].url]);
  }

  showButtonSaveCancelFunc(){
    this.showButtonSaveCancel = true;
  }

  closeSaveCancelFunc(){
    this.showButtonSaveCancel = false;
  }


}

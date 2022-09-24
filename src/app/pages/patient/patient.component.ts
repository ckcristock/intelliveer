import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientUserHeaderIconMenuItems } from './menu';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  menuItems: IMenuItem[] = patientUserHeaderIconMenuItems;

  navbarOpen = false;
  navbarNumb = 1;
  patientInfo: any [] = [
    {preferredName: "Preferred Name",
    pronunciation: "Pronunciation",
    time: "11 y 5 m",
    letter: "M",
    gender: "She",
    active: "Active Tx",
    phase: "Phase 1",
    hes: "Hes.",
    js: "Js"
    },
  ];
  // navbarOpen = !navbarOpen;

  constructor(public router: Router,
    private routes: GlobalRoutesService) { }

  ngOnInit(): void {
  }

  setNavbarNum(num: number) {
    this.navbarNumb = num;
    console.log("num", num);

  }

  //to to show insurance Dropdown and highlights teeth icon
  insurances() { //missing dropped routes
    if (this.router.url.includes(this.routes.getPatientInsuranceUrl())) {
      return true;
    } else {
      return false;
    }
  }

  //to show patientUser Dropdown and highlights patient icon
  patientUser() {
    if (this.router.url.includes(this.routes.getPatientUserUrl())) {
      return true;
    } else {
      return false;
    }
  }

}

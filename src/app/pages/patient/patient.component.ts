import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  navbarOpen = false;
  navbarNumb = 1;
  // navbarOpen = !navbarOpen;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  setNavbarNum(num: number) {
    this.navbarNumb = num;
    console.log("num", num);

  }

  //to to show insurance Dropdown and highlights teeth icon
  insurances() { //missing dropped routes
    if (this.router.url.includes('/dashboard/patient/insurance/')) {
      return true;
    } else {
      return false;
    }
  }

  //to show patient Dropdown and highlights patient icon
  patients() {
    if (this.router.url === '/dashboard/patient/patient-detail' ||
      this.router.url === '/dashboard/patient/provider' ||
      this.router.url === '/dashboard/patient/referer' ||
      this.router.url === '/dashboard/patient/legal-guardian' ||
      this.router.url === '/dashboard/patient/payment-party' ||
      this.router.url === '/dashboard/patient/insurance-subscriber' ||
      this.router.url === '/dashboard/patient/family_members' ||

      this.router.url === '/dashboard/patient/provider/add' ||
      this.router.url === '/dashboard/patient/referer/add' ||
      this.router.url === '/dashboard/patient/legal-guardian/add' ||
      this.router.url === '/dashboard/patient/payment-party/add' ||
      this.router.url === '/dashboard/patient/insurance-subscriber/add' ||
      this.router.url === '/dashboard/patient/family_members/add'
    ) {
      return true;
    } else {
      return false;
    }
  }

  //to highlights Active-Section's Title
  activeSection() {
    if (
      this.router.url === '/dashboard/patient/insurance/active' ||
      this.router.url === '/dashboard/patient/insurance/policy-info' ||
      this.router.url === '/dashboard/patient/insurance/ortho-benef' ||
      this.router.url === '/dashboard/patient/insurance/dental-benef' ||
      this.router.url === '/dashboard/patient/insurance/billing'
    ) {
      return true;
    } else {
      return false;
    }
  }

}

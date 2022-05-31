import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

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

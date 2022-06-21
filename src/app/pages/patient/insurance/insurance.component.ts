import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor(public router: Router,
    private routes: GlobalRoutesService) { }

  ngOnInit(): void {
  }

  activeSection() {
    if(this.router.url===this.routes.getPatientInsuranceRoutes()[5].url){ // [5] is dropped url
      return false;
    } else {
      return true;
    }
  }

}

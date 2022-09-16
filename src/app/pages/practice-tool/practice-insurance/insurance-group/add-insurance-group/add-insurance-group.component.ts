import { Component, OnInit } from '@angular/core';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';

@Component({
  selector: 'app-add-insurance-group',
  templateUrl: './add-insurance-group.component.html',
  styleUrls: ['./add-insurance-group.component.scss']
})
export class AddInsuranceGroupComponent implements OnInit {
  urlInsuranceGroup: string;
  insuranceGroupMenu: any[];

  constructor(private globalRoutes: GlobalRoutesService) {
    this.urlInsuranceGroup = this.globalRoutes.getPracticeInsuranceGroupUrl();
    this.insuranceGroupMenu = this.globalRoutes.getPracticeToolInsuranceGroupRoutes();
  }

  ngOnInit(): void {
  }

  

}

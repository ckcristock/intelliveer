import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPatientService } from "@services/add-patient/add-patient.service";
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";

@Component({
  selector: 'app-additional-patient-form',
  templateUrl: './additional-patient-form.component.html',
  styleUrls: ['./additional-patient-form.component.scss']
})
export class AdditionalPatientFormComponent implements OnInit {

  @Input() patientPage: number = 2;
  familyMemberCount:any = 2;
  checkInsuranceCount: number = 1;
  provideInsurance :boolean = true;
  coordWithProspRoutes:any[]=[];
  title: string = "";
  showButtonSaveCancel:boolean = false;
  openTextAreaVar:boolean = false;

  constructor(
    private router:Router,
    private routes: GlobalRoutesService,
    private AddPatientService: AddPatientService) { }

  ngOnInit(): void {
    this.title= `Patient ${this.patientPage}`;
  }

  moveToAnotherTab(){
    this.familyMemberCount = localStorage.getItem('familyMemberCount');
    this.familyMemberCount = parseInt(this.familyMemberCount);
    this.coordWithProspRoutes = this.routes.getCoordWithProspRoutes();

   
    if (this.patientPage==4){
      this.AddPatientService.setPatientSaved(2);
      this.router.navigate([this.coordWithProspRoutes[7].url]);
      
      return;
    }

    for(let i=1;i<=this.familyMemberCount;i++){
      if (this.patientPage==(i+1) && this.familyMemberCount===i){
        this.AddPatientService.setPatientSaved(i-1);
        this.router.navigate([this.coordWithProspRoutes[7].url]);
      } else if(this.patientPage==(i+1)){
        this.AddPatientService.setPatientSaved(i-1);
        this.router.navigate([this.coordWithProspRoutes[6].child[i].url]);

      }
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

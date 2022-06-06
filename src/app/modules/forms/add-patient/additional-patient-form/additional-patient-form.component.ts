import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moveToAnotherTab(){
    this.familyMemberCount = localStorage.getItem('familyMemberCount');
    this.familyMemberCount = parseInt(this.familyMemberCount);
    console.log("Hiiiiii");
    console.log("this.patientPage", this.patientPage);
    console.log("this.familyMemberCount", this.familyMemberCount);
    
    
    if (this.patientPage==2 && this.familyMemberCount===1){
      this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/appointment']);
    } else if(this.patientPage==2){
      console.log( this.familyMemberCount);
      this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/family-members/additional-patient-'+3]);
    } else if (this.patientPage==3 && this.familyMemberCount===2){
      this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/appointment']);
    } else if (this.patientPage==3){
      this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/family-members/additional-patient-'+4]);
    } else if (this.patientPage==4){
      this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/appointment']);
    } else {
      this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/appointment']);
    }
    
    //this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/family-member/additional-patient/'+2]);
  }

}

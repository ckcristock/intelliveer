import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.scss']
})
export class FamilyMembersComponent implements OnInit {

  menuItems: IMenuItem[] = addPatientCordinateMenuItems;
  provideFamilyMember: boolean = true;

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  continueToAppointment(){
    this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/family-members/additional-patient-2']);
  }
  checkFamilyMemberCount(event: any){
    localStorage.setItem('familyMemberCount', event.target.value);
  }
  changeProvideFM(event:any){
    if(event.target.value === "true"){
      this.provideFamilyMember = true;
      localStorage.setItem('familyMemberCount', "1");
    }
    else{
      this.provideFamilyMember = false;
      localStorage.setItem('familyMemberCount', "0");
    }
  }

}

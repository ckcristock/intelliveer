import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMenuItem } from '@pages/dashboard/menu';
// import { addPatientCordinateMenuItems } from '@pages/header/menu';
import { Router } from '@angular/router';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-coor-with-prospect',
  templateUrl: './coor-with-prospect.component.html',
  styleUrls: ['./coor-with-prospect.component.scss']
})
export class CoorWithProspectComponent implements OnInit {

  selectDefault: any = "Select";
  url:string="";
  selectTab: number = 2;

  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  prevFMCount: number = 0;


  public routerName: string = "second";
  public sessionArray: any[] = [];
  public sessionArrayQuickAdd: any[] = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.sessionArray = JSON.parse(localStorage.getItem("visitedArray") || '[]');  
    setInterval(() =>
    {
      
      this.sessionArray = JSON.parse(localStorage.getItem("visitedArray") || '[]');  
      let familyMemberCount = parseInt(localStorage.getItem('familyMemberCount') || "0");
      if(this.prevFMCount != familyMemberCount){
        this.menuItemsOfCordinate[6].child = [];
        for (let i = 1; i <= familyMemberCount; i++) {
          let patientInit = i + 1
            this.menuItemsOfCordinate[6].child?.push({
              title: 'Patient '+ patientInit,
              url: '/dashboard/home/add-patient/coor-with-prospect/family-members/additional-patient-'+patientInit,
              icon: 'bi bi-house-door'
            })
        }
        this.prevFMCount = familyMemberCount;
      }
    }, 1000)  
    console.log(this.menuItemsOfCordinate);
    
  }

  
  goToSpecificMenu(Obj:any){
    // console.log(Obj);
    this.router.navigate([Obj.url]);
  }

  setSelectTab(numb: number){
    this.selectTab = numb;
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMenuItem } from '@pages/dashboard/menu';
// import { addPatientCordinateMenuItems } from '@pages/header/menu';
import { Router } from '@angular/router';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";

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
	coordWithProspRoutes: any[] = [];
  savedPatient: any[] = [];
  visitedPatient: any[] = [];

  constructor(public router: Router,
    private addPatientServ: AddPatientService,
    private routes: GlobalRoutesService) { }

  ngOnInit(): void {

    this.addPatientServ.getPatientsSavedUnsaved().subscribe((resp: any[])=>{
      this.savedPatient = resp;
      this.visitedPatient = this.addPatientServ.getSavedPatientsKeys();

      if(this.addPatientServ.getCheckAllSaved()){
      this.sessionArray = JSON.parse(localStorage.getItem("visitedArray") || '[]');  

        let visitedArray: any = JSON.parse(
          localStorage.getItem('visitedArray') || '[]'
        );
        visitedArray.push('Family Members');
        localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
      } else {
      this.sessionArray = JSON.parse(localStorage.getItem("visitedArray") || '[]');  

        let visitedArray: any = JSON.parse(
          localStorage.getItem('visitedArray') || '[]'
        );
        visitedArray = visitedArray.filter((x:any)=>{
          return x!="Family Members";
        })
        localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
      }
      
    });


    setInterval(() =>
    {
      this.sessionArray = JSON.parse(localStorage.getItem("visitedArray") || '[]');  

      let familyMemberCount = parseInt(localStorage.getItem('familyMemberCount') || "0");

      if(this.prevFMCount != familyMemberCount){
        this.menuItemsOfCordinate[6].child = [];
        this.coordWithProspRoutes =	this.routes.getCoordWithProspRoutes();
        for (let i = 1; i <= familyMemberCount; i++) {
          let patientInit = i + 1
            this.menuItemsOfCordinate[6].child?.push({
              title: 'Patient '+ patientInit,
              url: this.coordWithProspRoutes[6].child[i-1].url,
              icon: 'bi bi-house-door'
            })
        }
        this.prevFMCount = familyMemberCount;
      }
    }, 500) ;
    
    
  }

  
  goToSpecificMenu(Obj:any){
    // console.log(Obj);
    this.router.navigate([Obj.url]);
  }

  setSelectTab(numb: number){
    this.selectTab = numb;
  }

}

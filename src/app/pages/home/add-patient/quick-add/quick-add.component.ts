import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMenuItem } from '@pages/dashboard/menu';
// import { addPatientCordinateMenuItems } from '@pages/header/menu';
import { Router } from '@angular/router';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.scss']
})
export class QuickAddComponent implements OnInit {

  selectDefault: any = "Select";

  selectTab: number = 2;

  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;

  public routerName: string = "second";
  public sessionArray: any[] = [];
  public sessionArrayQuickAdd: any[] = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.sessionArrayQuickAdd = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');  
    setInterval(() =>
    {
      this.sessionArrayQuickAdd = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');  
    }, 1000)  
    
  }

  
  goToSpecificMenu(Obj:any){
    // console.log(Obj);
    this.router.navigate([Obj.url]);
  }

  setSelectTab(numb: number){
    this.selectTab = numb;
  }


}

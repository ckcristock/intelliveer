import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientConsultationMenuItems, patientDiagnosisMenuItems } from '../menu';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  menuItems: IMenuItem[] = patientConsultationMenuItems;
  showProgressBar: boolean = true;
  progressbarMmenuItems: IMenuItem[] = patientDiagnosisMenuItems;

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.menuItems)
  }

  selectMenuItem(Obj: any)
  {
    if(Obj.url == "/dashboard/patient/consultation/diagnosis")
    {
      this.showProgressBar = true;
      this.router.navigate([Obj.url]);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '@pages/dashboard/menu';
import { settingPatientConsultationMenuItems } from '@pages/patient/menu';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  menuItems: IMenuItem[] = settingPatientConsultationMenuItems;

  constructor() { }

  ngOnInit(): void {
  }

}

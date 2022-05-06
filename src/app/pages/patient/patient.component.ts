import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientMenuItems } from './menu';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  menuItems: IMenuItem[] = patientMenuItems;

  navbarOpen = false;
  // navbarOpen = !navbarOpen;

  constructor() { }

  ngOnInit(): void {
  }

}

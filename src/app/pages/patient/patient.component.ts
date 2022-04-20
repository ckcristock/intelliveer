import { Component, OnInit } from '@angular/core';
import { patientMenuItem } from './patient-menu';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patientMenuItems: any[] = patientMenuItem;
  navbarOpen = false;
  // navbarOpen = !navbarOpen;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientUserMenuItems } from '../menu';

@Component({
  selector: 'app-patient-user',
  templateUrl: './patient-user.component.html',
  styleUrls: ['./patient-user.component.scss']
})
export class PatientUserComponent implements OnInit {

  menuItems: IMenuItem[] = patientUserMenuItems;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

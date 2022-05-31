import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientConsultationMenuItems } from '../menu';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  menuItems: IMenuItem[] = patientConsultationMenuItems;

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.menuItems)
  }

}

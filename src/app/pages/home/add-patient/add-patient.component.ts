import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/header/menu';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  selectDefault: any = "Select";

  selectTab: string = "eligibility";
  menuItems: IMenuItem[] = addPatientCordinateMenuItems;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement, selectTab: string) {
    this.selectTab = selectTab.trim();
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

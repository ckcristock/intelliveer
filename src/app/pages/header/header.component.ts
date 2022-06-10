import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from './menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: IMenuItem[] = addPatientCordinateMenuItems;

  public routerName: string = "second";
  public sessionArray: any[] = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.sessionArray = JSON.parse(localStorage.getItem("visitedArray") || '[]');  
    setInterval(() =>
    {
      this.sessionArray = JSON.parse(localStorage.getItem("visitedArray") || '[]');  
    }, 1000)  
  }

}

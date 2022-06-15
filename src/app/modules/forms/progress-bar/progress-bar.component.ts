import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() title?: string;
  @Input() menuItems: any[] = [];
  @Input() sessionArrayName: string = "";
  sessionArray: any[] = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.sessionArray = JSON.parse(localStorage.getItem(this.sessionArrayName) || '[]');  
    setInterval(() =>
    {
      this.sessionArray = JSON.parse(localStorage.getItem(this.sessionArrayName) || '[]');  
    }, 1000)  
  }

  goToRouterUrl(menuRoutingUrl: any)
  {
    this.router.navigate([menuRoutingUrl]);
  }

}

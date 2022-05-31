import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-history',
  templateUrl: './health-history.component.html',
  styleUrls: ['./health-history.component.scss']
})
export class HealthHistoryComponent implements OnInit {

  healthHistoryList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addHealthHistory()
  {
    this.router.navigate(['/dashboard/patient/consultation/health-history/add']);
  }

}

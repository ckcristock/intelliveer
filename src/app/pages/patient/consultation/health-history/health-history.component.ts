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
    let objC = {
      date: "2022/04/10",
      name: "Health History v1",
      status: "Completed"
    }
    this.healthHistoryList.push(objC);
    let objR = {
      date: "2022/04/09",
      name: "Health History v2",
      status: "Review"
    }
    this.healthHistoryList.push(objR);
  }

  addHealthHistory()
  {
    this.router.navigate(['/dashboard/patient/consultation/health-history/add']);
  }

}

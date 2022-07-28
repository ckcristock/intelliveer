import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RiskComponent implements OnInit {
  title: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = "Risks";
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Risks");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/treatment/adjunctive-tx']);
  }

}

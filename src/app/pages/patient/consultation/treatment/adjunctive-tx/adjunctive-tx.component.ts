import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adjunctive-tx',
  templateUrl: './adjunctive-tx.component.html',
  styleUrls: ['./adjunctive-tx.component.scss']
})
export class AdjunctiveTxComponent implements OnInit {
  title: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = "Adjunctive Tx";
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Adjunctive Tx");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/treatment/appliance-sequence']);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bracket-variations',
  templateUrl: './bracket-variations.component.html',
  styleUrls: ['./bracket-variations.component.scss']
})
export class BracketVariationsComponent implements OnInit {
  title: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = "Bracket Variations";
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Bracket Variations");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/treatment/retention']);
  }

}

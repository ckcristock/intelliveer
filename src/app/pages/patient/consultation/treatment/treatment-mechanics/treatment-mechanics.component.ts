import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-mechanics',
  templateUrl: './treatment-mechanics.component.html',
  styleUrls: ['./treatment-mechanics.component.scss']
})
export class TreatmentMechanicsComponent implements OnInit {
  title: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = "Treatment Mechanics";
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Treatment Mechanics");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/treatment/treatment-outcome']);
  }

}

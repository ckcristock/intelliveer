import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-treatment-outcome',
  templateUrl: './treatment-outcome.component.html',
  styleUrls: ['./treatment-outcome.component.scss']
})
export class TreatmentOutcomeComponent implements OnInit {
  title: string | undefined;

  constructor(public router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Expected Treatment Outcome";
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Expected Tx Outcome");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/risk']);
  }
  
}

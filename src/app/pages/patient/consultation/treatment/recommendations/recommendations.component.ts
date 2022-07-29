import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  title: string | undefined;
  showRecommendation: boolean = true;
  timing: string | undefined;
  timingMonth: string | undefined;
  treamentPhaseOption: string | undefined;
  treamentTypeOption: string | undefined;
  fromTime: any | undefined;
  toTime: any | undefined;

  constructor(public router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Tx Recommendations";
    this.timing = "Treatment at this time";
    this.treatmentOption.treatmentOptionsArray.Timing = this.timing;
    this.treamentPhaseOption = "Comprehenssive";
    this.treatmentOption.treatmentOptionsArray.Treament_Phase = this.treamentPhaseOption;
    this.treamentTypeOption = "Braces";
    this.treatmentOption.treatmentOptionsArray.Treament_Type = this.treamentTypeOption;
  }

  ngAfterContentChecked(): void {
    if(this.treatmentOption.treatmentOptionObj.Treament_Time)
    {
      this.timing = this.treatmentOption.treatmentOptionObj.Timing;
      this.treamentPhaseOption = this.treatmentOption.treatmentOptionObj.Treament_Phase;
      this.treamentTypeOption = this.treatmentOption.treatmentOptionObj.Treament_Type;
      this.fromTime = this.treatmentOption.treatmentOptionObj.Treament_Time.split('-')[0].trim();
      this.toTime = this.treatmentOption.treatmentOptionObj.Treament_Time.split('-')[1].trim().split(' ')[0];
    }
    else
    {
      this.fromTime = '';
      this.toTime = '';
    }
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Tx Recommendations");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/treatment/prerequisites']);
  }

  onTimingOptionChange(value: any)
  {
    this.treatmentOption.treatmentOptionsArray.Timing = this.timing;
    if(value)
    {
      if(value == 2 || value == 3)
      {
        this.showRecommendation = false;
      }
      else
      {
        this.showRecommendation = true;
      }
    }
  }

  treatmentTime()
  {
    if(this.fromTime && this.toTime)
    {
      this.treatmentOption.treatmentOptionsArray.Treament_Time = this.fromTime + " - " + this.toTime + " Months"
    }
  }

}

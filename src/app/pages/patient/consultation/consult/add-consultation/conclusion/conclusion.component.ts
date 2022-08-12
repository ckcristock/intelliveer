import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {
  @ViewChild('observationPeriod') refObservationPeriod :ElementRef | any;

  conclusionArray: any[] = ["No Treatment","Observation", "Tx accepted", "Undecided", "Tx declined", "Unable to treat"];
  observationPeriodList: any[] = ["3 Months", "6 Months", "9 Months", "12 Months", "18 Months", "24 Months"];
  model!:NgbDateStruct
  selectConclusion: number = 1;
  preAuthorizationOption: string = 'yes';
  preInsuranceOption: string = 'today';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeConclusionType($event: any)
  {
    this.selectConclusion = $event.target.value;
  }

  getSelectDate(model: any)
  {
    console.log(model)
  }

}

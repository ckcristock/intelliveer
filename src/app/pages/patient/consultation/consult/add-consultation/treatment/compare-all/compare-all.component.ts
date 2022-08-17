import { Component, OnInit } from '@angular/core';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-compare-all',
  templateUrl: './compare-all.component.html',
  styleUrls: ['./compare-all.component.scss']
})
export class CompareAllComponent implements OnInit {
  compareAllOptionArray: any;
  selectOne: boolean = false;
  selectTwo: boolean = false;
  selectThree: boolean = false;
  showBestOptionCss: boolean = false;

  constructor(private treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.compareAllOptionArray = JSON.parse(localStorage.getItem("compareAllOption") || '[]');
  }

  countTreatment(Obj: any)
  {
    if(isNaN(Obj.count))
    {
      Obj.count = 1;
    }
    else
    {
      Obj.count = Obj.count + 1;
      if(Obj.count == 3)
      {
        this.showBestOptionCss = true;
      }
      else
      {
        this.showBestOptionCss = false;
      }
    }
  }

}

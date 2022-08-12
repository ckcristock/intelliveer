import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-extractions',
  templateUrl: './extractions.component.html',
  styleUrls: ['./extractions.component.scss']
})
export class ExtractionsComponent implements OnInit {
  title: string | undefined;
  adultToothChartLstPart1: any[] = [];
  adultToothChartLstPart2: any[] = [];
  adultToothChartLstPart3: any[] = [];
  adultToothChartLstPart4: any[] = [];
  selectToothOptionArray: any[] = [
    {
      adultTooth: [] = []
    },
    {
      childTooth: [] = []
    }
  ];

  constructor(public router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Extractions";
    this.selectToothOptionArray = this.treatmentOption.treatmentOptionObj.Extractions;
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Extractions");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/treatment-mechanics']);
  }

  onSelectAdultOption($event: any)
  {
    this.selectToothOptionArray[0].adultTooth.push($event);
    this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth.push($event);
  }

  onSelectChildOption($event: any)
  {
    this.selectToothOptionArray[1].childTooth.push($event);
    this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth.push($event);
  }

  cancelSelectionFromAdult(Obj: any, index: number)
  {
    Obj.show = true;
    this.selectToothOptionArray[0].adultTooth = this.selectToothOptionArray[0].adultTooth.filter((item: any) => item !== Obj);
    this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth = this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth.filter((item: any) => item !== Obj);
  }

  cancelSelectionFromChild(Obj: any, index: number)
  {
    Obj.show = true;
    this.selectToothOptionArray[1].childTooth = this.selectToothOptionArray[1].childTooth.filter((item: any) => item !== Obj);
    this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth = this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth.filter((item: any) => item !== Obj);
  }

}

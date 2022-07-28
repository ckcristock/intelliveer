import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['./retention.component.scss']
})
export class RetentionComponent implements OnInit {
  title: string | undefined;

  constructor(private router: Router, private treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Retention";
  }

  completed()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Retention");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));

    let compareAllArray: any = JSON.parse(localStorage.getItem("compareAllOption") || '[]');
    let compareAllObject = {
      id: compareAllArray.length + 1,
      Timing: this.treatmentOption.treatmentOptionsArray.Timing,
      Treament_Phase: this.treatmentOption.treatmentOptionsArray.Treament_Phase,
      Treament_Type: this.treatmentOption.treatmentOptionsArray.Treament_Type,
      Treament_Time: this.treatmentOption.treatmentOptionsArray.Treament_Time,
      Prerequisites: this.treatmentOption.treatmentOptionsArray.Prerequisites,
      Extractions: [
        {
          adultTooth: this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth
        },
        {
          childTooth: this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth
        }
      ],
      Chief_Concerns_1: this.treatmentOption.treatmentOptionsArray.Chief_Concerns_1,
      Chief_Concerns_2: this.treatmentOption.treatmentOptionsArray.Chief_Concerns_2,
      Expectations: this.treatmentOption.treatmentOptionsArray.Expectations,
      Diagnosis: this.treatmentOption.treatmentOptionsArray.Diagnosis,
      anticipated_1: this.treatmentOption.treatmentOptionsArray.anticipated_1,
      anticipated_2: this.treatmentOption.treatmentOptionsArray.anticipated_2,
      Appliance_Sequence: this.treatmentOption.treatmentOptionsArray.Appliance_Sequence
    }
    compareAllArray.push(compareAllObject);
    localStorage.setItem('compareAllOption', JSON.stringify(compareAllArray));

    let menuItems = JSON.parse(localStorage.getItem("menuItemArray") || '[]');
    let updateItem = menuItems.find(this.findIndexToUpdate, menuItems[menuItems.length - 1].id);
    updateItem.showDone = true;
    let index = menuItems.indexOf(updateItem);
    menuItems[index] = updateItem;
    localStorage.setItem("menuItemArray", JSON.stringify(menuItems));

    localStorage.removeItem('treatmentVisitedArray');
    this.treatmentOption.treatmentOptionObj = {};
    
    this.router.navigate(['/dashboard/patient/consultation/treatment/compare-all']);
  }

  findIndexToUpdate(newItem: any) { 
    return newItem.id === this;
  }

}

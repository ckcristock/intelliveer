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
  searchWord: string = "";
  searchFocus: boolean = false;
  retentionLst: any[] = [
    {
      id: 1,
      name: "Cavity Clearance",
      checked: false
    },
    {
      id: 2,
      name: "CT Scan",
      checked: false
    }
  ];
  searchResultLst: any[] = [];
  prerequisitesSearchLst: any[] = [];

  constructor(private router: Router, private treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Retention";
    this.prerequisitesSearchLst = this.retentionLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.Retention
    for (let i = 0; i < this.searchResultLst.length; i++) {
      for (let j = 0; j < this.retentionLst.length; j++) {
        if(this.searchResultLst[i].id == this.retentionLst[j].id)
        {
          this.retentionLst[j].checked = this.searchResultLst[i].checked;
        }
      }
    }
  }

  completed()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Retention");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));

    // let compareAllArray: any = JSON.parse(localStorage.getItem("compareAllOption") || '[]');
    // let compareAllObject = {
    //   id: compareAllArray.length + 1,
    //   Timing: this.treatmentOption.treatmentOptionsArray.Timing,
    //   Treament_Phase: this.treatmentOption.treatmentOptionsArray.Treament_Phase,
    //   Treament_Type: this.treatmentOption.treatmentOptionsArray.Treament_Type,
    //   Treament_Time: this.treatmentOption.treatmentOptionsArray.Treament_Time,
    //   Prerequisites: this.treatmentOption.treatmentOptionsArray.Prerequisites,
    //   Extractions: [
    //     {
    //       adultTooth: this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth
    //     },
    //     {
    //       childTooth: this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth
    //     }
    //   ],
    //   Chief_Concerns_1: this.treatmentOption.treatmentOptionsArray.Chief_Concerns_1,
    //   Chief_Concerns_2: this.treatmentOption.treatmentOptionsArray.Chief_Concerns_2,
    //   Expectations: this.treatmentOption.treatmentOptionsArray.Expectations,
    //   Diagnosis: this.treatmentOption.treatmentOptionsArray.Diagnosis,
    //   anticipated_1: this.treatmentOption.treatmentOptionsArray.anticipated_1,
    //   anticipated_2: this.treatmentOption.treatmentOptionsArray.anticipated_2,
    //   Appliance_Sequence: this.treatmentOption.treatmentOptionsArray.Appliance_Sequence
    // }
    // compareAllArray.push(compareAllObject);
    // localStorage.setItem('compareAllOption', JSON.stringify(compareAllArray));

    let menuItems = JSON.parse(localStorage.getItem("menuItemArray") || '[]');
    let updateItem = menuItems.find(this.findIndexToUpdate, menuItems[menuItems.length - 1].id);
    updateItem.showDone = true;
    let index = menuItems.indexOf(updateItem);
    menuItems[index] = updateItem;
    localStorage.setItem("menuItemArray", JSON.stringify(menuItems));

    localStorage.removeItem('treatmentVisitedArray');
    this.treatmentOption.treatmentOptionObj = {};
    
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/fee-estimate']);
  }

  findIndexToUpdate(newItem: any) { 
    return newItem.id === this;
  }

  handleSearchResultsClick(Obj: any)
  {
    Obj.checked = true;
    this.searchWord = "";
    this.searchFocus = false;
    this.searchResultLst.push(Obj);
    this.treatmentOption.treatmentOptionsArray.Retention = this.searchResultLst;
  }

  fetchSearch($event: any): void
  {
    if ($event.target.value === '') {
      this.prerequisitesSearchLst = this.retentionLst;
    }
    this.prerequisitesSearchLst = this.retentionLst.filter((searchResultObj: any) => {
      return searchResultObj.name.toLowerCase().startsWith($event.target.value.toLowerCase());
    })
    // if(this.prerequisitesSearchLst.length != 0 && this.searchWord.length == 3)
    // {
    //   this.searchWord = this.prerequisitesSearchLst[0].name
    // }
  }

  cancelSelection(Obj: any, index: any)
  {
    Obj.checked = false;
    this.searchResultLst.splice(index, 1);
    this.treatmentOption.treatmentOptionsArray.Retention = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.Retention)
  }

}

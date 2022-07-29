import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.scss']
})
export class PrerequisitesComponent implements OnInit {

  title: string | undefined;
  searchWord: string = "";
  searchFocus: boolean = false;
  prerequisitesLst: any[] = [
    {
      id: 1,
      name: "Cavity Clearance",
      checked: false
    },
    {
      id: 2,
      name: "CT Scan",
      checked: false
    },
    {
      id: 3,
      name: "Perio Clearance",
      checked: false
    },
    {
      id: 4,
      name: "Dental work",
      checked: false
    }
  ];
  searchResultLst: any[] = [];
  prerequisitesSearchLst: any[] = [];

  constructor(public router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Prerequisites";
    this.prerequisitesSearchLst = this.prerequisitesLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.Prerequisites
    for (let i = 0; i < this.searchResultLst.length; i++) {
      for (let j = 0; j < this.prerequisitesLst.length; j++) {
        if(this.searchResultLst[i].id == this.prerequisitesLst[j].id)
        {
          this.prerequisitesLst[j].checked = this.searchResultLst[i].checked;
        }
      }
    }
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Prerequisites");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/treatment/extractions']);
  }

  handleSearchResultsClick(Obj: any)
  {
    Obj.checked = true;
    this.searchWord = "";
    this.searchFocus = false;
    this.searchResultLst.push(Obj);
    this.treatmentOption.treatmentOptionsArray.Prerequisites = this.searchResultLst;
  }

  fetchSearch($event: any): void
  {
    if ($event.target.value === '') {
      this.prerequisitesSearchLst = this.prerequisitesLst;
    }
    this.prerequisitesSearchLst = this.prerequisitesLst.filter((searchResultObj: any) => {
      return searchResultObj.name.toLowerCase().startsWith($event.target.value.toLowerCase());
    })
  }

  cancelSelection(Obj: any, index: any)
  {
    Obj.checked = false;
    this.searchResultLst.splice(index, 1);
    this.treatmentOption.treatmentOptionsArray.Prerequisites = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.Prerequisites)
  }

}

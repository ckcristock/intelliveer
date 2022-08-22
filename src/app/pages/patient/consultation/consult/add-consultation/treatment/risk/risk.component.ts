import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RiskComponent implements OnInit {
  title: string | undefined;
  searchWord: string = "";
  searchFocus: boolean = false;
  risksLst: any[] = [
    {
      id: 1,
      name: "Root resorption",
      checked: false
    },
    {
      id: 2,
      name: "Ankylosis",
      checked: false
    },
    {
      id: 3,
      name: "Non-vitality",
      checked: false
    }
  ];
  searchResultLst: any[] = [];
  prerequisitesSearchLst: any[] = [];

  constructor(private router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Risks";
    this.prerequisitesSearchLst = this.risksLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.risk
    for (let i = 0; i < this.searchResultLst.length; i++) {
      for (let j = 0; j < this.risksLst.length; j++) {
        if(this.searchResultLst[i].id == this.risksLst[j].id)
        {
          this.risksLst[j].checked = this.searchResultLst[i].checked;
        }
      }
    }
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Risks");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/adjunctive-tx']);
  }

  handleSearchResultsClick(Obj: any)
  {
    Obj.checked = true;
    this.searchWord = "";
    this.searchFocus = false;
    this.searchResultLst.push(Obj);
    this.treatmentOption.treatmentOptionsArray.risk = this.searchResultLst;
  }

  fetchSearch($event: any): void
  {
    if ($event.target.value === '') {
      this.prerequisitesSearchLst = this.risksLst;
    }
    this.prerequisitesSearchLst = this.risksLst.filter((searchResultObj: any) => {
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
    this.treatmentOption.treatmentOptionsArray.risk = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.risk)
  }

}

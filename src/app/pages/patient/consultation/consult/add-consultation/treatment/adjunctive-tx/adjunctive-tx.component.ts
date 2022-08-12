import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-adjunctive-tx',
  templateUrl: './adjunctive-tx.component.html',
  styleUrls: ['./adjunctive-tx.component.scss']
})
export class AdjunctiveTxComponent implements OnInit {
  title: string | undefined;
  searchWord: string = "";
  searchFocus: boolean = false;
  adjunctiveLst: any[] = [
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

  constructor(private router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Adjunctive Tx";
    this.prerequisitesSearchLst = this.adjunctiveLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.adjunctive
    for (let i = 0; i < this.searchResultLst.length; i++) {
      for (let j = 0; j < this.adjunctiveLst.length; j++) {
        if(this.searchResultLst[i].id == this.adjunctiveLst[j].id)
        {
          this.adjunctiveLst[j].checked = this.searchResultLst[i].checked;
        }
      }
    }
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Adjunctive Tx");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/appliance-sequence']);
  }

  handleSearchResultsClick(Obj: any)
  {
    Obj.checked = true;
    this.searchWord = "";
    this.searchFocus = false;
    this.searchResultLst.push(Obj);
    this.treatmentOption.treatmentOptionsArray.adjunctive = this.searchResultLst;
  }

  fetchSearch($event: any): void
  {
    if ($event.target.value === '') {
      this.prerequisitesSearchLst = this.adjunctiveLst;
    }
    this.prerequisitesSearchLst = this.adjunctiveLst.filter((searchResultObj: any) => {
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
    this.treatmentOption.treatmentOptionsArray.adjunctive = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.adjunctive)
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-bracket-variations',
  templateUrl: './bracket-variations.component.html',
  styleUrls: ['./bracket-variations.component.scss']
})
export class BracketVariationsComponent implements OnInit {
  title: string | undefined;
  searchWord: string = "";
  searchFocus: boolean = false;
  bracketLst: any[] = [
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
    this.title = "Bracket Variations";
    this.prerequisitesSearchLst = this.bracketLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.Bracket_Variations
    for (let i = 0; i < this.searchResultLst.length; i++) {
      for (let j = 0; j < this.bracketLst.length; j++) {
        if(this.searchResultLst[i].id == this.bracketLst[j].id)
        {
          this.bracketLst[j].checked = this.searchResultLst[i].checked;
        }
      }
    }
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Bracket Variations");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/retention']);
  }

  handleSearchResultsClick(Obj: any)
  {
    Obj.checked = true;
    this.searchWord = "";
    this.searchFocus = false;
    this.searchResultLst.push(Obj);
    this.treatmentOption.treatmentOptionsArray.Bracket_Variations = this.searchResultLst;
  }

  fetchSearch($event: any): void
  {
    if ($event.target.value === '') {
      this.prerequisitesSearchLst = this.bracketLst;
    }
    this.prerequisitesSearchLst = this.bracketLst.filter((searchResultObj: any) => {
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
    this.treatmentOption.treatmentOptionsArray.Bracket_Variations = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.Bracket_Variations)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-consents-and-agreement',
  templateUrl: './consents-and-agreement.component.html',
  styleUrls: ['./consents-and-agreement.component.scss']
})
export class ConsentsAndAgreementComponent implements OnInit {
  title: string | undefined;
  searchWord: string = "";
  searchFocus: boolean = false;
  adjunctiveLst: any[] = [
    {
      id: 1,
      name: "Consent 1",
      checked: false
    },
    {
      id: 2,
      name: "Consent 2",
      checked: false
    }
  ];
  searchResultLst: any[] = [];
  prerequisitesSearchLst: any[] = [];
  public row: any;
  showMenu: boolean = false;

  constructor(private router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Consents and Agreement";
    this.prerequisitesSearchLst = this.adjunctiveLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.Consents_and_Agreement
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
    treatmentVisitedArray.push("Consents and Agreement");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/treatment-outcome']);
  }

  handleSearchResultsClick(Obj: any)
  {
    Obj.checked = true;
    this.searchWord = "";
    this.searchFocus = false;
    this.showMenu = false;
    this.searchResultLst.push(Obj);
    this.treatmentOption.treatmentOptionsArray.Consents_and_Agreement = this.searchResultLst;
  }

  fetchSearch($event: any): void
  {
    if ($event.target.value === '') {
      this.prerequisitesSearchLst = this.adjunctiveLst;
    }
    this.prerequisitesSearchLst = this.adjunctiveLst.filter((searchResultObj: any) => {
      return searchResultObj.name.toLowerCase().startsWith($event.target.value.toLowerCase());
    })
  }

  cancelSelection(Obj: any, index: any)
  {
    Obj.checked = false;
    this.searchResultLst.splice(index, 1);
    this.treatmentOption.treatmentOptionsArray.Consents_and_Agreement = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.Consents_and_Agreement)
  }

  endMove($event: any) {
		let children = Array.from($event.target.parentNode.parentNode.children);
		if (
			children.indexOf($event.target.parentNode) >
			children.indexOf(this.row)
		)
		{
			$event.target.parentNode.after(this.row);
			console.log()
		}
		else $event.target.parentNode.before(this.row);
	}

	move($event: any) {
		this.row = $event.target;
	}

}

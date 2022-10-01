import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-appointment-sequence',
  templateUrl: './appointment-sequence.component.html',
  styleUrls: ['./appointment-sequence.component.scss']
})
export class AppointmentSequenceComponent implements OnInit {

  title: string | undefined;
  searchWord: string = "";
  searchFocus: boolean = false;
  adjunctiveLst: any[] = [
    {
      id: 1,
      name: "Appointment 1",
      checked: false
    },
    {
      id: 2,
      name: "Appointment 2",
      checked: false
    }
  ];
  searchResultLst: any[] = [];
  prerequisitesSearchLst: any[] = [];
  public row: any;
  showMenu: boolean = false;

  constructor(private router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Appointment Sequence";
    this.prerequisitesSearchLst = this.adjunctiveLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.Appointment_Sequence;
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
    treatmentVisitedArray.push("Appointment Sequence");
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
    this.treatmentOption.treatmentOptionsArray.Appointment_Sequence = this.searchResultLst;
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
    this.treatmentOption.treatmentOptionsArray.Appointment_Sequence = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.Appointment_Sequence)
  }

  endMove($event: any) {
		let children = Array.from($event.target.parentNode.parentNode.children);
		if (
			children.indexOf($event.target.parentNode) >
			children.indexOf(this.row)
		)
		{
			$event.target.parentNode.after(this.row);
		}
		else $event.target.parentNode.before(this.row);
	}

	move($event: any) {
		this.row = $event.target;
	}

}

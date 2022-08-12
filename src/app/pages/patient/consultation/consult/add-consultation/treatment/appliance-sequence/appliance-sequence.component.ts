import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-appliance-sequence',
  templateUrl: './appliance-sequence.component.html',
  styleUrls: ['./appliance-sequence.component.scss']
})
export class ApplianceSequenceComponent implements OnInit {
  title: string | undefined;
  applianceLst: any[] = [
    {
      id: 1,
      name: "Upper braces"
    },
    {
      id: 2,
      name: "Expander"
    }
  ];
  applianceSearchLst: any[] = [];
  displayStage: any[] = [];
  applianceSequence: any[] = [];

  constructor(public router: Router, private treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Appliance Sequence";
    this.applianceSearchLst = this.applianceLst;
    for (let i = 0; i < 1; i++) 
    {
      let totalStage: number = i + 1;
      let Obj = {
        id: totalStage,
        title: "Stage " + totalStage,
        searchFocus: false,
        searchWord: '',
        searchResultLst: [] = []
      }
      this.displayStage.push(Obj);
      this.treatmentOption.treatmentOptionsArray.Appliance_Sequence = this.applianceSequence;
    }
    this.displayStage = this.treatmentOption.treatmentOptionObj.Appliance_Sequence
  }

  moveToNext()
  {
    let treatmentVisitedArray: any = JSON.parse(localStorage.getItem("treatmentVisitedArray") || '[]');
    treatmentVisitedArray.push("Appliance Sequence");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/bracket-variations']);
  }

  handleSearchResultsClick(Obj: any, boxObj: any)
  {
    Obj.checked = true;
    boxObj.searchWord = "";
    boxObj.searchFocus = false;
    const findDuplicate = boxObj.searchResultLst.find((x: any) => x.id === Obj.id);
    (findDuplicate == undefined) ? boxObj.searchResultLst.push(Obj) : '';
    let applianceSequenceObj = {
      id: boxObj.id,
      title: boxObj.title,
      searchResultLst: boxObj.searchResultLst
    }
    const findMainDuplicate = this.applianceSequence.find((x: any) => x.id === boxObj.id);
    (findMainDuplicate == undefined) ? this.applianceSequence.push(applianceSequenceObj) : '';
    this.treatmentOption.treatmentOptionsArray.Appliance_Sequence = this.applianceSequence;
  }

  fetchSearch($event: any, index: any): void
  {
    if ($event.target.value === '') {
      this.applianceSearchLst = this.applianceLst;
    }
    this.applianceSearchLst = this.applianceLst.filter((searchResultObj: any) => {
      return searchResultObj.name.toLowerCase().startsWith($event.target.value.toLowerCase());
    })
  }

  addStage()
  {
    let totalStage: number = this.displayStage.length + 1;
    let Obj = {
      id: totalStage,
      title: "Stage " + totalStage,
      searchFocus: false,
      searchWord: '',
      searchResultLst: [] = []
    }
    this.displayStage.push(Obj);
  }

  cancelSelection(Obj: any, index: any, boxObj: any)
  {
    Obj.checked = false;
    boxObj.searchResultLst.splice(index, 1);
    this.treatmentOption.treatmentOptionsArray.Appliance_Sequence = this.applianceSequence;
  }

}

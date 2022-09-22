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
  searchWord: string = "";
  searchFocus: boolean = false;
  adjunctiveLst: any[] = [
    {
      id: 1,
      name: "Elastics",
      checked: false,
      toothSearchFocus: false,
      providerSearchFocus: false,
      selectedProvider: "<PROVIDER>",
      providerLst: ["Dentist", "Oral Surgeon", "Periodontist", "Pedodontist", "Prosthodontist", "Endodontist"],
      whenSearchFocus: false,
      selectedWhen: "<WHEN>",
      whenLst: ["Now", "Treatment Plan", "Bonding", "Deferred", "Braces removal"]
    },
    {
      id: 2,
      name: "Expansion",
      checked: false,
      toothSearchFocus: false,
      providerSearchFocus: false,
      selectedProvider: "<PROVIDER>",
      providerLst: ["Dentist", "Oral Surgeon", "Periodontist", "Pedodontist", "Prosthodontist", "Endodontist"],
      whenSearchFocus: false,
      selectedWhen: "<WHEN>",
      whenLst: ["Now", "Treatment Plan", "Bonding", "Deferred", "Braces removal"]
    },
    {
      id: 3,
      name: "Expose & Bond ",
      checked: false,
      toothSearchFocus: false,
      providerSearchFocus: false,
      selectedProvider: "<PROVIDER>",
      providerLst: ["Dentist", "Oral Surgeon", "Periodontist", "Pedodontist", "Prosthodontist", "Endodontist"],
      whenSearchFocus: false,
      selectedWhen: "<WHEN>",
      whenLst: ["Now", "Treatment Plan", "Bonding", "Deferred", "Braces removal"]
    },
    {
      id: 4,
      name: "Extractions",
      checked: false,
      toothSearchFocus: false,
      providerSearchFocus: false,
      selectedProvider: "<PROVIDER>",
      providerLst: ["Dentist", "Oral Surgeon", "Periodontist", "Pedodontist", "Prosthodontist", "Endodontist"],
      whenSearchFocus: false,
      selectedWhen: "<WHEN>",
      whenLst: ["Now", "Treatment Plan", "Bonding", "Deferred", "Braces removal"]
    }
  ];
  searchResultLst: any[] = [];
  prerequisitesSearchLst: any[] = [];
  public row: any;
  showMenu: boolean = false;

  constructor(public router: Router, public treatmentOption: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.title = "Treatment Steps";
    this.selectToothOptionArray = this.treatmentOption.treatmentOptionObj.Treament_Step;
    this.prerequisitesSearchLst = this.adjunctiveLst;
    this.searchResultLst = this.treatmentOption.treatmentOptionObj.Treament_Step
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
    treatmentVisitedArray.push("Treatment Steps");
    localStorage.setItem("treatmentVisitedArray", JSON.stringify(treatmentVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/treatment/treatment-mechanics']);
  }

  onSelectAdultOption($event: any)
  {
    this.selectToothOptionArray[0].adultTooth.push($event);
    // this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth.push($event);
  }

  onSelectChildOption($event: any)
  {
    this.selectToothOptionArray[1].childTooth.push($event);
    // this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth.push($event);
  }

  cancelSelectionFromAdult(Obj: any, index: number)
  {
    Obj.show = true;
    this.selectToothOptionArray[0].adultTooth = this.selectToothOptionArray[0].adultTooth.filter((item: any) => item !== Obj);
    // this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth = this.treatmentOption.treatmentOptionsArray.Extractions[0].adultTooth.filter((item: any) => item !== Obj);
  }

  cancelSelectionFromChild(Obj: any, index: number)
  {
    Obj.show = true;
    this.selectToothOptionArray[1].childTooth = this.selectToothOptionArray[1].childTooth.filter((item: any) => item !== Obj);
    // this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth = this.treatmentOption.treatmentOptionsArray.Extractions[1].childTooth.filter((item: any) => item !== Obj);
  }

  handleProviderSearchResultsClick(Obj: any, selectObj: any)
  {
    Obj.selectedProvider = selectObj;
  }

  handleWhenSearchResultsClick(Obj: any, selectObj: any)
  {
    Obj.selectedWhen = selectObj;
  }

  handleSearchResultsClick(Obj: any)
  {
    Obj.checked = true;
    this.searchWord = "";
    this.searchFocus = false;
    this.showMenu = false;
    // this.selectedProvider = "<PROVIDER>";
    // this.selectedWhen = "<WHEN>";
    this.searchResultLst.push(Obj);
    this.treatmentOption.treatmentOptionsArray.Treament_Step = this.searchResultLst;
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
    this.treatmentOption.treatmentOptionsArray.Treament_Step = this.searchResultLst;
    console.log(this.treatmentOption.treatmentOptionsArray.Treament_Step)
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-toothchart',
  templateUrl: './toothchart.component.html',
  styleUrls: ['./toothchart.component.scss']
})
export class ToothchartComponent implements OnInit {

  @Input('toothChartType') public toothChartType: number | undefined;
  @Input('width') public width: number = 0;
  @Input('height') public height: number = 0;
  @Input('textSize') public textSize: any = "inherit";
  @Input('imageClass') public imageClass: any = "largeImageOver";
  @Input('showDropdownMenu') public showDropdownMenu: boolean = false
  @Output() public onSelectOption = new EventEmitter<any>();
  
  showAdultOutline: boolean = false;
  showChildOutline: boolean = false;
  adultToothChartLstPart1: any[] = [];
  adultToothChartLstPart2: any[] = [];
  adultToothChartLstPart3: any[] = [];
  adultToothChartLstPart4: any[] = [];
  childToothChartLstPart1: any[] = [];
  childToothChartLstPart2: any[] = [];
  childToothChartLstPart3: any[] = [];
  childToothChartLstPart4: any[] = [];
  problemLst: any[] = problemListOfDiagnosis;
  missingToothCss: any;

  constructor(public problemListService: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    this.getAdultToothChartList();
    this.getChildToothChartList();
    if(this.imageClass == "largeImageOver")
    {
      this.missingToothCss = "missingLargeImage";
    }
    else
    {
      this.missingToothCss = "missingSmallImage";
    }
  }

  ngAfterContentChecked(): void
  {
    let toothChartObj: any = this.problemListService.toothChartList;
    if(toothChartObj.length != 0 || this.showAdultOutline)
    {
      this.showAdultOutline = true;
    }
    if(toothChartObj.length != 0 || this.showChildOutline)
    {
      this.showChildOutline = true;
    }
  }

  getAdultToothChartList()
  {
    for (let i = 1; i <= 8; i++) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.adultToothChartLstPart1.push(obj);      
    }
    for (let i = 9; i <= 16; i++) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.adultToothChartLstPart2.push(obj);  
    }
    for (let i = 24; i >= 17; i--) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.adultToothChartLstPart3.push(obj);        
    }
    for (let i = 32; i >= 25; i--) {
      let obj = {
        title: i,
        remove: false,
        show: true
      }
      this.adultToothChartLstPart4.push(obj);       
    }
  }

  getChildToothChartList()
  {
    let cTT1 : number = 1;
    let cTT2 : number = 6;
    let cTT3 : number = 15;
    let cTT4 : number = 20;
    for (let i = 4; i <= 8; i++) {
      let obj = {
        title: i,
        remove: false,
        show: true,
        toothNumber: cTT1
      }
      cTT1 = cTT1 + 1;
      this.childToothChartLstPart1.push(obj);
    }
    for (let i = 9; i <= 13; i++) {
      let obj = {
        title: i,
        remove: false,
        show: true,
        toothNumber: cTT2
      }
      cTT2 = cTT2 + 1;
      this.childToothChartLstPart2.push(obj);
    }
    for (let i = 24; i >= 20; i--) {
      let obj = {
        title: i,
        remove: false,
        show: true,
        toothNumber: cTT3
      }
      cTT3 = cTT3 - 1;
      this.childToothChartLstPart3.push(obj);        
    }
    for (let i = 29; i >= 25; i--) {
      let obj = {
        title: i,
        remove: false,
        show: true,
        toothNumber: cTT4
      }
      cTT4 = cTT4 - 1;
      this.childToothChartLstPart4.push(obj);       
    }
  }

  removeTooth(obj: any, childTitle: any)
  {
    if(this.toothChartType == 1)
    {
      this.showAdultOutline = false;
    }
    else
    {
      this.showChildOutline = false;
    }
    obj.remove = true;
    let Obj = {
      title: obj.title + " - " + childTitle,
      id: obj.title,
      checked: true
    }
    this.onSelectOption.emit(Obj);
  }

  disableTooth(obj: any, childTitle: any)
  {
    if(this.toothChartType == 1)
    {
      this.showAdultOutline = false;
    }
    else
    {
      this.showChildOutline = false;
    }
    obj.show = false;
    let Obj = {
      title: obj.title + " - " + childTitle,
      id: obj.title,
      checked: true
    }
    this.onSelectOption.emit(Obj);
  }

  selectToothOption(obj: any, childTitle: any)
  {
    if(this.toothChartType == 1)
    {
      this.showAdultOutline = false;
      let Obj = {
        title: obj.title + " - " + childTitle,
        id: obj.title,
        checked: true
      }
      this.onSelectOption.emit(Obj);
    }
    else
    {
      this.showChildOutline = false;
      let Obj = {
        title: obj.toothNumber + " - " + childTitle,
        id: obj.toothNumber,
        checked: true
      }
      this.onSelectOption.emit(Obj);
    }
    
  }

  actionPerformOnTooth(obj: any)
  {
    let selectObj: any = localStorage.getItem('selectObj');
    if(selectObj)
    {
      let selectObjId: any = JSON.parse(selectObj).id;
      let toothChartObj: any = this.problemListService.toothChartList;
      if(toothChartObj.length != 0)
      {
        for (let i = 0; i < this.problemLst.length; i++) 
        {
          if(this.problemLst[i].child.length != 0)
          {
            for (let j = 0; j < this.problemLst[i].child.length; j++) 
            {
              if(this.problemLst[i].child[j].id == selectObjId)
              {
                this.problemLst[i].child[j].title = this.problemLst[i].child[j].title + " - " + obj.title;
              }
            }
          }
        }
        if(this.toothChartType == 1)
        {
          this.showAdultOutline = false;
        }
        else
        {
          this.showChildOutline = false;
        }
        this.problemListService.toothChartList = [];
      }
      else
      {
        if(this.toothChartType == 1)
        {
          this.showAdultOutline = true;
        }
        else
        {
          this.showChildOutline = true;
        }
        this.showAdultOutline = true;
        this.showChildOutline = true;
      }
    }
    else
    {
      if(this.toothChartType == 1)
      {
        this.showAdultOutline = true;
        this.disableTooth(obj, 'Missing');
      }
      else
      {
        this.showChildOutline = true;
        this.disableTooth(obj, 'Missing');
      }
      this.showAdultOutline = true;
      this.showChildOutline = true;
    }
  }

}

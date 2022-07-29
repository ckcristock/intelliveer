import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-overjet',
  templateUrl: './overjet.component.html',
  styleUrls: ['./overjet.component.scss']
})
export class OverjetComponent implements OnInit {
  overjetLst: any[] = [
    {
      title: 'Lorem ipsum 2',
      id: 1
    },
    {
      title: 'Lorem ipsum 2',
      id: 2
    },
    {
      title: 'Lorem ipsum 2',
      id: 3
    },
    {
      title: 'Lorem ipsum 2',
      id: 4
    },
    {
      title: 'Lorem ipsum 2',
      id: 5
    },
    {
      title: 'Lorem ipsum 2',
      id: 6
    },
    {
      title: 'Lorem ipsum 2',
      id: 7
    },
    {
      title: 'Lorem ipsum 2',
      id: 8
    },
    {
      title: 'Lorem ipsum 2',
      id: 9
    },
    {
      title: 'Lorem ipsum 2',
      id: 10
    },
    {
      title: 'Lorem ipsum 2',
      id: 11
    },
    {
      title: 'Lorem ipsum 2',
      id: 12
    },
    {
      title: 'Lorem ipsum 2',
      id: 13
    },
    {
      title: 'Lorem ipsum 2',
      id: 14
    },
  ];
  title: string | undefined;
  problemLst: any[] = problemListOfDiagnosis;


  constructor(public router: Router, public problemListService: ConsultationDiagnosisiProblemListService) { }

  ngOnInit(): void {
    let routerUrlArray = this.router.url.split('/');
    this.title = routerUrlArray[routerUrlArray.length - 1];
  }

  moveToNext()
  {
    let diagnosisVisitedArray: any = JSON.parse(localStorage.getItem("diagnosisVisitedArray") || '[]');
    diagnosisVisitedArray.push("Overjet");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/diagnosis/overbite']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    localStorage.setItem('selectObj', JSON.stringify(Obj));
    if($event.target.checked)
    {
      this.problemLst[1].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
      this.problemListService.toothChartList = Obj;
    }
    else
    {
      for (let i = 0; i < this.problemLst[1].child.length; i++) 
      {
        if(this.problemLst[1].child[i].id === Obj.id)
        {
          this.problemLst[1].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }


}

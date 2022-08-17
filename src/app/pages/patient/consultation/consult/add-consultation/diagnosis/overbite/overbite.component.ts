import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-overbite',
  templateUrl: './overbite.component.html',
  styleUrls: ['./overbite.component.scss']
})
export class OverbiteComponent implements OnInit {
  overbiteLst: any[] = [
    {
      title: 'Lorem ipsum 3',
      id: 1
    },
    {
      title: 'Lorem ipsum 3',
      id: 2
    },
    {
      title: 'Lorem ipsum 3',
      id: 3
    },
    {
      title: 'Lorem ipsum 3',
      id: 4
    },
    {
      title: 'Lorem ipsum 3',
      id: 5
    },
    {
      title: 'Lorem ipsum 3',
      id: 6
    },
    {
      title: 'Lorem ipsum 3',
      id: 7
    },
    {
      title: 'Lorem ipsum 3',
      id: 8
    },
    {
      title: 'Lorem ipsum 3',
      id: 9
    }
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
    diagnosisVisitedArray.push("Overbite");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/diagnosis/category1']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    localStorage.setItem('selectObj', JSON.stringify(Obj));
    if($event.target.checked)
    {
      this.problemLst[2].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
      if(Obj.id > 4)
      {
        this.problemListService.toothChartList = Obj;
      }
    }
    else
    {
      for (let i = 0; i < this.problemLst[2].child.length; i++) 
      {
        if(this.problemLst[2].child[i].id === Obj.id)
        {
          this.problemLst[2].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-malocclusion',
  templateUrl: './malocclusion.component.html',
  styleUrls: ['./malocclusion.component.scss']
})
export class MalocclusionComponent implements OnInit {
  
  malocclusionLst: any[] = [
    {
      title: 'Lorem ipsum 1',
      id: 1
    },
    {
      title: 'Lorem ipsum 1',
      id: 2
    },
    {
      title: 'Lorem ipsum 1',
      id: 3
    },
    {
      title: 'Lorem ipsum 1',
      id: 4
    },
    {
      title: 'Lorem ipsum 1',
      id: 5
    },
    {
      title: 'Lorem ipsum 1',
      id: 6
    },
    {
      title: 'Lorem ipsum 1',
      id: 7
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
    diagnosisVisitedArray.push("Malocclusion");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/diagnosis/overjet']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    localStorage.setItem('selectObj', JSON.stringify(Obj));
    if($event.target.checked)
    {
      this.problemLst[0].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
      if(Obj.id > 4)
      {
        this.problemListService.toothChartList = Obj;
      }
    }
    else
    {
      for (let i = 0; i < this.problemLst[0].child.length; i++) 
      {
        if(this.problemLst[0].child[i].id === Obj.id)
        {
          this.problemLst[0].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }

}

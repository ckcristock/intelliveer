import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-category_4',
  templateUrl: './category_4.component.html',
  styleUrls: ['./category_4.component.scss']
})
export class Category4Component implements OnInit {
  category4Lst: any[] = [
    {
      title: 'Lorem ipsum 6',
      id: 1
    },
    {
      title: 'Lorem ipsum 6',
      id: 2
    },
    {
      title: 'Lorem ipsum 6',
      id: 3
    },
    {
      title: 'Lorem ipsum 6',
      id: 4
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
    diagnosisVisitedArray.push("Category 4");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/diagnosis/category5']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    if($event.target.checked)
    {
      this.problemLst[6].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
      this.problemListService.toothChartList = Obj;
    }
    else
    {
      for (let i = 0; i < this.problemLst[6].child.length; i++) 
      {
        if(this.problemLst[6].child[i].id === Obj.id)
        {
          this.problemLst[6].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }


}

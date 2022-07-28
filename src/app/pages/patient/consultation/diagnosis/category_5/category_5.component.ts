import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-category_5',
  templateUrl: './category_5.component.html',
  styleUrls: ['./category_5.component.scss']
})
export class Category5Component implements OnInit {
  category5Lst: any[] = [
    {
      title: 'Lorem ipsum 7',
      id: 1
    },
    {
      title: 'Lorem ipsum 7',
      id: 2
    },
    {
      title: 'Lorem ipsum 7',
      id: 3
    },
    {
      title: 'Lorem ipsum 7',
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
    diagnosisVisitedArray.push("Category 5");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/diagnosis/category6']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    localStorage.setItem('selectObj', JSON.stringify(Obj));
    if($event.target.checked)
    {
      this.problemLst[7].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
      this.problemListService.toothChartList = Obj;
    }
    else
    {
      for (let i = 0; i < this.problemLst[7].child.length; i++) 
      {
        if(this.problemLst[7].child[i].id === Obj.id)
        {
          this.problemLst[7].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }


}

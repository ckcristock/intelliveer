import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-category_2',
  templateUrl: './category_2.component.html',
  styleUrls: ['./category_2.component.scss']
})
export class Category2Component implements OnInit {
  category2Lst: any[] = [
    {
      title: 'Lorem ipsum 4',
      id: 1
    },
    {
      title: 'Lorem ipsum 4',
      id: 2
    },
    {
      title: 'Lorem ipsum 4',
      id: 3
    },
    {
      title: 'Lorem ipsum 4',
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
    diagnosisVisitedArray.push("Category 2");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/diagnosis/category3']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    if($event.target.checked)
    {
      this.problemLst[4].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
    }
    else
    {
      for (let i = 0; i < this.problemLst[4].child.length; i++) 
      {
        if(this.problemLst[4].child[i].id === Obj.id)
        {
          this.problemLst[4].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }


}

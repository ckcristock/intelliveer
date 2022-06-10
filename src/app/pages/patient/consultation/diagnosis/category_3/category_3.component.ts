import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-category_3',
  templateUrl: './category_3.component.html',
  styleUrls: ['./category_3.component.scss']
})
export class Category3Component implements OnInit {
  category3Lst: any[] = [
    {
      title: 'Lorem ipsum 5',
      id: 1
    },
    {
      title: 'Lorem ipsum 5',
      id: 2
    },
    {
      title: 'Lorem ipsum 5',
      id: 3
    },
    {
      title: 'Lorem ipsum 5',
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
    diagnosisVisitedArray.push("Category 3");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/diagnosis/category4']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    if($event.target.checked)
    {
      this.problemLst[5].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
    }
    else
    {
      for (let i = 0; i < this.problemLst[5].child.length; i++) 
      {
        if(this.problemLst[5].child[i].id === Obj.id)
        {
          this.problemLst[5].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }


}

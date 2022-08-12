import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { problemListOfDiagnosis } from '@pages/patient/menu';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
  selector: 'app-category_6',
  templateUrl: './category_6.component.html',
  styleUrls: ['./category_6.component.scss']
})
export class Category6Component implements OnInit {
  category6Lst: any[] = [
    {
      title: 'Lorem ipsum 8',
      id: 1
    },
    {
      title: 'Lorem ipsum 8',
      id: 2
    },
    {
      title: 'Lorem ipsum 8',
      id: 3
    },
    {
      title: 'Lorem ipsum 8',
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

  completed()
  {
    let diagnosisVisitedArray: any = JSON.parse(localStorage.getItem("diagnosisVisitedArray") || '[]');
    diagnosisVisitedArray.push("Category 6");
    localStorage.setItem("diagnosisVisitedArray", JSON.stringify(diagnosisVisitedArray));
    this.router.navigate(['/dashboard/patient/consultation/consultation/add/diagnosis/category6']);
  }

  selectOption($event: any, Obj: any)
  {
    Obj.checked = $event.target.checked;
    localStorage.setItem('selectObj', JSON.stringify(Obj));
    if($event.target.checked)
    {
      this.problemLst[8].child.push(Obj);
      this.problemListService.problemList = this.problemLst;
      if(Obj.id > 4)
      {
        this.problemListService.toothChartList = Obj;
      }
    }
    else
    {
      for (let i = 0; i < this.problemLst[8].child.length; i++) 
      {
        if(this.problemLst[8].child[i].id === Obj.id)
        {
          this.problemLst[8].child.splice(i, 1);
        }
      }
      this.problemListService.problemList = this.problemLst;
    }    
  }


}

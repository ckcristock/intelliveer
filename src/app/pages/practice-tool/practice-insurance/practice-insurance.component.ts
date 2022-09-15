import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-practice-insurance',
  templateUrl: './practice-insurance.component.html',
  styleUrls: ['./practice-insurance.component.scss']
})
export class PracticeInsuranceComponent implements OnInit {
  urlPracticeTool: string;
  practiceInsuranceMenu: any[];
  onPage: boolean = false;

  constructor(private globalRoutes: GlobalRoutesService, public router: Router) {
    this.urlPracticeTool = this.globalRoutes.getPracticeToolUrl();
    this.practiceInsuranceMenu = this.globalRoutes.getPracticeToolInsuranceRoutes();
    this.checkNavigation();
  }

  ngOnInit(): void {
  }

  checkNavigation()
  {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) =>
      {
        if (event.url.includes('add')) {
          this.onPage = true;
        } else if (event.url.includes('edit')) {
          this.onPage = true;
        } else {
          this.onPage = false;
        }
      })
  }

}

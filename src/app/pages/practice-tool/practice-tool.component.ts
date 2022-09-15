import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-practice-tool',
  templateUrl: './practice-tool.component.html',
  styleUrls: ['./practice-tool.component.scss']
})
export class PracticeToolComponent implements OnInit {

  onPage: boolean = false;

  menuItems: any[] = [
    {
      name: "Insurance",
      url: "/dashboard/practice-tool/practice",
      route: "",
      childs: [],
    },
    {
      name: "Lorem Ipsum",
      route: "",
      childs: [],
    },
    {
      name: "Lorem Ipsum",
      route: "",
      childs: [],
    }
  ];

  constructor(public router: Router, private globalRoutes: GlobalRoutesService) {
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
        if (event.url == this.globalRoutes.getPracticeToolUrl()) {
          this.onPage = true;
        } else {
          this.onPage = false;
        }
      })
  }

}

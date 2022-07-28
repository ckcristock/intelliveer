import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  selectTab: string = "";

  constructor(private router: Router,) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.url.includes("coor-with-prospect")) {
        this.selectTab = 'coordWithProspect';
      } else if (event.url.includes("quick-add")) {
        this.selectTab = 'quickadd';
      } 
    });
   }

  ngOnInit(): void {
  }


}

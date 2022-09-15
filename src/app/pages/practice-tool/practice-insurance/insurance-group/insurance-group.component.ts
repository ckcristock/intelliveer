import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-group',
  templateUrl: './insurance-group.component.html',
  styleUrls: ['./insurance-group.component.scss']
})
export class InsuranceGroupComponent implements OnInit {

  insuranceGruopList: any[] = ["","",""];
  menuItems: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAdd()
  {
    this.router.navigate(['/dashboard/practice-tool/practice/insurance-group/add'])
  }

}

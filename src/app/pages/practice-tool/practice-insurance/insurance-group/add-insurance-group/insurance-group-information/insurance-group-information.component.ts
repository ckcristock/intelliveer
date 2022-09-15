import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-group-information',
  templateUrl: './insurance-group-information.component.html',
  styleUrls: ['./insurance-group-information.component.scss']
})
export class InsuranceGroupInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create(data: any)
  {
    console.log(data)
  }

  handleCancel()
  {

  }

}

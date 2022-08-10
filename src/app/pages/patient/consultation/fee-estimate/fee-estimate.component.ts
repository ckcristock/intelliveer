import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-estimate',
  templateUrl: './fee-estimate.component.html',
  styleUrls: ['./fee-estimate.component.scss']
})
export class FeeEstimateComponent implements OnInit {

  chargesList: any[] = [
    {
      code: "D8080",
      description: "Comprehensive Ortho - 24 Months",
      amount: "$4,500.00"
    },
    {
      code: "D8680",
      description: "Clear Retainers",
      amount: 400.00,
      currency: "$"
    },
    {
      code: "D8080",
      description: "Comprehensive Ortho - 24 Months",
      amount: "$4,500.00"
    },
    {
      code: "D8080",
      description: "Comprehensive Ortho - 24 Months",
      amount: "$4,500.00"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save(data: any) {}
	cancel() {}

}

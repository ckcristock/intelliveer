import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {


  numberofColums: any [] = [
    {index: 1},
    {index: 2}
  ];
  txOptions: any[] = [
    {
      subtitle: 'Timing',
      content: 'Observation: 3 month'
    },
    {
      subtitle: 'Treament Phase',
      content: 'Comprehenssive'
    },
    {
      subtitle: 'Treament Type',
      content: 'Braces'
    },
    {
      subtitle: 'Treament Time',
      content: '30-36 Months'
    },
    {
      subtitle: 'Prerequisites',
      content: 'Cavity Clearance'
    },
    {
      subtitle: 'Extractions',
      content: 'Tooth #3: Maxillary right lateral incisor'
    },
  ];
  
  txFees: any[] = [
    {
      subtitle: 'Final cost to do treatment',
      content: '$2,567.50'
    },
    {
      subtitle: 'Estimated Insurance Coverage',
      content: '$2,500.00'
    },
    {
      subtitle: "Patient's Responsibility",
      content: '$2,567.50'
    },
  ];

  minDownPayms: any[] = [
    {
      subtitle: '',
      content: '',
      type: "dropdown"
    },
    {
      subtitle: 'Min. Down Payment',
      content: '$500',
      type: ""
    },
    {
      subtitle: "Max. Number of Installments",
      content: '22',
      type: ""
    },
    {
      subtitle: "Monthly Installments",
      content: '$250',
      type: ""
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save(data: any) {
	}
	cancel() {
	}

  checkOdd(i: number){
    if (i % 2 == 0) {
      return false;
    } else {
      return true;
    }
  }

}

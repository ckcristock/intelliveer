import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-payment-options',
	templateUrl: './payment-options.component.html',
	styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {
	prerequisitesArray: any[] = ['Cavity Clearance', 'CT Scan'];
	treatmentStepArray: any[] = [
		'Tooth #3: Maxillary right lateral in Oral Surgeon on bonding',
		'Restoations #7, #10 by Dentist after Braces removal'
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
		}
	];

	minDownPayms: any[] = [
		{
			subtitle: '',
			content: '',
			type: 'dropdown'
		},
		{
			subtitle: 'Min. Down Payment',
			content: '$500',
			type: ''
		},
		{
			subtitle: 'Max. Number of Installments',
			content: '22',
			type: ''
		},
		{
			subtitle: 'Monthly Installments',
			content: '$250',
			type: ''
		}
	];
	showBestOptionCss: boolean = false;
	paymentPlanType: any[] = [
		'Payment in full',
		'Inoffice payment plan - no interest',
		'Inoffice financing - with interest',
		'3rd party financing'
	];
	compareAllOptionArray: any[] = [
		{
			count: 0,
			locked: true
		}
	];
  splitPayment: boolean = false;
  downPaymentArray: any[] = [1,2,3]

	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {}

	save(data: any) {}
	cancel() {}

	checkOdd(i: number) {
		if (i % 2 == 0) {
			return false;
		} else {
			return true;
		}
	}

	countTreatment(Obj: any) {
		if (isNaN(Obj.count)) {
			Obj.count = 1;
		} else {
			Obj.count = Obj.count + 1;
			if (Obj.count == 3) {
				this.showBestOptionCss = true;
			} else {
				this.showBestOptionCss = false;
			}
		}
	}

  addMoreOption()
  {
    this.compareAllOptionArray.push(
      {
        count: 0,
        locked: false
      }
    );
  }

	openModel(content: any) {
		this.modalService.open(content, { centered: true });
	}
}

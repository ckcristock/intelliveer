import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-payment-party1',
	templateUrl: './payment-party1.component.html',
	styleUrls: ['./payment-party1.component.scss']
})
export class PaymentParty1Component implements OnInit {
	@Input('compareAllOptionArray') public compareAllOptionArray: any[] = [];
	paymentPlanType: any[] = [];
	compareAllOptionArrayList: any[] = [];

	constructor() {
		this.compareAllOptionArrayList.push({
			count: 0,
			locked: false
		});
	}

	ngOnInit(): void {}

	addMoreOption() {
		console.log(this.compareAllOptionArrayList);
		this.compareAllOptionArrayList.push({
			count: 0,
			locked: false
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
	selector: 'app-fee-estimate',
	templateUrl: './fee-estimate.component.html',
	styleUrls: ['./fee-estimate.component.scss']
})
export class FeeEstimateComponent implements OnInit {
	disableSaveButton: boolean = true;
	currentSelection: any = '';
	menuItems: any[] = [];
	menuItemsOptions: any[] = [];
	searchFocus: boolean = false;
	searchWord: string = '';
	cdtSearchLst: any[] = [];
	cdtLst: any[] = [
		{
			id: 1,
			name: 'D8080',
			description: 'Comprehensive Ortho - 24 Months',
			currencyIcon: '$',
			amount: '4500.00'
		},
		{
			id: 2,
			name: 'D8680',
			description: 'Clear Retainers',
			currencyIcon: '$',
			amount: '400.00'
		},
		{
			id: 3,
			name: 'D8681',
			description: 'Fix Retainers',
			currencyIcon: '$',
			amount: '550.00'
		},
		{
			id: 4,
			name: 'D8682',
			description: 'CT Scan',
			currencyIcon: '$',
			amount: '200.00'
		}
	];
	// totalTreatmentFee: number = 0;
	totalDiscount: number = 0;
	totalInsurance: number = 0;
	checkStatus: string = ''

	constructor(
		public router: Router,
		private alertService: AlertService,
		private treatmentOption: ConsultationDiagnosisiProblemListService
	) {}

	ngOnInit(): void {
		console.log(this.treatmentOption);
		this.cdtSearchLst = this.cdtLst;
		for (let i = 1; i < 5; i++) {
			let obj = {
				id: i,
				title: 'Option ' + i
			};
			this.menuItems.push(obj);
		}
		this.getOptionsValue();
		this.currentSelection = this.menuItems[0].id;
	}

	sectionMenu(Obj: any) {
		this.currentSelection = Obj.id;
	}

	getOptionsValue() {
		let discountArray: any[] = [
			{
				id: 1,
				name: 'Family Discount',
				currencyIcon: '$',
				amount: '200.00',
				offer: ''
			},
			{
				id: 2,
				name: 'Autopay Discount',
				currencyIcon: '$',
				amount: '282.00',
				offer: '5% off'
			}
		];
		for (let i = 0; i < discountArray.length; i++) {
			this.totalDiscount =
				this.totalDiscount + parseFloat(discountArray[i].amount);
		}
		let insurance: any[] = [
			{
				id: 1,
				name: 'Primary',
				currencyIcon: '$',
				amount: '0.00'
			},
			{
				id: 2,
				name: 'Secondary',
				currencyIcon: '$',
				amount: '1000.00'
			},
			{
				id: 3,
				name: 'Tertiary',
				currencyIcon: '$',
				amount: '582.50'
			}
		];
		for (let i = 0; i < insurance.length; i++) {
			this.totalInsurance =
				this.totalInsurance + parseFloat(insurance[i].amount);
		}
		for (let i = 0; i < 1; i++) {
			let totalStage: number = i + 1;
			let Obj = {
				id: totalStage,
				title: 'Stage ' + totalStage,
				searchFocus: false,
				searchWord: '',
				searchResultLst: ([] = []),
				charges: ([] = []),
				discount: discountArray,
				insurance: insurance,
				totalDiscount: this.totalDiscount,
				totalInsurance: this.totalInsurance,
				totalTreatmentFee: 0
			};
			this.menuItemsOptions.push(Obj);
		}
	}

	save(data: any) {
		this.alertService
			.conformAlert('Are you sure?', 'You want to save')
			.then((result: any) => {
				if (result.value) {
					this.router.navigate(['/dashboard/patient/consultation']);
				}
			});
	}
	cancel() {
		this.alertService
			.conformAlert('Are you sure?', 'You want to exit')
			.then((result: any) => {
				if (result.value) {
					localStorage.removeItem('treatmentVisitedArray');
					this.router.navigate(['/dashboard/patient/consultation']);
				}
			});
	}

	fetchSearch($event: any): void {
		if ($event.target.value === '') {
		}
		this.cdtSearchLst = this.cdtLst.filter((searchResultObj: any) => {
			return searchResultObj.name
				.toLowerCase()
				.startsWith($event.target.value.toLowerCase());
		});
	}

	handleSearchResultsClick(Obj: any, optionObj: any) {
		this.searchWord = '';
		this.searchFocus = false;
		const findDuplicate = optionObj.searchResultLst.find(
			(x: any) => x.id === Obj.id
		);
		findDuplicate == undefined ? optionObj.searchResultLst.push(Obj) : '';
		optionObj.totalTreatmentFee =
			optionObj.totalTreatmentFee + parseFloat(Obj.amount);
		optionObj.charges = optionObj.searchResultLst;
	}

	cancelSelection(Obj: any, index: any, optionObj: any) {
		Obj.checked = false;
		optionObj.searchResultLst.splice(index, 1);
		optionObj.totalTreatmentFee =
			optionObj.totalTreatmentFee - parseFloat(Obj.amount);
		optionObj.charges = optionObj.searchResultLst;
	}

	moveToNextOption(Obj: any) {
		if (this.menuItems.length > this.currentSelection) {
			this.currentSelection = Obj + 1;
			for (let i = 0; i < 1; i++) {
				let totalStage: number = i + 1;
				let Obj = {
					id: totalStage,
					title: 'Stage ' + totalStage,
					searchFocus: false,
					searchWord: '',
					searchResultLst: ([] = []),
					charges: ([] = []),
					discount: ([] = []),
					insurance: ([] = []),
					totalDiscount: this.totalDiscount,
					totalInsurance: this.totalInsurance,
					totalTreatmentFee: 0
				};
				this.menuItemsOptions.push(Obj);
			}
		} else {
			this.router.navigate(['/dashboard/patient/consultation/consultation/add/payment-options']);
		}
	}
}

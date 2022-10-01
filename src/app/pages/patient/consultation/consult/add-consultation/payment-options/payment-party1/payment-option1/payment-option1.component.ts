import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '@services/alert/alert.service';

@Component({
	selector: 'app-payment-option1',
	templateUrl: './payment-option1.component.html',
	styleUrls: ['./payment-option1.component.scss']
})
export class PaymentOption1Component implements OnInit {
	@Input('compareAllOptionArray') public compareAllOptionArray: any[] = [];
	showBestOptionCss: boolean = false;
	paymentPlanType: any[] = [
		'Payment in full',
		'Inoffice payment plan - no interest',
		'Inoffice financing - with interest',
		'3rd party financing'
	];
	lastPayment: number = 89.5;
	sliderBGMonth: any;
	totalAmount: number = 2567.5;
	maximumDownPaymentTotal: number = 2567.5;
	totalAmountDP: number = 0;
	totalMonth: number = 24;
	maxTotalMonth: number = 24;
	miniMum: number = 1;
	month: number = 24;
	emi: any = 0;
	paymentAmountEmi: any = 0;
	minPaymentAmountEmi: any = 86;
	maxPaymentAmountEmi: any = 0;
	downPayment: number = 500;
	tab: boolean = true;
	tabTwo: boolean = false;
	tabThree: boolean = false;
	tabDate: any;
	tabTwoDate: any;
	tabThreeDate: any;
	noOfMonthSlider: any;
	downPayment1: number = 500;
	downPayment2: number = 0;
	isDownPayment2: boolean = false;
	minDownPayment: number = 500;
	minDownPayment1: number = 500;
	maxDownPayment1: number = 0;
	maxDownPayment: number = 0;
	downPayment1BG: any;
	downPaymentOneVal: number = 0;
	downPaymentOneMax: number = 0;
	allTotal: any;
	splitPayment: boolean = false;
	sliderBackground: any;
	paymentPartyPercent: any[] = [];
	paymentPartyTotal: any[] = [];
	monthValue: any;
	monthlyEmi: any;
	monthlyCount: any;
	monthlyEmiDate: any;
	monthDateObj: Array<any> = [];
	model!: NgbDateStruct;
	modelTwo!: NgbDateStruct;
	modelThree!: NgbDateStruct;
	date: any;
	isMonthlyStatus: boolean = false;
	constructor(
		private modalService: NgbModal,
		private alertService: AlertService
	) {}

	ngOnInit(): void {
		console.log(this.compareAllOptionArray);
		/** New */
		(this.paymentPartyPercent = ['100']),
			(this.paymentPartyTotal = [this.totalAmount]);
		this.customCalculate2(this.downPayment);
		let monthValue: any = 0;
		if (this.month < 10) {
			let m: any = this.month;
			monthValue = parseInt(monthValue) + parseInt(m) + 1;
		} else {
			monthValue = this.month;
		}
		console.log(monthValue);
		let percentageMonth = ((monthValue - 1) / (this.totalMonth - 1)) * 100;
		this.sliderBGMonth =
			'linear-gradient(to right, #ECF7F3, #66C293 ' +
			percentageMonth +
			'%, #ECF7F3 ' +
			percentageMonth +
			'%, #ECF7F3 100%)';
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
	ShowTabContent(tab: any) {
		console.log(tab);
		switch (tab) {
			case 'tabThree':
				this.tab = false;
				this.tabTwo = false;
				this.tabThree = true;
				break;
			case 'tabTwo':
				this.tab = false;
				this.tabTwo = true;
				this.tabThree = false;
				break;
			default:
				this.tab = true;
				this.tabTwo = false;
				this.tabThree = false;
				break;
		}
		console.log(this.tab, this.tabTwo, this.tabThree);
	}
	getDate(tab: any, modelDate: any) {
		const date = new Date(
			modelDate?.month + '-' + modelDate?.day + '-' + modelDate?.year
		);
		switch (tab) {
			case 'tabThree':
				let monthDate = new Date(
					this.modelThree.month +
						'-' +
						this.modelThree.day +
						'-' +
						this.modelThree.year
				);
				this.calculateInstallments(monthDate);
				break;
			case 'tabTwo':
				this.tabTwoDate = date;
				this.tab = false;
				this.tabTwo = false;
				this.tabThree = true;
				break;
			case 'tab':
				this.tabDate = date;
				this.tab = false;
				this.tabTwo = true;
				this.tabThree = false;
				break;
		}
	}
	showDate(tab: any, modelDate: any) {
		const date = new Date(
			modelDate.month + '-' + modelDate.day + '-' + modelDate.year
		);
		this.monthlyEmi = this.emi;
		this.monthlyCount = this.month;
		switch (tab) {
			case 'tabThree':
				this.tabThreeDate = new Date(
					this.modelThree.month +
						'-' +
						this.modelThree.day +
						'-' +
						this.modelThree.year
				);
				this.calculateInstallments(date);
				this.modalService.dismissAll('Save click');
				break;

			case 'tabTwo':
				this.tabTwoDate = date;
				this.tab = false;
				this.tabTwo = false;
				this.tabThree = true;
				console.log('2');
				break;

			default:
				this.tabDate = date;
				this.tab = false;
				this.tabTwo = true;
				this.tabThree = false;
				console.log('1');
				break;
		}
	}
	/** range slider */
	downPaymentValues(event: any) {
		let data = event.target.value;
		// if(this.month == 0){
		//   if(data > 0){
		// 	this.month = this.totalMonth;
		//   }
		// }
		let diffData: any = this.totalAmount - data;
		if (diffData < 25 && diffData > 0) {
			this.downPayment = this.totalAmount;
			data = this.totalAmount;
			const diffStep: any = 25 - diffData;
			console.log(diffData, diffStep);
			this.maximumDownPaymentTotal =
				parseFloat(data) + parseFloat(diffStep);
		} else {
			this.downPayment = data;
		}
		console.log(this.downPayment, data);
		this.customCalculate2(data);
		this.calculateInstallments();
	}

	downPaymentOneValues(event: any, step?: any) {
		let downpayment = event.target.value;
		let downPayment2: any = this.downPayment2;
		console.log(this.downPayment, downpayment);
		if (this.downPayment > downpayment) {
			let dPayment: any = this.downPayment;
			console.log(dPayment, 'dddddd', this.downPaymentOneMax);
			this.downPayment = parseFloat(dPayment) - parseFloat(step);
			if (this.downPayment < this.minDownPayment1) {
				this.downPayment = this.minDownPayment1;
			} else if (dPayment > this.downPaymentOneMax) {
				this.downPayment = this.downPaymentOneMax;
			}
		} else {
			let dPayment: any = this.downPayment;
			dPayment = parseFloat(dPayment) + parseFloat(step);
			if (dPayment < this.minDownPayment1) {
				this.downPayment = this.minDownPayment1;
			} else if (dPayment > this.downPaymentOneMax) {
				this.downPayment = this.downPaymentOneMax;
			} else {
				this.downPayment = dPayment;
			}
			console.log(dPayment, 'else', this.downPaymentOneMax);
		}
		console.log(this.downPayment);
		let data: any = this.downPaymentOneMax;
		let diffPayments: any =
			parseFloat(downpayment) - parseFloat(downPayment2);
		//this.maxDownPayment = parseFloat(downpayment) + parseFloat(downPayment2);
		this.downPayment2 = parseFloat(data) - this.downPayment;
		console.log(downPayment2);
		localStorage.setItem('diffPayments', diffPayments.toString());
		this.customCalculate2(data);
		this.calculateInstallments();
		let downPayment1BG =
			((this.downPayment - this.minDownPayment1) /
				(this.downPaymentOneMax - this.minDownPayment1)) *
			100;
		this.downPayment1BG =
			'linear-gradient(to right, #E6BD5C, #ff4500 ' +
			downPayment1BG +
			'%, #E6BD5C ' +
			downPayment1BG +
			'%, #dee1e2 100%)';
	}
	customCalculate2(data?: any) {
		let emi: any;
		let decimalValue;
		if (!data) {
			data = this.downPayment;
		}

		if (
			this.month != 0 &&
			this.month <= this.totalMonth &&
			data < this.totalAmount
		) {
			emi = (this.totalAmount - data) / this.month;
			emi = emi.toFixed(2);
			if (emi > 0) {
				decimalValue = this.getDecimalPart(emi);
				console.log(decimalValue);
				this.lastPayment = this.emi + this.month * (decimalValue / 100);
			} else {
				this.lastPayment = 0;
			}
			console.log(this.emi, this.minPaymentAmountEmi, '1');
			if (
				this.emi < parseFloat(this.minPaymentAmountEmi) ||
				this.emi == parseFloat(this.minPaymentAmountEmi)
			) {
				this.emi = this.minPaymentAmountEmi;
				this.getMonthByEmi(this.minPaymentAmountEmi);
			} else {
				console.log(emi, '3');
				this.emi = Math.trunc(emi);
			}
		} else {
			this.emi = Math.trunc(this.minPaymentAmountEmi);
			this.getMonthByEmi(this.emi);
		}
		this.maxPaymentAmountEmi = this.totalAmount - data;
		//this.minPaymentAmountEmi = emi;
		// if (emi > 0) {
		// 	decimalValue = this.getDecimalPart(emi);
		// 	console.log(decimalValue);
		// 	this.lastPayment = this.emi + this.month * (decimalValue / 100);
		// } else {
		// 	this.lastPayment = 0;
		// }
	}
	getDecimalPart(num: any) {
		if (Number.isInteger(num)) {
			return 0;
		}
		const decimalStr = num.toString().split('.')[1];
		return Number(decimalStr);
	}
	/** New Calculator */
	saveSettings() {
		if (this.emi < this.minPaymentAmountEmi) {
			this.emi = this.minDownPayment;
			this.getMonthByEmi(this.minPaymentAmountEmi);
		}
		//this.emi = event.target.value;
		//this.customCalculate2(this.downPayment)
	}
	getMonthByEmi(emiAmount: any) {
		let decimalValue;
		let months = (this.totalAmount - this.downPayment) / emiAmount;
		let monthsStr = months.toFixed(4);
		let monthsArray = monthsStr.split('.');
		months = parseFloat(monthsArray[0]);
		let reminder = parseFloat(monthsArray[1]);
		console.log(months, reminder);
		this.month = months;
		emiAmount = Math.trunc(emiAmount);
		//this.emi = Math.trunc(emiAmount);
		this.paymentAmountEmi = Math.trunc(emiAmount);
		let remainingAmount = (emiAmount * reminder) / 10000;
		remainingAmount = parseFloat(emiAmount) + remainingAmount;
		decimalValue = this.getDecimalPart(emiAmount);
		console.log(decimalValue);
		this.lastPayment = remainingAmount + this.month * (decimalValue / 100);
		console.log(this.lastPayment);
		if (!this.month) {
			this.downPayment = this.totalAmount;
			this.emi = 0;
			this.lastPayment = 0;
			this.month = 0;
		}
	}
	calculatePaymentAmount(event: any) {
		let pmEmi: any = event.target.value;
		let emi: any;
		let decimalValue;
		let data: any;
		if (this.isDownPayment2) {
			let dP1: any = this.downPayment;
			let dP2: any = this.downPayment2;
			data = parseFloat(dP1) + parseFloat(dP2);
		} else {
			data = this.downPayment;
		}
		if (this.month == 0) {
			this.month = 1;
		}
		if (
			this.month != 0 &&
			this.month <= this.totalMonth &&
			data < this.totalAmount
		) {
			emi = pmEmi;
			let pMTotal: any = parseFloat(data);
			pMTotal = this.totalAmount - pMTotal;
			console.log(pmEmi, this.minPaymentAmountEmi);
			if (parseFloat(emi) < parseFloat(this.minPaymentAmountEmi)) {
				this.alertService.error(
					'Error',
					'No. of Payments Greater Then ' + this.totalMonth
				);
			} else {
				this.emi = Math.trunc(emi);
				let monthEmi: any = this.emi * this.month;
				let dpayment: any = this.downPayment;
				// let downPaymentAmount = this.totalAmount - parseFloat(monthEmi);
				// console.log(downPaymentAmount);
				if (this.minDownPayment < this.downPayment) {
					let downPaymentAmount =
						this.totalAmount - parseFloat(monthEmi);
					this.downPayment = downPaymentAmount;
				} else {
					let months = pMTotal / emi;
					let monthsStr = months.toFixed(4);
					let monthsArray = monthsStr.split('.');
					months = parseFloat(monthsArray[0]);
					let reminder = parseFloat(monthsArray[1]);
					console.log(months, reminder);
					this.month = months;
					this.paymentAmountEmi = Math.trunc(emi);
					let remainingAmount = (this.emi * reminder) / 10000;
					remainingAmount = parseFloat(this.emi) + remainingAmount;
					decimalValue = this.getDecimalPart(this.emi);
					console.log(decimalValue);
					this.lastPayment =
						remainingAmount + this.month * (decimalValue / 100);
					let checkDifference: any =
						this.totalAmount -
						(this.lastPayment + this.downPayment);
					let number: any = 1;
					if (parseFloat(number) > parseFloat(checkDifference)) {
						this.lastPayment = this.totalAmount;
					}
					console.log(this.lastPayment, checkDifference);
				}
			}
		}
		let percentageMonth2 =
			((pmEmi - this.minPaymentAmountEmi) /
				(this.maxPaymentAmountEmi - this.minPaymentAmountEmi)) *
			100;
		this.noOfMonthSlider =
			'linear-gradient(to right, #49c6ef, #2c3e50 ' +
			percentageMonth2 +
			'%, #ecf7fb ' +
			percentageMonth2 +
			'%, #ecf7fb 100%)';
		let monthValue: any = 0;
		if (this.month < 10) {
			let m: any = this.month;
			monthValue = parseInt(monthValue) + parseInt(m) + 1;
		} else {
			monthValue = this.month;
		}
		console.log(monthValue);
		let percentageMonth = ((monthValue - 1) / (this.totalMonth - 1)) * 100;
		this.sliderBGMonth =
			'linear-gradient(to right, #ECF7F3, #66C293 ' +
			percentageMonth +
			'%, #ECF7F3 ' +
			percentageMonth +
			'%, #ECF7F3 100%)';
		let percentage =
			((this.downPayment - this.minDownPayment) /
				(this.totalAmount - this.minDownPayment)) *
			100;
		this.sliderBackground =
			'linear-gradient(to right, #E6BD5C, #ff4500 ' +
			percentage +
			'%, #E6BD5C ' +
			percentage +
			'%, #dee1e2 100%)';
	}
	calculateNoOfPaymentValue(event: any) {
		this.month = event.target.value;
		let data = this.downPayment;
		if (this.emi == 0) {
			this.emi = this.maxPaymentAmountEmi;
			this.downPayment = this.minDownPayment;
		}
		let emi = (this.totalAmount - this.downPayment) / this.month;
		let emiStr = emi.toFixed(4);
		let emiArray = emiStr.split('.');
		emi = parseFloat(emiArray[0]);
		let reminder = parseFloat(emiArray[1]);
		emi = Math.trunc(emi);
		if (emi > this.minPaymentAmountEmi) {
			if (emi != Infinity) {
				this.emi = Math.trunc(emi);
			} else {
				this.emi = 0;
			}
			this.paymentAmountEmi = Math.trunc(this.emi);
			let remainingAmount = (this.month * reminder) / 10000;
			this.lastPayment = parseFloat(this.emi) + remainingAmount;
			let percentageMonth2 =
				((this.emi - 25) / (this.maxPaymentAmountEmi - 25)) * 100;
			this.noOfMonthSlider =
				'linear-gradient(to right, #49c6ef, #2c3e50 ' +
				percentageMonth2 +
				'%, #ecf7fb ' +
				percentageMonth2 +
				'%, #ecf7fb 100%)';
			if (this.emi == 0) {
				this.downPayment = this.totalAmount;
			}
		} else {
			if (this.minDownPayment < this.downPayment) {
				let lastPayment = this.lastPayment - this.emi;
				let downPayment = this.totalAmount - this.emi * this.month;
				if (downPayment < this.minDownPayment) {
					this.lastPayment = this.lastPayment - this.emi;
				} else {
					this.downPayment = this.downPayment - lastPayment;
				}
			}
			console.log(this.month);
		}

		this.calculateInstallments();
	}
	calculateInstallments(date?: any) {
		if (date == undefined && this.modelThree?.month) {
			date = new Date(
				this.modelThree.month +
					'-' +
					this.modelThree.day +
					'-' +
					this.modelThree.year
			);
		}
		this.monthDateObj = [];
		if (this.monthValue == 'byMonthly') {
			this.monthlyEmi = this.emi / 2;
			this.monthlyCount = this.month * 2;
			for (let index = 0; index < this.monthlyCount; index++) {
				if (index == 0) {
					this.monthlyEmiDate = date.setDate(date.getDate());
					this.monthDateObj.push({ date: this.monthlyEmiDate });
				} else {
					this.monthlyEmiDate = date.setDate(date.getDate() + 15);
					this.monthDateObj.push({ date: this.monthlyEmiDate });
				}
			}
		} else if (this.monthValue == 'weekly') {
			console.log('weekly');
			this.monthlyEmi = this.emi / 4;
			this.monthlyCount = this.month * 4;
			console.log(this.monthlyCount);
			for (let index = 0; index < this.monthlyCount; index++) {
				if (index == 0) {
					this.monthlyEmiDate = date.setDate(date.getDate());
					this.monthDateObj.push({ date: this.monthlyEmiDate });
				} else {
					this.monthlyEmiDate = date.setDate(date.getDate() + 7);
					this.monthDateObj.push({ date: this.monthlyEmiDate });
				}
			}
			console.log(this.monthDateObj);
		} else {
			this.monthlyEmi = this.emi;
			this.monthlyCount = this.month;
			for (let index = 0; index < this.monthlyCount; index++) {
				if (index == 0) {
					this.monthlyEmiDate = date?.setMonth(date?.getMonth());
					this.monthDateObj.push({ date: this.monthlyEmiDate });
				} else {
					this.monthlyEmiDate = date?.setMonth(date?.getMonth() + 1);
					this.monthDateObj.push({ date: this.monthlyEmiDate });
				}
			}
		}
		let percentage =
			((this.downPayment - this.minDownPayment) /
				(this.totalAmount - this.minDownPayment)) *
			100;
		this.sliderBackground =
			'linear-gradient(to right, #E6BD5C, #ff4500 ' +
			percentage +
			'%, #E6BD5C ' +
			percentage +
			'%, #dee1e2 100%)';
		let monthValue: any = 0;
		if (this.month < 10) {
			let m: any = this.month;
			monthValue = parseInt(monthValue) + parseInt(m) + 1;
		} else {
			monthValue = this.month;
		}
		console.log(monthValue);
		let percentageMonth = ((monthValue - 1) / (this.totalMonth - 1)) * 100;
		this.sliderBGMonth =
			'linear-gradient(to right, #ECF7F3, #66C293 ' +
			percentageMonth +
			'%, #ECF7F3 ' +
			percentageMonth +
			'%, #ECF7F3 100%)';
		let percentageMonth2 = 0;
		if (this.emi == 0) {
			percentageMonth2 = 0;
		} else {
			percentageMonth2 =
				((this.emi - this.minPaymentAmountEmi) /
					(this.maxPaymentAmountEmi - this.minPaymentAmountEmi)) *
				100;
		}

		this.noOfMonthSlider =
			'linear-gradient(to right, #49c6ef, #2c3e50 ' +
			percentageMonth2 +
			'%, #ecf7fb ' +
			percentageMonth2 +
			'%, #ecf7fb 100%)';
		this.paymentAmountEmi = this.emi;
	}
	openModel(content: any) {
		this.modalService.open(content, { centered: true });
	}

	changeOptions(event: any) {
		let downPayment: any = this.downPayment1;
		let downPayment2: any = this.downPayment2;
		localStorage.removeItem('diffPayments');
		localStorage.removeItem('DP1');
		if (event == 'two') {
			this.splitPayment = true;
			this.maxDownPayment1 = this.downPayment1;
			this.maxDownPayment = this.downPayment;
			this.downPaymentOneMax = this.downPayment1;
			this.downPaymentOneVal = this.downPayment1;
			this.isDownPayment2 = true;
			this.downPayment2 = parseFloat(downPayment) / 2;
			this.downPayment = this.downPayment2;
			this.minDownPayment = parseFloat(downPayment) / 2;
			this.minDownPayment1 = parseFloat(downPayment) / 2;
			this.totalAmountDP =
				parseFloat(downPayment) + parseFloat(downPayment2);
		} else {
			this.isDownPayment2 = false;
			this.splitPayment = false;
			if (this.downPayment2 != 0) {
				this.downPayment = this.downPayment1;
				this.minDownPayment = this.minDownPayment;
			}
		}
	}
	checkMonthlyValue(event: any) {
		this.monthValue = event;
		console.log(this.monthValue);
		if (event) {
			this.isMonthlyStatus = true;
		}
	}
}

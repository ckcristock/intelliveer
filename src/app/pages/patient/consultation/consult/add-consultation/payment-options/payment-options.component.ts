import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '@services/alert/alert.service';

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
  closeResult = '';
  model!:NgbDateStruct
  modelTwo!:NgbDateStruct
  modelThree!:NgbDateStruct
  tab:boolean = true;
  tabTwo:boolean = false;
  tabThree:boolean = false;
  tabDate:any;
  tabTwoDate: any;
  tabThreeDate: any;
  date:any;
  isMonthlyStatus: boolean = false
  monthValue:any;
  monthlyEmi: any;
  monthlyCount:any;
  monthlyEmiDate:any;
  monthDateObj: Array<any> = [];
 /** variable for calculator */
 totalAmount: number = 2567.50;
 totalAmountDP: number = 0;
 totalMonth: number = 24;
 miniMum: number = 1;
 month: number = 24;
 emi: any = 0;
 paymentAmountEmi: any = 0;
 minPaymentAmountEmi: any = 0;
 maxPaymentAmountEmi: any = 0;
 downPayment: number =  500;
 downPayment1: number = 500;
 downPayment2:number = 0;
 isDownPayment2: boolean = false;
 minDownPayment:number = 500;
 minDownPayment1: number = 500;
 maxDownPayment1: number = 0;
 allTotal: any;
 bothDownTable:any
 sliderBackground:any;
 sliderBGMonth: any;
 totalDPBG: any;
 downPayment1BG:any;
 noOfMonthSlider:any;
 lastPayment:number = 0;
 maxDownPayment:number = 0;
 downPaymentOneVal:number = 0;
 downPaymentOneMax: number = 0;
 ratioDownPayment:any;
 ratioDownPayment2:any;
 ratioTotal:any;
	constructor(private modalService: NgbModal,
		private alertService: AlertService) {}

	ngOnInit(): void {
	this.customCalculate2(this.downPayment);
	let monthValue:any = 0;
		if(this.month < 10){
			let m:any = this.month;
			monthValue = parseInt(monthValue)+ parseInt(m) + 1;
		}else{
			monthValue = this.month;
		}
		console.log(monthValue)
		let percentageMonth = (monthValue - 1)/(this.totalMonth-1) * 100;
		this.sliderBGMonth = 'linear-gradient(to right, #49c6ef, #2c3e50 ' + percentageMonth + '%, #ecf7fb ' + percentageMonth + '%, #ecf7fb 100%)';
	}

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

	changeOptions(event:any){
		let downPayment:any = this.downPayment1;
		let downPayment2: any = this.downPayment2;
		localStorage.removeItem('diffPayments')
		localStorage.removeItem('DP1')
	   if(event == "two"){
		this.splitPayment = true;
		this.maxDownPayment1 = this.downPayment1;
		this.maxDownPayment = this.downPayment;
		this.downPaymentOneMax = this.downPayment1;
		this.downPaymentOneVal = this.downPayment1;
		this.isDownPayment2 = true;
		this.downPayment2 = parseFloat(downPayment) / 2;
		this.downPayment = this.downPayment2;
 		this.minDownPayment = parseFloat(downPayment)/2;
		 this.minDownPayment1 = parseFloat(downPayment)/2;
		this.totalAmountDP = parseFloat(downPayment) + parseFloat(downPayment2);
	   }else{
		this.isDownPayment2 = false;
		this.splitPayment = false;
		if(this.downPayment2 != 0){
		  this.downPayment = this.downPayment1;
		  this.minDownPayment = this.minDownPayment;
		}
		
	   }
	
	  }
	 
	  /** This for modal popup */
	  open(content:any) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	  }
	
	  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
		  return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		  return 'by clicking on a backdrop';
		} else {
		  return `with: ${reason}`;
		}
	  }
	  ShowTabContent(tab:any){
		console.log(tab)
		switch (tab) {
		  case 'tabThree':
			this.tab = false
			this.tabTwo = false
			this.tabThree = true
			break;
		  case 'tabTwo':
			this.tab = false
			this.tabTwo = true
			this.tabThree = false
			break;
		  default:
			this.tab = true
			this.tabTwo = false
			this.tabThree = false
			break;  
		}
		console.log(this.tab,this.tabTwo,this.tabThree)
	  }
	  getDate(tab:any,modelDate:any){
		const date = new Date(modelDate?.month+'-'+modelDate?.day+'-'+modelDate?.year)
		switch (tab) {
		 case 'tabThree':
		  let monthDate = new Date(this.modelThree.month+'-'+this.modelThree.day+'-'+this.modelThree.year);
			this.calculateInstallments(monthDate)
		   break;
		 case 'tabTwo':
		   this.tabTwoDate = date
		   this.tab = false
		   this.tabTwo = false
		   this.tabThree = true
		   break;
		 case 'tab':
		   this.tabDate = date
		   this.tab = false
		   this.tabTwo = true
		   this.tabThree = false
		   break;  
	   }
	
	  }
	  showDate(tab:any,modelDate:any){
	   const date = new Date(modelDate.month+'-'+modelDate.day+'-'+modelDate.year);
	   this.monthlyEmi = this.emi;
	   this.monthlyCount = this.month;
	   switch (tab) {
		case 'tabThree':
		  this.tabThreeDate = new Date(this.modelThree.month+'-'+this.modelThree.day+'-'+this.modelThree.year);
		  this.calculateInstallments(date)
		  this.modalService.dismissAll('Save click');
		  break;
	
		  case 'tabTwo':
			this.tabTwoDate = date
			this.tab = false
			this.tabTwo = false
			this.tabThree = true
			console.log('2')
			break;
	
		  default:
			this.tabDate = date
			this.tab = false
			this.tabTwo = true
			this.tabThree = false
			console.log('1')
			break;
		}
	  }
	  checkMonthlyValue(event:any){
		this.monthValue = event;
		console.log(this.monthValue)
	   if(event){
		this.isMonthlyStatus= true;
	   }
	  }
	  installmentCounter(i: number) {
		return new Array(i);
	  }
	  calculateInstallments(date?:any){
		if(date == undefined && this.modelThree?.month){
		  date = new Date(this.modelThree.month+'-'+this.modelThree.day+'-'+this.modelThree.year);
		}
		this.monthDateObj = []
		if(this.monthValue == "byMonthly"){
		  this.monthlyEmi = this.emi / 2;
		  this.monthlyCount = this.month * 2;
		  for (let index = 0; index < this.monthlyCount; index++) {
			if(index == 0){
			 this.monthlyEmiDate = date.setDate(date.getDate());
			 this.monthDateObj.push({date: this.monthlyEmiDate})
			 }else{
			   this.monthlyEmiDate = date.setDate(date.getDate() + 15);
			   this.monthDateObj.push({date: this.monthlyEmiDate})
			 }
		}
		}else if(this.monthValue == "weekly"){
		  console.log('weekly')
		  this.monthlyEmi = this.emi / 4;
		  this.monthlyCount = this.month * 4;
		  console.log(this.monthlyCount)
		  for (let index = 0; index < this.monthlyCount; index++) {
			if(index == 0){
			 this.monthlyEmiDate = date.setDate(date.getDate());
			 this.monthDateObj.push({date: this.monthlyEmiDate})
			 }else{
			   this.monthlyEmiDate = date.setDate(date.getDate() + 7);
			   this.monthDateObj.push({date: this.monthlyEmiDate})
			 }
			}
			console.log(this.monthDateObj)
		  }
		else{
		  this.monthlyEmi = this.emi;
		  this.monthlyCount = this.month;
		  for (let index = 0; index < this.monthlyCount; index++) {
			 if(index == 0){
			  this.monthlyEmiDate = date?.setMonth(date?.getMonth());
			 this.monthDateObj.push({date: this.monthlyEmiDate})
			 }else{
			   this.monthlyEmiDate = date?.setMonth(date?.getMonth()+1);
			   this.monthDateObj.push({date: this.monthlyEmiDate})
			 }
		}
		}
		let percentage =  (this.downPayment - this.minDownPayment) / (this.totalAmount - this.minDownPayment) * 100;
		this.sliderBackground = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + percentage + '%, #E6BD5C ' + percentage + '%, #dee1e2 100%)';
		let monthValue:any = 0;
		if(this.month < 10){
			let m:any = this.month;
			monthValue = parseInt(monthValue)+ parseInt(m) + 1;
		}else{
			monthValue = this.month;
		}
		console.log(monthValue)
		let percentageMonth = (monthValue - 1)/(this.totalMonth-1) * 100;
		this.sliderBGMonth = 'linear-gradient(to right, #49c6ef, #2c3e50 ' + percentageMonth + '%, #ecf7fb ' + percentageMonth + '%, #ecf7fb 100%)';
		this.paymentAmountEmi = this.emi;
	  }
	totalDownTable(event:any,step:any){
		console.log(event)
		let data = event.target.value;
		this.maxDownPayment = data;
		let dp1:any	 = data /2;
		let dP2:any = data /2;
		let dp1Diff:any	 = localStorage.getItem('diffPayments');
		dp1Diff = JSON.parse(dp1Diff);
		let downP1:any =  localStorage.getItem('DP1');
		downP1 = JSON.parse(downP1)
		console.log(data)
		if(this.downPayment > this.downPayment2 || this.downPayment < this.downPayment2){
			this.calculateRatio(this.downPayment,this.downPayment2);
			this.ratioTotal = this.ratioDownPayment + this.ratioDownPayment2;
			let D1:any = (this.ratioDownPayment /this.ratioTotal)*step;
			let D2:any = (this.ratioDownPayment2 /this.ratioTotal)*step;
			let downPayment:any = this.downPayment;
			let downPayment2:any = this.downPayment2;
			console.log(downPayment,downPayment2)
			console.log(D1,D2)
			if(dP2 > downP1){
				this.downPayment = parseFloat(downPayment) + parseFloat(D1)
				this.downPayment2 = parseFloat(downPayment2) + parseFloat(D2)
			}else{
				this.downPayment = parseFloat(downPayment) - parseFloat(D1)
				this.downPayment2 = parseFloat(downPayment2) - parseFloat(D2)
			}
		 this.calculateTotalDowntable(this.downPayment,this.downPayment2,data,'DP1')
		}else if(dp1 == dP2){
			this.downPayment2 = dP2;
			this.downPayment = dp1;
			this.calculateTotalDowntable(this.downPayment,this.downPayment2,data)
		}
		this.calculateInstallments();
		let totalDPBG =  ((this.downPayment + this.downPayment2) - this.maxDownPayment1) / (this.totalAmount - this.maxDownPayment1) * 100;
		this.totalDPBG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + totalDPBG + '%, #E6BD5C ' + totalDPBG + '%, #dee1e2 100%)';
		localStorage.setItem('DP1',dP2.toString())
	  }
	  calculateRatio(num_1:any, num_2:any){
		for(let num=num_2; num>1; num--) {
			if((num_1 % num) == 0 && (num_2 % num) == 0) {
				num_1=num_1/num;
				num_2=num_2/num;
			}
		}
		var ratio = num_1+":"+num_2;
		this.ratioDownPayment = num_1;
		this.ratioDownPayment2 = num_2;
	}
	  /** range slider */
	  calculateTotalDowntable(dP1:any,dP2:any,data:any,type?:any){
		let dP1DP2 = parseFloat(dP1) + parseFloat(dP2);
		let diffData = this.totalAmount - data;
		if(type == "DP1"){
			console.log(diffData,data)
			if(diffData < 25){
				let DPTotal = this.totalAmount - dP1DP2;
				let DP1:any = (this.ratioDownPayment /this.ratioTotal)*DPTotal;
				let DP2:any = (this.ratioDownPayment2 /this.ratioTotal)*DPTotal;
				this.downPayment = parseFloat(dP1) + parseFloat(DP1)
				this.downPayment2 = parseFloat(dP2) + parseFloat(DP2)
				this.emi = 0;
				this.month = 0;
				this.lastPayment = 0;
				this.downPaymentOneVal = this.downPayment;
				this.downPaymentOneMax = this.totalAmount;
				this.maxDownPayment = this.totalAmount
			}else{
				if(this.emi == 0 && this.month == 0){
					this.month = 1;
				}
				if(data == this.maxDownPayment1){
				let DPTotal = data / 2
				this.downPayment = DPTotal
				this.downPayment2 = DPTotal
				this.downPaymentOneVal = this.downPayment;
				this.downPaymentOneMax = data;
				}else{
					this.downPaymentOneVal = this.downPayment;
					this.downPaymentOneMax = dP1DP2;
				}
				}
		}else{
			if(diffData < 25){
				this.downPayment = this.totalAmount / 2;
				this.downPayment2 = this.totalAmount / 2;
				this.emi = 0;
				this.month = 0;
				this.lastPayment = 0;
				this.downPaymentOneVal = this.downPayment;
				this.downPaymentOneMax = this.totalAmount;
				this.maxDownPayment = this.totalAmount
			}else{
				if(this.emi == 0 && this.month == 0){
					this.month = this.totalMonth;
				}
				this.downPaymentOneVal = this.downPayment;
				this.downPaymentOneMax = dP1DP2;
			}
		}
		let downPayment1BG =  (this.downPayment - this.minDownPayment1) / (this.downPaymentOneMax - this.minDownPayment1) * 100;
		this.downPayment1BG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + downPayment1BG + '%, #E6BD5C ' + downPayment1BG + '%, #dee1e2 100%)';
		let dpayment:any = this.downPayment;
		let dpayment2:any = this.downPayment2;
		let dpTotal = parseFloat(dpayment) + parseFloat(dpayment2);
		console.log(dpTotal)
		this.customCalculate2(dpTotal);
	  }
	  downPaymentValues(event:any){
		let data = event.target.value;
		if(this.month == 0){
		  if(data > 0){
			this.month = this.totalMonth;
		  }
		}
		let diffData = this.totalAmount - data;
		if(diffData < 25){
		 this.downPayment = this.totalAmount;
		 this.emi = 0;
		 this.month = 0;
		}else{
		  this.downPayment = data;
		}
		this.customCalculate2(data)
		this.calculateInstallments();
	  }
	  noOfPaymentValue(event:any){
	   this.month = event.target.value;
	   console.log(this.month)
	   let data;
	   if(this.emi == 0 && this.isDownPayment2 == false){
		console.log(false)
		data = this.totalAmount / 2;
		 this.downPayment = this.totalAmount / 2;
	   }else if((this.emi == 0 || this.month == 0) && this.isDownPayment2){
		console.log(this.month,this.emi)
		let data2:any = this.totalAmount;
		let downPayment2:any = data2 / 2;;
		let downpayment:any = data2 / 2;
		if(this.month == 0){
			this.downPayment = parseFloat(downpayment);
			this.downPayment2 = parseFloat(downPayment2);
			data = parseFloat(downpayment) + parseFloat(downPayment2);
		}else{
			this.downPayment = parseFloat(downpayment) / 2;
			this.downPayment2 = parseFloat(downPayment2) / 2
			data = parseFloat(downpayment)/2 + parseFloat(downPayment2)/2;
		}
		this.maxDownPayment = data
		this.downPaymentOneVal = this.downPayment;
		this.downPaymentOneMax = data;
        let totalDPBG =  ((this.downPayment + this.downPayment2) - this.maxDownPayment1) / (this.totalAmount - this.maxDownPayment1) * 100;
		this.totalDPBG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + totalDPBG + '%, #E6BD5C ' + totalDPBG + '%, #dee1e2 100%)';
	   }else if((this.emi != 0 || this.month != 0) && this.isDownPayment2){
		if(this.month == this.totalMonth - 1){
			let downP:any = this.downPayment / 2;
			let downP2:any = this.downPayment2 / 2;
			this.downPayment = downP;
			this.downPayment2 = downP2;
			data = parseFloat(downP) + parseFloat(downP2);
			this.maxDownPayment = data;
			this.downPaymentOneMax = data;
			this.downPaymentOneVal = this.downPayment;
			let totalDPBG =  ((this.downPayment + this.downPayment2) - this.maxDownPayment1) / (this.totalAmount - this.maxDownPayment1) * 100;
		    this.totalDPBG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + totalDPBG + '%, #E6BD5C ' + totalDPBG + '%, #dee1e2 100%)';
		}else{
			let downP:any = this.downPayment;
			let downP2:any = this.downPayment2;
			data = parseFloat(downP) + parseFloat(downP2);
		}
	   }else{
		if(this.month == 0){
		  this.downPayment = this.totalAmount;
		}
		data = this.downPayment;
	   }
	   console.log(data,this.downPayment,this.month)
	   this.customCalculate2(data)
	   this.calculateInstallments();
	  }
	downPaymentOneValues(event:any,step?:any){
		let downpayment = event.target.value;
		let downPayment2:any = this.downPayment2;
		console.log(this.downPayment,downpayment)
		if(this.downPayment > downpayment){
			let dPayment:any = this.downPayment;
			console.log(dPayment,'dddddd',this.downPaymentOneMax)
			this.downPayment  = parseFloat(dPayment) - parseFloat(step);
			if(this.downPayment < this.minDownPayment1){
				this.downPayment = this.minDownPayment1
			}else if(dPayment > this.downPaymentOneMax){
				this.downPayment = this.downPaymentOneMax
			 }
		}else{
		 let dPayment:any = this.downPayment;
		 dPayment = parseFloat(dPayment) + parseFloat(step);
		 if(dPayment < this.minDownPayment1){
			this.downPayment = this.minDownPayment1;
		 }else if(dPayment > this.downPaymentOneMax){
			this.downPayment = this.downPaymentOneMax
		 }else{
			this.downPayment = dPayment;
		 }
		 console.log(dPayment,'else',this.downPaymentOneMax)

		}
		console.log(this.downPayment)
		let data:any = this.downPaymentOneMax;
		let diffPayments:any = parseFloat(downpayment) - parseFloat(downPayment2);
		//this.maxDownPayment = parseFloat(downpayment) + parseFloat(downPayment2);
		this.downPayment2 = parseFloat(data)- this.downPayment;
		console.log(downPayment2)
		localStorage.setItem('diffPayments',diffPayments.toString());
		this.customCalculate2(data)
		this.calculateInstallments();
		let downPayment1BG =  (this.downPayment - this.minDownPayment1) / (this.downPaymentOneMax - this.minDownPayment1) * 100;
		this.downPayment1BG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + downPayment1BG + '%, #E6BD5C ' + downPayment1BG + '%, #dee1e2 100%)';
	  }
	  changeCalculateValue(pmEmi?:any){
        let emi:any;
		let decimalValue;
		let data:any;
		if(this.isDownPayment2){
			let dP1:any = this.downPayment
			let dP2:any = this.downPayment2
			data = parseFloat(dP1) + parseFloat(dP2);
		   }else{
			 data = this.downPayment;
		   }
		if(this.month != 0 && this.month <= this.totalMonth && data < this.totalAmount ){
			emi = pmEmi
			let pMTotal:any = parseFloat(data);
			pMTotal = this.totalAmount - pMTotal;
			console.log(pmEmi);
			if(parseFloat(emi) < parseFloat(this.minPaymentAmountEmi)){
				this.alertService.error(
					'Error',
					'No. of Payments Greater Then '+this.totalMonth
				  );
			}else{
				let months = pMTotal / emi;
				let monthsStr = months.toFixed(4);
				let monthsArray = monthsStr.split(".");
				months = parseFloat(monthsArray[0]);
				let reminder = parseFloat(monthsArray[1]);
				console.log(months, reminder);
				this.month = months;
				this.emi = Math.trunc(emi);
				this.paymentAmountEmi = Math.trunc(emi);
				let remainingAmount = emi * reminder / 10000
				this.lastPayment = parseFloat(emi) + remainingAmount;
				let monthValue:any = 0;
				if(this.month < 10){
					let m:any = this.month;
					monthValue = parseInt(monthValue)+ parseInt(m) + 1;
				}else{
					monthValue = this.month;
				}
				console.log(monthValue)
				let percentageMonth = (monthValue - 1)/(this.totalMonth-1) * 100;
				this.sliderBGMonth = 'linear-gradient(to right, #49c6ef, #2c3e50 ' + percentageMonth + '%, #ecf7fb ' + percentageMonth + '%, #ecf7fb 100%)';
			}
		}else{
		  this.emi = 0;
		}
	  }
	  calculateValueMonthly(event:any){
		let pmEmi:any = event.target.value;
		let emi:any;
		let decimalValue;
		let data:any
		if(this.isDownPayment2){
         let dP1:any = this.downPayment
		 let dP2:any = this.downPayment2
		 data = parseFloat(dP1) + parseFloat(dP2);
		}else{
		  data = this.downPayment;
		}
		if(this.month != 0 && this.month <= this.totalMonth && data < this.totalAmount ){
			emi = pmEmi
			let pMTotal:any = parseFloat(data);
			pMTotal = this.totalAmount - pMTotal;
			console.log(pmEmi,this.minPaymentAmountEmi)
			if(parseFloat(emi) < parseFloat(this.minPaymentAmountEmi)){
				this.alertService.error(
					'Error',
					'No. of Payments Greater Then '+this.totalMonth
				  );
			}else{
			  let months = pMTotal / emi;
		      let monthsStr = months.toFixed(4);
			  let monthsArray = monthsStr.split(".");
			  months = parseFloat(monthsArray[0]);
			  let reminder = parseFloat(monthsArray[1]);
			  console.log(months, reminder);
			  this.month = months;
			  this.emi = Math.trunc(emi);
			  this.paymentAmountEmi = Math.trunc(emi);
			  let remainingAmount = emi * reminder / 10000
			  remainingAmount = parseFloat(emi) + remainingAmount;
			  decimalValue = this.getDecimalPart(emi)
			  console.log(decimalValue)
			  this.lastPayment = remainingAmount + (this.month * (decimalValue / 100));
			  console.log(this.lastPayment)
			}
		}else{
		  this.emi = 0;
		}
		let percentageMonth2 = (pmEmi - 25)/(this.maxPaymentAmountEmi-25) * 100;
		this.noOfMonthSlider = 'linear-gradient(to right, #49c6ef, #2c3e50 ' + percentageMonth2 + '%, #ecf7fb ' + percentageMonth2 + '%, #ecf7fb 100%)';
		let monthValue:any = 0;
		if(this.month < 10){
			let m:any = this.month;
			monthValue = parseInt(monthValue)+ parseInt(m) + 1;
		}else{
			monthValue = this.month;
		}
		console.log(monthValue)
		let percentageMonth = (monthValue - 1)/(this.totalMonth-1) * 100;
		this.sliderBGMonth = 'linear-gradient(to right, #49c6ef, #2c3e50 ' + percentageMonth + '%, #ecf7fb ' + percentageMonth + '%, #ecf7fb 100%)';

	  }
	  customCalculate2(data?:any){
		let emi:any;
		let decimalValue;
		if(!data){
		  data = this.downPayment;
		}else{
			if(this.isDownPayment2){
             let pData:any = data.target.value;
			 this.downPayment = parseFloat(pData) / 2;
			 this.downPayment2 = parseFloat(pData) / 2;
			 data = pData;
			 this.maxDownPayment = data;
			 this.minDownPayment1 = this.downPayment;
			 this.maxDownPayment1 = data;
			 this.minDownPayment = data;
		     this.downPaymentOneMax = data;
             let totalDPBG =  ((this.downPayment + this.downPayment2) - this.maxDownPayment1) / (this.totalAmount - this.maxDownPayment1) * 100;
		     this.totalDPBG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + totalDPBG + '%, #E6BD5C ' + totalDPBG + '%, #dee1e2 100%)';
			//  let downPayment1BG =  (this.downPaymentOneVal - this.minDownPayment1) / (this.downPaymentOneMax - this.minDownPayment1) * 100;
		    //  this.downPayment1BG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + downPayment1BG + '%, #E6BD5C ' + downPayment1BG + '%, #dee1e2 100%)';
			}else{
				this.downPayment = data.target.value;
				data = this.downPayment
				this.minDownPayment = this.downPayment;
			}
		}
		if(this.month != 0 && this.month <= this.totalMonth && data < this.totalAmount ){
			emi = (this.totalAmount - data)/this.month;
			emi = emi.toFixed(2)
			this.emi = Math.trunc(emi)
		}else{
		  this.emi = 0;
		}
		this.maxPaymentAmountEmi = this.totalAmount - data;
		this.minPaymentAmountEmi = emi;
		if(emi > 0){
		  decimalValue = this.getDecimalPart(emi)
		  console.log(decimalValue)
		  this.lastPayment = this.emi + (this.month * (decimalValue / 100));
		}else{
			this.lastPayment = 0;
		}
		this.paymentAmountEmi = this.emi;
	  }
	  customCalculate(payment?:any){
		let emi:any;
		let decimalValue;
		let data:any;
		if(!payment){
		  data = this.downPayment;
		}else{
			if(this.isDownPayment2){
             let pData:any = payment.target.value;
			 this.downPayment = parseFloat(pData) / 2;
			 this.downPayment2 = parseFloat(pData) / 2;
			 data = pData;
			 this.maxDownPayment = data;
			 this.minDownPayment1 = this.downPayment;
			 this.maxDownPayment1 = data;
			 this.minDownPayment = data;
		     this.downPaymentOneMax = data;
             let totalDPBG =  ((this.downPayment + this.downPayment2) - this.maxDownPayment1) / (this.totalAmount - this.maxDownPayment1) * 100;
		     this.totalDPBG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + totalDPBG + '%, #E6BD5C ' + totalDPBG + '%, #dee1e2 100%)';
			//  let downPayment1BG =  (this.downPaymentOneVal - this.minDownPayment1) / (this.downPaymentOneMax - this.minDownPayment1) * 100;
		    //  this.downPayment1BG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + downPayment1BG + '%, #E6BD5C ' + downPayment1BG + '%, #dee1e2 100%)';
			}else{
				this.downPayment = payment.target.value;
				data = this.downPayment
				this.minDownPayment = this.downPayment;
			}
		}
		if(this.month != 0 && this.month <= this.totalMonth && data < this.totalAmount ){
			emi = (this.totalAmount - data)/this.month;
			emi = emi.toFixed(2)
			this.emi = Math.trunc(emi)
		}else{
		  this.emi = 0;
		}
		this.maxPaymentAmountEmi = this.totalAmount - data;
		this.minPaymentAmountEmi = emi;
		if(emi > 0){
		  decimalValue = this.getDecimalPart(emi)
		  console.log(decimalValue)
		  this.lastPayment = this.emi + (this.month * (decimalValue / 100));
		}else{
			this.lastPayment = 0;
		}
		this.paymentAmountEmi = this.emi;
		this.calculateInstallments();
	  }
	   getDecimalPart(num:any) {
		if (Number.isInteger(num)) {
		  return 0;
		}
		const decimalStr = num.toString().split('.')[1];
		return Number(decimalStr);
	  }
}
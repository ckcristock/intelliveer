import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
 totalMonth: number = 26;
 miniMum: number = 1;
 month: number = 1;
 emi: any = 0;
 downPayment: number =  500;
 downPayment2:number = 0;
 isDownPayment2: boolean = false;
 minDownPayment:number = 500;
 maxDownPayment1: number = 0;
 allTotal: any;
 bothDownTable:any
 sliderBackground:any;
 sliderBGMonth: any;
 totalDPBG: any;
 downPayment1BG:any;
 lastPayment:number = 0;
 maxDownPayment:number = 0;
	showDownPaymentArrow: boolean = false;
	newDownPayment: number = 0;
	newEmi: number = 0;
	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {
	this.customCalculate(this.downPayment)
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
		let downPayment:any = this.downPayment;
		let downPayment2: any = this.downPayment2;
		localStorage.removeItem('totalDownPayment')
	   if(event == "two"){
		this.splitPayment = true;
		this.maxDownPayment1 = this.downPayment;
		this.maxDownPayment = this.downPayment;
		this.isDownPayment2 = true;
		this.downPayment2 = parseInt(downPayment) / 2;
		this.downPayment = this.downPayment2;
		this.minDownPayment = parseInt(downPayment)/2;
		this.totalAmountDP = parseInt(downPayment) + parseInt(downPayment2);
	   }else{
		this.isDownPayment2 = false;
		this.splitPayment = false;
		if(this.downPayment2 != 0){
		  this.downPayment = 500;
		  this.minDownPayment = 500;
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
		  console.log('month',this.monthlyCount)
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
		let percentageMonth = (this.month - 1)/(this.totalMonth-1) * 100;
		this.sliderBGMonth = 'linear-gradient(to right, #49c6ef, #2c3e50 ' + percentageMonth + '%, #ecf7fb ' + percentageMonth + '%, #ecf7fb 100%)';
	  }
	  totalDownTable(event:any,step:any){
		if(this.emi == 0){
			this.downPayment = this.downPayment2;
		}
		let data = event.target.value;
		console.log(data);
		 this.downPayment = data / 2;
		 this.downPayment2 = data / 2;
		 this.minDownPayment = this.downPayment;
		 this.maxDownPayment = data;
		 let diffData = this.totalAmount - data;
		console.log(data)
		if(diffData < 25){
		 this.downPayment = this.totalAmount / 2;
		 this.downPayment2 = this.totalAmount / 2;
		 this.emi = 0;
		 this.month = 0;
		}else{
		 if(this.month == 0){
			this.month = 1;
		 }
		}
		 this.customCalculate(data)
		this.calculateInstallments();
		let totalDPBG =  ((this.downPayment + this.downPayment2) - this.maxDownPayment1) / (this.totalAmount - this.maxDownPayment1) * 100;
		this.totalDPBG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + totalDPBG + '%, #E6BD5C ' + totalDPBG + '%, #dee1e2 100%)';
		this.minDownPayment = this.downPayment;
	  }
	  /** range slider */
	  downPaymentValues(event:any){
		this.showDownPaymentArrow = true;
		let data = event.target.value;
		if(this.month == 0){
		  if(data > 0){
			this.month = 1;
		  }
		}
		let diffData = this.totalAmount - data;
		console.log(data)
		if(diffData < 25){
		 this.downPayment = this.totalAmount;
		 this.emi = 0;
		 this.month = 0;
		}else{
		  this.downPayment = data;
		}
		this.customCalculate(data)
		this.calculateInstallments();
	  }
	  leaveMouse()
	  {
		this.showDownPaymentArrow = false;
		this.newDownPayment = this.downPayment;
		this.newEmi = this.emi;
	  }
	  noOfPaymentValue(event:any){
	   this.month = event.target.value;
	   console.log(this.month)
	   let data;
	   if(this.downPayment2){
		 data = this.downPayment + this.downPayment2;
	   }else{
         data = this.downPayment;
	   }
	   if(this.emi == 0){
		data = this.totalAmount / 2;
		this.downPayment = this.totalAmount / 2;
	   }
	   this.customCalculate(data)
	   this.calculateInstallments();
	  }
	  downPaymentOneValues(event:any){
		let downpayment = event.target.value;
		let downPayment2:any = this.downPayment2;
		this.downPayment = downpayment;
		let data = parseInt(downpayment) + parseInt(downPayment2)
		console.log(data)
		this.customCalculate(data)
	  this.calculateInstallments();
	  let downPayment1BG =  (this.downPayment - this.minDownPayment) / (this.maxDownPayment - this.minDownPayment) * 100;
	  this.downPayment1BG = 'linear-gradient(to right, #E6BD5C, #ff4500 ' + downPayment1BG + '%, #E6BD5C ' + downPayment1BG + '%, #dee1e2 100%)';
	  }
	  customCalculate(data?:any){
		let emi:any;
		let decimalValue;
		if(!data){
		  data = this.downPayment;
		}
		console.log(data,this.downPayment)
		if(this.month != 0 && this.month <= this.totalMonth && data < this.totalAmount ){
			emi = (this.totalAmount - data)/this.month;
			emi = emi.toFixed(2)
			this.emi = Math.trunc(emi)
		}else{
		  this.emi = 0;
		}
		if(emi > 0){
		  decimalValue = this.getDecimalPart(emi)
		  this.lastPayment = this.emi + (this.month * (decimalValue / 100));
		}
	  }
	   getDecimalPart(num:any) {
		if (Number.isInteger(num)) {
		  return 0;
		}
		const decimalStr = num.toString().split('.')[1];
		return Number(decimalStr);
	  }
}

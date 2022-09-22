import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientConsultationOptionsMenuItems, patientDiagnosisMenuItems, patientTreatmentMenuItems } from '@pages/patient/menu';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss'],
  animations: [
	trigger('fadeSlideInOut', [
		transition(':enter', [
		  style({ opacity: 0, transform: 'translateX(-100%)' }), //apply default styles before animation starts
		  animate(
			'750ms ease-in-out',
			style({ opacity: 1, transform: 'translateX(0)' })
		  )
		]),
		transition(':leave', [
		  style({ opacity: 1, transform: 'translateX(0)' }), //apply default styles before animation starts
		  animate(
			'600ms ease-in-out',
			style({ opacity: 0, transform: 'translateX(-100%)' })
		  )
		]),
	  ]),
  ]
})
export class AddConsultationComponent implements OnInit {
  menuItems: IMenuItem[] = patientConsultationOptionsMenuItems;
  showProgressBar: boolean = false;
	progressbarMmenuItems: IMenuItem[] = [];
	progressbarTitle: any;
	sessionArrayName: any;
	max_width: string = '200px';
    display:boolean = false
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  selectMenuItem(Obj?: any) {
		if (Obj?.url == '/dashboard/patient/consultation/consultation/add/diagnosis') {
			let that = this;
			this.display = true;
			this.max_width = '200px';
			this.router.navigate([Obj.url]);
			this.sessionArrayName = 'diagnosisVisitedArray';
			this.progressbarTitle = Obj.title;
			this.progressbarMmenuItems = patientDiagnosisMenuItems;
			setTimeout(function(){ that.showProgressBar = true}, 700);
		} else if (Obj?.url == '/dashboard/patient/consultation/consultation/add/treatment') {
			this.showProgressBar = true;
			this.display = false
			this.max_width = '251px';
			this.router.navigate([Obj.url]);
			this.sessionArrayName = 'treatmentVisitedArray';
			this.progressbarTitle = Obj.title;
			this.progressbarMmenuItems = patientTreatmentMenuItems;
		} else {
			this.showProgressBar = false;
			this.display = false
			this.max_width = '200px';
		}
	}

}

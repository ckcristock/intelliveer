import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import {
	patientConsultationMenuItems,
	patientDiagnosisMenuItems,
  patientTreatmentMenuItems
} from '../menu';

@Component({
	selector: 'app-consultation',
	templateUrl: './consultation.component.html',
	styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
	menuItems: IMenuItem[] = patientConsultationMenuItems;
	showProgressBar: boolean = false;
	progressbarMmenuItems: IMenuItem[] = [];
	progressbarTitle: any;
	sessionArrayName: any;
	max_width: string = '200px';

	constructor(public router: Router) {}

	ngOnInit(): void {
		console.log(this.menuItems);
	}

	selectMenuItem(Obj: any) {
		if (Obj.url == '/dashboard/patient/consultation/diagnosis') {
			this.showProgressBar = true;
			this.max_width = '200px';
			this.router.navigate([Obj.url]);
			this.sessionArrayName = 'diagnosisVisitedArray';
			this.progressbarTitle = Obj.title;
			this.progressbarMmenuItems = patientDiagnosisMenuItems;
		} else if (Obj.url == '/dashboard/patient/consultation/treatment') {
			this.showProgressBar = true;
			this.max_width = '250px';
			this.router.navigate([Obj.url]);
			this.sessionArrayName = 'treatmentVisitedArray';
			this.progressbarTitle = Obj.title;
			this.progressbarMmenuItems = patientTreatmentMenuItems;
		} else {
			this.showProgressBar = false;
			this.max_width = '200px';
		}
	}
}

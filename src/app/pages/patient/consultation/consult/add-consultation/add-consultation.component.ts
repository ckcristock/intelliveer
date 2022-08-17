import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { patientConsultationOptionsMenuItems, patientDiagnosisMenuItems, patientTreatmentMenuItems } from '@pages/patient/menu';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.scss']
})
export class AddConsultationComponent implements OnInit {
  menuItems: IMenuItem[] = patientConsultationOptionsMenuItems;
  showProgressBar: boolean = false;
	progressbarMmenuItems: IMenuItem[] = [];
	progressbarTitle: any;
	sessionArrayName: any;
	max_width: string = '200px';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  selectMenuItem(Obj: any) {
		if (Obj.url == '/dashboard/patient/consultation/consultation/add/diagnosis') {
			this.showProgressBar = true;
			this.max_width = '200px';
			this.router.navigate([Obj.url]);
			this.sessionArrayName = 'diagnosisVisitedArray';
			this.progressbarTitle = Obj.title;
			this.progressbarMmenuItems = patientDiagnosisMenuItems;
		} else if (Obj.url == '/dashboard/patient/consultation/consultation/add/treatment') {
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

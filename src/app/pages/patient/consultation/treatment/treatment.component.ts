import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AlertService } from '@services/alert/alert.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  disableSaveButton: boolean = true;
  currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Option 1', id: 'option1' },
		// { title: 'Medical Conditions', id: 'medicalConditions' },
		// { title: 'Dental Conditions', id: 'dentalConditions' },
		// { title: 'Consents & Signature', id: 'consents&Signature' }
	];

  constructor(
    public router: Router, 
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
  }

  save(data: any) {
		this.alertService.conformAlert('Are you sure?', 'You want to save')
		.then((result: any) => {
			if (result.value) {
        this.router.navigate(['/dashboard/patient/consultation']);
			}
		});
	}
	cancel() {
		this.alertService.conformAlert('Are you sure?', 'You want to exit')
		.then((result: any) => {
			if (result.value) {
        localStorage.removeItem("treatmentVisitedArray");
        this.router.navigate(['/dashboard/patient/consultation']);
			}
		});
	}

}

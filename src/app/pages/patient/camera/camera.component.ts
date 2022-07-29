import { Component, OnInit } from '@angular/core';
import { timer, switchMap } from 'rxjs';

@Component({
	selector: 'app-camera',
	templateUrl: './camera.component.html',
	styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
	selectedPatientProfileUrl: any;
	subscription: any;
	myservice: any;
	statustext: any;

	constructor() {}

	ngOnInit(): void {
		this.subscription = timer(0, 1000)
			.pipe()
			.subscribe((result) => {
				let selectedPatient = JSON.parse(
					localStorage.getItem('selectedPatient') || ''
				);
				this.selectedPatientProfileUrl = selectedPatient.profileUrl;
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}

import { Component, OnInit } from '@angular/core';
import { timer, switchMap } from 'rxjs';

@Component({
	selector: 'app-camera',
	templateUrl: './camera.component.html',
	styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
	selectedPatientProfileUrl: any;
	myservice: any;
	statustext: any;

	constructor() {}

	ngOnInit(): void {
	}

	ngDoCheck(): void {
		let selectedPatient = JSON.parse(
			localStorage.getItem('selectedPatient') || ''
		);
		this.selectedPatientProfileUrl = selectedPatient.profileUrl;
	}

}

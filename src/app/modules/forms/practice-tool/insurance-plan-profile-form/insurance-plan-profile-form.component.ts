import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-insurance-plan-profile-form',
	templateUrl: './insurance-plan-profile-form.component.html',
	styleUrls: ['./insurance-plan-profile-form.component.scss']
})
export class InsurancePlanProfileFormComponent implements OnInit {
	@Input() parentGroup!: FormGroup;
	@Input() formGroupName!: string;
	constructor() {}

	ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';

@Component({
	selector: 'app-policy-info',
	templateUrl: './policy-info.component.html',
	styleUrls: ['./policy-info.component.scss']
})
export class PolicyInfoComponent implements OnInit {

	Form: FormGroup | undefined;
	@Input() formData: any | undefined = undefined;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
	];

	letters = [{ "letter": "A", "status": "PRIMARY" },];

	constructor(
		private fb: FormBuilder,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,) { }

	ngOnInit(): void {
		this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				console.log(result)
				if (!this.Form?.pristine) {
					console.log("hiiiiii", event);
					console.log("status", this.Form?.pristine);
					this.insuranceServ.setPolicyInfoNotPristine(true);
				}
			}
		);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			planName: [data?.planName || '',],
			groupNumber: [data?.groupNumber || '',],
			subscriName: [data?.subscriName || '',],
			policyNumber: [data?.policyNumber || '',],
			policyEffectDate: [data?.policyEffectDate || '',],
			policyTermiDate: [data?.policyTermiDate || '',],
		});
	}


	save(data: any) {
		// this.onSubmit.emit(data);
		this.insuranceServ.setPolicyInfoNotPristine(false);
	}
	cancel() {
		// this.onCancel.emit();
	}

	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

}

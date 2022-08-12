import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';

@Component({
	selector: 'app-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
	currentSelection: string = '';
	Form: FormGroup | undefined;
	@Input() formData: any | undefined = undefined;
	menuItems: MenuItem[] = [
		{ title: 'Treatment Preferences', id: 'treatmentPreference' },
		{ title: 'Chief Complaint', id: 'chiefComplaint' },
		{ title: 'Expectations', id: 'expectations' },
		{ title: 'Family History', id: 'familyHistory' },
		{ title: 'Signature', id: 'signature' }
	];
	showFamilyHistoryInputFeild: string = 'yes';
	teethTreatmentList: any[] = [];
	faceTreatmentList: any[] = [];
	chiefComplaintList: any[] = [1];
	expectationsList: any[] = [1];
	constructor(private fb: FormBuilder, private router: Router) {}

	ngOnInit(): void {
		this.initForm(this.formData);
		this.getTeethChangeList();
		this.getFaceChangeList();
	}
	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			check1: [data?.check1 || '', Validators.required],
			check2: [data?.check2 || '', Validators.required]
		});
	}
	onSectionChange(sectionId: any) {
		this.currentSelection = sectionId;
	}
	save(data: any) {
		// this.onSubmit.emit(data);
	}
	cancel() {
		this.router.navigate(['/dashboard/patient/consultation/consultation']);
		// this.onCancel.emit();
	}

	getTeethChangeList() {
		let obj1 = {
			title: 'Move upper teeth',
			inputType: 'checkbox',
			checkValue: false,
			child: [
				{
					title: 'Forward',
					inputType: 'radio'
				},
				{
					title: 'Backward',
					inputType: 'radio'
				}
			]
		};
		this.teethTreatmentList.push(obj1);
		let obj2 = {
			title: 'Move lower teeth',
			inputType: 'checkbox',
			checkValue: false,
			child: [
				{
					title: 'Forward',
					inputType: 'radio'
				},
				{
					title: 'Backward',
					inputType: 'radio'
				}
			]
		};
		this.teethTreatmentList.push(obj2);
		let obj3 = {
			title: 'Upper teeth up because gums show too much',
			inputType: 'checkbox',
			checkValue: false,
			child: []
		};
		this.teethTreatmentList.push(obj3);
		let obj4 = {
			title: 'Close spaces',
			inputType: 'checkbox',
			checkValue: false,
			child: [
				{
					title: 'Upper',
					inputType: 'checkbox'
				},
				{
					title: 'Lower',
					inputType: 'checkbox'
				}
			]
		};
		this.teethTreatmentList.push(obj4);
		let obj5 = {
			title: 'Straighten crowded teeth',
			inputType: 'checkbox',
			checkValue: false,
			child: [
				{
					title: 'Upper',
					inputType: 'checkbox'
				},
				{
					title: 'Lower',
					inputType: 'checkbox'
				}
			]
		};
		this.teethTreatmentList.push(obj5);
		let obj6 = {
			title: 'Improve the appearance of',
			inputType: 'checkbox',
			checkValue: false,
			child: [
				{
					title: 'Chipped',
					inputType: 'checkbox'
				},
				{
					title: 'Cracked',
					inputType: 'checkbox'
				},
				{
					title: 'Stained',
					inputType: 'checkbox'
				},
				{
					title: 'Dark',
					inputType: 'checkbox'
				},
				{
					title: 'Pointed Teeth',
					inputType: 'checkbox'
				}
			]
		};
		this.teethTreatmentList.push(obj6);
	}

	getFaceChangeList() {
		let obj1 = {
			title: 'Move upper lip',
			child: [
				{
					title: 'Forward',
					inputType: 'radio'
				},
				{
					title: 'Backward',
					inputType: 'radio'
				}
			]
		};
		this.faceTreatmentList.push(obj1);
		let obj2 = {
			title: 'Move lower lip',
			child: [
				{
					title: 'Forward',
					inputType: 'radio'
				},
				{
					title: 'Backward',
					inputType: 'radio'
				}
			]
		};
		this.faceTreatmentList.push(obj2);
		let obj3 = {
			title: 'Move upper jaw',
			child: [
				{
					title: 'Forward',
					inputType: 'radio'
				},
				{
					title: 'Backward',
					inputType: 'radio'
				}
			]
		};
		this.faceTreatmentList.push(obj3);
		let obj4 = {
			title: 'Move lower jaw',
			child: [
				{
					title: 'Forward',
					inputType: 'radio'
				},
				{
					title: 'Backward',
					inputType: 'radio'
				}
			]
		};
		this.faceTreatmentList.push(obj4);
		let obj5 = {
			title: 'Chin',
			child: [
				{
					title: 'Larger',
					inputType: 'radio'
				},
				{
					title: 'Smaller',
					inputType: 'radio'
				}
			]
		};
		this.faceTreatmentList.push(obj5);
		let obj6 = {
			title: 'Nose',
			child: [
				{
					title: 'Larger',
					inputType: 'radio'
				},
				{
					title: 'Smaller',
					inputType: 'radio'
				},
				{
					title: 'Different Shape',
					inputType: 'radio'
				}
			]
		};
		this.faceTreatmentList.push(obj6);
	}

	getCheckboxValue(event: any, index: number) {
		this.teethTreatmentList[index].checkValue = event.target.checked;
	}
}

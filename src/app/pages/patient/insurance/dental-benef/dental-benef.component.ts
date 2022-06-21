import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';

@Component({
	selector: 'app-dental-benef',
	templateUrl: './dental-benef.component.html',
	styleUrls: ['./dental-benef.component.scss']
})
export class DentalBenefComponent implements OnInit {

	Form: FormGroup | undefined;
	@Input() formData: any | undefined = undefined;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Eligibility', id: 'eligibility' },
		{ title: 'COB/Assignment', id: 'cobaddig' },
		{ title: 'Deductible', id: 'deductible' },
		{ title: 'Dental Benefits', id: 'dentalBenef' },
		{ title: 'Frequencies', id: 'frequencies' },
		{ title: 'History', id: 'history' },
		{ title: 'General Provisions', id: 'generalProv' },
		{ title: 'Implant Benefits', id: 'implantBenef' },
	];
	years: any[] = [
		{ id: 1, name: "Calendar" },
		{ id: 2, name: "Fiscal" }
	];
	selectedYear: any;
	sepaMaximum: any = 1;
	deductive: any = 1;

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.initForm(this.formData);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			check1: [data?.check1 || '', Validators.required],
			check2: [data?.check2 || '', Validators.required],
		});
	}

	save(data: any) {
		// this.onSubmit.emit(data);
	}
	cancel() {
		// this.onCancel.emit();
	}

	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

}

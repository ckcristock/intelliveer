import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';

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

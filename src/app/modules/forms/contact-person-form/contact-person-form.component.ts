import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, Form, FormGroup } from '@angular/forms';
import { CONFIG } from '@config/index';

@Component({
	selector: 'app-contact-person-form',
	templateUrl: './contact-person-form.component.html',
	styleUrls: ['./contact-person-form.component.scss']
})
export class ContactPersonFormComponent implements OnInit {
	@Input() parentGroup!: FormGroup;
	@Input() formGroupName!: string;
	staticData: any;
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getStaticData();
	}
	isRequiredField(field: string) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const form_field = form.get(field);
		if (!form_field) {
			return false;
		}
		if (!form_field.validator) {
			return false;
		}
		const validator = form_field.validator({} as AbstractControl);
		if (!validator) {
			return false;
		}
		return validator && validator['required'];
	}
	getStaticData() {
		this.http
			.get(`${CONFIG.backend.host}/auth/global-data/static-types`)
			.subscribe({
				next: (data) => {
					this.staticData = data;
				},
				error: () => {},
				complete: () => {}
			});
	}
}

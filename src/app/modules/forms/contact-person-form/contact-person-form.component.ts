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

	isNotRequiredField(field: any, type?: any) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const form_field = form.get(field);
		let validator;
		if (!form_field?.value) {
			validator = false;
		} else {
			if (type == 'number') {
				const num =  Number(form_field?.value);
				console.log("nuuuuuuuuuuum",num)
				if (num) {
					validator = true
					form_field?.valid;
				} else {
					validator = false;
					form_field?.invalid;
				}
			} else if (type == 'string') {
				const num = isNaN(form_field?.value); // Validate if it's string
				console.log("Striiing",num)
				if (num) {
					validator = true;
					form_field?.valid;
				} else {
					validator = false;
					form_field?.invalid;
				}
			} else if (type == 'email') {
				const num = (form_field?.value).includes('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'); // Validate if it's string
				console.log("Striiing",num)
				if (num) {
					validator = true;
					form_field?.valid;
				} else {
					validator = false;
					form_field?.invalid;
				}
			} 
			else {
				validator = true;
			}
		}
		return validator;
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

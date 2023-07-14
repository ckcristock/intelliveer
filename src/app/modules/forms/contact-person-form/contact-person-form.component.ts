import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, Form, FormGroup } from '@angular/forms';
import { CONFIG } from '@config/index';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';

@Component({
	selector: 'app-contact-person-form',
	templateUrl: './contact-person-form.component.html',
	styleUrls: ['./contact-person-form.component.scss']
})
export class ContactPersonFormComponent implements OnInit {
	@Input() parentGroup!: FormGroup;
	@Input() formGroupName!: string;
	staticData: any;
	formDisabled!: boolean;
	form_field!: any;
	mandAndRequiredFields: any[] = [
		{ name: 'designation', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'title', type: 'dropdown', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'firstName', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'lastName', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'email', type: 'email', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'type', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'countryCode', type: 'number', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'number', type: 'number', mandatory: false, mandSaved: false, required: false, valid: false },
	];

	constructor(private http: HttpClient,
		private contactPersonFormService: ContactPersonFormService,
	) { }

	async ngOnInit() {
		this.contactPersonFormService.getDisabledOrEnabled().subscribe((resp: boolean) => {
			this.formDisabled = resp;
			if (this.formDisabled == undefined) {
				this.formDisabled = false;
			}
		});
		this.getStaticData();
		this.reviewInputs();
	}

	reviewInputs() {
		this.mandAndRequiredFields.forEach(field => {
			this.isNotRequiredField(field.name, field.type);
		});
		this.mandAndRequiredFields.forEach(field => {
			field.mandatory = this.isRequiredField(field.name);
		});
	}

	isNotRequiredField(fieldParam: any, type?: any) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const formPhone = this.parentGroup.get(this.formGroupName)?.get('phone') as FormGroup;
		const form_field_main = form.get(fieldParam);
		const form_field_phone = formPhone.get(fieldParam);

		let validator: boolean;

		if (!form_field_main?.value && !form_field_phone?.value) {
			validator = false;
		} else {
			if (form_field_main?.value) {
				this.form_field = form_field_main;
			} else {
				this.form_field = form_field_phone;
			}

			if (type == 'number') {
				const num = Number(this.form_field?.value);
				if (num) {
					validator = true
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			} else if (type == 'string') {
				const num = isNaN(this.form_field?.value); // Validate if it's string
				if (num) {
					validator = true;
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			} else if (type == 'dropdown') {
				const num = isNaN(this.form_field?.value); // Validate if it's string
				if (this.form_field?.value != null) {
					validator = true;
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			} else if (type == 'email') {
				const num = (this.form_field?.value).match("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"); // Validate if it's email
				if (num) {
					validator = true;
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			}
			else {
				validator = true;
			}
		}
		this.mandAndRequiredFields.forEach(field => {
			if (field.name == fieldParam) {
				field.valid = validator;
			}
		});
	}

	isRequiredField(field: string) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const formPhone = this.parentGroup.get(this.formGroupName)?.get('phone') as FormGroup;
		const form_field_main = form.get(field);
		const form_field_phone = formPhone.get(field);
		if (form_field_main?.value) {
			this.form_field = form_field_main;
		} else {
			this.form_field = form_field_phone;
		}
		if (!this.form_field) {
			return false;
		}
		if (!this.form_field.validator) {
			return false;
		}
		const validator = this.form_field.validator({} as AbstractControl);

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
				error: () => { },
				complete: () => { }
			});
	}
	inputChanged(fieldParam: any) {
		this.mandAndRequiredFields.forEach(field => {
			if (field.name == fieldParam) {
				field.mandSaved = false;
			}
		});
	}

	saved() {
		this.mandAndRequiredFields.forEach(field => {
			field.mandSaved = true;
		});
	}
}

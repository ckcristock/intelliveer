import { HttpClient } from '@angular/common/http';
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
	validatorFirstName!: any;
	validatorLastName!: any;
	validatorEmail!: any;
	validatorType!: any;
	validatorCountryCode!: any;
	validatorNumber!: any;

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
		this.isNotRequiredField("firstName", "string");
		this.isNotRequiredField("lastName", "string");
		this.isNotRequiredField("email", "email");
		this.isNotRequiredField("type", "string");
		this.isNotRequiredField("countryCode", "string");
		this.isNotRequiredField("number", "string");
	}

	isNotRequiredField(field: any, type?: any) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const form_field = form.get(field);
		let validator;
		if (!form_field?.value) {
			validator = false;
		} else {
			if (type == 'number') {
				const num = Number(form_field?.value);
				if (num) {
					validator = true
					form_field?.valid;
				} else {
					validator = false;
					form_field?.invalid;
				}
			} else if (type == 'string') {
				const num = isNaN(form_field?.value); // Validate if it's string
				if (num) {
					validator = true;
					form_field?.valid;
				} else {
					validator = false;
					form_field?.invalid;
				}
			} else if (type == 'email') {
				const num = (form_field?.value).includes('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'); // Validate if it's string
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
		switch (field) {
			case 'addressLine1':
				this.validatorFirstName = validator;
				break;
			case 'country':
				this.validatorLastName = validator;
				break;
			case 'state':
				this.validatorEmail = validator;
				break;
			case 'city':
				this.validatorType = validator;
				break;
			case 'zipCode':
				this.validatorCountryCode = validator;
				break;
			case 'number':
				this.validatorNumber = validator;
				break;
			default:
		}
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
				error: () => { },
				complete: () => { }
			});
	}
}

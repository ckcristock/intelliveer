import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type AcceptedFields = {
	designation?: boolean;
	title?: boolean;
	firstName?: boolean;
	lastName?: boolean;
	email?: boolean;
	phone?: {
		type?: boolean;
		countryCode?: boolean;
		number?: boolean;
	};
};

@Injectable({
	providedIn: 'root'
})
export class ContactPersonFormService {
	constructor(private fb: FormBuilder) {}
	getContactPersonForm(data?: any, required?: AcceptedFields): FormGroup {
		data = data || {};
		required = required || {};
		return this.fb.group({
			// partyId: [data?.partyId || ''],
			designation: [
				data?.designation || '',
				required.designation && Validators.required
			],
			title: [data?.title || '', required?.title && Validators.required],
			firstName: [
				data?.firstName || '',
				required?.firstName && Validators.required
			],
			lastName: [
				data?.lastName || '',
				required?.lastName && Validators.required
			],
			email: [data?.email || '', required?.email && Validators.required],
			phone: this.fb.group({
				type: [
					data?.phone?.type || '',
					required?.phone?.type && Validators.required
				],
				countryCode: [
					data?.phone?.countryCode || '',
					required?.phone?.countryCode && Validators.required
				],
				number: [
					data?.phone?.number || '',
					required?.phone?.number && Validators.required
				]
			})
		});
	}
}

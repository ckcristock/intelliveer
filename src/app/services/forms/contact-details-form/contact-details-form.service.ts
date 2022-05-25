import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type AcceptedFields = {
	email?: boolean;
	preferedMailMethod?: boolean;
	website?: boolean;
	fax?: boolean;
	primaryPhone?: {
		type?: boolean;
		countryCode?: boolean;
		number?: boolean;
	};
	secondaryPhone?: {
		type?: boolean;
		countryCode?: boolean;
		number?: boolean;
	};
};

@Injectable({
	providedIn: 'root'
})
export class ContactDetailsFormService {
	constructor(private fb: FormBuilder) {}

	getContactDetailsForm(data?: any, required?: AcceptedFields): FormGroup {
		data = data || {};
		required = required || {};
		return this.fb.group({
			email: [data?.email || '', required.email && Validators.required],
			primaryPhone: this.fb.group({
				type: [
					data?.primaryPhone?.type || '',
					required?.primaryPhone?.type && Validators.required
				],
				countryCode: [
					data?.primaryPhone?.countryCode || '',
					required?.primaryPhone?.countryCode && Validators.required
				],
				number: [
					data?.primaryPhone?.number || '',
					required?.primaryPhone?.number && Validators.required
				]
			}),
			secondaryPhone: this.fb.group({
				type: [
					data?.secondaryPhone?.type || '',
					required?.secondaryPhone?.type && Validators.required
				],
				countryCode: [
					data?.secondaryPhone?.countryCode || '',
					required?.secondaryPhone?.countryCode && Validators.required
				],
				number: [
					data?.secondaryPhone?.number || '',
					required?.secondaryPhone?.number && Validators.required
				]
			}),
			preferedMailMethod: [
				data?.preferedMailMethod || '',
				required.preferedMailMethod && Validators.required
			],
			website: [
				data?.website || '',
				required.website && Validators.required
			],
			fax: [data?.fax || '', required.fax && Validators.required]
		});
	}
}

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type AcceptedFields = {
	addressLine1?: boolean;
	addressLine2?: boolean;
	city?: boolean;
	state?: boolean;
	country?: boolean;
	zipCode?: boolean;
};

@Injectable({
	providedIn: 'root'
})
export class AddressFormService {
	constructor(private fb: FormBuilder) { }

	getAddressForm(data?: any, required?: AcceptedFields): FormGroup {
		data = data || {};
		required = required || {};
		console.log("requireeeeeeeeeeeeeed", required);

		return this.fb.group({
			addressLine1: [
				data?.addressLine1 || '',
				(required.addressLine1 && [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')])

			],
			addressLine2: [
				data?.addressLine2 || '',
				required.addressLine2 && Validators.required
			],
			city: [data?.city || '', required.city && Validators.required],
			state: [data?.state || '', required.state && Validators.required],
			country: [
				data?.country || '',
				required.country && Validators.required
			],
			zipCode: [
				data?.zipCode || '',
				required.zipCode && Validators.required
			]
		});
	}
}

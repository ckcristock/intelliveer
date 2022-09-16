import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
	constructor(private fb: FormBuilder) { }

	isDisabled!: boolean;
	private isDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isDisabled);

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
				required?.firstName && [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]
			],
			lastName: [
				data?.lastName || '',
				required?.lastName && [Validators.required, Validators.pattern('[A-Za-z]+[0-9]|[0-9]+[A-Za-z]|[A-Za-z]')]
			],
			email: [data?.email || '', required?.email && [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
			phone: this.fb.group({
				type: [
					data?.phone?.type || '',
					required?.phone?.type && Validators.required
				],
				countryCode: [
					data?.phone?.countryCode || '',
					required?.phone?.countryCode && [Validators.required, Validators.pattern("^[0-9]*$")]
				],
				number: [
					data?.phone?.number || '',
					required?.phone?.number && [Validators.required, Validators.pattern("^[0-9]*$")]
				]
			})
		});
	}

	setDisabledOrEnabled(isDisabled: boolean) {
		this.isDisabled = isDisabled;
		this.isDisabled$.next(this.isDisabled);
	}

	getDisabledOrEnabled(): Observable<boolean> {
		return this.isDisabled$;
	}
}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { AlertService } from '@services/alert/alert.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactDetailsFormService } from '@services/forms/contact-details-form/contact-details-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';

@Component({
	selector: 'app-business-group-form',
	templateUrl: './business-group-form.component.html',
	styleUrls: ['./business-group-form.component.scss']
})
export class BusinessGroupFormComponent implements OnInit {
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	BGForm: FormGroup | undefined;
	countries: any;
	imageSrc: any;
	saveButtonEnable: boolean = true;
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private contactDetailsFormService: ContactDetailsFormService,
		private geoService: GeoService,
		private alertService: AlertService
	) {}

	ngOnInit() {
		this.getCountries();
		this.initBGForm(this.formData);
	}
	initBGForm(data?: any) {
		data = data || {};
		this.BGForm = this.fb.group({
			logo: [data?.logo || 'null'],
			name: [data?.name || '', Validators.required],
			// description: [data?.description || ''],
			// abbreviation: [data?.abbreviation || ''],

			TIN: [data?.TIN || ''],
			country: [data?.country || '', Validators.required],
			currency: [data?.currency || '', Validators.required],
			physicalAddress: this.addressFormService.getAddressForm(
				data?.physicalAddress || {}
			),
			mailingAddress: this.addressFormService.getAddressForm(
				data?.mailingAddress || {}
			),
			insuranceBillingAddress: this.addressFormService.getAddressForm(
				data?.insuranceBillingAddress || {}
			),
			contactDetails:
				this.contactDetailsFormService.getContactDetailsForm(
					data?.contactDetails || {}
				),
			contactPerson: this.contactPersonFormService.getContactPersonForm(
				data?.contactPerson || {},
				{
					firstName: true,
					lastName: true,
					phone: { type: true, number: true, countryCode: true }
				}
			)
		});
		this.BGForm.valueChanges.subscribe(data => 
		{
			this.saveButtonEnable = false;
		})
	}
	save(data: any) {
		this.onSubmit.emit(data);
	}
	cancel() {
		this.alertService.conformAlert('Are you sure?', 'You want to exit')
		.then((result) => {
			if (result.value) {
				this.onCancel.emit();
			}
		});
	}
	setAddress(type: string) {
		let physicalAddress = this.BGForm?.controls['physicalAddress'].value;
		this.BGForm?.controls[type].setValue(physicalAddress);
	}
	handleUploadedImage(e: { url: string }) {
		if (e && this.BGForm) {
			this.BGForm.controls['logo'].setValue(e.url);
		}
	}
	scroll(el: HTMLElement) {
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		});
	}
	getCountries() {
		this.geoService.getCountries().subscribe({
			next: (res: any) => {
				this.countries = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
			}
		});
	}

	customSearchFn(term: string, item: any) {
		term = term.toLowerCase();
		let splitTerm = term.split(' ').filter(t => t);
		let isWordThere: any = [];
		splitTerm.forEach(arr_term => {
		  let search = item.toLowerCase();
		  isWordThere.push(search.indexOf(arr_term) != -1);
		});
		const all_words = (this_word: any) => this_word;
		return isWordThere.every(all_words);
	}
}

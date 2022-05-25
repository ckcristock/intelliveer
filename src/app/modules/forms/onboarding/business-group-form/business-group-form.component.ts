import { HttpClient } from '@angular/common/http';
import {
	Component,
	Input,
	OnInit,
	Output,
	EventEmitter,
	AfterViewInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactDetailsFormService } from '@services/forms/contact-details-form/contact-details-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';

@Component({
	selector: 'app-business-group-form',
	templateUrl: './business-group-form.component.html',
	styleUrls: ['./business-group-form.component.scss']
})
export class BusinessGroupFormComponent implements OnInit, AfterViewInit {
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	BGForm: FormGroup | undefined;
	countries: any;
	imageSrc: any;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Profile', id: 'profile' },
		{ title: 'Physical Address', id: 'physicalAddress' },
		{ title: 'Mailing Address', id: 'mailingAddress' },
		{ title: 'Insurance ', id: 'insuranceBillingAddress' },
		{ title: 'Contact', id: 'contactDetails' },
		{ title: 'Contact Person Info', id: 'contactPerson' }
	];
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private contactDetailsFormService: ContactDetailsFormService,
		private geoService: GeoService
	) {}

	ngOnInit() {
		this.getCountries();
		this.initBGForm(this.formData);
	}
	ngAfterViewInit(): void {}
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
	}
	save(data: any) {
		this.onSubmit.emit(data);
	}
	cancel() {
		this.onCancel.emit();
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
	getCountries() {
		this.geoService.getCountries().subscribe({
			next: (res) => {
				this.countries = res;
			}
		});
	}
	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}
}

import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIG } from '@config/index';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { MenuBarService } from "../../../../services/onboarding/menu-bar/menu-bar.service";
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactDetailsFormService } from '@services/forms/contact-details-form/contact-details-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';

@Component({
	selector: 'app-legal-entity-form',
	templateUrl: './legal-entity-form.component.html',
	styleUrls: ['./legal-entity-form.component.scss']
})
export class LegalEntityFormComponent implements OnInit {
	Form: FormGroup | undefined;
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	countries: any;
	imageSrc: any;
	currentSelection: string = '';
	menuItems: MenuItem[] = this.menuItemsServ.getMenu();
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private contactDetailsFormService: ContactDetailsFormService,
		private geoService: GeoService,
		private menuItemsServ: MenuBarService
	) {
		this.getCountries();
	}

	ngOnInit(): void {
		this.initForm(this.formData);
	}
	save(data: any) {
		this.onSubmit.emit(data);
	}
	cancel() {
		this.onCancel.emit();
	}
	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			logo: [data?.logo || 'null'],
			name: [data?.name || '', Validators.required],
			// description: [data?.description || '', Validators.required],
			abbreviation: [data?.abbreviation || ''],
			TIN: [data?.TIN || '', Validators.required],
			country: [data?.country || ''],
			currency: [data?.currency || ''],
			isLegalEmployer: [data?.isLegalEmployer || 'yes'],
			employerId: [data?.employerId || ''],
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
				data?.contactPerson || {}
			)
		});
	}
	setAddress(type: string) {
		let physicalAddress = this.Form?.controls['physicalAddress'].value;
		this.Form?.controls[type].setValue(physicalAddress);
	}
	handleUploadedImage(e: { url: string }) {
		if (e && this.Form) {
			this.Form.controls['logo'].setValue(e.url);
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

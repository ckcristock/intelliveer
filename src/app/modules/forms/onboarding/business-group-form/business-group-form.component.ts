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
export class BusinessGroupFormComponent implements OnInit, AfterViewInit {
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Input() password: any;
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
	userPassword: any;
	ipAddress: any;
	userCity: any;

	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private contactDetailsFormService: ContactDetailsFormService,
		private geoService: GeoService,
		private alertService: AlertService,
	) { }

	ngOnInit() {
		this.getCountries();
		this.initBGForm(this.formData);
		this.getIPAddress();
		this.loadIp();
	}
	ngAfterViewInit(): void { }
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
			password: [ '', Validators.required],
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
					phone: { type: true, number: true, countryCode: true },
					email: true
				}
			)
		});
	}

	bgNameValid(){
		return this.BGForm?.get('name')?.valid;
	}

	countryValid(){
		return this.BGForm?.get('country')?.valid;
	}

	currencyValid(){
		return this.BGForm?.get('currency')?.valid;
	}

	passwordValid(){
		return this.BGForm?.get('password')?.valid;
	}

	save(data: any) {
		this.onSubmit.emit(data);
		this.BGForm?.markAsPristine();
		this.alertService.success(
		  'Success',
		  'Business Group has been updated successfully'
		);
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
				console.log("countries", res);
				
			}
		});
	}
	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}

	getIPAddress() {
		this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
			this.ipAddress = res;
			console.log("this.ipAddress", this.ipAddress);

		});
	}

	loadIp() {
		this.http.get('https://jsonip.com')
			.pipe().subscribe((value: any) => {
				this.ipAddress = value.ip;
				let url = `https://api.geoapify.com/v1/ipinfo?&apiKey=f6ddac945f434391ace75449f5fbcb18`
				return this.http.get(url).pipe().subscribe((value: any) => {
					this.userCity = value.city;
					
				});
			});
	}
}


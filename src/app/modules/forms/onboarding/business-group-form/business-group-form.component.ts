import { HttpClient } from '@angular/common/http';
import {
	Component,
	Input,
	OnInit,
	Output,
	EventEmitter,
	AfterViewInit,
	ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd } from '@angular/router';
import { CONFIG } from '@config/index';
import { ContactPersonFormComponent } from '@modules/forms/contact-person-form/contact-person-form.component';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { AlertService } from '@services/alert/alert.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactDetailsFormService } from '@services/forms/contact-details-form/contact-details-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';
import { filter } from 'rxjs';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';

@Component({
	selector: 'app-business-group-form',
	templateUrl: './business-group-form.component.html',
	styleUrls: ['./business-group-form.component.scss']
})
export class BusinessGroupFormComponent implements OnInit, AfterViewInit {
	@ViewChild(ContactPersonFormComponent) contactPersonComponent!: ContactPersonFormComponent;
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
	isSaveButton: boolean = false;
	bussinessEdit: any;
	inEdit: boolean = false;
	BGFormDisable!: boolean;
	businessGroupEditName!: string;
	BGname!: string;
	urlOnboarding!: any;
	mandatoryBGNameSaved: boolean = false;
	mandatoryCountrySaved: boolean = false;
	mandatoryCurrencySaved: boolean = false;
	imageUpLoaderDisable: boolean = true;


	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private contactDetailsFormService: ContactDetailsFormService,
		private geoService: GeoService,
		private alertService: AlertService,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private searchString: SearchStringPipePipe,
		private globalRoutes: GlobalRoutesService,
		private businessGroupService: BusinessGroupService

	) { }

	ngOnInit() {
		this.getCountries();
		this.getIPAddress();
		this.loadIp();
		this.initBGForm(this.formData);
		this.enableAndDisableInputs();
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.BGForm?.statusChanges.subscribe(
			result => {
				if (!this.BGForm?.pristine) {
					console.log("entereeeed, BG, wrong");
					this.onboardingServ.setbusinessGroupNotPristine(true);
				}
			}
		);
		this.urlOnboarding = this.globalRoutes.getSettingsOnboardingUrl();
	}
	ngAfterViewInit(): void { }
	initBGForm(data?: any) {
		data = data || {};
		if (Object.keys(data).length != 0) {
			this.inEdit = true;
			this.BGFormDisable = true;
		} else if (Object.keys(data).length == 0) {
			this.inEdit = false;
			this.BGFormDisable = false;
		}

		this.BGForm = this.fb.group({
			logo: [data?.logo || 'null'],
			name: [data?.name || '', Validators.required],
			// description: [data?.description || ''],
			// abbreviation: [data?.abbreviation || ''],

			TIN: [data?.TIN || ''],
			country: [data?.country || '', Validators.required],
			currency: [data?.currency || '', Validators.required],
			password: ['', this.password ? [Validators.required] : null],
			physicalAddress: this.addressFormService.getAddressForm(
				data?.physicalAddress || {},
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
					title: true,
					firstName: true,
					lastName: true,
					phone: { type: true, number: true, countryCode: true },
					email: true
				}
			)
		});

		this.addressFormService.setDisabledOrEnabled(this.BGFormDisable);
		this.contactPersonFormService.setDisabledOrEnabled(this.BGFormDisable);
		this.BGname = this.BGForm.get('name')?.value;
		// this.BGForm?.get(field)?.valid

	}

	fieldValidation(field: any, notRequiredButPattern?: boolean) {
		if (notRequiredButPattern) {
			return (this.BGForm?.get(field)?.valid && this.BGForm?.get(field)?.value != null);
		} else {
			return this.BGForm?.get(field)?.value != null
		}
	}

	save(data: any) {
		this.mandatoryBGNameSaved = true;
		this.mandatoryCountrySaved = true;
		this.mandatoryCurrencySaved = true;
		this.contactPersonComponent.saved();
		if (this.BGForm?.valid && !this.BGForm.pristine) {
			this.onSubmit.emit(data);
			this.BGForm?.markAsPristine();
			this.alertService.success(
				'Success',
				'Business Group has been updated successfully'
			);
			this.onboardingServ.setbusinessGroupNotPristine(false);
		}
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

	getIPAddress() {
		this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
			this.ipAddress = res;
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

	checkPermission() {
		let bussinessGroup = this.globalRoutes.getSettingsOnboardingRoutes();
		let getBusinessGroup = this.searchString.transform('title', bussinessGroup, 'Business Group');
		this.bussinessEdit = this.searchString.transform('title', getBusinessGroup[0].child, 'Edit');
		if (this.bussinessEdit[0].isEnabled) {
			this.isSaveButton = true;
			this.enableAndDisableInputs();
			this.imageUpLoaderDisable = false;
		} else if (!this.bussinessEdit.isEnable) {
			this.isSaveButton = false;
		}
	}

	enableAndDisableInputs() {
		if (this.inEdit) {
			if (!this.isSaveButton) {
				this.BGForm?.disable();
				this.BGFormDisable = true;
			} else if (this.isSaveButton) {
				this.BGForm?.enable();
				this.BGFormDisable = false;
			}
			this.addressFormService.setDisabledOrEnabled(this.BGFormDisable);
			this.contactPersonFormService.setDisabledOrEnabled(this.BGFormDisable);
		}
	}

	inputChanged(field: any) {
		switch (field) {
			// For Add Patient Module
			case 'name':
				this.mandatoryBGNameSaved = false;
				break;
			case 'country':
				this.mandatoryCountrySaved = false;
				break;
			case 'DOB':
				this.mandatoryCurrencySaved = false;
				break;
			default:
		}
	}
}


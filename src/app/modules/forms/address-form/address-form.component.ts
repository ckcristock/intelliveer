import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';
import { delay } from 'rxjs';

@Component({
	selector: 'app-address-form',
	templateUrl: './address-form.component.html',
	styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
	countries: any;
	states: any;
	cities: any;
	@Input() parentGroup!: FormGroup;
	@Input() formGroupName!: string;
	@Input() referrer!: string;
	selectedCountry!: any;
	selectedState!: any;
	selectedCity!: any;
	ipAddress: any;
	userLocaInfo: any;
	formDisabled!: boolean;
	validatorAddressLine1!: any;
	validatorCountry!: any;
	validatorState!: any;
	validatorCity!: any;
	validatorZipCode!: any;
	form_field!: any;
	mandAndRequiredFields: any[] = [
		{ name: 'addressLine1', type: 'string', mandatory: false, mandSaved: false, required: true, valid: false },
		{ name: 'addressLine2', type: 'string', mandatory: false, mandSaved: false, required: false, valid: false },
		{ name: 'country', type: 'dropdown', mandatory: false, mandSaved: false, required: true, valid: false },
		{ name: 'state', type: 'dropdown', mandatory: false, mandSaved: false, required: true, valid: false },
		{ name: 'city', type: 'dropdown', mandatory: false, mandSaved: false, required: true, valid: false },
		{ name: 'zipCode', type: 'number', mandatory: false, mandSaved: false, required: true, valid: false },
	];


	constructor(
		private http: HttpClient,
		private geoService: GeoService,
		private addressFormService: AddressFormService,
	) {
		this.geoService
			.getCountries()
			.pipe(delay(100))
			.subscribe({
				next: (res: any) => {
					this.countries = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
					setTimeout(() => {
						this.loadIp();
					}, 100);
				},
			});
	}

	async ngOnInit() {
		this.addressFormService.getDisabledOrEnabled().subscribe((resp: boolean) => {
			this.formDisabled = resp;
			if (this.formDisabled == undefined) {
				this.formDisabled = false;
			}
		});


	}

	async reviewInputs() {
		this.mandAndRequiredFields.forEach(async field => {
			await this.isNotRequiredField(field.name, field.type);
		});
		this.mandAndRequiredFields.forEach(field => {
			if (this.isRequiredField(field.name)) {
				field.mandatory = true;
				field.required = false;
			}
		});
	}

	async isNotRequiredField(fieldParam: any, type?: any) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const form_field_main = form.get(fieldParam);
		this.form_field = form_field_main;
		if (fieldParam == 'state') {
			console.log("form_field_main", form_field_main?.value);

		}

		let validator: boolean;

		if (!form_field_main?.value) {
			validator = false;
		} else {
			if (type == 'number') {
				const num = Number(this.form_field?.value);
				if (num) {
					validator = true
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			} else if (type == 'string') {
				const num = isNaN(this.form_field?.value); // Validate if it's string
				if (num) {
					validator = true;
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			} else if (type == 'dropdown') {
				console.log("droooop", this.form_field?.value);

				const num = isNaN(this.form_field?.value); // Validate if it's string
				console.log("num", num);

				if (this.form_field?.value != null) {
					validator = true;
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			} else if (type == 'email') {
				const num = (this.form_field?.value).match("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"); // Validate if it's email
				if (num) {
					validator = true;
					this.form_field?.valid;
				} else {
					validator = false;
					this.form_field?.invalid;
				}
			}
			else {
				validator = true;
			}
		}
		this.mandAndRequiredFields.forEach(field => {
			if (field.name == fieldParam) {
				// console.log("validatooooooooooor", validator, fieldParam, this.form_field.value);

				field.valid = validator;
				this.form_field = null;
			}
		});
	}

	isRequiredField(field: string) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const form_field_main = form.get(field);
		this.form_field = form_field_main;

		if (!this.form_field) {
			return false;
		}
		if (!this.form_field.validator) {
			return false;
		}
		const validator = this.form_field.validator({} as AbstractControl);

		if (!validator) {
			return false;
		}
		return validator && validator['required'];
	}

	async getStates(countryIso3: string) {
		this.resetState(); this.resetCity();
		if (this.countries) {
			const country = this.countries.filter(
				(c: any) => c.iso3 === countryIso3
			);
			if (country && country.length == 1) {
				this.geoService.getStates(country[0]['id']).subscribe({
					next: async (res: any) => {
						this.states = await res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
						// this.validatorState = true;
					},
				});
			}
		}
	}
	async getCities(stateCode: string) {
		this.resetCity();
		if (this.states) {
			const state = this.states.filter(
				(s: any) => s.state_code === stateCode
			);
			if (state && state.length == 1) {
				this.geoService.getCities(state[0]['id']).subscribe({
					next: async (res: any) => {
						this.cities = await res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
						let city = this.cities.filter((x: any) => {
							return x.name.trim().split(/\s+/)[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "") ==
								this.userLocaInfo.city.name.trim().split(/\s+/)[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
						})
						this.selectedCity = city[0].name;
						this.validatorCity = true;
						setTimeout(() => {
							this.reviewInputs();

						}, 110);
					},
				});
			}
		}
	}
	stateOptionIsOpened() {
		if (!this.states) {
			const selectedCountry =
				this.parentGroup.controls[this.formGroupName].get(
					'country'
				)?.value;
			if (selectedCountry) {
				this.getStates(selectedCountry);
			}
		}
	}

	emailValid() {

	}

	cityOptionIsOpened() {
		if (!this.cities) {
			const selectedState =
				this.parentGroup.controls[this.formGroupName].get(
					'state'
				)?.value;
			if (selectedState) {
				this.getCities(selectedState);
			}
		}
	}
	resetState() {
		this.parentGroup.controls[this.formGroupName].patchValue({
			state: null,
		});
		this.states = [];
		this.parentGroup.controls['state']?.setValue(null);
		this.validatorState = false;
	}

	resetCity() {
		this.parentGroup.controls[this.formGroupName].patchValue({
			city: null,
		});
		this.cities = [];
		this.parentGroup.controls['city']?.setValue(null);
		this.validatorCity = false;


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

	async loadIp() {
		this.http.get('https://api.geoapify.com/v1/ipinfo?&apiKey=f6ddac945f434391ace75449f5fbcb18').pipe().
			subscribe(async (value: any) => {
				this.userLocaInfo = value;
				// get country
				let country = this.countries.filter((x: any) => {
					return x.name == this.userLocaInfo.country.name;
				})
				this.selectedCountry = country[0].iso3;
				this.validatorCountry = true;

				// get state
				await this.getStates(this.selectedCountry);
				setTimeout(() => {
					let state = this.states.filter((x: any) => {
						return x.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") == this.userLocaInfo.state.name;
					})
					this.selectedState = state[0].state_code;
					this.validatorState = true;
					// get city
					this.getCities(this.selectedState);
				}, 1000);
			});
	}
	inputChanged(fieldParam: any) {
		this.mandAndRequiredFields.forEach(field => {
			if (field.name == fieldParam) {
				field.mandSaved = false;
			}
		});
	}

	saved() {
		this.mandAndRequiredFields.forEach(field => {
			field.mandSaved = true;
		});
	}
}

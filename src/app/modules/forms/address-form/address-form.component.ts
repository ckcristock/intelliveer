import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
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


	constructor(
		private http: HttpClient,
		private geoService: GeoService) {
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
		console.log("thiiiis.formGroupName", this.formGroupName);
		console.log("thiiiis.pareeentgropu", this.parentGroup);

		
	}

	isRequiredField(field: string) {
		const form = this.parentGroup.get(this.formGroupName) as FormGroup;
		const form_field = form.get(field);
		if (!form_field) {
			return false;
		}
		if (!form_field.validator) {
			return false;
		}
		const validator = form_field.validator({} as AbstractControl);
		if (!validator) {
			return false;
		}
		return validator && validator['required'];
	}
	async getStates(countryIso3: string) {
		if (this.countries) {
			const country = this.countries.filter(
				(c: any) => c.iso3 === countryIso3
			);
			if (country && country.length == 1) {
				this.geoService.getStates(country[0]['id']).subscribe({
					next: async (res: any) => {
						this.states = await res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
					},
				});
			}
		}
	}
	async getCities(stateCode: string) {
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
			state: '',
		});
		this.states = [];
	}
	resetCity() {
		this.parentGroup.controls[this.formGroupName].patchValue({
			city: '',
		});
		this.cities = [];
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
				console.log("this.userLocaInfo", this.userLocaInfo);
				let country = this.countries.filter((x: any) => {
					return x.name == this.userLocaInfo.country.name;
				})
				this.selectedCountry = country[0].iso3;

				// get state
				await this.getStates(this.selectedCountry);
				setTimeout(() => {
					let state = this.states.filter((x: any) => {
						return x.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") == this.userLocaInfo.state.name;
					})
					this.selectedState = state[0].state_code;

					// get city
					this.getCities(this.selectedState);
				}, 1000);
			});
	}
}

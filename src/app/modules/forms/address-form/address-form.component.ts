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
	ngOnInit(): void {}
	constructor(private geoService: GeoService) {
		this.geoService
			.getCountries()
			.pipe(delay(100))
			.subscribe({
				next: (res: any) => {
					this.countries = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
					const selectedCountry =
						this.parentGroup.controls[this.formGroupName].get(
							'country'
						)?.value;
					if (selectedCountry) {
						this.getStates(selectedCountry);
					}
				},
			});
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
	getStates(countryIso3: string) {
		if (this.countries) {
			const country = this.countries.filter(
				(c: any) => c.iso3 === countryIso3
			);
			if (country && country.length == 1) {
				this.geoService.getStates(country[0]['id']).subscribe({
					next: (res: any) => {
						this.states = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
					},
				});
			}
		}
	}
	getCities(stateCode: string) {
		if (this.states) {
			const state = this.states.filter(
				(s: any) => s.state_code === stateCode
			);
			if (state && state.length == 1) {
				this.geoService.getCities(state[0]['id']).subscribe({
					next: (res: any) => {
						this.cities = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
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
	}
	resetCity() {
		this.parentGroup.controls[this.formGroupName].patchValue({
			city: '',
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

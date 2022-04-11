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
        next: (res) => {
          this.countries = res;
          const selectedCountry =
            this.parentGroup.controls[this.formGroupName].get('country')?.value;
          if (selectedCountry) {
            this.getStates(selectedCountry);
          }
        },
      });
  }
  getStates(countryIso3: string) {
    if (this.countries) {
      const country = this.countries.filter((c: any) => c.iso3 === countryIso3);
      if (country && country.length == 1) {
        this.geoService.getStates(country[0]['id']).subscribe({
          next: (res) => {
            this.states = res;
          },
        });
      }
    }
  }
  getCities(stateCode: string) {
    if (this.states) {
      const state = this.states.filter((s: any) => s.state_code === stateCode);
      if (state && state.length == 1) {
        this.geoService.getCities(state[0]['id']).subscribe({
          next: (res) => {
            this.cities = res;
          },
        });
      }
    }
  }
  stateOptionIsOpened() {
    if (!this.states) {
      const selectedCountry =
        this.parentGroup.controls[this.formGroupName].get('country')?.value;
      if (selectedCountry) {
        this.getStates(selectedCountry);
      }
    }
  }
  cityOptionIsOpened() {
    if (!this.cities) {
      const selectedState =
        this.parentGroup.controls[this.formGroupName].get('state')?.value;
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
}

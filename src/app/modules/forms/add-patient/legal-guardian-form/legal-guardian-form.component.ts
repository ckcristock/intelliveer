import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from '@config/index';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems, addPatientQuickMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { GeoService } from '@services/global-data/public/geo/geo.service';
import { delay, filter, map } from 'rxjs';


@Component({
  selector: 'app-legal-guardian-form',
  templateUrl: './legal-guardian-form.component.html',
  styleUrls: ['./legal-guardian-form.component.scss']
})
export class LegalGuardianFormComponent implements OnInit {

  @ViewChild('legalGuardRadio1') legalGuardRadio1!: ElementRef;
  @ViewChild('legalGuardRadio2') legalGuardRadio2!: ElementRef;
  @ViewChild('legalGuardRadio3') legalGuardRadio3!: ElementRef;

  phoneTypes: any = {
    phone: ""
  }
  countries: any;
  states: any;
  cities: any;

  callersInfo: any = {
    phoneNumber: "",
    firstName: "",
    lastName: "",
    callerSelfPatient: false,
    callerLegarGuar: true,
  };

  legalGuardian: any = {
    relatiToPatient: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    priPhoneNumb: "",
    typePhone: "",
    email: ""
  };

  legalGuardianArray: any = {
    relatiToPatient: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    priPhoneNumb: "",
    typePhone: "",
    email: ""
  };

  radioLG: number = 1;

  menuItemsOfCordinate: IMenuItem[] = addPatientCordinateMenuItems;
  menuItemsOfQuickAdd: IMenuItem[] = addPatientQuickMenuItems;
  Form!: FormGroup;
  @Input() parentGroup!: FormGroup;
  @Input() formGroupName!: string;
  @Input() formData: any | undefined = undefined;
  @Input() tab: string = "";
  @Input() legalGuardians: any[] = [];
  @Input() patientPage!: number;
  showButtonSaveCancel: boolean = false;
  openTextAreaVar: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,
    private http: HttpClient,
    private geoService: GeoService,
    private addPatientServ: AddPatientService,) {
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

  async ngOnInit() {
    this.getDataLegaGuarCaller();
    this.initForm(this.formData);
    this.getStaticData();
    this.getCountries();
    this.getUSA();
  }

  ngOnChanges() {
    for (let i = 0; i < this.legalGuardians.length; i++) {
      if (this.legalGuardians[i].selected) {
        this.legalGuardian.firstName = this.legalGuardians[i].firstName;
        this.legalGuardian.lastName = this.legalGuardians[i].lastName;
      }
    }
  }

  async ngAfterViewInit() {
    this.radioLG = JSON.parse(localStorage.getItem(`legalGuardianPatie${this.patientPage}`) || '[]');
    setTimeout(() => {
      this.checkRadiosStatus();
    }, 20);
  }

  async checkRadiosStatus() {

    //Insurance 1 Radio
    if (this.radioLG == 0) {
      this.radioLG = 1;
    }
    if (this.legalGuardRadio1 != null) {
      if (this.radioLG == 1) {
        this.legalGuardRadio1.nativeElement.checked = true;
        this.radioLGuargFunct(this.radioLG);
      } else if (this.radioLG == 2) {
        this.legalGuardRadio2.nativeElement.checked = true;
        this.radioLGuargFunct(this.radioLG);
      } else if (this.radioLG == 3) {
        this.legalGuardRadio3.nativeElement.checked = true;
        this.radioLGuargFunct(this.radioLG);
      }
    }

  }

  async getDataLegaGuarCaller() {

    this.legalGuardianArray = await this.addPatientServ.getLegalGuardCWP(1);
    console.log("legaaaaaal", this.legalGuardianArray);

    if (this.legalGuardianArray != null) {
      this.legalGuardian.firstName = this.legalGuardianArray.firstName;
      this.legalGuardian.lastName = this.legalGuardianArray.lastName;
    }

    this.callersInfo = await this.addPatientServ.getCallerInfoCWP();
    console.log("caller", this.callersInfo);

    if (this.callersInfo.callerLegarGuar == true) {
      this.legalGuardian.firstName = this.callersInfo.firstName;
      this.legalGuardian.lastName = this.callersInfo.lastName;
    }
  }

  continueToDentist() {
    if (this.tab == "coordWithProspect") {
      this.addPatientServ.setLegalGuardCWP(this.legalGuardian, 1);
      let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
      visitedArray.push("Legal Guardian");
      localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
      this.router.navigate([this.menuItemsOfCordinate[3].url]);

    } else if (this.tab == "quickAdd") {
      let visitedArrayQuick: any = JSON.parse(localStorage.getItem("visitedArrayQuick") || '[]');
      visitedArrayQuick.push("Legal Guardian");
      localStorage.setItem("visitedArrayQuick", JSON.stringify(visitedArrayQuick));
      this.router.navigate([this.menuItemsOfQuickAdd[2].url]);
    }
  }

  initForm(data?: any) {
    data = data || {};
    this.Form = this.fb.group({
      lName: [data?.lName || '', Validators.required],
      lgName: [data?.lgName || '', Validators.required],
      state: [data?.state || ''],
      city: [data?.state || ''],
    });
  }

  save(data: any) {
    console.log(data);
  }

  showButtonSaveCancelFunc() {
    this.showButtonSaveCancel = true;
  }

  closeSaveCancelFunc() {
    this.openTextAreaVar = false;
    this.showButtonSaveCancel = false;
  }

  openTextarea() {
    this.openTextAreaVar = true;
    this.showButtonSaveCancel = true;
  }

  getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/global-data/static-types`)
      .subscribe({
        next: (data) => {
          this.phoneTypes = data;
          console.log("this.phoneTypes", this.phoneTypes);

        },
        error: () => { },
        complete: () => { }
      });
  }


  getCountries() {
    this.geoService.getCountries().subscribe({
      next: (res) => {
        this.countries = res;
      }
    });
  }

  getStates(countryIso3: any) {
    console.log("country:", countryIso3.value);

    if (this.countries) {
      const country = this.countries.filter(
        (c: any) => c.iso3 === countryIso3.value
      );
      if (country && country.length == 1) {
        this.geoService.getStates(country[0]['id']).subscribe({
          next: (res: any) => {
            this.resetState();
            this.states = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
          },
        });
      }
    }
  }

  getCities(stateCode: string) {
    console.log("Citiiiies -stateCode", stateCode);

    if (this.states) {
      const state = this.states.filter(
        (s: any) => s.state_code === stateCode
      );
      console.log("stateConst", state);

      if (state && state.length == 1) {
        console.log("citiesValues IIIIF");

        this.geoService.getCities(state[0]['id']).subscribe({
          next: (res: any) => {
            this.resetCity();
            this.cities = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
            console.log("citiesValues", this.cities);
          },
        });
      }
    }
  }

  getUSA() {
    this.geoService.getCountries().subscribe({
      next: (res) => {
        this.countries = res;
        const country = this.countries.filter(
          (c: any) => c.iso3 === 'USA'
        );
        if (country && country.length == 1) {
          this.geoService.getStates(country[0]['id']).subscribe({
            next: (res: any) => {
              this.states = res.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1);
            },
          });
        }
      }
    });
  }

  resetState() {
    this.Form.patchValue({
      state: '',
    });
  }
  resetCity() {
    this.Form.patchValue({
      city: '',
    });
  }

  changeSelect(lgIndex: number, value: boolean) {
    if (this.legalGuardians[lgIndex].activated) {
      for (let i = 0; i < this.legalGuardians.length; i++) {
        if (i == lgIndex && !this.legalGuardians[i].selected) {
          this.legalGuardians[i].selected = true;
        } else {
          this.legalGuardians[i].selected = false;
          this.legalGuardian.firstName = "";
          this.legalGuardian.lastName = "";
        }
      }
    }

    for (let i = 0; i < this.legalGuardians.length; i++) {
      if (this.legalGuardians[i].selected) {
        this.legalGuardian.firstName = this.legalGuardians[i].firstName;
        this.legalGuardian.lastName = this.legalGuardians[i].lastName;
      }
    }
  }

  active(lgIndex: number, value: boolean) {
    for (let i = 0; i < this.legalGuardians.length; i++) {
      if (i == lgIndex) {
        if (!this.legalGuardians[i].activated) {
          this.legalGuardians[i].activated = true;
        } else {
          this.legalGuardians[i].activated = false;
          if (this.legalGuardians[i].selected) {
            this.legalGuardians[i].selected = false;
            this.legalGuardian.firstName = "";
            this.legalGuardian.lastName = "";
          }
        }
      }
    }
  }

  async radioLGuargFunct(value: number) {
    this.radioLG = value;
    localStorage.setItem(`legalGuardianPatie${this.patientPage}`, JSON.stringify(this.radioLG));
    this.legalGuardian.firstName = "";
    this.legalGuardian.lastName = "";

    if (this.radioLG == 1) {
      for (let i = 0; i < this.legalGuardians.length; i++) {
        if (this.legalGuardians[i].selected) {
          this.legalGuardian.firstName = this.legalGuardians[i].firstName;
          this.legalGuardian.lastName = this.legalGuardians[i].lastName;
        }
      }
    } else if (this.radioLG == 2) {
      let LGLocStora = await this.addPatientServ.getLegalGuardCWP(1);
      this.legalGuardian.firstName = LGLocStora.firstName;
      this.legalGuardian.lastName = LGLocStora.lastName;


    } else if (this.radioLG == 3) {
      //Push dentist to API
    }

  }
}

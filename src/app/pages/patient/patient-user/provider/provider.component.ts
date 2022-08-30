import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { BusinessGroupDropdownService, SelectedBusinessGroup } from '@services/business-group-dropdown/business-group-dropdown.service';
import { DentistService } from '@services/patient/dentist/dentist.service';
import { PaymentPartyService } from '@services/patient/family/payment-party/payment-party.service';

@Component({
	selector: 'app-provider',
	templateUrl: './provider.component.html',
	styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
	searchFocus: boolean = false;
	showSelectedPatient: boolean = false;
	selectedPatient: any;
	showList: boolean = false;
	patientList: any[] = [];
	searchWord: string = '';
  businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
  dentistSearchLst: any[] = [];
  dentistList: any[] = [];
  menuItems: any[] = [];

	constructor(private router: Router, private dentistService: DentistService,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService) {
      this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getOrgBgId();
					}
				});
    }

	ngOnInit(): void {
    this.dentistSearchLst = this.dentistList;
	}

	handleSearchResultsClick(patient: any) {
		if (patient.active) {
			this.searchFocus = false;
			this.showSelectedPatient = true;
			this.selectedPatient = patient;
			this.searchWord = patient.user;
		}
	}

	fetchSearch($event: any): void {
		if ($event.target.value === '') {
      this.dentistSearchLst = this.dentistList;
		}
		this.dentistSearchLst = this.dentistList.filter((paitent: any) => {
			return paitent.user.profile.firstName
				.toLowerCase()
				.startsWith($event.target.value.toLowerCase());
		});
	}

	addAsProvider() {
		let obj = {
			image: '',
			user: this.selectedPatient.user,
			practiceName: 'Practice Name',
			specialty: 'Specialty',
			pemail: 'abc@gmail.com',
			phone: '8484848484',
			email: 'abcd@gmail.com',
			mutualPatient: '5'
		};
		this.dentistList.push(obj);
	}

  getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.getList();
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
				this.getList();
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
			this.getList();
		}
	}

	onAdd() {
		this.router.navigate([
			'/dashboard/patient/patient-user/provider/add'
		]);
	}

  getList() {
		this.dentistService.getList(this.bgId).subscribe((list: any) => {
			this.dentistList = list;
			this.dentistSearchLst = this.dentistList;
		});
	}
}

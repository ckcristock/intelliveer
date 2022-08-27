import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import {BusinessGroupDropdownService,SelectedBusinessGroup} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { InsuranceSubscriberService } from '@services/patient/family/insurance-subscriber/insurance-subscriber.service';

@Component({
	selector: 'app-insurance-subscriber',
	templateUrl: './insurance-subscriber.component.html',
	styleUrls: ['./insurance-subscriber.component.scss']
})
export class InsuranceSubscriberComponent implements OnInit {
	form: FormGroup;
	searchFocus: boolean = false;
	showSelectedPatient: boolean = false;
	selectedPatient: any;
	showList: boolean = false;
	showRelationList: boolean = false;

	patientList: any[] = [];
	searchWord: string = '';
	relationships: any[] = [
		{ id: 0, value: 'Father' },
		{ id: 1, value: 'Mother' },
		{ id: 2, value: 'Sister' },
		{ id: 3, value: 'Brother' }
	];
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	menuItems: any[] = [];
	insuranceSubscriberSearchLst: any[] = [];
	insuranceSubscriberList: any[] = [];

	constructor(
		private router: Router,
		private patientUserServ: PatientUserService,
		private globalRoutes: GlobalRoutesService,
		private fb: FormBuilder,
		private insuranceSubscriberService: InsuranceSubscriberService,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService
	) {
		this.form = this.fb.group({
			relationship: ['']
		});
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
		this.insuranceSubscriberSearchLst = this.insuranceSubscriberList;
	}

	handleSearchResultsClick(patient: any) {
		console.log(patient);
		if (patient.active) {
			this.searchFocus = false;
			this.showSelectedPatient = true;
			this.selectedPatient = patient;
			this.searchWord = patient.user;
		}
	}

	fetchSearch($event: any): void {
		if ($event.target.value === '') {
			this.insuranceSubscriberSearchLst = this.insuranceSubscriberList;
		}
		this.insuranceSubscriberSearchLst = this.insuranceSubscriberList.filter(
			(paitent: any) => {
				return paitent.profile.firstName
					.toLowerCase()
					.startsWith($event.target.value.toLowerCase());
			}
		);
	}

	addAsInsuranceSubscriber() {
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
		this.insuranceSubscriberList.push(obj);
	}

	goToAddInsuranSubs() {
		console.log('Form', this.form);
		this.patientUserServ.setInsuSubscToPati(this.form.value.relationship);
		this.router.navigate([
			this.globalRoutes.getPatientUserRoutes()[3].child[0].url
		]);
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
			'/dashboard/patient/patient-user/insurance-subscriber/add'
		]);
	}

	getList() {
		this.insuranceSubscriberService
			.getList(this.bgId)
			.subscribe((list: any) => {
				this.insuranceSubscriberList = list;
				this.insuranceSubscriberSearchLst =
					this.insuranceSubscriberList;
			});
	}
}

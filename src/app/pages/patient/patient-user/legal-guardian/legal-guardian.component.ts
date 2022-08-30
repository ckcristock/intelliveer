import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { LegalGuardianService } from '@services/patient/family/legal-guardian/legal-guardian.service';

@Component({
	selector: 'app-legal-guardian',
	templateUrl: './legal-guardian.component.html',
	styleUrls: ['./legal-guardian.component.scss']
})
export class LegalGuardianComponent implements OnInit {
	form: FormGroup;
	searchFocus: boolean = false;
	showSelectedPatient: boolean = false;
	selectedPatient: any;
	showList: boolean = false;
	showRelationList: boolean = false;
	businessGroupDropdownSupscription: any;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	legalGuardianSearchLst: any[] = [];
	menuItems: any[] = [];

	legalGuardianList: any[] = [];
	patientList: any[] = [];
	searchWord: string = '';
	relationships: any[] = [
		{ id: 0, value: 'Father' },
		{ id: 1, value: 'Mother' },
		{ id: 2, value: 'Sister' },
		{ id: 3, value: 'Brother' }
	];

	constructor(
		private router: Router,
		private patientUserServ: PatientUserService,
		private globalRoutes: GlobalRoutesService,
		private fb: FormBuilder,
		private legalGuardianService: LegalGuardianService,
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
		this.legalGuardianSearchLst = this.legalGuardianList;
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
			this.legalGuardianSearchLst = this.legalGuardianList;
		}
		this.legalGuardianSearchLst = this.legalGuardianList.filter(
			(paitent: any) => {
				return paitent.user
					.toLowerCase()
					.startsWith($event.target.value.toLowerCase());
			}
		);
	}

	addAsLegalGuardian() {
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
		this.legalGuardianList.push(obj);
	}

	onAdd() {
		this.router.navigate([
			'/dashboard/patient/patient-user/legal-guardian/add'
		]);
	}

	goToAddLegalGuard() {
		console.log('Form', this.form);
		console.log('to seeeeee', this.form.value.relationship);

		this.patientUserServ.setLegalGuardToPati(this.form.value.relationship);
		this.router.navigate([
			this.globalRoutes.getPatientUserRoutes()[1].child[0].url
		]);
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let user = this.authService.getLoggedInUser();
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.getLegalGuardianList();
			} else {
				this.bgId = this.selectedBusinessGroup?.bgId;
				this.getLegalGuardianList();
			}
		} else {
			this.bgId = this.selectedBusinessGroup?.bgId;
			this.getLegalGuardianList();
		}
	}

	getLegalGuardianList() {
		this.legalGuardianService
			.getLegalGuardianList(this.bgId)
			.subscribe((list: any) => {
				this.legalGuardianList = list;
				this.legalGuardianSearchLst = this.legalGuardianList;
			});
	}
}

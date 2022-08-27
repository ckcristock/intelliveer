import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Subscription } from 'rxjs';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';
@Component({
	selector: 'app-practice',
	templateUrl: './practice.component.html',
	styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
	data: any;
	businessGroupDropdownSupscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId: any;
	searchText: any;
	searchCount: number = 0;
	dataBackup: any;
	practiceEdit:any;
	practiceAdd:any;
	practiceDelete:any;
	constructor(
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private practiceService: PracticeService,
		private router: Router,
		private searchString: SearchStringPipePipe,
		private globalRoutes: GlobalRoutesService
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getUserOrdID();
					}
				});
	}

	ngOnInit(): void {
		this.checkPermission();
	 }
	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
	}
	fetchList() {
		if (this.selectedBusinessGroup) {
			this.practiceService
				.getPractices(this.selectedBusinessGroup.bgId)
				.subscribe({
					next: (res) => {
						this.data = res;
					},
					error: () => { },
				});
		}
	}
	fetchListSuperUser(bgId: any) {
		this.practiceService
			.getPractices(bgId)
			.subscribe({
				next: (res) => {
					this.data = res;
				},
				error: () => { },
			});
	}
	delete(id: string) {
		if (!this.bgId) {
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup && id) {
			this.practiceService
				.deletePractice(this.bgId, id)
				.subscribe({
					next: (res) => {
						this.getUserOrdID();
					},
					error: () => { },
				});
		}
	}
	/** Add new Practice */
	addPractice() {
		this.router.navigate(['/dashboard/settings/onboarding/practice/add']);
	}
	getUserOrdID() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		if (bgOrdID == null) {
			console.log(bgOrdID)
			this.fetchListSuperUser('intelliveer')
			this.bgId = 'intelliveer';
		} else {
			this.bgId = '';
			this.fetchList();
		}
	}

	search() {
		this.searchCount++;
		if (this.searchCount == 1) {
			this.dataBackup = this.data;
		}
		this.data = this.dataBackup;
		let dataFiltered = this.data.filter((x: any) => {
			return x._id.toLowerCase().includes(this.searchText.toLowerCase()) || x.name.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.firstName.toLowerCase().includes(this.searchText.toLowerCase())
				|| x.contactPerson.lastName.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.phone.number.toLowerCase().includes(this.searchText.toLowerCase())
				|| x.createdAt.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
				(x.contactPerson.firstName.toLowerCase().concat(" ").concat(x.contactPerson.lastName.toLowerCase())).includes(this.searchText.toLowerCase())
				;
		});
		this.data = dataFiltered;
	}
	checkPermission(){
		let practice = this.globalRoutes.getSettingsOnboardingRoutes();
		let getpractice = this.searchString.transform('title',practice,"Practice");
		this.practiceAdd = this.searchString.transform('title',getpractice[0].child,'Add');
		this.practiceEdit = this.searchString.transform('title',getpractice[0].child,'Edit');
		this.practiceDelete = this.searchString.transform('title',getpractice[0].child,'Delete');
	}
}

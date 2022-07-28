import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-practice',
	templateUrl: './practice.component.html',
	styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
	data: any;
	businessGroupDropdownSupscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId:any
	constructor(
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private practiceService: PracticeService,
		private router: Router,
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

	ngOnInit(): void {}
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
					error: () => {},
				});
		}
	}
	fetchListSuperUser(bgId:any){
		this.practiceService
			.getPractices(bgId)
			.subscribe({
				next: (res) => {
					this.data = res;
				},
				error: () => {},
			});
	}
	delete(id: string) {
		if(!this.bgId){
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup && id) {
			this.practiceService
				.deletePractice(this.bgId, id)
				.subscribe({
					next: (res) => {
						this.getUserOrdID();
					},
					error: () => {},
				});
		}
	}
	/** Add new Practice */
	addPractice(){
		this.router.navigate(['/dashboard/settings/onboarding/practice/add']);
    }
	getUserOrdID(){
		let bgOrdID:any = localStorage.getItem('selected_business_group');
		if(bgOrdID == null){
		  console.log(bgOrdID)
		  this.fetchListSuperUser('intelliveer')
		  this.bgId = 'intelliveer';
		}else{
			this.bgId= '';
		  this.fetchList();
		}
	  }
}

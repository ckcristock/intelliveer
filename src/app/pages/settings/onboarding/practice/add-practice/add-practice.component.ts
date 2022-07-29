import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-add-practice',
	templateUrl: './add-practice.component.html',
	styleUrls: ['./add-practice.component.scss']
})
export class AddPracticeComponent implements OnInit, OnDestroy {
	bgDropdownSubscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId:any;
	constructor(
		private router: Router,
		private bgDropdownService: BusinessGroupDropdownService,
		private practiceLocation: PracticeService
	) {
		this.bgDropdownSubscription = this.bgDropdownService
			.businessGroup()
			.subscribe((bg) => {
				if (bg) {
					this.selectedBusinessGroup = bg;
					this.getUserOrdID()
				}
			});
	}

	ngOnInit(): void {}
	ngOnDestroy(): void {
		this.bgDropdownSubscription.unsubscribe();
	}
	create(data: any) {
		if(!this.bgId){
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup) {
			data['slug'] = '';
			this.practiceLocation
				.createPractice(this.bgId, data)
				.subscribe({
					next: (res) => {
						this.router.navigate([
							'/dashboard/settings/onboarding/practice'
						]);
					},
					error: () => {}
				});
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/settings/onboarding/practice']);
	}
	getUserOrdID(){
		let bgOrdID:any = localStorage.getItem('selected_business_group');
		if(bgOrdID == null){
		  this.bgId = 'intelliveer';
		}else{
		  this.bgId = null;
		}
	  }
}

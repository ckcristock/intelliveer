import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-edit-practice',
	templateUrl: './edit-practice.component.html',
	styleUrls: ['./edit-practice.component.scss']
})
export class EditPracticeComponent implements OnInit, OnDestroy {
	id: string | undefined;
	data: any;
	bgDropdownSubscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId:any
	constructor(
		private router: Router,
		private activeRoute: ActivatedRoute,
		private bgDropdownService: BusinessGroupDropdownService,
		private practiceLocation: PracticeService
	) {
		this.bgDropdownSubscription = this.bgDropdownService
			.businessGroup()
			.subscribe((bg) => {
				if (bg) {
					this.selectedBusinessGroup = bg;
					this.getUserOrdID();
				}
			});
		this.bgDropdownService.disable(true);
	}

	ngOnInit(): void {
		this.activeRoute.params.subscribe((params) => {
			if (params['id']) {
				this.id = params['id'];
				this.getPractice(params['id']);
			}
		});
	}
	ngOnDestroy(): void {
		this.bgDropdownService.disable(false);
		this.bgDropdownSubscription.unsubscribe();
	}
	getPractice(id: string) {
		if(!this.bgId){
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup && id) {
			this.practiceLocation
				.getPractice(this.bgId, id)
				.subscribe({
					next: (res) => {
						this.data = res;
					},
					error: () => {}
				});
		}
	}
	update(data: any) {
		if(!this.bgId){
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.id && this.selectedBusinessGroup) {
			data['slug'] = '';
			this.practiceLocation
				.updatePractice(this.bgId, this.id, data)
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

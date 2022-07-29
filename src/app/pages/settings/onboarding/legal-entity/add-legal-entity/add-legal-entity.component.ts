import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LegalEntityService } from '@services/onboarding/legal-entity/legal-entity.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-add-legal-entity',
	templateUrl: './add-legal-entity.component.html',
	styleUrls: ['./add-legal-entity.component.scss']
})
export class AddLegalEntityComponent implements OnInit, OnDestroy {
	bgDropdownSubscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	bgId:any;
	constructor(
		private router: Router,
		private bgDropdownService: BusinessGroupDropdownService,
		private legalEntityService: LegalEntityService
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
	createLegalEntity(data: any) {
		if(!this.bgId){
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup) {
			data['slug'] = '';
			this.legalEntityService
				.createLegalEntity(this.bgId, data)
				.subscribe({
					next: (res) => {
						this.router.navigate([
							'/dashboard/settings/onboarding/legal-entity'
						]);
					},
					error: () => {}
				});
		}
	}
	handleCancel() {
		this.router.navigate(['/dashboard/settings/onboarding/legal-entity']);
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

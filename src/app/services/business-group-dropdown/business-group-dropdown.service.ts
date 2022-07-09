import { Injectable } from '@angular/core';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface SelectedBusinessGroup {
	bgId: string;
	disabled: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class BusinessGroupDropdownService {
	private selectedBG: SelectedBusinessGroup | undefined;
	private disabled: boolean = false;

	private businessGroups = new BehaviorSubject<any>([]);
	private selectedBusinessGroup = new BehaviorSubject<
		SelectedBusinessGroup | undefined
	>(undefined);
	constructor(private businessGroupService: BusinessGroupService,
		private cookieService: CookieService,
		 ) {
		this._getBusinessGroups();
	}
	businessGroup(): Observable<SelectedBusinessGroup | undefined> {
		return this.selectedBusinessGroup.asObservable();
	}
	getBusinessGroups(): Observable<any> {
		return this.businessGroups.asObservable();
	}
	setSelectedBusinessGroup(bg: string) {
		if (bg) {
			localStorage.setItem('selected_business_group', bg);
			this.selectedBG = {
				bgId: bg,
				disabled: this.disabled
			};
			this.selectedBusinessGroup.next(this.selectedBG);
		}
	}
	reload(): void {
		this._getBusinessGroups();
	}
	disable(val: boolean): void {
		if (this.selectedBG) {
			this.disabled = val;
			this.selectedBusinessGroup.next({
				bgId: this.selectedBG.bgId,
				disabled: val
			});
		}
	}
	private _getBusinessGroups() {
	    let bgId:any =	localStorage.getItem('selected_business_group');

		if(bgId == ''){
			const orgId:any =this.cookieService.get('orgId');
			if(orgId != 'intelliveer'){
				this.disabled = true;
			}else{
				this.disabled = false
			}
			bgId = orgId;
		}
		this.businessGroupService.getBusinessGroups().subscribe({
			next: (data: any) => {
				if (data && data.length > 0) {
					this.selectedBG = {
						bgId: bgId,
						disabled: this.disabled
					};
					console.log(this.selectedBG);
					this.selectedBusinessGroup.next(this.selectedBG);
					this.businessGroups.next(data);
				}
			},
			error: () => {},
			complete: () => {}
		});
	}	
}

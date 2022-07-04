import { Injectable } from '@angular/core';
import { BusinessGroupService } from '@services/onboarding/business-group/business-group.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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
	constructor(private businessGroupService: BusinessGroupService) {
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
		this.businessGroupService.getBusinessGroups().subscribe({
			next: (data: any) => {
				if (data && data.length > 0) {
					this.selectedBG = {
						bgId: data[0]?._id,
						disabled: this.disabled
					};
					this.selectedBusinessGroup.next(this.selectedBG);
					this.businessGroups.next(data);
				}
			},
			error: () => {},
			complete: () => {}
		});
	}
}

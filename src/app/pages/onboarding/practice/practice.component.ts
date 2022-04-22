import { Component, OnDestroy, OnInit } from '@angular/core';
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
	constructor(
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private practiceService: PracticeService
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.fetchList();
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
	delete(id: string) {
		if (this.selectedBusinessGroup && id) {
			this.practiceService
				.deletePractice(this.selectedBusinessGroup.bgId, id)
				.subscribe({
					next: (res) => {
						this.fetchList();
					},
					error: () => {},
				});
		}
	}
}

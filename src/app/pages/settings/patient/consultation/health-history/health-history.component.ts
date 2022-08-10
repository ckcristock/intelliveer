import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-health-history',
	templateUrl: './health-history.component.html',
	styleUrls: ['./health-history.component.scss']
})
export class HealthHistoryComponent implements OnInit {
	categories: any[] = ['Allergies', 'Category 1', 'Category 2', 'Category 3'];
	conditions: any[] = [
		{
			name: 'Latex',
			alert: true
		},
		{
			name: 'Metal',
			alert: false
		},
		{
			name: 'Amoxicillin',
			alert: true
		}
	];
	conditionType: any;

	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {}

	public row: any;

	endMove($event: any) {
		let children = Array.from($event.target.parentNode.parentNode.children);
		if (
			children.indexOf($event.target.parentNode) >
			children.indexOf(this.row)
		)
		{
			$event.target.parentNode.after(this.row);
			console.log()
		}
		else $event.target.parentNode.before(this.row);
	}

	move($event: any) {
		this.row = $event.target;
	}

	openCategory(content: any) {
		this.modalService.open(content, { centered: true });
	}

	openCondition(content: any) {
		this.modalService.open(content, { centered: true });
	}

	onConditionTypeChange($event: any) {
		this.conditionType = $event.target.value;
	}
}

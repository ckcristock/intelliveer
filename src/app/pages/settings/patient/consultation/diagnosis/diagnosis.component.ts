import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  categories: any[] = ['Malocclusion', 'Overjet', 'Overbite', 'Category 4'];
  values: any[] = [
    {
			name: 'Too much overjet',
      type: 'mm',
			chartImpact: true,
      chartAction: 'Option 1, Option 2, Option 3'
		},
		{
			name: 'Normal overjet',
      type: 'Tooth',
			chartImpact: false,
      chartAction: ''
		},
    {
			name: 'Too less overjet',
      type: 'Tooth',
			chartImpact: true,
      chartAction: 'Option 2'
		},
  ];
  public row: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  endMove($event: any) {
		let children = Array.from($event.target.parentNode.parentNode.children);
		if (
			children.indexOf($event.target.parentNode) >
			children.indexOf(this.row)
		)
			$event.target.parentNode.after(this.row);
		else $event.target.parentNode.before(this.row);
	}

	move($event: any) {
		this.row = $event.target;
	}

	openCategory(content: any) {
		this.modalService.open(content, { centered: true });
	}

	openValue(content: any) {
		this.modalService.open(content, { centered: true });
	}

}

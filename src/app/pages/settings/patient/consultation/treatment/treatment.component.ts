import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit {

  treatmentPhase: any[] = ['Comprehenssive', 'Phase I', 'Limited', 'Aligners', 'Observation'];
  bracesType: any[] = ['Conventional Metal', 'Ceramic', 'Self-Ligating', 'Lingual'];
  allignersType: any[] = ['Invisalign', 'Clear Correct', 'Sure Smile', 'Clarity'];
  Prerequisite: any[] = ['Hygiene Improvement', 'Restorations', 'CT Scan', 'Periodontal Clearance', 'Cavity Clearance', 'Perio Clearance', 'Dental work'];
  risks: any[] = ['Ankylosis', 'Root Resorption', 'Non-Vitality', 'Mobility', 'Gingival Recession'];
  adjunctive: any[] = ['Restorations', 'Frenectomy', 'Orthognathic Surgery', 'Surgical Exposure'];
  appliances: any[] = ['Upper Arch Bonding', 'Lower Arch Bonding', 'RPE', 'Nance Appliance', 'LLA'];
  brackets: any[] = ['Class II BV', 'Class III BV', 'Canine Substitution'];
  retention: any[] = ['Clear Retainer', 'Wire Retainer', 'Fix Retainer', 'Wrap around Retainer'];
  toothList: any[] = ['Upper tooth', 'Lower tooth'];
  jawsList: any[] = ['Upper jaw', 'Lower jaw'];
	stepsList: any[] = [
		{
			name: 'Extractions',
			description: 'Extractions of <TOOTH> by <PROVIDER> on <WHEN>',
			fav: true,
			canda: 'Consents 1',
      risk: 'Root Resorption'
		},
		{
			name: 'Growth modification',
			description: 'Growth modification <APPLIANCE> to improve <JAW> growth',
			fav: false,
			canda: 'Agreements 1',
      risk: 'Ankylosis'
		},
		{
			name: 'Extractions',
			description: 'Extractions of <TOOTH> by <PROVIDER> on <WHEN>',
			fav: true,
			canda: 'Agreements 3',
      risk: 'Non-Vitality'
		}
	];
	public row: any;
  addStepList: any[] = [1];
  canda: any[] = ['Consents 1', 'Agreements 1', 'Consents 2', 'Agreements 2'];

	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {}

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

	openModel(content: any) {
		this.modalService.open(content, { centered: true });
	}

	openValue(content: any) {
		this.modalService.open(content, { centered: true });
	}

}

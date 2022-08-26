import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';

@Component({
	selector: 'app-ortho-benef',
	templateUrl: './ortho-benef.component.html',
	styleUrls: ['./ortho-benef.component.scss']
})
export class OrthoBenefComponent implements OnInit {

	Form: FormGroup | undefined;
	@Input() formData: any | undefined = undefined;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Eligibility', id: 'eligibility' },
		{ title: 'COB/Assignment', id: 'cobaddig' },
		{ title: 'Deductible', id: 'deductible' },
		{ title: 'Benefits', id: 'benefits' },
		{ title: 'Pre-authorization ', id: 'preauth' },
		{ title: 'BIlling & Payments', id: 'billingpaym' },
	];
	years: any[] = [
		{ id: 1, name: "Calendar" },
		{ id: 2, name: "Fiscal" }
	];
	selectedYear: any;

	constructor(private fb: FormBuilder,
		private insuranceServ: InsuranceService,) { }

	ngOnInit(): void {
		this.initForm(this.formData);
		this.insuranceServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				console.log(result)
				if (!this.Form?.pristine) {
					console.log("hiiiiii", event);
					console.log("status", this.Form?.pristine);
					this.insuranceServ.setOrthodonticBenfNotPristine(true);
				}
			}
		);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			calendarFiscal: [data?.calendarFiscal || '',],
			beginDate: [data?.beginDate || '',],
			endDateEligi: [data?.endDateEligi || '',],
			monthtoMonEligi: [data?.monthtoMonEligi || '',],
			ageLimitSubsc: [data?.ageLimitSubsc || '',],
			ageLimitDepenChild: [data?.ageLimitDepenChild || '',],
			ageLimitDepenStud: [data?.ageLimitDepenStud || '',],
			coordBenef: [data?.coordBenef || '',],
			assignBenef: [data?.assignBenef || '',],
			feesUCR: [data?.feesUCR || '',],
			feeSched: [data?.feeSched || '',],
			deducFam: [data?.deducFam || '',],
			deducRemaiFam: [data?.deducRemaiFam || '',],
			deducIndiv: [data?.deducIndiv || '',],
			deducRemaiIndiv: [data?.deducRemaiIndiv || '',],
			percenCoveOrtho: [data?.percenCoveOrtho || '',],
			whenEnd: [data?.whenEnd || '',],
			endDateDeduct: [data?.endDateDeduct || '',],
			maxTypeAnnual: [data?.maxTypeAnnual || '',],
			maxAmounInNet: [data?.maxAmounInNet || '',],
			maxAmounOutNet: [data?.maxAmounOutNet || '',],
			benefUsed: [data?.benefUsed || '',],
			remaninBenef: [data?.remaninBenef || '',],
		});
	}

	save(data: any) {
		// this.onSubmit.emit(data);
		this.insuranceServ.setOrthodonticBenfNotPristine(false);
	}
	cancel() {
		// this.onCancel.emit();
	}

	onSectionChange(sectionId: string) {
		this.currentSelection = sectionId;
	}
}



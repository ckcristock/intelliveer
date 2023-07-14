import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';

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
	isSaveButton: boolean = false;
	inEdit: boolean = false;
	FormDisable!: boolean;
	imageUpLoaderDisable: boolean = true;

	constructor(private fb: FormBuilder,
		private patientUserServ: PatientUserService,
		private addPatientServ: AddPatientService,
		private insuranceServ: InsuranceService,
		private onboardingServ: OnboardingService,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
	) { }

	ngOnInit(): void {
		this.initForm(this.formData);
		this.patientUserServ.setFalseAllNotPristine();
		this.addPatientServ.setFalseAllNotPristineCWP();
		this.insuranceServ.setFalseAllNotPristine();
		this.onboardingServ.setFalseAllNotPristine();
		this.Form?.statusChanges.subscribe(
			result => {
				if (!this.Form?.pristine) {
					this.insuranceServ.setOrthodonticBenfNotPristine(true);
				}
			}
		);
	}

	async ngAfterViewInit() {
		this.enableAndDisableInputs();
	}

	initForm(data?: any) {
		data = data || {};
		if (Object.keys(data).length != 0) {
			this.inEdit = true;
			this.FormDisable = true;
		} else if (Object.keys(data).length == 0) {
			this.inEdit = false;
			this.FormDisable = false;
		}
		this.inEdit = true; // delete this line when you get the information from the api, please
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

	checkPermission() {
		this.isSaveButton = true;
		this.enableAndDisableInputs();
		this.imageUpLoaderDisable = false;
	}

	enableAndDisableInputs() {
		if (this.inEdit) {
			if (!this.isSaveButton) {
				this.Form?.disable();
				this.FormDisable = true;
			} else if (this.isSaveButton) {
				this.Form?.enable();
				this.FormDisable = false;
			}
			this.addressFormService.setDisabledOrEnabled(this.FormDisable);
			this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
		}
	}
}



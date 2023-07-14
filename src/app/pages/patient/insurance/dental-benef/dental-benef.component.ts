import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { InsuranceService } from '@services/dashboard/patient/insurance/insurance.service';
import { PatientUserService } from '@services/dashboard/patient/patient-user/patient-user.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { OnboardingService } from '@services/settings/onboarding/onboarding.service';

@Component({
	selector: 'app-dental-benef',
	templateUrl: './dental-benef.component.html',
	styleUrls: ['./dental-benef.component.scss']
})
export class DentalBenefComponent implements OnInit {

	Form: FormGroup | undefined;
	@Input() formData: any | undefined = undefined;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Eligibility', id: 'eligibility' },
		{ title: 'COB/Assignment', id: 'cobaddig' },
		{ title: 'Deductible', id: 'deductible' },
		{ title: 'Dental Benefits', id: 'dentalBenef' },
		{ title: 'Frequencies', id: 'frequencies' },
		{ title: 'History', id: 'history' },
		{ title: 'General Provisions', id: 'generalProv' },
		{ title: 'Implant Benefits', id: 'implantBenef' },
	];
	years: any[] = [
		{ id: 1, name: "Calendar" },
		{ id: 2, name: "Fiscal" }
	];
	selectedYear: any;
	sepaMaximum: any = 1;
	deductive: any = 1;
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
				console.log(result)
				if (!this.Form?.pristine) {
					this.insuranceServ.setDentalBenfNotPristine(true);
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
			beginDateEligi: [data?.beginDateEligi || '',],
			endDateEligi: [data?.endDateEligi || '',],
			ageLimitSubsc: [data?.ageLimitSubsc || '',],
			ageLimitDependants: [data?.ageLimitDependants || '',],
			ageLimitDepenChild: [data?.ageLimitDepenChild || '',],
			ageLimitStudent: [data?.ageLimitStudent || '',],

			coordBenef: [data?.coordBenef || '',],
			assignBenef: [data?.assignBenef || '',],
			feesUCR: [data?.feesUCR || '',],
			feeSched: [data?.feeSched || '',],

			deducFam: [data?.deducFam || '',],
			deducRemaiFam: [data?.deducRemaiFam || '',],
			deducIndiv: [data?.deducIndiv || '',],
			deducRemaiIndiv: [data?.deducRemaiIndiv || '',],
			deducWaivedPrevent: [data?.deducWaivedPrevent || '',],

			preventDiagPercent: [data?.preventDiagPercent || '',],
			basicPercent: [data?.basicPercent || '',],
			majorPercent: [data?.majorPercent || '',],
			preventDiag: [data?.preventDiag || '',],
			basic: [data?.basic || '',],
			major: [data?.major || '',],

			dentalAnnualMax: [data?.dentalAnnualMax || '',],
			remaining: [data?.remaining || '',],
			restorative: [data?.restorative || '',],
			endo: [data?.endo || '',],
			perio: [data?.perio || '',],
			oralSurgery: [data?.oralSurgery || '',],
			basicIncluCheckbox: [data?.basicIncluCheckbox || '',],
			basicIncluOther: [data?.basicIncluOther || '',],
			crowns: [data?.crowns || '',],
			bridges: [data?.bridges || '',],
			dentures: [data?.dentures || '',],
			partials: [data?.oralSurgery || '',],
			implants: [data?.implants || '',],
			majorIncluCheckbox: [data?.majorIncluCheckbox || '',],
			majorIncluOther: [data?.majorIncluOther || '',],

			timeFrameExams: [data?.timeFrameExams || '',],
			exceptiExams: [data?.exceptiExams || '',],
			timeFrameProphy: [data?.timeFrameProphy || '',],
			exceptiProphy: [data?.exceptiProphy || '',],

			timeFramePerio: [data?.timeFramePerio || '',],
			exceptiPerio: [data?.exceptiPerio || '',],
			paidatPerio: [data?.paidatPerio || '',],

			timeFrameFMX: [data?.timeFrameFMX || '',],
			exceptiFMX: [data?.exceptiFMX || '',],
			timeFramePano: [data?.timeFramePano || '',],
			exceptiPano: [data?.exceptiPano || '',],

			timeFrameBWX: [data?.timeFrameBWX || '',],
			exceptiBWX: [data?.exceptiBWX || '',],

			timeFrameScalRoot: [data?.timeFrameScalRoot || '',],
			exceptiScalRoot: [data?.exceptiScalRoot || '',],

			timeFrameResto: [data?.timeFrameResto || '',],
			exceptiResto: [data?.exceptiResto || '',],
			timeFrameCrowns: [data?.timeFrameCrowns || '',],
			exceptiCrowns: [data?.exceptiCrowns || '',],

			timeFrameBridges: [data?.timeFrameBridges || '',],
			exceptiBridges: [data?.exceptiBridges || '',],
			timeFrameDentures: [data?.timeFrameDentures || '',],
			exceptiDentures: [data?.exceptiDentures || '',],

			timeFramePartials: [data?.timeFramePartials || '',],
			exceptiPartials: [data?.exceptiPartials || '',],

			historyFMX: [data?.historyFMX || '',],
			historyPano: [data?.historyPano || '',],
			historyProphy: [data?.historyProphy || '',],
			historyBWX: [data?.historyBWX || '',],

			fluorideAgeOf: [data?.fluorideAgeOf || '',],
			sealants: [data?.sealants || '',],
			paidAtGenerProv: [data?.paidAtGenerProv || '',],
		});
	}

	save(data: any) {
		// this.onSubmit.emit(data);
		this.insuranceServ.setDentalBenfNotPristine(false);
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { AuthService } from '@services/auth/auth.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { FieldValidationService } from '@services/global/field-validation/field-validation.service';
import { InsurancePlanService } from '@services/practice-tool/insurance/insurance-plan.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-insurance-group-information-form',
	templateUrl: './insurance-group-information-form.component.html',
	styleUrls: ['./insurance-group-information-form.component.scss']
})
export class InsuranceGroupInformationFormComponent implements OnInit {
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	Form: FormGroup | undefined;
	currentSelection: string = '';
	menuItems: any[] = [];
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;
	insuranceList: any[] = [];
	isSaveButton: boolean = false;
	legalEdit: any;
	inEdit: boolean = false;
	FormDisable!: boolean;
	imageUpLoaderDisable: boolean = true;
	mandAndRequiredFields: any[] = [
		{ name: 'insurancePlanId', type: 'dropdown', mandSaved: false, required: false, valid: false },
	];

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService,
		private insurancePlanService: InsurancePlanService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private contactPersonFormService: ContactPersonFormService,
		private fieldValidationServ: FieldValidationService,
		private addressFormService: AddressFormService,
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getOrgBgId();
					}
				});
	}

	ngOnInit(): void {
		this.initForm(this.formData);
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
		this.Form = this.fb.group({
			groupNumber: [data?.number || ''],
			groupName: [data?.name || ''],
			insurancePlanId: [data.insurancePlanId || '', Validators.required]
		});
	}

	onSectionChange(sectionId: any) {
		this.currentSelection = sectionId;
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let orgId = this.authService.getOrgId();
		let user: any = localStorage.getItem('permissionSet');
		user = JSON.parse(user);
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
				this.getInsurancePlanList('intelliveer');
			} else {
				this.bgId = bgOrdID;
				this.getInsurancePlanList(bgOrdID);
			}
		} else if (user?.isBGAdmin) {
			this.bgId = bgOrdID;
			this.getInsurancePlanList(bgOrdID);
		} else {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				bgOrdID = orgId;
			}
			this.bgId = bgOrdID;
			this.getInsurancePlanList(bgOrdID);
		}
	}

	getInsurancePlanList(bgId: any) {
		this.insurancePlanService.getList(bgId).subscribe((list: any) => {
			this.insuranceList = list;
		});
	}

	moveToOrthodontic() {
		this.save(this.Form?.value);
	}

	save(data: any) {
		this.mandAndRequiredFields.forEach(field => {
			field.mandSaved = true;
		});
		if (this.Form?.valid && !this.Form?.pristine) {
			let formObj = {
				insurancePlanId: data.insurancePlanId,
				name: data.groupName,
				number: data.groupNumber
				// orthodonticBenefits: {
				// 	eligibility: {
				// 		monthToMonthEligibility: '',
				// 		ageLimitForSubscriber: 0,
				// 		ageLimitForDependantChild: 0,
				// 		ageLimitForDependantStudent: 0
				// 	},
				// 	COBorAssignment: {
				// 		coordinationBenefitTypes: '',
				// 		assignmentOfBenefits: ''
				// 	},
				// 	deductible: {
				// 		deductibleFamily: '',
				// 		deductibleIndividual: '',
				// 		percentageCoveredForOrtho: ''
				// 	},
				// 	benefits: {
				// 		orthodonticMaximumTypeForLifetimeOrAnnual: '',
				// 		orthodonticMaximumAmountInNetwork: '',
				// 		orthodonticMaximumAmountOutNetwork: '',
				// 		isWorkInProgressCovered: false,
				// 		anyExclusionForOrtho: false
				// 	},
				// 	preAuthorization: {
				// 		isPreauthorizationMandatory: '',
				// 		preauthorizationNeedsToBeSubmitted: false,
				// 		preauthorizationRequirements: []
				// 	},
				// 	billingAndPayments: {
				// 		benefitsPaidAutomaticallyAfterInitialClaim: false,
				// 		initialPayment: {
				// 			type: '',
				// 			value: ''
				// 		},
				// 		paymentSchedule: '',
				// 		requiredSubmissions: ''
				// 	}
				// },
				// dentalBenefits: {
				// 	eligibility: {
				// 		ageLimitForSubscriber: 0,
				// 		ageLimitForDependantChild: 0,
				// 		ageLimitForDependantStudent: 0
				// 	},
				// 	COBorAssignment: {
				// 		coordinationBenefitTypes: '',
				// 		assignmentOfBenefits: ''
				// 	},
				// 	deductible: {
				// 		deductibleFamily: '',
				// 		deductibleIndividual: '',
				// 		deductibleWaivedOnPreventative: '',
				// 		percentageCovered: {
				// 			preventativeOrDiagnosticPercentage: '',
				// 			basicPercentage: '',
				// 			majorPercentage: ''
				// 		}
				// 	},
				// 	benefits: {
				// 		dentalAnnualMaximum: '',
				// 		basicIncludes: [],
				// 		basicIncludesOtherValue: '',
				// 		majorIncludes: [],
				// 		majorIncludesOtherValue: ''
				// 	},
				// 	frequencies: {
				// 		exams: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		},
				// 		prophylaxis: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		},
				// 		perioMaintenance: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: '',
				// 			paidAt: '',
				// 			condition: ''
				// 		},
				// 		fmx: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		},
				// 		pano: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: '',
				// 			condition: ''
				// 		},
				// 		bwx: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: '',
				// 			isIntraOralImagesCovered: false
				// 		},
				// 		scalingAndRootPlanning: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: '',
				// 			canAllQuadsBeOnSameDay: false
				// 		},
				// 		restorations: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		},
				// 		crowns: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		},
				// 		bridges: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		},
				// 		dentures: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		},
				// 		partials: {
				// 			frequency: '',
				// 			timeFrame: '',
				// 			exceptions: ''
				// 		}
				// 	},
				// 	generalProvisions: {
				// 		porcelainOnPosteriorCrowns: false,
				// 		goldCoverageD2790: false,
				// 		posteriorComposites: false,
				// 		fluorideToTheAgeOf: '',
				// 		sealants: '',
				// 		restorations: false,
				// 		missingToothClause: false,
				// 		nightGuardType: '',
				// 		nightGuardValue: ''
				// 	},
				// 	implantBenefits: {
				// 		coveredBenefits: false,
				// 		separate: false,
				// 		separateValue: '',
				// 		deductible: false,
				// 		deductibleValue: ''
				// 	}
				// }
			};
			localStorage.setItem('insurancePlanId', data.insurancePlanId);
			this.onSubmit.emit(formObj);
		}
	}
	cancel() {
		this.onCancel.emit();
	}

	async fieldValidation(field: any, notRequiredButPattern?: boolean) {
		this.mandAndRequiredFields = this.fieldValidationServ.fieldValidation(field, notRequiredButPattern, this.Form);
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

	inputChanged(fieldParam: any) {
		this.mandAndRequiredFields.forEach(field => {
			if (field.name == fieldParam) {
				field.mandSaved = false;
			}
		});
	}
}

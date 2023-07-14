import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AuthService } from '@services/auth/auth.service';
import {
	SelectedBusinessGroup,
	BusinessGroupDropdownService
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { FieldValidationService } from '@services/global/field-validation/field-validation.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-orthodontic-form',
	templateUrl: './orthodontic-form.component.html',
	styleUrls: ['./orthodontic-form.component.scss']
})
export class OrthodonticFormComponent implements OnInit {
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	Form: FormGroup | undefined;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Eligibility', id: 'eligibility' },
		{ title: 'COB/Assignment', id: 'cob' },
		{ title: 'Deductible', id: 'deductible' },
		{ title: 'Benefits', id: 'benefits' },
		{ title: 'Pre-authorization', id: 'authorization' },
		{ title: 'Billing & Payments', id: 'bandp' }
	];
	paymentSelect: boolean = false;
	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;
	insuranceList: any[] = [];
	type: any = 'percentage';
	preauthorizationRequirements: any;
	isSaveButton: boolean = false;
	inEdit: boolean = false;
	FormDisable!: boolean;
	imageUpLoaderDisable: boolean = true;
	mandAndRequiredFields: any[] = [
	];

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
		private fieldValidationServ: FieldValidationService,
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
			monthToMonthEligibility: [
				data.orthodonticBenefits?.eligibility.monthToMonthEligibility ||
				''
			],
			ageLimitForSubscriber: [
				data.orthodonticBenefits?.eligibility.ageLimitForSubscriber ||
				''
			],
			ageLimitForDependantChild: [
				data.orthodonticBenefits?.eligibility
					.ageLimitForDependantChild || ''
			],
			ageLimitForDependantStudent: [
				data.orthodonticBenefits?.eligibility
					.ageLimitForDependantStudent || ''
			],
			coordinationBenefitTypes: [
				data.orthodonticBenefits?.COBorAssignment
					.coordinationBenefitTypes || ''
			],
			assignmentOfBenefits: [
				data.orthodonticBenefits?.COBorAssignment
					.assignmentOfBenefits || ''
			],
			deductibleFamily: [
				data.orthodonticBenefits?.deductible.deductibleFamily || ''
			],
			deductibleIndividual: [
				data.orthodonticBenefits?.deductible.deductibleIndividual || ''
			],
			percentageCoveredForOrtho: [
				data.orthodonticBenefits?.deductible
					.percentageCoveredForOrtho || ''
			],
			orthodonticMaximumTypeForLifetimeOrAnnual: [
				data.orthodonticBenefits?.benefits
					.orthodonticMaximumTypeForLifetimeOrAnnual || ''
			],
			orthodonticMaximumAmountInNetwork: [
				data.orthodonticBenefits?.benefits
					.orthodonticMaximumAmountInNetwork || ''
			],
			orthodonticMaximumAmountOutNetwork: [
				data.orthodonticBenefits?.benefits
					.orthodonticMaximumAmountOutNetwork || ''
			],
			isWorkInProgressCovered: [
				data.orthodonticBenefits?.benefits.isWorkInProgressCovered || ''
			],
			anyExclusionForOrtho: [
				data.orthodonticBenefits?.benefits.anyExclusionForOrtho || ''
			],
			isPreauthorizationMandatory: [
				data.orthodonticBenefits?.preAuthorization
					.isPreauthorizationMandatory || ''
			],
			preauthorizationNeedsToBeSubmitted: [
				data.orthodonticBenefits?.preAuthorization
					.preauthorizationNeedsToBeSubmitted || ''
			],
			preauthorizationRequirements: [
				data.orthodonticBenefits?.preAuthorization
					.preauthorizationRequirements || ''
			],
			benefitsPaidAutomaticallyAfterInitialClaim: [
				data.orthodonticBenefits?.billingAndPayments
					.benefitsPaidAutomaticallyAfterInitialClaim || ''
			],
			paymentSchedule: [
				data.orthodonticBenefits?.billingAndPayments.paymentSchedule ||
				''
			],
			requiredSubmissions: [
				data.orthodonticBenefits?.billingAndPayments
					.requiredSubmissions || ''
			],
			value: [data.orthodonticBenefits?.billingAndPayments.value || '']
		});
	}

	getOrgBgId() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		let orgId = this.authService.getOrgId();
		let user: any = localStorage.getItem('permissionSet');
		user = JSON.parse(user);
		if (user?.__ISSU__) {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				this.bgId = 'intelliveer';
			} else {
				this.bgId = bgOrdID;
			}
		} else if (user?.isBGAdmin) {
			this.bgId = bgOrdID;
		} else {
			if (bgOrdID == 'intelliveer' || bgOrdID == null) {
				bgOrdID = orgId;
			}
			this.bgId = bgOrdID;
		}
	}

	onSectionChange(sectionId: any) {
		this.currentSelection = sectionId;
	}

	getPreauthorizationRequirements($event: any) {
		this.preauthorizationRequirements = $event.target.value;
	}

	save(data: any) {
		this.mandAndRequiredFields.forEach(field => {
			field.mandSaved = true;
		});
		if (this.Form?.valid && !this.Form.pristine) {
			if (typeof this.preauthorizationRequirements == 'undefined') {
				this.preauthorizationRequirements =
					data.preauthorizationRequirements[0];
			}
			let formObj = {
				_id: this.formData._id,
				insurancePlanId: localStorage.getItem('insurancePlanId'),
				orthodonticBenefits: {
					eligibility: {
						monthToMonthEligibility: data.monthToMonthEligibility,
						ageLimitForSubscriber: data.ageLimitForSubscriber,
						ageLimitForDependantChild: data.ageLimitForDependantChild,
						ageLimitForDependantStudent:
							data.ageLimitForDependantStudent
					},
					COBorAssignment: {
						coordinationBenefitTypes: data.coordinationBenefitTypes,
						assignmentOfBenefits: data.assignmentOfBenefits
					},
					deductible: {
						deductibleFamily: data.deductibleFamily,
						deductibleIndividual: data.deductibleIndividual,
						percentageCoveredForOrtho: data.percentageCoveredForOrtho
					},
					benefits: {
						orthodonticMaximumTypeForLifetimeOrAnnual:
							data.orthodonticMaximumTypeForLifetimeOrAnnual,
						orthodonticMaximumAmountInNetwork:
							data.orthodonticMaximumAmountInNetwork,
						orthodonticMaximumAmountOutNetwork:
							data.orthodonticMaximumAmountOutNetwork,
						isWorkInProgressCovered: data.isWorkInProgressCovered,
						anyExclusionForOrtho: data.anyExclusionForOrtho
					},
					preAuthorization: {
						isPreauthorizationMandatory:
							data.isPreauthorizationMandatory,
						preauthorizationNeedsToBeSubmitted:
							data.preauthorizationNeedsToBeSubmitted,
						preauthorizationRequirements: [
							this.preauthorizationRequirements
						]
					},
					billingAndPayments: {
						benefitsPaidAutomaticallyAfterInitialClaim:
							data.benefitsPaidAutomaticallyAfterInitialClaim,
						initialPayment: {
							type: this.type,
							value: data.value
						},
						paymentSchedule: data.paymentSchedule,
						requiredSubmissions: data.requiredSubmissions
					}
				}
			};
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

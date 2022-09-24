import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AuthService } from '@services/auth/auth.service';
import {
	SelectedBusinessGroup,
	BusinessGroupDropdownService
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-dental-form',
	templateUrl: './dental-form.component.html',
	styleUrls: ['./dental-form.component.scss']
})
export class DentalFormComponent implements OnInit {
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	Form: FormGroup | undefined;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Eligibility', id: 'eligibility' },
		{ title: 'COB/Assignment', id: 'cob' },
		{ title: 'Deductible', id: 'deductible' },
		{ title: 'Dental Benefits', id: 'benefits' },
		{ title: 'Frequencies', id: 'frequencies' },
		{ title: 'General Provisions', id: 'provision' },
		{ title: 'Implant Benefits', id: 'implant' }
	];
	maximumSelect: boolean = false;
	deductibleSelect: boolean = false;

	businessGroupDropdownSupscription: Subscription = new Subscription();
	selectedBusinessGroup: SelectedBusinessGroup | any;
	bgId: any;
	insuranceList: any[] = [];
	type: any = 'percentage';

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private businessGroupDropdownService: BusinessGroupDropdownService
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
		this.initForm(this.formData.dentalBenefits);
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			ageLimitForSubscriber: [
				data?.eligibility?.ageLimitForSubscriber || ''
			],
			ageLimitForDependantChild: [
				data?.eligibility?.ageLimitForDependantChild || ''
			],
			ageLimitForDependantStudent: [
				data?.eligibility?.ageLimitForDependantStudent || ''
			],
			coordinationBenefitTypes: [
				data?.COBorAssignment?.coordinationBenefitTypes || ''
			],
			assignmentOfBenefits: [
				data?.COBorAssignment?.assignmentOfBenefits || ''
			],
			deductibleFamily: [data?.deductible?.deductibleFamily || ''],
			deductibleIndividual: [
				data?.deductible?.deductibleIndividual || ''
			],
			deductibleWaivedOnPreventative: [
				data?.deductible?.deductibleWaivedOnPreventative || ''
			],
			preventativeOrDiagnosticPercentage: [
				data?.deductible?.preventativeOrDiagnosticPercentage || ''
			],
			basicPercentage: [data?.deductible?.basicPercentage || ''],
			majorPercentage: [data?.deductible?.majorPercentage || ''],
			dentalAnnualMaximum: [data?.benefits?.dentalAnnualMaximum || ''],
			basicIncludes: [data?.benefits?.basicIncludes || []],
			basicIncludesOtherValue: [
				data?.benefits?.basicIncludesOtherValue || ''
			],
			majorIncludes: [data?.benefits?.majorIncludes || []],
			majorIncludesOtherValue: [
				data?.benefits?.majorIncludesOtherValue || ''
			],
			porcelainOnPosteriorCrowns: [
				data?.generalProvisions?.porcelainOnPosteriorCrowns || ''
			],
			goldCoverageD2790: [
				data?.generalProvisions?.goldCoverageD2790 || ''
			],
			posteriorComposites: [
				data?.generalProvisions?.posteriorComposites || ''
			],
			fluorideToTheAgeOf: [
				data?.generalProvisions?.fluorideToTheAgeOf || ''
			],
			sealants: [data?.generalProvisions?.sealants || ''],
			restorations: [data?.generalProvisions?.restorations || ''],
			missingToothClause: [
				data?.generalProvisions?.missingToothClause || ''
			],
			nightGuardType: [data?.generalProvisions?.nightGuardType || ''],
			nightGuardValue: [data?.generalProvisions?.nightGuardValue || ''],
			coveredBenefits: [data?.implantBenefits?.coveredBenefits || ''],
			separate: [data?.implantBenefits?.separate || ''],
			separateValue: [data?.implantBenefits?.separateValue || ''],
			deductible: [data?.implantBenefits?.deductible || ''],
			deductibleValue: [data?.implantBenefits?.deductibleValue || ''],
			examsFrequency: [data?.frequencies?.exams?.frequency || ''],
			examsTimeFrame: [data?.frequencies?.exams?.timeFrame || ''],
			examsExceptions: [data?.frequencies?.exams?.exceptions || ''],
			prophylaxisFrequency: [
				data?.frequencies?.prophylaxis?.frequency || ''
			],
			prophylaxisTimeFrame: [
				data?.frequencies?.prophylaxis?.timeFrame || ''
			],
			prophylaxisExceptions: [
				data?.frequencies?.prophylaxis?.exceptions || ''
			],
			perioMaintenanceFrequency: [
				data?.frequencies?.perioMaintenance?.frequency || ''
			],
			perioMaintenanceTimeFrame: [
				data?.frequencies?.perioMaintenance?.timeFrame || ''
			],
			perioMaintenanceExceptions: [
				data?.frequencies?.perioMaintenance?.exceptions || ''
			],
			perioMaintenancePaidAt: [
				data?.frequencies?.perioMaintenance?.paidAt || ''
			],
			perioMaintenanceCondition: [
				data?.frequencies?.perioMaintenance?.condition || ''
			],
			fmxFrequency: [data?.frequencies?.fmx?.frequency || ''],
			fmxTimeFrame: [data?.frequencies?.fmx?.timeFrame || ''],
			fmxExceptions: [data?.frequencies?.fmx?.exceptions || ''],
			panoFrequency: [data?.frequencies?.pano?.frequency || ''],
			panoTimeFrame: [data?.frequencies?.pano?.timeFrame || ''],
			panoExceptions: [data?.frequencies?.pano?.exceptions || ''],
			panoCondition: [data?.frequencies?.pano?.condition || ''],
			bwxFrequency: [data?.frequencies?.bwx?.frequency || ''],
			bwxTimeFrame: [data?.frequencies?.bwx?.timeFrame || ''],
			bwxExceptions: [data?.frequencies?.bwx?.exceptions || ''],
			bwxIsIntraOralImagesCovered: [
				data?.frequencies?.bwx?.isIntraOralImagesCovered || ''
			],
			scalingAndRootPlanningFrequency: [
				data?.frequencies?.scalingAndRootPlanning?.frequency || ''
			],
			scalingAndRootPlanningTimeFrame: [
				data?.frequencies?.scalingAndRootPlanning?.timeFrame || ''
			],
			scalingAndRootPlanningExceptions: [
				data?.frequencies?.scalingAndRootPlanning?.exceptions || ''
			],
			scalingAndRootPlanningCanAllQuadsBeOnSameDay: [
				data?.frequencies?.scalingAndRootPlanning
					?.canAllQuadsBeOnSameDay || ''
			],
			restorationsFrequency: [
				data?.frequencies?.restorations?.frequency || ''
			],
			restorationsTimeFrame: [
				data?.frequencies?.restorations?.timeFrame || ''
			],
			restorationsExceptions: [
				data?.frequencies?.restorations?.exceptions || ''
			],
			crownsFrequency: [data?.frequencies?.crowns?.frequency || ''],
			crownsTimeFrame: [data?.frequencies?.crowns?.timeFrame || ''],
			crownsExceptions: [data?.frequencies?.crowns?.exceptions || ''],
			bridgesFrequency: [data?.frequencies?.bridges?.frequency || ''],
			bridgesTimeFrame: [data?.frequencies?.bridges?.timeFrame || ''],
			bridgesExceptions: [data?.frequencies?.bridges?.exceptions || ''],
			denturesFrequency: [data?.frequencies?.dentures?.frequency || ''],
			denturesTimeFrame: [data?.frequencies?.dentures?.timeFrame || ''],
			denturesExceptions: [data?.frequencies?.dentures?.exceptions || ''],
			partialsFrequency: [data?.frequencies?.partials?.frequency || ''],
			partialsTimeFrame: [data?.frequencies?.partialstimeFrame || ''],
			partialsExceptions: [data?.frequencies?.partials?.exceptions || '']
		});
	}

	onSectionChange(sectionId: any) {
		this.currentSelection = sectionId;
	}

	getPerioMaintenanceCondition($event: any) {
		console.log($event.target.value);
	}

	getPanoCondition($event: any) {
		console.log($event.target.value);
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

	save(data: any) {
		console.log(data);
		let formObj = {
			_id: this.formData._id,
			insurancePlanId: localStorage.getItem('insurancePlanId'),
			dentalBenefits: {
				eligibility: {
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
					deductibleWaivedOnPreventative:
						data.deductibleWaivedOnPreventative,
					percentageCovered: {
						preventativeOrDiagnosticPercentage:
							data.preventativeOrDiagnosticPercentage,
						basicPercentage: data.basicPercentage,
						majorPercentage: data.majorPercentage
					}
				},
				benefits: {
					dentalAnnualMaximum: data.dentalAnnualMaximum,
					basicIncludes: data.basicIncludes,
					basicIncludesOtherValue: data.basicIncludesOtherValue,
					majorIncludes: data.majorIncludes,
					majorIncludesOtherValue: data.majorIncludesOtherValue
				},
				frequencies: {
					exams: {
						frequency: data.examsFrequency,
						timeFrame: data.examsTimeFrame,
						exceptions: data.examsExceptions
					},
					prophylaxis: {
						frequency: data.prophylaxisFrequency,
						timeFrame: data.prophylaxisTimeFrame,
						exceptions: data.prophylaxisExceptions
					},
					perioMaintenance: {
						frequency: data.perioMaintenanceFrequency,
						timeFrame: data.perioMaintenanceTimeFrame,
						exceptions: data.perioMaintenanceExceptions,
						paidAt: data.perioMaintenancePaidAt,
						condition: data.perioMaintenanceCondition
					},
					fmx: {
						frequency: data.fmxFrequency,
						timeFrame: data.fmxTimeFrame,
						exceptions: data.fmxExceptions
					},
					pano: {
						frequency: data.panoFrequency,
						timeFrame: data.panoTimeFrame,
						exceptions: data.panoExceptions,
						condition: data.panoCondition
					},
					bwx: {
						frequency: data.bwxFrequency,
						timeFrame: data.bwxTimeFrame,
						exceptions: data.bwxExceptions,
						isIntraOralImagesCovered:
							data.bwxIsIntraOralImagesCovered
					},
					scalingAndRootPlanning: {
						frequency: data.scalingAndRootPlanningFrequency,
						timeFrame: data.scalingAndRootPlanningTimeFrame,
						exceptions: data.scalingAndRootPlanningExceptions,
						canAllQuadsBeOnSameDay:
							data.scalingAndRootPlanningCanAllQuadsBeOnSameDay
					},
					restorations: {
						frequency: data.restorationsFrequency,
						timeFrame: data.restorationsTimeFrame,
						exceptions: data.restorationsExceptions
					},
					crowns: {
						frequency: data.crownsFrequency,
						timeFrame: data.crownsTimeFrame,
						exceptions: data.crownsExceptions
					},
					bridges: {
						frequency: data.bridgesFrequency,
						timeFrame: data.bridgesTimeFrame,
						exceptions: data.bridgesExceptions
					},
					dentures: {
						frequency: data.denturesFrequency,
						timeFrame: data.denturesTimeFrame,
						exceptions: data.denturesExceptions
					},
					partials: {
						frequency: data.partialsFrequency,
						timeFrame: data.partialsTimeFrame,
						exceptions: data.partialsExceptions
					}
				},
				generalProvisions: {
					porcelainOnPosteriorCrowns: data.porcelainOnPosteriorCrowns,
					goldCoverageD2790: data.goldCoverageD2790,
					posteriorComposites: data.posteriorComposites,
					fluorideToTheAgeOf: data.fluorideToTheAgeOf,
					sealants: data.sealants,
					restorations: data.restorations,
					missingToothClause: data.missingToothClause,
					nightGuardType: data.nightGuardType,
					nightGuardValue: data.nightGuardValue
				},
				implantBenefits: {
					coveredBenefits: data.coveredBenefits,
					separate: data.separate,
					separateValue: data.separateValue,
					deductible: data.deductible,
					deductibleValue: data.deductibleValue
				}
			}
		};
		this.onSubmit.emit(formObj);
	}
	cancel() {
		this.onCancel.emit();
	}
}

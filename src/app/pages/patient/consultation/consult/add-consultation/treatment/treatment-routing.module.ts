import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentComponent } from './treatment.component';

const routes: Routes = [
	{
		path: '',
		component: TreatmentComponent,
		children: [
			{
				path: '',
				redirectTo: 'recommendations',
				pathMatch: 'full'
			},
			{
				path: 'recommendations',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/recommendations/recommendations.module'
					).then((m) => m.RecommendationsModule)
			},
			{
				path: 'prerequisites',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/prerequisites/prerequisites.module'
					).then((m) => m.PrerequisitesModule)
			},
			{
				path: 'extractions',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/extractions/extractions.module'
					).then((m) => m.ExtractionsModule)
			},
			{
				path: 'consents-and-agreement',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/consents-and-agreement/consents-and-agreement.module'
					).then((m) => m.ConsentsAndAgreementModule)
			},
			{
				path: 'treatment-outcome',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/treatment-outcome/treatment-outcome.module'
					).then((m) => m.TreatmentOutcomeModule)
			},
			{
				path: 'risk',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/risk/risk.module'
					).then((m) => m.RiskModule)
			},
			{
				path: 'adjunctive-tx',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/adjunctive-tx/adjunctive-tx.module'
					).then((m) => m.AdjunctiveTxModule)
			},
			{
				path: 'appliance-sequence',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/appliance-sequence/appliance-sequence.module'
					).then((m) => m.ApplianceSequenceModule)
			},
			{
				path: 'bracket-variations',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/bracket-variations/bracket-variations.module'
					).then((m) => m.BracketVariationsModule)
			},
			{
				path: 'retention',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/retention/retention.module'
					).then((m) => m.RetentionModule)
			},
			{
				path: 'appointment-sequence',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/appointment-sequence/appointment-sequence.module'
					).then((m) => m.AppointmentSequenceModule)
			},
			{
				path: 'compare-all',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/treatment/compare-all/compare-all.module'
					).then((m) => m.CompareAllModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TreatmentRoutingModule {}

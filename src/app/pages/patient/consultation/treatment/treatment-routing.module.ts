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
						'@pages/patient/consultation/treatment/recommendations/recommendations.module'
					).then((m) => m.RecommendationsModule)
			},
			{
				path: 'prerequisites',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/prerequisites/prerequisites.module'
					).then((m) => m.PrerequisitesModule)
			},
			{
				path: 'extractions',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/extractions/extractions.module'
					).then((m) => m.ExtractionsModule)
			},
			{
				path: 'treatment-mechanics',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/treatment-mechanics/treatment-mechanics.module'
					).then((m) => m.TreatmentMechanicsModule)
			},
			{
				path: 'treatment-outcome',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/treatment-outcome/treatment-outcome.module'
					).then((m) => m.TreatmentOutcomeModule)
			},
			{
				path: 'risk',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/risk/risk.module'
					).then((m) => m.RiskModule)
			},
			{
				path: 'adjunctive-tx',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/adjunctive-tx/adjunctive-tx.module'
					).then((m) => m.AdjunctiveTxModule)
			},
			{
				path: 'appliance-sequence',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/appliance-sequence/appliance-sequence.module'
					).then((m) => m.ApplianceSequenceModule)
			},
			{
				path: 'bracket-variations',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/bracket-variations/bracket-variations.module'
					).then((m) => m.BracketVariationsModule)
			},
			{
				path: 'retention',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/retention/retention.module'
					).then((m) => m.RetentionModule)
			},
			{
				path: 'compare-all',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/treatment/compare-all/compare-all.module'
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

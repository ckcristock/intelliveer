import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddConsultationComponent } from './add-consultation.component';

const routes: Routes = [
    {
        path: '',
        component: AddConsultationComponent,
        children: [
			{
				path: '',
				redirectTo: 'questionnaire',
				pathMatch: 'full'
			},
			{
				path: 'questionnaire',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/questionnaire/questionnaire.module'
					).then((m) => m.QuestionnaireModule)
			},
			{
				path: 'diagnosis',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/diagnosis/diagnosis.module'
					).then((m) => m.DiagnosisModule)
			},
			// {
			// 	path: 'treatment',
			// 	loadChildren: () =>
			// 		import(
			// 			'@pages/patient/consultation/consult/add-consultation/treatment/treatment.module'
			// 		).then((m) => m.TreatmentModule)
			// },
			{
				path: 'fee-estimate',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/fee-estimate/fee-estimate.module'
					).then((m) => m.FeeEstimateModule)
			},
			{
				path: 'payment-options',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/payment-options/payment-options.module'
					).then((m) => m.PaymentOptionsModule)
			},
			// {
			// 	path: 'conclusion',
			// 	loadChildren: () =>
			// 		import(
			// 			'@pages/patient/consultation/consult/add-consultation/conclusion/conclusion.module'
			// 		).then((m) => m.ConclusionModule)
			// }
		]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddConsultationRoutingModule {}

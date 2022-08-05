import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './consultation.component';

const routes: Routes = [
	{
		path: '',
		component: ConsultationComponent,
		children: [
			{
				path: '',
				redirectTo: 'health-history',
				pathMatch: 'full'
			},
			{
				path: 'health-history',
				loadChildren: () =>
					import(
						'@pages/settings/patient/consultation/health-history/health-history.module'
					).then((m) => m.HealthHistoryModule)
			},
			// {
			// 	path: 'diagnosis',
			// 	loadChildren: () =>
			// 		import(
			// 			'@pages/patient/consultation/diagnosis/diagnosis.module'
			// 		).then((m) => m.DiagnosisModule)
			// },
			// {
			// 	path: 'treatment',
			// 	loadChildren: () =>
			// 		import(
			// 			'@pages/patient/consultation/treatment/treatment.module'
			// 		).then((m) => m.TreatmentModule)
			// },
			// {
			// 	path: 'payment-options',
			// 	loadChildren: () =>
			// 		import(
			// 			'@pages/patient/consultation/payment-options/payment-options.module'
			// 		).then((m) => m.PaymentOptionsModule)
			// }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ConsultationRoutingModule {}

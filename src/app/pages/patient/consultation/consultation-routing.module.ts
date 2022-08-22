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
						'@pages/patient/consultation/health-history/health-history.module'
					).then((m) => m.HealthHistoryModule)
			},
			{
				path: 'health-history/add',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/health-history/add-health-history/add-health-history.module'
					).then((m) => m.AddHealthHistoryModule)
			},
			{
				path: 'consultation',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/consult.module'
					).then((m) => m.ConsultModule)
			},
			{
				path: 'consultation/add',
				loadChildren: () =>
					import(
						'@pages/patient/consultation/consult/add-consultation/add-consultation.module'
					).then((m) => m.AddConsultationModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ConsultationRoutingModule {}

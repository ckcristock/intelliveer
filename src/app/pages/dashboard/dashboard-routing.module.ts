import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'onboarding',
				loadChildren: () =>
					import('@pages/onboarding/onboarding.module').then(
						(m) => m.OnboardingModule
					)
			},
			{
				path: 'home',
				loadChildren: () =>
					import('@pages/home/home.module').then((m) => m.HomeModule)
			},
			{
				path: 'patient',
				loadChildren: () =>
					import('@pages/patient/patient.module').then(
						(m) => m.PatientModule
					)
			},
			{
				path: 'header',
				loadChildren: () =>
					import('@pages/header/header.module').then(
						(m) => m.HeaderModule
					),
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}

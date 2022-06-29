import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'settings',
				loadChildren: () =>
					import('@pages/settings/settings.module').then(
						(m) => m.SettingsModule
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

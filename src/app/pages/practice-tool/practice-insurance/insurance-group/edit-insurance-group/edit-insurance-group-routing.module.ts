import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInsuranceGroupComponent } from './edit-insurance-group.component';

const routes: Routes = [
	{
		path: '',
		component: EditInsuranceGroupComponent,
		children: [
			{
				path: '',
				redirectTo: 'insurance-group-information',
				pathMatch: 'full'
			},
			{
				path: 'insurance-group-information/:id',
				loadChildren: () =>
					import(
						'@pages/practice-tool/practice-insurance/insurance-group/edit-insurance-group/insurance-group-information/insurance-group-information.module'
					).then((m) => m.InsuranceGroupInformationModule)
			},
			{
				path: 'orthodontic/:id',
				loadChildren: () =>
					import(
						'@pages/practice-tool/practice-insurance/insurance-group/edit-insurance-group/orthodontic/orthodontic.module'
					).then((m) => m.OrthodonticModule)
			},
			{
				path: 'dental/:id',
				loadChildren: () =>
					import(
						'@pages/practice-tool/practice-insurance/insurance-group/edit-insurance-group/dental/dental.module'
					).then((m) => m.DentalModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditInsuranceGroupRoutingModule {}

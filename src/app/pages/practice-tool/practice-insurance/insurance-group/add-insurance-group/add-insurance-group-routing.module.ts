import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsuranceGroupComponent } from './add-insurance-group.component';

const routes: Routes = [
	{
		path: '',
		component: AddInsuranceGroupComponent,
		children: [
			{
				path: '',
				redirectTo: 'insurance-group-information',
				pathMatch: 'full'
			},
			{
				path: 'insurance-group-information',
				loadChildren: () =>
				import('@pages/practice-tool/practice-insurance/insurance-group/add-insurance-group/insurance-group-information/insurance-group-information.module').then((m) => m.InsuranceGroupInformationModule)
			},
			{
				path: 'orthodontic',
				loadChildren: () =>
				import('@pages/practice-tool/practice-insurance/insurance-group/add-insurance-group/orthodontic/orthodontic.module').then((m) => m.OrthodonticModule)
			},
			{
				path: 'dental',
				loadChildren: () =>
				import('@pages/practice-tool/practice-insurance/insurance-group/add-insurance-group/dental/dental.module').then((m) => m.DentalModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddInsuranceGroupRoutingModule {}

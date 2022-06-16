import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient.component';

const routes: Routes = [
	{
		path: '',
		component: AddPatientComponent,
		children: [
			{
				path: '',
				redirectTo: 'coor-with-prospect',
				pathMatch: 'full'
			},
			// {
			// 	path: 'coor-with-prospect',
			// 	loadChildren: () =>
			// 		import(
			// 			'@pages/home/add-patient/coor-with-prospect/coor-with-prospect.module'
			// 		).then((m) => m.CoorWithProspectModule)
			// },
			// {
			// 	path: 'quick-add',
			// 	loadChildren: () =>
			// 		import(
			// 			'@pages/home/add-patient/quick-add/quick-add.module'
			// 		).then((m) => m.QuickAddModule)
			// }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddPatientRoutingModule {}

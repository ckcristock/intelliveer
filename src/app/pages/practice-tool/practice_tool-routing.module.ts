import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeToolComponent } from './practice-tool.component';

const routes: Routes = [
	{
		path: '',
		component: PracticeToolComponent,
		children: [
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full'
			},
			{
				path: 'practice',
				loadChildren: () =>
					import('@pages/practice-tool/practice-insurance/practice-insurance.module').then(
						(m) => m.PracticeInsuranceModule
					)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PracticeToolRoutingModule {}

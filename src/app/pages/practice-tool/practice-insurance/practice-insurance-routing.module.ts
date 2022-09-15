import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeInsuranceComponent } from './practice-insurance.component';

const routes: Routes = [
    {
        path: '',
        component: PracticeInsuranceComponent,
        children: [
			{
				path: '',
				redirectTo: 'insurance-plan',
				pathMatch: 'full'
			},
			{
				path: 'insurance-plan',
				loadChildren: () =>
					import('@pages/practice-tool/practice-insurance/insurance-plan/insurance-plan.module').then(
						(m) => m.InsuranceModule
					)
			},
			{
				path: 'insurance-plan/add',
				loadChildren: () =>
					import('@pages/practice-tool/practice-insurance/insurance-plan/add-insurance-plan/add-insurance-plan.module').then(
						(m) => m.AddInsurancePlanModule
					)
			},
			{
				path: 'insurance-plan/edit/:id',
				loadChildren: () =>
					import('@pages/practice-tool/practice-insurance/insurance-plan/edit-insurance-plan/edit-insurance-plan.module').then(
						(m) => m.EditInsurancePlanModule
					)
			},
			{
				path: 'insurance-group',
				loadChildren: () =>
					import('@pages/practice-tool/practice-insurance/insurance-group/insurance-group.module').then(
						(m) => m.InsuranceGroupModule
					)
			},
			{
				path: 'insurance-group/add',
				loadChildren: () =>
					import('@pages/practice-tool/practice-insurance/insurance-group/add-insurance-group/add-insurance-group.module').then(
						(m) => m.AddInsuranceGroupModule
					)
			},
			{
				path: 'insurance-group/edit',
				loadChildren: () =>
					import('@pages/practice-tool/practice-insurance/insurance-group/edit-insurance-group/edit-insurance-group.module').then(
						(m) => m.EditInsuranceGroupModule
					)
			}
		]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PracticeInsuranceRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsurancePlanComponent } from './add-insurance-plan.component';

const routes: Routes = [
	{
		path: '',
		component: AddInsurancePlanComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AddInsurancePlanRoutingModule {}

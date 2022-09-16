import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInsurancePlanComponent } from './edit-insurance-plan.component';

const routes: Routes = [
	{
		path: '',
		component: EditInsurancePlanComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditInsurancePlanRoutingModule {}

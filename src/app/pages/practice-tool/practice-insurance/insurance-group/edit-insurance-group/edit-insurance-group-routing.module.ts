import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInsuranceGroupComponent } from './edit-insurance-group.component';

const routes: Routes = [
	{
		path: '',
		component: EditInsuranceGroupComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditInsuranceGroupRoutingModule {}

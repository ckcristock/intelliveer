import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceGroupInformationComponent } from './insurance-group-information.component';

const routes: Routes = [
	{
		path: '',
		component: InsuranceGroupInformationComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InsuranceGroupInformationRoutingModule {}

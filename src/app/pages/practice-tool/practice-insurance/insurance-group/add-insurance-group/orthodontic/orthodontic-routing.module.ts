import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrthodonticComponent } from './orthodontic.component';

const routes: Routes = [
	{
		path: '',
		component: OrthodonticComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrthodonticRoutingModule {}

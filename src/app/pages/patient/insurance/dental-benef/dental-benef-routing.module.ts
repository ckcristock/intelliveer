import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentalBenefComponent } from './dental-benef.component';

const routes: Routes = [{
  path: '',
  component: DentalBenefComponent,
  children: [
    {
      path: '',
      component: DentalBenefComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentalBenefRoutingModule { }

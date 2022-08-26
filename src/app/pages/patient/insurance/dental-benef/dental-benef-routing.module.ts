import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { DentalBenefComponent } from './dental-benef.component';

const routes: Routes = [{
  path: '',
  component: DentalBenefComponent,
  canDeactivate: [CanDeactivateGuard],
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

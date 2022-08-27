import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { BillingComponent } from './billing.component';

const routes: Routes = [{
  path: '',
  component: BillingComponent,
  canDeactivate: [CanDeactivateGuard],
  children: [
    {
      path: '',
      component: BillingComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }

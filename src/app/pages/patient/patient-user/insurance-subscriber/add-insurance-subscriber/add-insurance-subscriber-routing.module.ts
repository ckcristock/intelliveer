import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { AddInsuranceSubscriberComponent } from './add-insurance-subscriber.component';

const routes: Routes = [
  {
    path: '',
    component: AddInsuranceSubscriberComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInsuranceSubscriberRoutingModule {}

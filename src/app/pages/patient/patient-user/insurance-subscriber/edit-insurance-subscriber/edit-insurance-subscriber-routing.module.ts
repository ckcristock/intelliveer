import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { EditInsuranceSubscriberComponent } from './edit-insurance-subscriber.component';

const routes: Routes = [
  {
    path: '',
    component: EditInsuranceSubscriberComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInsuranceSubscriberRoutingModule {}

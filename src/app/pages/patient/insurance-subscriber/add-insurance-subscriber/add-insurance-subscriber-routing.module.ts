import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInsuranceSubscriberComponent } from './add-insurance-subscriber.component';

const routes: Routes = [
  {
    path: '',
    component: AddInsuranceSubscriberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInsuranceSubscriberRoutingModule {}

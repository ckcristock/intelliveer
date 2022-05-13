import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInsuranceSubscriberComponent } from './edit-insurance-subscriber.component';

const routes: Routes = [
  {
    path: '',
    component: EditInsuranceSubscriberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInsuranceSubscriberRoutingModule {}

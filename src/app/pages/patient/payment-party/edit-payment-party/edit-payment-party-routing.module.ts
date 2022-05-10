import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPaymentPartyComponent } from './edit-payment-party.component';

const routes: Routes = [
  {
    path: '',
    component: EditPaymentPartyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPaymentPartyRoutingModule {}

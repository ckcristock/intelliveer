import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentPartyComponent } from './add-payment-party.component';

const routes: Routes = [
  {
    path: '',
    component: AddPaymentPartyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPaymentPartyRoutingModule {}

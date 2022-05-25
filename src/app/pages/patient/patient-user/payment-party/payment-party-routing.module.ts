import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentPartyComponent } from './payment-party.component';

const routes: Routes = [
    {
        path: '',
        component: PaymentPartyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentPartyRoutingModule {}

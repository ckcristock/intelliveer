import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentOptionsRoutingModule } from './payment-options-routing.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { PaymentOptionsComponent } from "./payment-options.component";

@NgModule({
  declarations: [PaymentOptionsComponent],
  imports: [
    CommonModule,
    PaymentOptionsRoutingModule,
    NavBarPillsModule
  ]
})
export class PaymentOptionsModule { }

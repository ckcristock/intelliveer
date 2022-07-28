import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentOptionsRoutingModule } from './payment-options-routing.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentOptionsComponent } from "./payment-options.component";

@NgModule({
  declarations: [PaymentOptionsComponent],
  imports: [
    CommonModule,
    PaymentOptionsRoutingModule,
    NavBarPillsModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaymentOptionsModule { }

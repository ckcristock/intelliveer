import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferrerRoutingModule } from './referrer-routing.module';
import { ReferrerFormModule } from '@modules/forms/add-patient/referrer-form/referrer-form.module';
import { ReferrerComponent } from "./referrer.component";


@NgModule({
  declarations: [ReferrerComponent],
  imports: [
    CommonModule,
    ReferrerRoutingModule,
    ReferrerFormModule
  ]
})
export class ReferrerModule { }

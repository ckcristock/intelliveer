import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentalComponent } from './dental.component';
import { DentalRoutingModule } from './dental-routing.module';
import { DentalFormModule } from '@modules/forms/practice-tool/insurance-group-form/dental-form/dental-form.module';



@NgModule({
  declarations: [
    DentalComponent
  ],
  imports: [
    CommonModule,
    DentalRoutingModule,
    DentalFormModule
  ]
})
export class DentalModule { }

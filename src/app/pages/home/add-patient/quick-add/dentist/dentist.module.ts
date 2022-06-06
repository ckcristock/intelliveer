import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentistRoutingModule } from './dentist-routing.module';
import { DentistFormModule } from '@modules/forms/add-patient/dentist-form/dentist-form.module';
import { DentistComponent } from "./dentist.component";


@NgModule({
  declarations: [DentistComponent],
  imports: [
    CommonModule,
    DentistRoutingModule,
    DentistFormModule
  ]
})
export class DentistModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentSequenceComponent } from './appointment-sequence.component';
import { AppointmentSequenceRoutingModule } from './appointment-sequence-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppointmentSequenceComponent
  ],
  imports: [
    CommonModule,
    AppointmentSequenceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppointmentSequenceModule { }

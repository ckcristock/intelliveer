import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplianceSequenceComponent } from './appliance-sequence.component';
import { ApplianceSequenceRoutingModule } from './appliance-sequence-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ApplianceSequenceComponent
  ],
  imports: [
    CommonModule,
    ApplianceSequenceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ApplianceSequenceModule { }

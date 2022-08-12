import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeEstimateComponent } from './fee-estimate.component';
import { FeeEstimateRoutingModule } from './fee-estimate-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FeeEstimateComponent
  ],
  imports: [
    CommonModule,
    FeeEstimateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeeEstimateModule { }

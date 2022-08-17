import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskRoutingModule } from './risk-routing.module';
import { RiskComponent } from './risk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RiskComponent
  ],
  imports: [
    CommonModule,
    RiskRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RiskModule { }

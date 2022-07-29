import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskRoutingModule } from './risk-routing.module';
import { RiskComponent } from './risk.component';



@NgModule({
  declarations: [
    RiskComponent
  ],
  imports: [
    CommonModule,
    RiskRoutingModule
  ]
})
export class RiskModule { }

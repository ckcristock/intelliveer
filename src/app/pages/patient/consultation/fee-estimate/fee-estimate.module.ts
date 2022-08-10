import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeEstimateComponent } from './fee-estimate.component';
import { FeeEstimateRoutingModule } from './fee-estimate-routing.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';



@NgModule({
  declarations: [
    FeeEstimateComponent
  ],
  imports: [
    CommonModule,
    FeeEstimateRoutingModule,
    NavBarPillsModule
  ]
})
export class FeeEstimateModule { }

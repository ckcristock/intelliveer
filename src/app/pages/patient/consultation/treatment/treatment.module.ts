import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment.component';
import { TreatmentRoutingModule } from './treatment-routing.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';



@NgModule({
  declarations: [
    TreatmentComponent
  ],
  imports: [
    CommonModule,
    TreatmentRoutingModule,
    NavBarPillsModule
  ]
})
export class TreatmentModule { }

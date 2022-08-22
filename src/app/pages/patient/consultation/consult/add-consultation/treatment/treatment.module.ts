import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment.component';
import { TreatmentRoutingModule } from './treatment-routing.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { CompareAllModule } from './compare-all/compare-all.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TreatmentComponent
  ],
  imports: [
    CommonModule,
    TreatmentRoutingModule,
    NavBarPillsModule,
    CompareAllModule,
    NgbModule
  ]
})
export class TreatmentModule { }

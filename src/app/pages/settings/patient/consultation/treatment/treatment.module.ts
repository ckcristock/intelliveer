import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment.component';
import { TreatmentRoutingModule } from './treatment-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    TreatmentComponent
  ],
  imports: [
    CommonModule,
    TreatmentRoutingModule,
    NgbDropdownModule,
    NgSelectModule
  ]
})
export class TreatmentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosisComponent } from './diagnosis.component';
import { DiagnosisRoutingModule } from './diagnosis-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    DiagnosisComponent
  ],
  imports: [
    CommonModule,
    DiagnosisRoutingModule,
    NgbDropdownModule,
    NgSelectModule
  ]
})
export class DiagnosisModule { }

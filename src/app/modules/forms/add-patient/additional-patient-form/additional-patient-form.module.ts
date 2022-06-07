import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdditionalPatientFormComponent } from './additional-patient-form.component';

@NgModule({
  declarations: [AdditionalPatientFormComponent],
  imports: [
    CommonModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AdditionalPatientFormComponent]
})
export class AdditionalPatientFormModule { }

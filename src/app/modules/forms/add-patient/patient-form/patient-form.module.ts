import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientFormComponent } from './patient-form.component';

@NgModule({
  declarations: [PatientFormComponent],
  imports: [
    CommonModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
	exports: [PatientFormComponent]
})
export class PatientFormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DentistFormComponent } from './dentist-form.component';

@NgModule({
  declarations: [DentistFormComponent],
  imports: [
    CommonModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DentistFormComponent]
})
export class DentistFormModule { }

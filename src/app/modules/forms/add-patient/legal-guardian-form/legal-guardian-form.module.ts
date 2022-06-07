import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LegalGuardianFormComponent } from './legal-guardian-form.component';

@NgModule({
  declarations: [LegalGuardianFormComponent],
  imports: [
    CommonModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LegalGuardianFormComponent]
})
export class LegalGuardianFormModule { }

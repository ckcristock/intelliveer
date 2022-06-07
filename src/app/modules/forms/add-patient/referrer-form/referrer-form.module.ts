import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReferrerFormComponent } from './referrer-form.component';



@NgModule({
  declarations: [ReferrerFormComponent],
  imports: [
    CommonModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ReferrerFormComponent]
})
export class ReferrerFormModule { }

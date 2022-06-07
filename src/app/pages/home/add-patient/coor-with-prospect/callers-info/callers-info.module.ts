import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallersInfoRoutingModule } from './callers-info-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallersInfoComponent } from './callers-info.component';


@NgModule({
  declarations: [CallersInfoComponent],
  imports: [
    CommonModule,
    CallersInfoRoutingModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CallersInfoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConclusionRoutingModule } from './conclusion-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConclusionComponent } from './conclusion.component';


@NgModule({
  declarations: [ConclusionComponent],
  imports: [
    CommonModule,
    ConclusionRoutingModule,
    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConclusionModule { }

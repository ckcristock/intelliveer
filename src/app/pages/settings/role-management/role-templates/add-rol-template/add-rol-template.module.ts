import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRolTemplateRoutingModule } from './add-rol-template-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRolTemplateComponent } from "./add-rol-template.component";


@NgModule({
  declarations: [AddRolTemplateComponent],
  imports: [
    CommonModule,
    AddRolTemplateRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AddRolTemplateModule { }

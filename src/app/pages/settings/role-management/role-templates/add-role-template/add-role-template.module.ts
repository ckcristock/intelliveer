import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoleTemplateRoutingModule } from './add-role-template-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRoleTemplateComponent } from "./add-role-template.component";


@NgModule({
  declarations: [AddRoleTemplateComponent],
  imports: [
    CommonModule,
    AddRoleTemplateRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class AddRoleTemplateModule { }

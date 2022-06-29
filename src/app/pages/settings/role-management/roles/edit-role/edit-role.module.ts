import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoleRoutingModule } from './edit-role-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRoleComponent } from "./edit-role.component";

@NgModule({
  declarations: [EditRoleComponent],
  imports: [
    CommonModule,
    EditRoleRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditRoleModule { }

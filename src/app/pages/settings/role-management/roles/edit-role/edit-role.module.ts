import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoleRoutingModule } from './edit-role-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRoleComponent } from "./edit-role.component";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';

@NgModule({
  declarations: [EditRoleComponent],
  imports: [
    CommonModule,
    EditRoleRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarPillsModule
  ]
})
export class EditRoleModule { }

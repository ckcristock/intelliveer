import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from "./users.component";
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [UsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class UsersModule { }

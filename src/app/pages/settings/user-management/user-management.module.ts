import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from "./user-management.component";
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';

@NgModule({
  declarations: [UserManagementComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  providers: [ SearchStringPipePipe ]
})
export class UserManagementModule { }

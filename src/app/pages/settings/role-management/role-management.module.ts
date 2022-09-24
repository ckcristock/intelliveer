import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleManagementRoutingModule } from './role-management-routing.module';
import { RoleManagementComponent } from "./role-management.component";
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';


@NgModule({
  declarations: [RoleManagementComponent],
  imports: [
    CommonModule,
    RoleManagementRoutingModule
  ],
  providers: [SearchStringPipePipe]

})
export class RoleManagementModule { }

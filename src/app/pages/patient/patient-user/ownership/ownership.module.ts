import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnershipComponent } from './ownership.component';
import { OwnershipRoutingModule } from './ownership-routing.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    OwnershipComponent
  ],
  imports: [
    CommonModule,
    OwnershipRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NavBarPillsModule
  ]
})
export class OwnershipModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category3RoutingModule } from './category_3-routing.module';
import { Category3Component } from './category_3.component';



@NgModule({
  declarations: [
    Category3Component
  ],
  imports: [
    CommonModule,
    Category3RoutingModule
  ]
})
export class Category3Module { }

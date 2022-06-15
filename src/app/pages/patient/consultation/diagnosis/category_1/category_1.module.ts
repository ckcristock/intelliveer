import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category1RoutingModule } from './category_1-routing.module';
import { Category1Component } from './category_1.component';



@NgModule({
  declarations: [
    Category1Component
  ],
  imports: [
    CommonModule,
    Category1RoutingModule
  ]
})
export class Category1Module { }

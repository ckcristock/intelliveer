import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category4RoutingModule } from './category_4-routing.module';
import { Category4Component } from './category_4.component';



@NgModule({
  declarations: [
    Category4Component
  ],
  imports: [
    CommonModule,
    Category4RoutingModule
  ]
})
export class Category4Module { }

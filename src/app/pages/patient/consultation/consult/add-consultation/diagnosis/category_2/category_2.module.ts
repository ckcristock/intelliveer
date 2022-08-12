import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category2RoutingModule } from './category_2-routing.module';
import { Category2Component } from './category_2.component';



@NgModule({
  declarations: [
    Category2Component
  ],
  imports: [
    CommonModule,
    Category2RoutingModule
  ]
})
export class Category2Module { }

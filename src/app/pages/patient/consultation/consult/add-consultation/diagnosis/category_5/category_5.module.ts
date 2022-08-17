import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category5RoutingModule } from './category_5-routing.module';
import { Category5Component } from './category_5.component';



@NgModule({
  declarations: [
    Category5Component
  ],
  imports: [
    CommonModule,
    Category5RoutingModule
  ]
})
export class Category5Module { }

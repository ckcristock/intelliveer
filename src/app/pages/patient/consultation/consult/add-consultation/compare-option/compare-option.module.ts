import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareOptionComponent } from './compare-option.component';
import { CompareOptionRoutingModule } from './compare-option-routing.module';



@NgModule({
  declarations: [
    CompareOptionComponent
  ],
  imports: [
    CommonModule,
    CompareOptionRoutingModule
  ]
})
export class CompareOptionModule { }

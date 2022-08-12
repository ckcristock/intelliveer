import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareAllComponent } from './compare-all.component';
import { CompareAllRoutingModule } from './compare-all-routing.module';



@NgModule({
  declarations: [
    CompareAllComponent
  ],
  imports: [
    CommonModule,
    CompareAllRoutingModule
  ],
  exports: [CompareAllComponent]
})
export class CompareAllModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractionsComponent } from './extractions.component';
import { ExtractionsRoutingModule } from './extractions-routing.module';
import { ToothchartModule } from '@modules/toothchart/toothchart.module';



@NgModule({
  declarations: [
    ExtractionsComponent
  ],
  imports: [
    CommonModule,
    ExtractionsRoutingModule,
    ToothchartModule
  ]
})
export class ExtractionsModule { }

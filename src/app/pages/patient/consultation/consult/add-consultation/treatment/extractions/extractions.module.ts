import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractionsComponent } from './extractions.component';
import { ExtractionsRoutingModule } from './extractions-routing.module';
import { ToothchartModule } from '@modules/toothchart/toothchart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ExtractionsComponent
  ],
  imports: [
    CommonModule,
    ExtractionsRoutingModule,
    ToothchartModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule
  ]
})
export class ExtractionsModule { }

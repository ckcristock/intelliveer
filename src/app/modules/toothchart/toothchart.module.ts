import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToothchartComponent } from './toothchart.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ToothchartComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [ToothchartComponent]
})
export class ToothchartModule { }

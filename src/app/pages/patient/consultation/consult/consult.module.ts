import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './consult.component';
import { ConsultRoutingModule } from './consult-routing.module';



@NgModule({
  declarations: [
    ConsultComponent
  ],
  imports: [
    CommonModule,
    ConsultRoutingModule
  ]
})
export class ConsultModule { }

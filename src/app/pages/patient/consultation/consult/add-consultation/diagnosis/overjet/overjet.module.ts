import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverjetComponent } from './overjet.component';
import { OverjetRoutingModule } from './overjet-routing.module';



@NgModule({
  declarations: [
    OverjetComponent
  ],
  imports: [
    CommonModule,
    OverjetRoutingModule
  ]
})
export class OverjetModule { }

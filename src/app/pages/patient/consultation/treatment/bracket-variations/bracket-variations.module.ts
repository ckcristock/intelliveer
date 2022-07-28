import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BracketVariationsComponent } from './bracket-variations.component';
import { BracketVariationsRoutingModule } from './bracket-variations-routing.module';



@NgModule({
  declarations: [
    BracketVariationsComponent
  ],
  imports: [
    CommonModule,
    BracketVariationsRoutingModule
  ]
})
export class BracketVariationsModule { }

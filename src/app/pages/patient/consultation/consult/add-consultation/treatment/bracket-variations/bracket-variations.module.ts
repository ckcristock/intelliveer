import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BracketVariationsComponent } from './bracket-variations.component';
import { BracketVariationsRoutingModule } from './bracket-variations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BracketVariationsComponent
  ],
  imports: [
    CommonModule,
    BracketVariationsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BracketVariationsModule { }

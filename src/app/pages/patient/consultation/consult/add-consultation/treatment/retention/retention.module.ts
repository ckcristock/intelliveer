import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetentionComponent } from './retention.component';
import { RetentionRoutingModule } from './retention-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RetentionComponent
  ],
  imports: [
    CommonModule,
    RetentionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RetentionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetentionComponent } from './retention.component';
import { RetentionRoutingModule } from './retention-routing.module';



@NgModule({
  declarations: [
    RetentionComponent
  ],
  imports: [
    CommonModule,
    RetentionRoutingModule
  ]
})
export class RetentionModule { }

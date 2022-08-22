import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MalocclusionComponent } from './malocclusion.component';
import { MalocclusionRoutingModule } from './malocclusion-routing.module';



@NgModule({
  declarations: [
    MalocclusionComponent
  ],
  imports: [
    CommonModule,
    MalocclusionRoutingModule
  ]
})
export class MalocclusionModule { }

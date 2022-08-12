import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { RecommendationsRoutingModule } from './recommendations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    RecommendationsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RecommendationsModule { }

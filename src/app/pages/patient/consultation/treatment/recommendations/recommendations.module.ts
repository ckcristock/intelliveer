import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { RecommendationsRoutingModule } from './recommendations-routing.module';



@NgModule({
  declarations: [
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    RecommendationsRoutingModule
  ]
})
export class RecommendationsModule { }

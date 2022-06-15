import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverbiteRoutingModule } from './overbite-routing.module';
import { OverbiteComponent } from './overbite.component';



@NgModule({
  declarations: [
    OverbiteComponent
  ],
  imports: [
    CommonModule,
    OverbiteRoutingModule
  ]
})
export class OverbiteModule { }

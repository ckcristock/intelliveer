import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjunctiveTxComponent } from './adjunctive-tx.component';
import { AdjunctiveTxRoutingModule } from './adjunctive-tx-routing.module';



@NgModule({
  declarations: [
    AdjunctiveTxComponent
  ],
  imports: [
    CommonModule,
    AdjunctiveTxRoutingModule
  ]
})
export class AdjunctiveTxModule { }

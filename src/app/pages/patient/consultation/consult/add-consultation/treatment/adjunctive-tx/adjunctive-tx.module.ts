import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjunctiveTxComponent } from './adjunctive-tx.component';
import { AdjunctiveTxRoutingModule } from './adjunctive-tx-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdjunctiveTxComponent
  ],
  imports: [
    CommonModule,
    AdjunctiveTxRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdjunctiveTxModule { }

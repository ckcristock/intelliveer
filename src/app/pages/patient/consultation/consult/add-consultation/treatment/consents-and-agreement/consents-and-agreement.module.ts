import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsentsAndAgreementComponent } from './consents-and-agreement.component';
import { ConsentsAndAgreementRoutingModule } from './consents-and-agreement-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsentsAndAgreementComponent
  ],
  imports: [
    CommonModule,
    ConsentsAndAgreementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConsentsAndAgreementModule { }

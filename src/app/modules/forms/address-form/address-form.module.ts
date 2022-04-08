import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddressFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AddressFormComponent],
})
export class AddressFormModule {}

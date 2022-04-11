import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AddressFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: [AddressFormComponent],
})
export class AddressFormModule {}

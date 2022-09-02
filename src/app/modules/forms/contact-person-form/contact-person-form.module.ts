import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPersonFormComponent } from './contact-person-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ContactPersonFormComponent],
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule],
  exports: [ContactPersonFormComponent],
})
export class ContactPersonFormModule {}

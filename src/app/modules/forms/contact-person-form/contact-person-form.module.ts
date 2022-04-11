import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPersonFormComponent } from './contact-person-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactPersonFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactPersonFormComponent],
})
export class ContactPersonFormModule {}

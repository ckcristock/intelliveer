import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsFormComponent } from './contact-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactDetailsFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContactDetailsFormComponent],
})
export class ContactDetailsFormModule {}

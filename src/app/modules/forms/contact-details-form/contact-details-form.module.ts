import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsFormComponent } from './contact-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/directive/directive.module';

@NgModule({
  declarations: [ContactDetailsFormComponent],
  imports: [CommonModule, ReactiveFormsModule, DirectiveModule],
  exports: [ContactDetailsFormComponent],
})
export class ContactDetailsFormModule {}

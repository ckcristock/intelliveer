import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsFormComponent } from './contact-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ContactDetailsFormComponent],
  imports: [CommonModule, ReactiveFormsModule,
     DirectiveModule,
    NgSelectModule],
  exports: [ContactDetailsFormComponent],
})
export class ContactDetailsFormModule {}

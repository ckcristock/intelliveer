import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPracticeRoutingModule } from './edit-practice-routing.module';
import { EditPracticeComponent } from './edit-practice.component';
import { PracticeFormModule } from '@modules/forms/onboarding/practice-form/practice-form.module';

@NgModule({
  declarations: [EditPracticeComponent],
  imports: [CommonModule, PracticeFormModule, EditPracticeRoutingModule],
})
export class EditPracticeModule {}

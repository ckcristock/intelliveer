import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPracticeRoutingModule } from './add-practice-routing.module';
import { AddPracticeComponent } from './add-practice.component';
import { PracticeFormModule } from '../practice-form/practice-form.module';

@NgModule({
  declarations: [AddPracticeComponent],
  imports: [CommonModule, PracticeFormModule, AddPracticeRoutingModule],
})
export class AddPracticeModule {}

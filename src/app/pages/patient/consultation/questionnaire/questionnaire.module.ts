import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { ScrollspyModule } from '@modules/scrollspy/scrollspy.module';



@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule,
		ReactiveFormsModule,
		NavBarPillsModule,
    ScrollspyModule
  ]
})
export class QuestionnaireModule { }

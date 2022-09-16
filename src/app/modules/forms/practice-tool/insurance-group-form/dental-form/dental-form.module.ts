import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentalFormComponent } from './dental-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { ScrollspyModule } from '@modules/scrollspy/scrollspy.module';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    DentalFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
    NavBarPillsModule,
    NgSelectModule,
    ScrollspyModule
  ],
  exports: [DentalFormComponent]
})
export class DentalFormModule { }

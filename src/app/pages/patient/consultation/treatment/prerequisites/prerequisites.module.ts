import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrerequisitesComponent } from './prerequisites.component';
import { PrerequisitesRoutingModule } from './prerequisites-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrerequisitesComponent
  ],
  imports: [
    CommonModule,
    PrerequisitesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PrerequisitesModule { }

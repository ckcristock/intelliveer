import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from "./settings.component";
import {
	NgbAccordionModule,
	NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgbAccordionModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }

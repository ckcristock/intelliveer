import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyInfoRoutingModule } from './policy-info-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PolicyInfoComponent } from './policy-info.component';
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';


@NgModule({
  declarations: [PolicyInfoComponent],
  imports: [
    CommonModule,
    PolicyInfoRoutingModule,
    NgSelectModule,
    ScrollspyModule,
    NavBarPillsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PolicyInfoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentalBenefComponent } from './dental-benef.component';
import { DentalBenefRoutingModule } from './dental-benef-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';


@NgModule({
  declarations: [DentalBenefComponent],
  imports: [
    CommonModule,
    DentalBenefRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollspyModule,
    NavBarPillsModule
  ]
})
export class DentalBenefModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrthoBenefRoutingModule } from './ortho-benef-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrthoBenefComponent } from './ortho-benef.component';
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';

@NgModule({
  declarations: [OrthoBenefComponent],
  imports: [
    CommonModule,
		FormsModule,
		ReactiveFormsModule,
		OrthoBenefRoutingModule,
    NgbModule,
		NgSelectModule,
    ScrollspyModule,
    NavBarPillsModule
  ]
})
export class OrthoBenefModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressFormModule } from '@modules/forms/address-form/address-form.module';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info.component';
import { ScrollspyModule } from "@modules/scrollspy/scrollspy.module";
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';


@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    AddressFormModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollspyModule,
    NavBarPillsModule
  ]
})
export class PersonalInfoModule { }
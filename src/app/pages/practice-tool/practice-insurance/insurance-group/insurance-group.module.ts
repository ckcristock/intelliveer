import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceGroupComponent } from './insurance-group.component';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceGroupRoutingModule } from './insurance-group-routing.module';



@NgModule({
  declarations: [
    InsuranceGroupComponent
  ],
  imports: [
    CommonModule,
    InsuranceGroupRoutingModule,
    NgbModule,
    NavBarPillsModule
  ]
})
export class InsuranceGroupModule { }

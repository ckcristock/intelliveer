import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance-plan.component';
import { InsuranceRoutingModule } from './insurance-plan-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';



@NgModule({
  declarations: [
    InsuranceComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    NgbModule,
    NavBarPillsModule
  ]
})
export class InsuranceModule { }

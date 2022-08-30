import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalGuardianRoutingModule } from './legal-guardian-routing.module';
import { LegalGuardianComponent } from './legal-guardian.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';



@NgModule({
  declarations: [LegalGuardianComponent],
  imports: [
    CommonModule,
    LegalGuardianRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NavBarPillsModule,
    NgbModule //required for dropdown
  ]
})
export class LegalGuardianModule { }

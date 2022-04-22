import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalGuardianRoutingModule } from './legal-guardian-routing.module';
import { LegalGuardianComponent } from './legal-guardian.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LegalGuardianComponent],
  imports: [
    CommonModule,
    LegalGuardianRoutingModule,
    NgbModule //required for dropdown
  ]
})
export class LegalGuardianModule { }

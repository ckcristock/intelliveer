import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPatientRoutingModule } from './add-patient-routing.module';
import { AddPatientComponent } from './add-patient.component';
import { CoorWithProspectComponent } from './coor-with-prospect/coor-with-prospect.component';
import { QuickAddComponent } from './quick-add/quick-add.component';


@NgModule({
  declarations: [
    AddPatientComponent,
    CoorWithProspectComponent,
    QuickAddComponent
  ],
  imports: [
    CommonModule,
    AddPatientRoutingModule
  ]
})
export class AddPatientModule { }

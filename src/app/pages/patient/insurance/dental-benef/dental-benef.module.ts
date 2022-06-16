import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentalBenefComponent } from './dental-benef.component';
import { DentalBenefRoutingModule } from './dental-benef-routing.module';
import { TabsModule } from '@modules/tabs/tabs.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DentalBenefComponent],
  imports: [
    CommonModule,
    DentalBenefRoutingModule,
    TabsModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DentalBenefModule { }

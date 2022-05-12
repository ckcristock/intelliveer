import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentalBenefComponent } from './dental-benef.component';
import { DentalBenefRoutingModule } from './dental-benef-routing.module';
import { TabsModule } from '@modules/tabs/tabs.module';


@NgModule({
  declarations: [DentalBenefComponent],
  imports: [
    CommonModule,
    DentalBenefRoutingModule,
    TabsModule
  ]
})
export class DentalBenefModule { }

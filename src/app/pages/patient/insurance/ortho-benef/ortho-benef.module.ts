import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrthoBenefComponent } from './ortho-benef.component';
import { OrthoBenefRoutingModule } from './ortho-benef-routing.module';
import { TabsModule } from '@modules/tabs/tabs.module';


@NgModule({
  declarations: [OrthoBenefComponent],
  imports: [
    CommonModule,
    OrthoBenefRoutingModule,
    TabsModule
  ]
})
export class OrthoBenefModule { }

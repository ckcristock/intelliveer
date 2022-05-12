import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyInfoComponent } from './policy-info.component';
import { PolicyInfoRoutingModule } from './policy-info-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from '@modules/tabs/tabs.module';


@NgModule({
  declarations: [PolicyInfoComponent],
  imports: [
    CommonModule,
    PolicyInfoRoutingModule,
    TabsModule,
    NgSelectModule
  ]
})
export class PolicyInfoModule { }

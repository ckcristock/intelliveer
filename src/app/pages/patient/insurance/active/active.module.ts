import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveRoutingModule } from './active-routing.module';
import { ActiveComponent } from './active.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ActiveComponent],
  imports: [
    CommonModule,
    ActiveRoutingModule,
    NgbModule
  ]
})
export class ActiveModule { }

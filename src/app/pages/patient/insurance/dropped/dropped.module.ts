import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DroppedRoutingModule } from './dropped-routing.module';
import { DroppedComponent } from './dropped.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DroppedComponent
  ],
  imports: [
    CommonModule,
    DroppedRoutingModule,
    NgbModule
  ]
})
export class DroppedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefererComponent } from './referer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RefererRoutingModule } from './referer-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    RefererComponent
  ],
  imports: [
    CommonModule,
    RefererRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule //required for dropdown
  ]
})
export class RefererModule { }

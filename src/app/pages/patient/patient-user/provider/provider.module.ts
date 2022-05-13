import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule //required for dropdown
  ]
})
export class ProviderModule { }

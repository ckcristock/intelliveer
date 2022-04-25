import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocationRoutingModule } from './add-location-routing.module';
import { AddLocationComponent } from './add-location.component';
import { LocationFormModule } from '@modules/forms/onboarding/location-form/location-form.module';

@NgModule({
  declarations: [AddLocationComponent],
  imports: [CommonModule, LocationFormModule, AddLocationRoutingModule],
})
export class AddLocationModule {}

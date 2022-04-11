import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditLocationRoutingModule } from './edit-location-routing.module';
import { EditLocationComponent } from './edit-location.component';
import { LocationFormModule } from '@modules/forms/onboarding/location-form/location-form.module';

@NgModule({
  declarations: [EditLocationComponent],
  imports: [CommonModule, LocationFormModule, EditLocationRoutingModule],
})
export class EditLocationModule {}

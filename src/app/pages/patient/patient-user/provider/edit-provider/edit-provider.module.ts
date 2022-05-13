import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProviderComponent } from './edit-provider.component';
import { ProviderFormModule } from '@modules/forms/patient/provider-form/provider-form.module';
import { EditProviderRoutingModule } from './edit-provider-routing.module';

@NgModule({
  declarations: [EditProviderComponent],
  imports: [CommonModule, ProviderFormModule, EditProviderRoutingModule],
})
export class EditProviderModule {}

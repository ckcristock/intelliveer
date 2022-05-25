import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProviderRoutingModule } from './add-provider-routing.module';
import { AddProviderComponent } from './add-provider.component';
import { ProviderFormModule } from '@modules/forms/patient/provider-form/provider-form.module';

@NgModule({
    declarations: [AddProviderComponent],
    imports: [CommonModule, ProviderFormModule, AddProviderRoutingModule],
})
export class AddProviderModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefererFormModule } from '@modules/forms/patient/referer-form/referer-form.module';
import { AddRefererRoutingModule } from './add-referer-routing.module';
import { AddRefererComponent } from './add-referer.component';

@NgModule({
    declarations: [AddRefererComponent],
    imports: [CommonModule, RefererFormModule, AddRefererRoutingModule],
})
export class AddRefererModule {}

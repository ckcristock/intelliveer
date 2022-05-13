import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefererFormModule } from '@modules/forms/patient/referer-form/referer-form.module';
import { EditRefererRoutingModule } from './edit-referer-routing.module';
import { EditRefererComponent } from './edit-referer.component';


@NgModule({
  declarations: [EditRefererComponent],
  imports: [CommonModule, RefererFormModule, EditRefererRoutingModule],
})
export class EditRefererModule {}

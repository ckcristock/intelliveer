import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrthodonticComponent } from './orthodontic.component';
import { OrthodonticRoutingModule } from './orthodontic-routing.module';
import { OrthodonticFormModule } from '@modules/forms/practice-tool/insurance-group-form/orthodontic-form/orthodontic-form.module';

@NgModule({
	declarations: [OrthodonticComponent],
	imports: [CommonModule, OrthodonticRoutingModule, OrthodonticFormModule]
})
export class OrthodonticModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera.component';
import { CameraRoutingModule } from './camera-routing.module';

@NgModule({
	declarations: [CameraComponent],
	imports: [CommonModule, CameraRoutingModule]
})
export class CameraModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosisComponent } from './diagnosis.component';
import { DiagnosisRoutingModule } from './diagnosis-routing.module';
import { ImageGalleryModule } from '@modules/image-gallery/image-gallery.module';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';



@NgModule({
  declarations: [
    DiagnosisComponent
  ],
  imports: [
    CommonModule,
    DiagnosisRoutingModule,
    ImageGalleryModule,
    NavBarPillsModule
  ]
})
export class DiagnosisModule { }

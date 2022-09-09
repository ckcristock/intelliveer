import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResizableModule } from 'angular-resizable-element';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
	declarations: [ImageGalleryComponent],
	imports: [CommonModule, NgbModule, ResizableModule, PinchZoomModule],
	exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
	declarations: [ImageGalleryComponent],
	imports: [CommonModule, NgbModule, ResizableModule],
	exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {}

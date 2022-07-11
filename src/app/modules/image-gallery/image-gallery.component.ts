import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
	selector: 'app-image-gallery',
	templateUrl: './image-gallery.component.html',
	styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
	@ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;
	@Input() galleryImagesList: any[] = [];
	@Output() closeImageGallery = new EventEmitter<boolean>();

	@Input('width') public width: any = 0;
	@Input('height') public height: any = 0;
	position: string | undefined;
	right: number = 0;

	constructor() {}

	ngOnInit(): void {
		this.position = 'relative';
		this.right = 0;
		this.ngCarousel.pause();
	}

	hideImageGallery() {
		this.closeImageGallery.emit(false);
	}

	onResizeEnd(event: ResizeEvent): void {
		this.position = 'absolute';
		this.right = 44;
		console.log(event);
		let minWidth: number = 150;
		let maxWidth: number = 595;
		if (event.rectangle.width && event.rectangle.height) {
			if (event.rectangle.width < maxWidth) {
				if (minWidth < event.rectangle.width) {
					this.width = event.rectangle.width;
				} else {
					this.width = minWidth;
				}
			} else {
				this.width = maxWidth;
			}
		}
	}

	setImageDefault() {
		this.width = 400;
		this.height = 'min-content';
	}
}

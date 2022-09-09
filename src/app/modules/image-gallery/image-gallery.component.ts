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
	left: number = 26;
	showMagnification: boolean = false;
	showImage: boolean = true;
	imageBackgroundPosition: string | undefined;
	imageBackgroundSize: any;
	mouseMoveContinue: boolean = false;
	applyZoomOnImage: boolean = false;
	zoomValue: number = 0;
	showMagnifying: boolean = false;

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
		let minWidth: number = 150;
		let maxWidth: number = 719;
		let minHeight: any = 118;
		let maxHeight: number = 544;
		if (event.edges.left && event.edges.bottom) {
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
				if (event.rectangle.height < maxHeight) {
					if (minHeight < event.rectangle.height) {
						this.height = event.rectangle.height;
					} else {
						this.height = minHeight;
					}
				} else {
					this.height = maxHeight;
				}
			}
		}
		else if (event.edges.bottom) {
			if(event.rectangle.width && event.rectangle.height)
			{
				if(event.rectangle.height < maxHeight)
				{
					this.height = this.height + event.edges.bottom;
				}
				else
				{
					this.height = maxHeight;
				}
			}
		}
		else if (event.edges.left) {
			if(event.rectangle.width && event.rectangle.height)
			{
				if(event.rectangle.width < maxWidth)
				{
					this.width = event.rectangle.width;
				}
				else
				{
					this.width = maxWidth;
				}
			}
		}
	}

	setImageDefault() {
		this.width = 478;
		this.height = 371;
		this.applyZoomOnImage = false;
		this.mouseMoveContinue = false;
	}

	imageZoomInClick()
	{
		this.applyZoomOnImage = true;
	}

	imageZoomOutClick()
	{
		this.applyZoomOnImage = false;
		this.mouseMoveContinue = false;
	}

	onmousemove(event: any)
	{
		console.log(event);
		let ratio = this.height / this.width,
        percentage = ratio * 100 + "%";
		let rect = event.target.getBoundingClientRect();
        let  xPos = event.clientX - rect.left;
        let  yPos = event.clientY - rect.top;
		let xPercent = xPos / (this.width / 100) + "%";
        let  yPercent = yPos / ((this.width * ratio) / 100) + "%";
		this.mouseMoveContinue = true;
		// this.width = xPercent;
		// this.height = yPercent;
		// console.log(this.width);
		// console.log(this.height)
		this.imageBackgroundPosition = xPercent + " " + yPercent;
		this.imageBackgroundSize = this.width - 50;
		// {
		// 	backgroundPosition: xPercent + " " + yPercent,
		// 	backgroundSize: img.naturalWidth + "px"
		//   }
	}
	calculateZoomValue($event: any)
	{
		this.zoomValue = parseInt($event.target.value);
		this.applyZoomOnImage = true;
		if(this.zoomValue == 0)
		{
			this.applyZoomOnImage = false;
			this.mouseMoveContinue = false;
		}
	}

	zoomInImage()
	{
		this.applyZoomOnImage = true;
		if(this.zoomValue < 5)
		{
			this.zoomValue = this.zoomValue + 1;
		}		
	}

	zoomOutImage()
	{
		this.applyZoomOnImage = false;
		this.mouseMoveContinue = false;
		if(this.zoomValue > 0)
		{
			this.zoomValue = this.zoomValue - 1;
		}
	}
}

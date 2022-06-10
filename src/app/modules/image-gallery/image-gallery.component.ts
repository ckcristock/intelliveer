import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @HostListener('window:resize', ['$event'])

  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;
  @Input() galleryImagesList: any[] = [];
  @Input() width: string = "37rem";
  @Input() heigth: string = "40rem";
  @Output() closeImageGallery = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.ngCarousel.pause(); 
  }

  hideImageGallery()
  {
    this.closeImageGallery.emit(false);
  }
  increase()
  {
    let width = this.width;
    let totalWidth = parseFloat(width) + 1;
    this.width = totalWidth + "rem";

    console.log("Width  "+ totalWidth + " " + this.width);

    let height = this.heigth;
    let totalHeight = parseFloat(height) + 1;
    this.heigth = totalHeight + "rem";

    console.log("Height  "+ totalHeight + " " + this.heigth);
  }
  decrease()
  {
    let width = this.width;
    let totalWidth = parseFloat(width) - 1;
    this.width = totalWidth + "rem";

    console.log("Width  "+ totalWidth + " " + this.width);

    let height = this.heigth;
    let totalHeight = parseFloat(height) - 1;
    this.heigth = totalHeight + "rem";

    console.log("Height  "+ totalHeight + " " + this.heigth);
  }

  dragToDown($event: any)
  {
    console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
    let width = this.width;
    let totalWidth = parseFloat(width) + 1;
    this.width = totalWidth + "rem";

    console.log("Width  "+ totalWidth + " " + this.width);
  }

}

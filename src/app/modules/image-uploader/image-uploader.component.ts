import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CONFIG } from '@config/index';

interface SignedURLResponse {
	signedUrl: string;
	filePath: string;
}

@Component({
	selector: 'app-image-uploader',
	templateUrl: './image-uploader.component.html',
	styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
	imageSrc: any;
	processing: boolean = false;
	@Input() imageUrl: string = '';
	@Input() isPublicImage: boolean = false;
	@Input() variableDiable: boolean = false;
	@Output() onUpload = new EventEmitter<{ url: string }>();
	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		if (this.imageUrl) {
			this.setImage({
				url: this.imageUrl,
				isPublic: this.isPublicImage
			});
		}
	}
	uploadImage(event: any) {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			const reader = new FileReader();
			let ext = file.name.split('.').reverse('')[0];
			reader.onload = (e) => (this.imageSrc = reader.result);
			reader.readAsDataURL(file);
			this.http
				.get(
					`${CONFIG.backend.host}/auth/storage/signed-url-for-file-upload?filext=${ext}`
				)
				.subscribe({
					next: (_res) => {
						this.processing = true;
						let res: SignedURLResponse = _res as any;
						if (res.signedUrl) {
							this.http
								.put(res.signedUrl, file, {
									headers: {
										'Content-Type': file.type
									}
								})
								.subscribe({
									next: () => {
										this.onUpload.emit({
											url: res.filePath
										});
									},
									error: () => {},
									complete: () => {
										this.processing = false;
									}
								});
						}
					},
					error: () => {}
				});
		}
	}
	private getImage(url: any) {
		this.processing = true;
		this.imageSrc = 'https://via.placeholder.com/150?text=...';
		this.http
			.get(
				`${CONFIG.backend.host}/auth/storage/get-file?${
					url.split('?').reverse('')[0]
				}`
			)
			.subscribe({
				next: (data: any) => {
					if (data && data.signedUrl) {
						this.imageSrc = data.signedUrl;
					}
				},
				error: () => {},
				complete: () => {
					this.processing = false;
				}
			});
	}
	private setImage({
		url,
		isPublic
	}: {
		url: string;
		isPublic: boolean;
	}): void {
		if (url) {
			try {
				const imageURL = new URL(url);
				if (isPublic) {
					this.imageSrc = imageURL;
				} else {
					this.getImage(url);
				}
			} catch (_) {
				console.error('Invalid image url');
			}
		}
	}
}

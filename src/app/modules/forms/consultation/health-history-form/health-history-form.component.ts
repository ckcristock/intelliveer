import { HttpClient } from '@angular/common/http';
import {
	Component,
	Input,
	OnInit,
	Output,
	EventEmitter,
	AfterViewInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { GeoService } from '@services/global-data/public/geo/geo.service';

@Component({
	selector: 'app-health-history-form',
	templateUrl: './health-history-form.component.html',
	styleUrls: ['./health-history-form.component.scss']
})
export class HealthHistoryFormComponent implements OnInit, AfterViewInit {
	@Input() title: string = '';
	@Input() formData: any | undefined = undefined;
	@Output() onCancel = new EventEmitter();
	@Output() onSubmit = new EventEmitter();
	BGForm: FormGroup | undefined;
	countries: any;
	imageSrc: any;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Allergies', id: 'allergies' },
		{ title: 'Medical Conditions', id: 'medicalConditions' },
		{ title: 'Dental Conditions', id: 'dentalConditions' },
		{ title: 'Consents & Signature', id: 'consents&Signature' }
	];
	showLatexInputFeild: boolean = false;
	showMetalInputFeild: boolean = false;
	showAmoxicillinInputFeild: boolean = false;
	showAsthamaInputFeild: boolean = false;
	showBloodPressureInputFeild: boolean = false;
	showCancerInputFeild: boolean = false;
	showDentalInputFeild: boolean = false;
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private geoService: GeoService
	) {}

	ngOnInit() {
		this.getCountries();
		this.initBGForm(this.formData);
	}
	ngAfterViewInit(): void {}
	initBGForm(data?: any) {
		data = data || {};
		this.BGForm = this.fb.group({
			logo: [data?.logo || 'null'],
			name: [data?.name || '', Validators.required],
			// description: [data?.description || ''],
			// abbreviation: [data?.abbreviation || ''],

			TIN: [data?.TIN || ''],
			country: [data?.country || '', Validators.required],
			currency: [data?.currency || '', Validators.required]
		});
	}
	save(data: any) {
		this.onSubmit.emit(data);
	}
	cancel() {
		this.onCancel.emit();
	}
	setAddress(type: string) {
		let physicalAddress = this.BGForm?.controls['physicalAddress'].value;
		this.BGForm?.controls[type].setValue(physicalAddress);
	}
	handleUploadedImage(e: { url: string }) {
		if (e && this.BGForm) {
			this.BGForm.controls['logo'].setValue(e.url);
		}
	}
	getCountries() {
		this.geoService.getCountries().subscribe({
			next: (res) => {
				this.countries = res;
			}
		});
	}
	onSectionChange(sectionId: any) {
		this.currentSelection = sectionId;
	}
}

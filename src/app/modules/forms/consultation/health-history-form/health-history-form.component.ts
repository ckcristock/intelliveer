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
	Form: FormGroup | undefined;
	countries: any;
	imageSrc: any;
	currentSelection: string = '';
	menuItems: MenuItem[] = [
		{ title: 'Allergies', id: 'allergies' },
		{ title: 'Medical Conditions', id: 'medicalConditions' },
		{ title: 'Dental Conditions', id: 'dentalConditions' },
		{ title: 'Consents & Signature', id: 'consents&Signature' }
	];
	showLatexInputFeild: boolean = true;
	showMetalInputFeild: boolean = true;
	showAmoxicillinInputFeild: boolean = true;
	showAsthamaInputFeild: boolean = true;
	showBloodPressureInputFeild: boolean = true;
	showCancerInputFeild: boolean = true;
	showDentalInputFeild: boolean = true;
	disableSaveButton: boolean = true;
	check1: any;
	check2: any;
	todayDate: number = Date.now();
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private geoService: GeoService
	) {}

	ngOnInit() {
		this.getCountries();
		this.initForm(this.formData);
	}
	ngAfterViewInit(): void {}
	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			latexRadio: [data?.latexRadio || 'yes'],
			metalRadio: [data?.metalRadio || 'yes'],
			amoxicillinRadio: [data?.amoxicillinRadio || 'yes'],
			asthamaRadio: [data?.asthamaRadio || 'yes'],
			bloodPressurRadio: [data?.bloodPressurRadio || 'yes'],
			cancerRadio: [data?.cancerRadio || 'yes'],
			dentalRadio: [data?.dentalRadio || 'yes'],
			check1: [data?.check1 || '', Validators.required],
			check2: [data?.check2 || '', Validators.required],
		});
		this.Form.valueChanges.subscribe(data => 
			{
				this.disableSaveButton = false;
			})
	}
	save(data: any) {
		this.onSubmit.emit(data);
	}
	cancel() {
		this.onCancel.emit();
	}
	handleUploadedImage(e: { url: string }) {
		if (e && this.Form) {
			this.Form.controls['logo'].setValue(e.url);
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
	checkTNC($event: any)
	{
		this.check1 == true && this.check2 == true ? this.disableSaveButton = false : this.disableSaveButton = true;
	}
}

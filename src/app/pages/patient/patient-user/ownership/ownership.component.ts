import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { ContactPersonFormService } from '@services/forms/contact-person-form/contact-person-form.service';
import { PatientDetailService } from '@services/patient/family/patient-detail.service';

@Component({
	selector: 'app-ownership',
	templateUrl: './ownership.component.html',
	styleUrls: ['./ownership.component.scss']
})
export class OwnershipComponent implements OnInit {

	formData: any | undefined = undefined;
	Form!: FormGroup;
	practiceList: any[] = [];
	locationList: any[] = [];
	legalEntityList: any[] = [];
	menuItems: MenuItem[] = [
		{ title: 'Overview', id: 'overview' },
		{ title: 'Ownership', id: 'ownership' }
	];
	currentSelection: string = 'overview';

	isSaveButton: boolean = false;
	inEdit: boolean = true;
	FormDisable: boolean = true;

	constructor(private fb: FormBuilder,
		private patientDetailService: PatientDetailService,
		private addressFormService: AddressFormService,
		private contactPersonFormService: ContactPersonFormService,
	) { }

	ngOnInit(): void {
		this.initForm(this.formData);
		this.enableAndDisableInputs();
	}

	initForm(data?: any) {
		data = data || {};
		this.Form = this.fb.group({
			location: [data?.location || '', Validators.required],
			practice: [data?.practice || ''],
			legalEntity: [data?.legalEntity || '']
		});
		this.addressFormService.setDisabledOrEnabled(this.FormDisable);
		this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
	}

	locationValid() {
		return this.Form.get('location')?.valid;
	}

	getPracticesList(bgId: any) {
		this.patientDetailService
			.getPracticesList(bgId)
			.subscribe((list: any) => {
				this.practiceList = list;
				console.log(list);
			});
	}

	getLocationList(bgId: any) {
		this.patientDetailService
			.getLocationsList(bgId)
			.subscribe((list: any) => {
				this.locationList = list;
				console.log(list);
			});
	}

	getLegalEntityList(bgId: any) {
		this.patientDetailService
			.getLegalEntitesList(bgId)
			.subscribe((list: any) => {
				this.legalEntityList = list;
				console.log(list);
			});
	}

	onSelectPractice($event: any) {
		console.log($event);
	}

	onSelectLocation($event: any) {
		console.log($event);
	}

	onSelectLegalEntity($event: any) {
		console.log($event);
	}

	save(data: any) {
		if (this.Form?.valid && !this.Form.pristine) {
			console.log(data);
		}
	}

	cancel() {

	}

	checkPermission() {
		this.isSaveButton = true;
		this.enableAndDisableInputs();
	}

	enableAndDisableInputs() {
		if (this.inEdit) {
			if (!this.isSaveButton) {
				this.Form?.disable();
				this.FormDisable = true;
			} else if (this.isSaveButton) {
				this.Form?.enable();
				this.FormDisable = false;
			}
			this.addressFormService.setDisabledOrEnabled(this.FormDisable);
			this.contactPersonFormService.setDisabledOrEnabled(this.FormDisable);
		}
	}

}

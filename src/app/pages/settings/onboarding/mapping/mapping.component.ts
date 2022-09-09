import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@services/alert/alert.service';
import {
	BusinessGroupDropdownService,
	SelectedBusinessGroup
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { LegalEntityService } from '@services/onboarding/legal-entity/legal-entity.service';
import { LocationService } from '@services/onboarding/location/location.service';
import { MappingService } from '@services/onboarding/mapping/mapping.service';
import { PracticeService } from '@services/onboarding/practice/practice.service';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-mapping',
	templateUrl: './mapping.component.html',
	styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit, OnDestroy {
	locations: any = [];
	locationsData: any [] = []
	legalEntities: any = [];
	practices: any = [];
	businessGroupDropdownSupscription: Subscription;
	selectedBusinessGroup: SelectedBusinessGroup | undefined;
	saveButtonEnable: boolean = true;
	bgId: any;
	mappingForm!: FormGroup;
	relationMappingForm!: FormGroup;
	getMappingData: any = []
	notMappedPractice: any = []
	notMappedLegalEntity: any = []
	notMappedLocation: any = []

	constructor(
		private mappingService: MappingService,
		private businessGroupDropdownService: BusinessGroupDropdownService,
		private locationService: LocationService,
		private legalEntityService: LegalEntityService,
		private practiceService: PracticeService,
		private alertService: AlertService,
		private routeLocation: Location,
		private fb: FormBuilder,
	) {
		this.businessGroupDropdownSupscription =
			this.businessGroupDropdownService
				.businessGroup()
				.subscribe((bg) => {
					if (bg) {
						this.selectedBusinessGroup = bg;
						this.getUserOrdID();
					}
				});
	}

	ngOnInit(): void {
		this.initForm()
	 }
	ngOnDestroy(): void {
		this.businessGroupDropdownSupscription.unsubscribe();
	}
	initForm(){
		this.mappingForm = this.fb.group({
			relation: this.fb.array([
			])
		  });
	}
	relationForm() {
		return this.relationMappingForm = this.fb.group({
		  practiceId: new FormControl(),
		  legalEntityId: new FormControl(),
		  locations: [''],
		})
	  }
	  relationMappingObj(): FormArray {
		return (<FormArray>this.mappingForm.get("relation"));
	  }
	  get f() {
		return (<FormArray>this.mappingForm.get("relation")).controls;
	  }
	getMapping() {
		this.getMappingData = []
		if (this.selectedBusinessGroup) {
			this.mappingService
				.getMapping(this.selectedBusinessGroup.bgId)
				.subscribe({
					next: (res: any) => {
						if (res) {
							this.getMappingData.push(res)

						}
					}
				});
		}
	}
	getMappingSuperUser() {
		this.mappingService
			.getMapping(this.bgId)
			.subscribe({
				next: (res: any) => {
					if (res) {
						this.getMappingData.push(res)
					}
				}
			});
	}
	getLocations() {
		if (!this.bgId) {
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup) {
			this.locationService
				.getLocations(this.bgId)
				.subscribe({
					next: (res) => {
						this.locations = res;
					},
					error: () => { }
				});
		}
	}
	getLegalEntities() {
		if (!this.bgId) {
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup) {
			this.legalEntityService
				.getLegalEntites(this.bgId)
				.subscribe({
					next: (res) => {
						this.legalEntities = res;
					},
					error: () => { }
				});
		}
	}
	getPractices() {
		if (!this.bgId) {
			this.bgId = this.selectedBusinessGroup?.bgId
		}
		if (this.selectedBusinessGroup) {
			this.practiceService
				.getPractices(this.bgId)
				.subscribe({
					next: (res) => {
						this.practices = res;
						if(this.getMappingData[0]?._id){
							this.getPracticeWithID(this.practices)
						}else{
							this.sendPracticesData(this.practices)
						}
					},
					error: () => { }
				});
		}
	}
	saveMapping() {
        this.mappingForm.value.relation.find((res: any,index:number) => {
			if(res?.legalEntityId =='' || res?.locations.length == 0 || res?.legalEntityId == null){
				this.mappingForm.value.relation.splice(index,1);
			}
		});
		if(this.getMappingData[0]?._id){
			if (this.selectedBusinessGroup) {
				this.mappingService
					.updateMapping(this.selectedBusinessGroup.bgId, this.mappingForm.value,this.getMappingData[0]?._id)
					.subscribe({
						next: (res) => {
							this.alertService.success(
								'',
								'Mapping has been updated successfully'
							);
						},
						error: (err) => {
							console.error(err);
						}
					});
			}
		}else{
			if (this.selectedBusinessGroup) {
				this.mappingService
					.saveMapping(this.selectedBusinessGroup.bgId, this.mappingForm.value)
					.subscribe({
						next: (res) => {
							this.alertService.success(
								'',
								'Mapping has been added successfully'
							);
						},
						error: (err) => {
							console.error(err);
						}
					});
			}
		}
	}
	handleCancel() {
		this.alertService
			.conformAlert('Please confirm', 'Do you want to discard the changes?')
			.then((result) => {
				if (result.value) {
					this.businessGroupDropdownSupscription =
						this.businessGroupDropdownService
							.businessGroup()
							.subscribe((bg) => {
								if (bg) {
									this.selectedBusinessGroup = bg;
									this.getUserOrdID();
									this.getLocations();
									this.getLegalEntities();
									this.getPractices();
								}
							});
				}
			});
	}
	selectionValueChange() {
		this.saveButtonEnable = false;
	}
	sendPracticesData(data:any){
	  data.forEach((res:any) => {
		const formGroup = this.relationForm()
		formGroup.patchValue({ practiceId: res._id,legalEntityId: '', locations: []})
		this.relationMappingObj().push(formGroup)
	  });
     this.getNotmappedData(data)
	}
	getPracticeWithID(data:any){
		let practiceDataObj = this.getMappingData[0].relation;
		data.forEach((res:any,index:any) => {
			const formGroup = this.relationForm()
			const p = practiceDataObj.find(
				(x: any) => x.practiceId === res._id
			);
			if(p){
                formGroup.patchValue({practiceId: res._id,legalEntityId: p.legalEntityId, locations: p.locations})
			}else{
				formGroup.patchValue({ practiceId: res._id,legalEntityId: '', locations: []})
			}

			this.relationMappingObj().push(formGroup)
		});
		this.getNotmappedData(data)
	}
	getNotmappedData(data:any){{
		let locationData:any = []
		this.mappingForm.value.relation.forEach((x:any,i:any) => {
			if(x.legalEntityId == '' && x.locations.length == 0){
				const p = data.find(
					(y: any) => y._id == x.practiceId
				);
				if(p){
				this.notMappedPractice.push(p)
				}
			}else{
				x.locations.forEach((location:any) =>{
					locationData.push({location: location})
				})
			}
		});
		this.legalEntities.forEach((legal:any,i:any) => {
			const le =  this.mappingForm.value.relation.find((le:any)=> le.legalEntityId == legal._id);
			if(le == undefined){
				this.notMappedLegalEntity.push(legal)
			}
		});
		locationData = this.getUniqueListBy(locationData,'location')
		this.locations.forEach((location:any,i:any) => {
			const lo =  locationData.find((lo:any)=> lo.location == location._id);
			if(lo == undefined){
				this.notMappedLocation.push(location)
			}
		});
		}
	}
	getUniqueListBy(arr:any, key:any) {
		return [...new Map(arr.map((item:any) => [item[key], item])).values()]
	  }
	getUserOrdID() {
		let bgOrdID: any = localStorage.getItem('selected_business_group');
		if (bgOrdID == null) {
			this.bgId = 'intelliveer';
			this.getMappingSuperUser();
			this.getLocations();
			this.getLegalEntities();
			this.getPractices();
		} else {
			this.bgId = '';
			this.getMapping();
			this.getLocations();
			this.getLegalEntities();
			this.getPractices();
		}
	}
}

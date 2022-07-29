import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@modules/nav-bar-pills/nav-bar-pills.component';
import { AlertService } from '@services/alert/alert.service';
import { ConsultationDiagnosisiProblemListService } from '@services/consultation-diagnosisi-problem-list/consultation-diagnosisi-problem-list.service';

@Component({
	selector: 'app-treatment',
	templateUrl: './treatment.component.html',
	styleUrls: ['./treatment.component.scss']
})
export class TreatmentComponent implements OnInit  {
	disableSaveButton: boolean = true;
	currentSelection: string = '';
	menuItems: any[] = [];
	treatmentOptionObj: any = {};
	showCompareAll: boolean = false;
	showAddMoreOption: boolean = false;

	constructor(
		public router: Router,
		private alertService: AlertService,
		private treatmentOption: ConsultationDiagnosisiProblemListService
	) {}

	ngOnInit(): void {
		this.getMenuItemArray();
	}

	ngAfterContentChecked(): void {
		this.router.url.includes('compare-all')
			? (this.showCompareAll = true)
			: (this.showCompareAll = false);
		if(this.router.url.includes('compare-all'))
		{
			this.currentSelection = 'compare-all';
		}
	}

	save(data: any) {
		this.alertService
			.conformAlert('Are you sure?', 'You want to save')
			.then((result: any) => {
				if (result.value) {
					this.router.navigate(['/dashboard/patient/consultation']);
				}
			});
	}
	cancel() {
		this.alertService
			.conformAlert('Are you sure?', 'You want to exit')
			.then((result: any) => {
				if (result.value) {
					localStorage.removeItem('treatmentVisitedArray');
					this.router.navigate(['/dashboard/patient/consultation']);
				}
			});
	}

	sectionMenu(Obj?: any)
	{
		if(Obj)
		{
			this.currentSelection = Obj.id;
			this.router.navigate(['/dashboard/patient/consultation/treatment']);
			this.setValueAccordingToOptions(Obj);
		}
		else
		{
			this.currentSelection = 'compare-all';
		}
	}

	setValueAccordingToOptions(Obj: any)
	{
		let compareAllArray: any = JSON.parse(localStorage.getItem("compareAllOption") || '[]');
		(compareAllArray[Obj.id - 1] != undefined) ? this.treatmentOptionObj = compareAllArray[Obj.id - 1] : this.treatmentOptionObj = this.treatmentOption.treatmentOptionsArray;
		this.treatmentOption.treatmentOptionObj = this.treatmentOptionObj;
	}

	addMoreOption()
	{
		this.menuItems = JSON.parse(localStorage.getItem("menuItemArray") || '[]');
		if(this.menuItems.length < 4)
		{
			const optionNumber = this.menuItems.length + 1;
			let menuItemObj = {
				title: 'Option ' + optionNumber,
				id: '' + optionNumber,
				showDone: false
			}
			this.menuItems.push(menuItemObj);
			localStorage.setItem("menuItemArray", JSON.stringify(this.menuItems));
			this.currentSelection = menuItemObj.id;
			this.setValueAccordingToOptions(menuItemObj);
			this.treatmentOption.treatmentOptionObj = {};
			this.router.navigate(['/dashboard/patient/consultation/treatment']);
		}
		if(this.menuItems.length <= 3)
		{
			this.showAddMoreOption = false;
		}
		else
		{
			this.showAddMoreOption = true;
		}
	}

	getMenuItemArray()
	{
		this.menuItems = JSON.parse(localStorage.getItem("menuItemArray") || '[]');
		if(this.menuItems.length == 0)
		{
			const optionNumber = this.menuItems.length + 1;
			let menuItemObj = {
				title: 'Option ' + optionNumber,
				id: '' + optionNumber,
				showDone: false
			}
			this.menuItems.push(menuItemObj);
			this.setValueAccordingToOptions(menuItemObj);
			localStorage.setItem("menuItemArray", JSON.stringify(this.menuItems));
		}
		else
		{
			if(this.router.url.includes('compare-all'))
			{
				this.currentSelection = 'compare-all'
			}
			else
			{
				let menuItemObj = {
					title: 'Option 1',
					id: '1',
					showDone: false
				}
				this.currentSelection = menuItemObj.id;
				this.setValueAccordingToOptions(menuItemObj);
			}
		}
		if(this.menuItems.length <= 3)
		{
			this.showAddMoreOption = false;
		}
		else
		{
			this.showAddMoreOption = true;
		}
	}

	deleteOptions(Obj: any)
	{
		let compareAllArray: any[] = JSON.parse(localStorage.getItem("compareAllOption") || '[]');
		if(compareAllArray[Obj.id - 1])
		{
			this.deleteOptionsValue(compareAllArray[Obj.id - 1], compareAllArray);
			this.deleteMenuOptions(Obj);
		}
		else
		{
			this.deleteMenuOptions(Obj);
		}
	}

	deleteMenuOptions(Obj: any)
	{
		this.menuItems = JSON.parse(localStorage.getItem("menuItemArray") || '[]');
		for (let i = 0; i < this.menuItems.length; i++) 
		{
			if(this.menuItems[i].id === Obj.id)
			{
				this.menuItems.splice(i, 1);
			}
		}
		localStorage.setItem("menuItemArray", JSON.stringify(this.menuItems));
		if(this.menuItems.length <= 3)
		{
			this.showAddMoreOption = false;
		}
		else
		{
			this.showAddMoreOption = true;
		}
	}

	deleteOptionsValue(Obj: any, compareAllArray: any[])
	{
		for (let i = 0; i < compareAllArray.length; i++) 
		{
			if(compareAllArray[i].id === Obj.id)
			{
				compareAllArray.splice(i, 1);
			}
		}
		localStorage.setItem("compareAllOption", JSON.stringify(compareAllArray));
	}

	duplicateOptions(Obj: any)
	{
		this.menuItems = JSON.parse(localStorage.getItem("menuItemArray") || '[]');
		if(this.menuItems.length < 4)
		{
			const optionNumber = this.menuItems.length + 1;
			let menuItemObj = {
				title: 'Option ' + optionNumber,
				id: '' + optionNumber,
				showDone: true
			}
			this.menuItems.push(menuItemObj);
			localStorage.setItem("menuItemArray", JSON.stringify(this.menuItems));
			this.currentSelection = menuItemObj.id;
			this.setValueAccordingToOptions(Obj);
			let compareAllArray: any[] = JSON.parse(localStorage.getItem("compareAllOption") || '[]');
			compareAllArray[compareAllArray.length] = this.treatmentOptionObj;
			localStorage.setItem("compareAllOption", JSON.stringify(compareAllArray));
			this.treatmentOption.treatmentOptionObj = this.treatmentOptionObj;
			this.router.navigate(['/dashboard/patient/consultation/treatment']);
		}
		else
		{
			console.log("alllready 4 option has been created");
		}
		if(this.menuItems.length <= 3)
		{
			this.showAddMoreOption = false;
		}
		else
		{
			this.showAddMoreOption = true;
		}
	}


}

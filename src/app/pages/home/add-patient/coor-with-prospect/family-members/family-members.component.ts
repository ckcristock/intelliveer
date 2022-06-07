import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';

@Component({
	selector: 'app-family-members',
	templateUrl: './family-members.component.html',
	styleUrls: ['./family-members.component.scss']
})
export class FamilyMembersComponent implements OnInit {
	menuItems: IMenuItem[] = addPatientCordinateMenuItems;
	provideFamilyMember: boolean = true;
	whichIsChecked: any = 1;
	showButtonSaveCancel:boolean = false;
	openTextAreaVar:boolean = false;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.whichIsChecked = localStorage.getItem('familyMemberCount');
		console.log(this.whichIsChecked);

		if (this.whichIsChecked == (0 || undefined || null)) {
			this.whichIsChecked = 1;
			localStorage.setItem('familyMemberCount', '1');
			this.provideFamilyMember = true;
		}
	}

	continueToAppointment() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Family Members");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
		this.router.navigate(['/dashboard/home/add-patient/coor-with-prospect/family-members/additional-patient-2']);
	}
	checkFamilyMemberCount(event: any) {
		localStorage.setItem('familyMemberCount', event.target.value);
	}
	changeProvideFM(event: any) {
		console.log(event.target.value);

		if (event.target.value === 'true') {
			this.provideFamilyMember = true;
			this.whichIsChecked = 1;
			localStorage.setItem('familyMemberCount', '1');
		} else {
			this.provideFamilyMember = false;
			localStorage.setItem('familyMemberCount', '0');
		}
	}
	showButtonSaveCancelFunc(){
		this.showButtonSaveCancel = true;
	  }
	
	  closeSaveCancelFunc(){
		this.openTextAreaVar = false;
		this.showButtonSaveCancel = false;
	  }
	
	  openTextarea(){
		this.openTextAreaVar = true;
		this.showButtonSaveCancel = true;
	  }
}

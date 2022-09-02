import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';
import { AddPatientService } from '@services/add-patient/add-patient.service';
import { GlobalRoutesService } from "@services/global-routes/global-routes.service";

@Component({
	selector: 'app-family-members',
	templateUrl: './family-members.component.html',
	styleUrls: ['./family-members.component.scss']
})
export class FamilyMembersComponent implements OnInit {
	menuItems: IMenuItem[] = addPatientCordinateMenuItems;
	provideFamilyMember: boolean = true;
	whichIsChecked: any = 1;
	showButtonSaveCancel: boolean = false;
	openTextAreaVar: boolean = false;
	coordWithProspRoutes: any[] = [];
	disableYesNo:any = null;
	disableRadioBTowThree: any[] = [
		{0:null},
		{1:null}
	];
	errors: any;
	@ViewChild('radio1') radio1!: ElementRef;
	@ViewChild('radio2') radio2!: ElementRef;
	@ViewChild('radio3') radio3!: ElementRef;

	constructor(
		private router: Router,
		private addPatientServ: AddPatientService,
		private routes: GlobalRoutesService
	) {}

	ngOnInit(): void {

		try {
		
		this.addPatientServ.getPatientsSavedUnsaved().subscribe((resp: any[])=>{
				
				if(resp[0]?.saved===true){
					this.disableYesNo = "disabled";
				} else {this.disableYesNo=null};

				for(let i=0; i<resp.length-1; i++){
					console.log("i", i);
					
					if(resp[i+1].saved==true){
						this.disableRadioBTowThree[i][i] = "disabled";
					} else this.disableRadioBTowThree[i][i] = null;
				}
		  });
		} catch (err) {
			this.errors = 'Us a error';
		  };

		this.whichIsChecked = localStorage.getItem('familyMemberCount');
		console.log(this.whichIsChecked);

		if (this.whichIsChecked == (0 || undefined || null)) {
			this.whichIsChecked = 1;
			localStorage.setItem('familyMemberCount', '1');
			this.provideFamilyMember = true;
		}
	}

	continueToAppointment() {
		this.coordWithProspRoutes =	this.routes.getCoordWithProspRoutes();
		this.router.navigate([this.coordWithProspRoutes[6].child[0].url]);
	}

	checkFamilyMemberCount(event: any) {
		localStorage.setItem('familyMemberCount', event.target.value);
		this.addPatientServ.setTaken(localStorage.getItem('familyMemberCount'));
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

	showButtonSaveCancelFunc() {
		this.showButtonSaveCancel = true;
	}

	closeSaveCancelFunc() {
		this.openTextAreaVar = false;
		this.showButtonSaveCancel = false;
	}

	openTextarea() {
		this.openTextAreaVar = true;
		this.showButtonSaveCancel = true;
	}

	uncheck(event: any){
		let index = event.target.value;
		let familyMemberCount = parseInt(localStorage.getItem('familyMemberCount') || "0");
		
		if(familyMemberCount==2&&index==2){
			this.radio1.nativeElement.checked=true;
		
			this.whichIsChecked = 1;
			localStorage.setItem('familyMemberCount', '1');
			this.addPatientServ.setTaken(localStorage.getItem('familyMemberCount'));
		} else if(familyMemberCount==3&&index==3){
			this.radio2.nativeElement.checked=true;
		
			this.whichIsChecked = 2;
			localStorage.setItem('familyMemberCount', '2');
			this.addPatientServ.setTaken(localStorage.getItem('familyMemberCount'));
		}
	}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '@pages/dashboard/menu';
import { addPatientCordinateMenuItems } from '@pages/home/add-patient/menu';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {

  menuItems: IMenuItem[] = addPatientCordinateMenuItems;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	continueToConclusion() {
		let visitedArray: any = JSON.parse(
			localStorage.getItem('visitedArray') || '[]'
		);
		visitedArray.push('Conclusion');
		localStorage.setItem('visitedArray', JSON.stringify(visitedArray));
		this.router.navigate([this.menuItems[8].url]);
	}
}
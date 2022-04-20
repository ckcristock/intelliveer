import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CONFIG } from '@config/index';

@Component({
	selector: 'app-mapping',
	templateUrl: './mapping.component.html',
	styleUrls: ['./mapping.component.scss'],
})
export class MappingComponent implements OnInit {
	locations: any = [
		{
			_id: 'LOC1',
			name: 'Loc one',
		},
		{
			_id: 'LOC2',
			name: 'Loc two',
		},
		{
			_id: 'LOC3',
			name: 'Loc three',
		},
	];
	legalEntities: any = [
		{
			_id: 'LE1',
			name: 'LE one',
		},
		{
			_id: 'LE2',
			name: 'LE two',
		},
		{
			_id: 'LE3',
			name: 'LE three',
		},
	];
	practices: any = [
		{
			_id: 'PR1',
			name: 'PR one',
		},
		{
			_id: 'PR2',
			name: 'PR two',
		},
		{
			_id: 'PR3',
			name: 'PR three',
		},
	];
	data = [
		{
			_id: 'LOC1',
			selectedLE: ['LE1', 'LE2'],
			selectedPR: ['PR1'],
		},
		{
			_id: 'LOC2',
			selectedLE: ['LE2'],
			selectedPR: ['PR2'],
		},
		{
			_id: 'LOC3',
			selectedLE: ['LE1'],
			selectedPR: ['PR3', 'PR2'],
		},
	];
	constructor(private http: HttpClient) {
		this.http
			.get(`${CONFIG.backend.host}/bg-auth/api/v1/bg-mapping?bg=BG1`)
			.subscribe({
				next: (res: any) => {
					this.locations.map((r: any) => {
						let c = res.relation.filter(
							(i: any) => i.locId == r._id
						);

						if (c && c.length == 1) {
							r['legalEntities'] = c[0].legalEntities || [];
							r['practices'] = c[0].practices || [];
						}
					});
				},
			});
	}

	ngOnInit(): void {}
	saveMapping() {
		const data = JSON.parse(JSON.stringify(this.locations));
		const relation = data.reduce((acc: any, item: any) => {
			item['locId'] = item['_id'];
			delete item['_id'];
			delete item['name'];
			acc = [...acc, item];
			return acc;
		}, []);

		this.http
			.post(
				`${CONFIG.backend.host}/bg-auth/api/v1/bg-mapping?bg=BG1`,
				relation
			)
			.subscribe({
				next: (res) => {
					console.log(res);
				},
			});
	}
}

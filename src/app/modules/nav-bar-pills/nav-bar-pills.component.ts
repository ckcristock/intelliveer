import {
	AfterContentInit,
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';
import { Router } from '@angular/router';

export type MenuItem = {
	title: string;
	id: string;
};

@Component({
	selector: 'app-nav-bar-pills',
	templateUrl: './nav-bar-pills.component.html',
	styleUrls: ['./nav-bar-pills.component.scss']
})
export class NavBarPillsComponent implements OnInit, AfterContentInit {
	@Input() activeClass: string = 'init';
	@Input() mode: string = 'menu';

	@Input() saveBtn: boolean = false;
	@Input() disableSaveBtn: boolean = false;
	@Input() cancelBtn: boolean = false;
	@Input() disableCancelBtn: boolean = false;
	@Input() addBtn: boolean = false;
	@Input() editButton: any;
	@Input() disableAddBtn: boolean = false;

	@Output() public onCancel = new EventEmitter<string>();
	@Output() public onSave = new EventEmitter<string>();
	@Output() public onAdd = new EventEmitter<string>();

	@Input() menuItems: MenuItem[] = [];
	constructor(public router: Router,) {}

	ngOnInit(): void {}
	ngAfterContentInit(): void {
		(this.menuItems.length != 0) ?
		this.activeClass = this.menuItems[0]['id'] :
		this.activeClass = '';
	}
	scroll(menu: any) {
		const element: HTMLElement = document.getElementById(
			menu.id
		) as HTMLElement;
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		}
	}
	handleSaveBtnClicked() {
		this.onSave.emit();
	}
	handleSaveCancelClicked() {
		this.onCancel.emit();
	}
	handleAddCancelClicked() {
		this.onAdd.emit();
	}
	editButtonURL(URL:any){
		this.router.navigate([URL]);
	}
}

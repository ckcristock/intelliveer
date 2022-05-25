import {
	AfterContentInit,
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';

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
	@Input() disableAddBtn: boolean = false;

	@Output() public onCancel = new EventEmitter<string>();
	@Output() public onSave = new EventEmitter<string>();
	@Output() public onAdd = new EventEmitter<string>();

	@Input() menuItems: MenuItem[] = [];
	constructor() {}

	ngOnInit(): void {}
	ngAfterContentInit(): void {
		this.activeClass = this.menuItems[0]['id'];
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
}

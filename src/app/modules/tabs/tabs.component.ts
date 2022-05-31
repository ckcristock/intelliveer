import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  // selectTab: string = "";

  @Input() tabsLst: any[] = [];
  @Output() selectTab = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  scroll(selectTab: any) {
    this.selectTab.emit(selectTab);
  }

}

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

  ngOnInit(): void {
    console.log(this.tabsLst)
  }

  scroll(el: HTMLElement, selectTab: string) {
    let tabObj ={
      selectHtnlTab: el,
      selectTab: selectTab
    }
    // this.selectTab = selectTab.trim();
    this.selectTab.emit(tabObj);
    // el.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'nearest',
    // });
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-info',
  templateUrl: './policy-info.component.html',
  styleUrls: ['./policy-info.component.scss']
})
export class PolicyInfoComponent implements OnInit {

  selectTab: string = "overview";

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement, selectTab: string) {
    this.selectTab = selectTab.trim();
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}

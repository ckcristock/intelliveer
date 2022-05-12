import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ortho-benef',
  templateUrl: './ortho-benef.component.html',
  styleUrls: ['./ortho-benef.component.scss']
})
export class OrthoBenefComponent implements OnInit {

  selectTab: string = "eligibility";

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

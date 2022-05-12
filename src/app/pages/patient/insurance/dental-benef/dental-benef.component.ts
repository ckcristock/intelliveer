import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dental-benef',
  templateUrl: './dental-benef.component.html',
  styleUrls: ['./dental-benef.component.scss']
})
export class DentalBenefComponent implements OnInit {

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

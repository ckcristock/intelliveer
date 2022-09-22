import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-option',
  templateUrl: './compare-option.component.html',
  styleUrls: ['./compare-option.component.scss']
})
export class CompareOptionComponent implements OnInit {

  currentSelection: string = '';
	menuItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

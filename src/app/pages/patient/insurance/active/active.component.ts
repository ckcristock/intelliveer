import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  constructor() { }

  letters=[{"letter":"A", "status":"PRIMARY"}, {"letter":"B", "status":"SECONDARY"}, {"letter":"C", "status":"TERTIARY"}];

  ngOnInit(): void {
  }

}
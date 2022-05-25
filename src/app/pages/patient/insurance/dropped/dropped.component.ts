import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropped',
  templateUrl: './dropped.component.html',
  styleUrls: ['./dropped.component.scss']
})
export class DroppedComponent implements OnInit {

  constructor() { }

  letters=[{"letter":"A", "status":"PRIMARY"}, {"letter":"B", "status":"SECONDARY"}, {"letter":"C", "status":"TERTIARY"}];

  ngOnInit(): void {
  }

}

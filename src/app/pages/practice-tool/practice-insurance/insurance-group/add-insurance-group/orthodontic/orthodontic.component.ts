import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orthodontic',
  templateUrl: './orthodontic.component.html',
  styleUrls: ['./orthodontic.component.scss']
})
export class OrthodonticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create(data: any)
  {
    console.log(data)
  }

  handleCancel()
  {

  }

}

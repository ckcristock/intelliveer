import { Component, OnInit } from '@angular/core';
// import {Modal} from 'bootstrap' //<--import Modal

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

  show(modalElement:any){
    // const modal=new Modal(modalElement);
    // modal.show();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  selectedPatientProfileUrl: any;

  constructor() { }

  ngOnInit(): void {
    let selectedPatient = JSON.parse(localStorage.getItem('selectedPatient') || '')
    // console.log(selectedPatient);
    this.selectedPatientProfileUrl = selectedPatient.profileUrl;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  procedToNextC() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Caller’s Info");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextP() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Patient");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextLG() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Legal Guardian");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextD() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Dentist");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextR() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Referrer");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextI() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Insurance");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextFM() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Family Members");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextP2() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Patient 2");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextP3() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Patient 3");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextP4() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Patient 4");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextA() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Appointment");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }
  procedToNextCO() {
    let visitedArray: any = JSON.parse(localStorage.getItem("visitedArray") || '[]');
    visitedArray.push("Conclusion");
    localStorage.setItem("visitedArray", JSON.stringify(visitedArray));
  }



}

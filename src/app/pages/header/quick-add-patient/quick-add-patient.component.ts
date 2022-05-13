import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quick-add-patient',
  templateUrl: './quick-add-patient.component.html',
  styleUrls: ['./quick-add-patient.component.scss']
})
export class QuickAddPatientComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

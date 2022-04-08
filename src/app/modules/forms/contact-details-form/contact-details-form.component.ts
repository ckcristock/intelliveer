import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CONFIG } from '@config/index';

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss'],
})
export class ContactDetailsFormComponent implements OnInit {
  @Input() parentGroup!: FormGroup;
  @Input() formGroupControls!: AbstractControl | null;
  @Input() formGroupName!: string;
  staticData: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStaticData();
  }
  getStaticData() {
    this.http
      .get(`${CONFIG.backend.host}/auth/api/v1/global-data/static-types`)
      .subscribe({
        next: (data) => {
          this.staticData = data;
        },
        error: () => {},
        complete: () => {},
      });
  }
}

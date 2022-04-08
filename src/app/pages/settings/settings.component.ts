import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from '@config/index';
import { AddressFormService } from '@services/forms/address-form/address-form.service';
import { AlertService } from '@services/alert/alert.service';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  data: any;
  businessGroupDropdownSupscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    private addressFormService: AddressFormService,
    private businessGroupDropdownService: BusinessGroupDropdownService
  ) {
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          this.selectedBusinessGroup = bg;
          this.fetchList();
        }
      });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.businessGroupDropdownSupscription.unsubscribe();
  }
  fetchList() {
    if (this.selectedBusinessGroup) {
      this.http
        .get(
          `${CONFIG.backend.host}/bg-auth/api/v1/legal-entity?bg=${this.selectedBusinessGroup.bgId}`
        )
        .subscribe({
          next: (data) => {
            this.data = data;
          },
          error: () => {},
        });
    }
  }
}

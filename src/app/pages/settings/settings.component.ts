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
import { CONFIG } from '@app/config';
import { AlertService } from '@src/app/services/alert/alert.service';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@src/app/services/business-group-dropdown/business-group-dropdown.service';
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

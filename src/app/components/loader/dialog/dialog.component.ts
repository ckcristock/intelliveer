import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '@services/loader/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'loader-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnDestroy {
  showLoader: boolean = false;
  loaderSubscription: Subscription;
  constructor(private loaderService: LoaderService) {
    this.loaderSubscription = this.loaderService.loaderStatus.subscribe(
      (status) => {
        this.showLoader = status;
      }
    );
  }

  ngOnDestroy(): void {
    this.loaderSubscription.unsubscribe();
  }
}

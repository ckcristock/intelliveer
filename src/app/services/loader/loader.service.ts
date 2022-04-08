import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loaderStatus: Subject<boolean> = new Subject<boolean>();
  constructor() {}
  openDialog(): void {
    this.loaderStatus.next(true);
  }
  closeDialog() {
    this.loaderStatus.next(false);
  }
}

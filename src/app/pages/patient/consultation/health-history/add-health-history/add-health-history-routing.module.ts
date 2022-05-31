import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHealthHistoryComponent } from './add-health-history.component';

const routes: Routes = [
  {
    path: '',
    component: AddHealthHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHealthHistoryRoutingModule {}

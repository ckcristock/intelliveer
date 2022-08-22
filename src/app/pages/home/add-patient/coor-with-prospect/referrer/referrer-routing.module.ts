import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { ReferrerComponent } from './referrer.component';

const routes: Routes = [
  {
    path: '',
    component: ReferrerComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: ReferrerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferrerRoutingModule { }

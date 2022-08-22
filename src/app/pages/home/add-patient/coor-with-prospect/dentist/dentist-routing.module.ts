import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { DentistComponent } from './dentist.component';

const routes: Routes = [
  {
    path: '',
    component: DentistComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: DentistComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }

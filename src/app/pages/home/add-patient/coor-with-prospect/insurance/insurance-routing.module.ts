import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { InsuranceComponent } from './insurance.component';

const routes: Routes = [
  {
    path: '',
    component: InsuranceComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: InsuranceComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }

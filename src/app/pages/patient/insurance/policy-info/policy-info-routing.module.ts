import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { PolicyInfoComponent } from './policy-info.component';

const routes: Routes = [
  {
    path: '',
    component: PolicyInfoComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: PolicyInfoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyInfoRoutingModule { }

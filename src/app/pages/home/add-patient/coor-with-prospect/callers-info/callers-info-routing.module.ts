import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { CallersInfoComponent } from './callers-info.component';

const routes: Routes = [
  {
    path: '',
    component: CallersInfoComponent,
    canDeactivate: [CanDeactivateGuard],
    children: [
      {
        path: '',
        component: CallersInfoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallersInfoRoutingModule { }

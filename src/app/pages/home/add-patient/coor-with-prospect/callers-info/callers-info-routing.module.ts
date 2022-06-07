import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallersInfoComponent } from './callers-info.component';

const routes: Routes = [
  {
    path: '',
    component: CallersInfoComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DroppedComponent } from './dropped.component';

const routes: Routes = [
  {
    path: '',
    component: DroppedComponent,
    children: [
      {
        path: '',
        component: DroppedComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DroppedRoutingModule { }

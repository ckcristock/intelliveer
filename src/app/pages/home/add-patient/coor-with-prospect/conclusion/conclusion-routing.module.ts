import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConclusionComponent } from './conclusion.component';

const routes: Routes = [
  {
    path: '',
    component: ConclusionComponent,
    children: [
      {
        path: '',
        component: ConclusionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConclusionRoutingModule { }

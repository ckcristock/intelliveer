import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferrerComponent } from './referrer.component';

const routes: Routes = [
  {
    path: '',
    component: ReferrerComponent,
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

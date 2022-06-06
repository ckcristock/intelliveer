import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgGuardianComponent } from './lg-guardian.component';

const routes: Routes = [
  {
    path: '',
    component: LgGuardianComponent,
    children: [
      {
        path: '',
        component: LgGuardianComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgGuardianRoutingModule { }

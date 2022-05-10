import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrthoBenefComponent } from './ortho-benef.component';

const routes: Routes = [{
  path: '',
  component: OrthoBenefComponent,
  children: [
    {
      path: '',
      component: OrthoBenefComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrthoBenefRoutingModule { }

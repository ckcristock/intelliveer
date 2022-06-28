import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLocationComponent } from './edit-location.component';

const routes: Routes = [
  {
    path: '',
    component: EditLocationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLocationRoutingModule {}

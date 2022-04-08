import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBusinessGroupComponent } from './edit-business-group.component';

const routes: Routes = [
  {
    path: '',
    component: EditBusinessGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBusinessGroupRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRefererComponent } from './edit-referer.component';

const routes: Routes = [
  {
    path: '',
    component: EditRefererComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRefererRoutingModule {}

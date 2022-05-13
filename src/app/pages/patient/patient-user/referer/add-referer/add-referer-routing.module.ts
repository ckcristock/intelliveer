import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRefererComponent } from './add-referer.component';

const routes: Routes = [
  {
    path: '',
    component: AddRefererComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRefererRoutingModule {}

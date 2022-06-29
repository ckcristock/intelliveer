import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPracticeComponent } from './add-practice.component';

const routes: Routes = [
  {
    path: '',
    component: AddPracticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPracticeRoutingModule {}

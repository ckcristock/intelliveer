import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPracticeComponent } from './edit-practice.component';

const routes: Routes = [
  {
    path: '',
    component: EditPracticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPracticeRoutingModule {}

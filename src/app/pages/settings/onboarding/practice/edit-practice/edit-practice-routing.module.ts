import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { EditPracticeComponent } from './edit-practice.component';

const routes: Routes = [
  {
    path: '',
    component: EditPracticeComponent,
		canDeactivate: [CanDeactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPracticeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLegalEntityComponent } from './edit-legal-entity.component';

const routes: Routes = [
  {
    path: '',
    component: EditLegalEntityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLegalEntityRoutingModule {}

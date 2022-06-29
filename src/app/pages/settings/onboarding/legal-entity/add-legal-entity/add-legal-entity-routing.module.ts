import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLegalEntityComponent } from './add-legal-entity.component';

const routes: Routes = [
  {
    path: '',
    component: AddLegalEntityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLegalEntityRoutingModule {}

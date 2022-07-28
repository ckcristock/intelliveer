import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDocumentComponent } from './user-document.component';

const routes: Routes = [
  {
    path: '',
    component: UserDocumentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDocumentRoutingModule { }

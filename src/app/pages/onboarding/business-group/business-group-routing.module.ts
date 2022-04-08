import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessGroupComponent } from './business-group.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessGroupRoutingModule {}

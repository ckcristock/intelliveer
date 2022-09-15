import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceGroupComponent } from './insurance-group.component';

const routes: Routes = [
    {
        path: '',
        component: InsuranceGroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsuranceGroupRoutingModule {}

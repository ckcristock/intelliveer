import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceComponent } from './insurance-plan.component';

const routes: Routes = [
    {
        path: '',
        component: InsuranceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsuranceRoutingModule {}

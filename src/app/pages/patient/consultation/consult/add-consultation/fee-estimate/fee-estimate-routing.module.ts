import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeEstimateComponent } from './fee-estimate.component';

const routes: Routes = [
    {
        path: '',
        component: FeeEstimateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeeEstimateRoutingModule {}

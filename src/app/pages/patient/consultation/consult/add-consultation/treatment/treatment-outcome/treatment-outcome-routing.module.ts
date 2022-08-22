import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentOutcomeComponent } from './treatment-outcome.component';

const routes: Routes = [
    {
        path: '',
        component: TreatmentOutcomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TreatmentOutcomeRoutingModule {}

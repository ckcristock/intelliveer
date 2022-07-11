import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentMechanicsComponent } from './treatment-mechanics.component';

const routes: Routes = [
    {
        path: '',
        component: TreatmentMechanicsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TreatmentMechanicsRoutingModule {}

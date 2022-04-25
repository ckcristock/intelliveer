import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailComponent } from './patient-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PatientDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientDetailRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@guards/can-deactivate/can-deactivate.guard';
import { PatientDetailComponent } from './patient-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PatientDetailComponent,
        canDeactivate: [CanDeactivateGuard],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientDetailRoutingModule { }

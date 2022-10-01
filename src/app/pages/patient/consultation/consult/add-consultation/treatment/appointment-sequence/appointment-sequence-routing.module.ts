import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentSequenceComponent } from './appointment-sequence.component';

const routes: Routes = [
    {
        path: '',
        component: AppointmentSequenceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentSequenceRoutingModule {}

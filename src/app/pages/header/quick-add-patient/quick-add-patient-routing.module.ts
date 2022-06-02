import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickAddPatientComponent } from './quick-add-patient.component';

const routes: Routes = [
    {
        path: '',
        component: QuickAddPatientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuickAddPatientRoutingModule {}

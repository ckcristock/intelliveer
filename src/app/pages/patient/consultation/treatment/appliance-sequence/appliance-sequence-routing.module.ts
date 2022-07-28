import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplianceSequenceComponent } from './appliance-sequence.component';

const routes: Routes = [
    {
        path: '',
        component: ApplianceSequenceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplianceSequenceRoutingModule {}

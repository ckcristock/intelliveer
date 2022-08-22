import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrerequisitesComponent } from './prerequisites.component';

const routes: Routes = [
    {
        path: '',
        component: PrerequisitesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrerequisitesRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MalocclusionComponent } from './malocclusion.component';

const routes: Routes = [
    {
        path: '',
        component: MalocclusionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MalocclusionRoutingModule {}

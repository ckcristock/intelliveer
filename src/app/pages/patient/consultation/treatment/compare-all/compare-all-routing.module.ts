import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareAllComponent } from './compare-all.component';

const routes: Routes = [
    {
        path: '',
        component: CompareAllComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompareAllRoutingModule {}

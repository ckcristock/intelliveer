import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverbiteComponent } from './overbite.component';

const routes: Routes = [
    {
        path: '',
        component: OverbiteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverbiteRoutingModule {}

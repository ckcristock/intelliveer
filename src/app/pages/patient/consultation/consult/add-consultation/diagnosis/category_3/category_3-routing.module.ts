import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category3Component } from './category_3.component';

const routes: Routes = [
    {
        path: '',
        component: Category3Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Category3RoutingModule {}

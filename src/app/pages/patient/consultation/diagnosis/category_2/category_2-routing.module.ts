import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category2Component } from './category_2.component';

const routes: Routes = [
    {
        path: '',
        component: Category2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Category2RoutingModule {}

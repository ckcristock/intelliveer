import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category6Component } from './category_6.component';

const routes: Routes = [
    {
        path: '',
        component: Category6Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Category6RoutingModule {}

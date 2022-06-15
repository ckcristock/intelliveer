import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category1Component } from './category_1.component';

const routes: Routes = [
    {
        path: '',
        component: Category1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Category1RoutingModule {}

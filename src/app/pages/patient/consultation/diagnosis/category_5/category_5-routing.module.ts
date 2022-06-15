import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category5Component } from './category_5.component';

const routes: Routes = [
    {
        path: '',
        component: Category5Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Category5RoutingModule {}

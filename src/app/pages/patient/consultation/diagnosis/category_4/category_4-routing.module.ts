import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category4Component } from './category_4.component';

const routes: Routes = [
    {
        path: '',
        component: Category4Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Category4RoutingModule {}

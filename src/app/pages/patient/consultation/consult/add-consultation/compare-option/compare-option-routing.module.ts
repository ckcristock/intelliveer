import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareOptionComponent } from './compare-option.component';

const routes: Routes = [
    {
        path: '',
        component: CompareOptionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompareOptionRoutingModule {}

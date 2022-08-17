import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdjunctiveTxComponent } from './adjunctive-tx.component';

const routes: Routes = [
    {
        path: '',
        component: AdjunctiveTxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdjunctiveTxRoutingModule {}

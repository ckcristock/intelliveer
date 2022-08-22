import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketVariationsComponent } from './bracket-variations.component';

const routes: Routes = [
    {
        path: '',
        component: BracketVariationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BracketVariationsRoutingModule {}

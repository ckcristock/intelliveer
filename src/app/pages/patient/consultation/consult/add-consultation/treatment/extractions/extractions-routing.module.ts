import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtractionsComponent } from './extractions.component';

const routes: Routes = [
    {
        path: '',
        component: ExtractionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtractionsRoutingModule {}

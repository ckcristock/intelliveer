import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverjetComponent } from './overjet.component';

const routes: Routes = [
    {
        path: '',
        component: OverjetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverjetRoutingModule {}

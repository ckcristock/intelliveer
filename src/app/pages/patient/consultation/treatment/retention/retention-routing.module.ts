import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetentionComponent } from './retention.component';

const routes: Routes = [
    {
        path: '',
        component: RetentionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RetentionRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefererComponent } from './referer.component';

const routes: Routes = [
    {
        path: '',
        component: RefererComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RefererRoutingModule {}

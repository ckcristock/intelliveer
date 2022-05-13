import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceSubscriberComponent } from './insurance-subscriber.component';

const routes: Routes = [
    {
        path: '',
        component: InsuranceSubscriberComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsuranceSubscriberRoutingModule {}

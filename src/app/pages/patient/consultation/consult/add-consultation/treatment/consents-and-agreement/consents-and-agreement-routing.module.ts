import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentsAndAgreementComponent } from './consents-and-agreement.component';

const routes: Routes = [
    {
        path: '',
        component: ConsentsAndAgreementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsentsAndAgreementRoutingModule {}

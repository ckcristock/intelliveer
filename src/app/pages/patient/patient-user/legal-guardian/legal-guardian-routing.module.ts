import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalGuardianComponent } from './legal-guardian.component';

const routes: Routes = [
    {
        path: '',
        component: LegalGuardianComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LegalGuardianRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyMemberComponent } from './family-member.component';

const routes: Routes = [
    {
        path: '',
        component: FamilyMemberComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FamilyMemberRoutingModule {}

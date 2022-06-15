import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisComponent } from './diagnosis.component';

const routes: Routes = [
    {
        path: '',
        component: DiagnosisComponent,
        children: [
            {
                path: '',
                redirectTo: 'malocclusion',
                pathMatch: 'full',
            },
            {
                path: 'malocclusion',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/malocclusion/malocclusion.module').then(
                        (m) => m.MalocclusionModule
                    ),
            },
            {
                path: 'overjet',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/overjet/overjet.module').then(
                        (m) => m.OverjetModule
                    ),
            },
            {
                path: 'overbite',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/overbite/overbite.module').then(
                        (m) => m.OverbiteModule
                    ),
            },
            {
                path: 'category1',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/category_1/category_1.module').then(
                        (m) => m.Category1Module
                    ),
            },
            {
                path: 'category2',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/category_2/category_2.module').then(
                        (m) => m.Category2Module
                    ),
            },
            {
                path: 'category3',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/category_3/category_3.module').then(
                        (m) => m.Category3Module
                    ),
            },
            {
                path: 'category4',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/category_4/category_4.module').then(
                        (m) => m.Category4Module
                    ),
            },
            {
                path: 'category5',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/category_5/category_5.module').then(
                        (m) => m.Category5Module
                    ),
            },
            {
                path: 'category6',
                loadChildren: () =>
                    import('@pages/patient/consultation/diagnosis/category_6/category_6.module').then(
                        (m) => m.Category6Module
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiagnosisRoutingModule { }

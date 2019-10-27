
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pagesRoutes: Routes = [
    {
    path: '',
    component: PagesComponent,
    children: [
        {path: 'dasboard' , component: DasboardComponent},
        {path: 'progress' , component: ProgressComponent},
        {path: 'graficas1' , component: Graficas1Component},
        {path: '' , redirectTo: '/dasboard', pathMatch: 'full'}
    ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

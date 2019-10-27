
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


import { NgModule } from '@angular/core';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



@NgModule({
    declarations: [
    PagesComponent,
    DasboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    exports: [
    PagesComponent,
    DasboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES

    ]
})
export class PagesModule { }

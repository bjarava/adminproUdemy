
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
/**Temporal */
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    declarations: [
    PagesComponent,
    DasboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent

    ],
    exports: [
    PagesComponent,
    DasboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})
export class PagesModule { }

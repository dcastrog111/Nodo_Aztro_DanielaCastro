import { Routes } from '@angular/router';
import path from 'node:path';
import { DestinoComponent } from './page/destino/destino.component';
import { RespuestasComponent } from './page/respuestas/respuestas.component';
import { CardsComponent } from './page/cards/cards.component';

export const routes: Routes = [
    {path:'destino', component: DestinoComponent},
    {path:'respuestas', component: RespuestasComponent},
    {path:'', component:CardsComponent}
];

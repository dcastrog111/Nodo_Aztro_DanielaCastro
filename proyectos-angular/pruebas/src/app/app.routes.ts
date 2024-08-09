import { Routes } from '@angular/router';
import path from 'node:path';
import { DestinoComponent } from './page/destino/destino.component';
import { RespuestasComponent } from './page/respuestas/respuestas.component';

export const routes: Routes = [
    {path:'destino', component: DestinoComponent},
    {path:'respuestas', component: RespuestasComponent}
];

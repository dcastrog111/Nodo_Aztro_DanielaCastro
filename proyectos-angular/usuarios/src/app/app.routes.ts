import { Routes } from '@angular/router';
import { AutenticacionComponent } from './paginas/autenticacion/autenticacion.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';

export const routes: Routes = [
    {path: '', component: AutenticacionComponent},
    {path: 'perfil', component:PerfilComponent}
];

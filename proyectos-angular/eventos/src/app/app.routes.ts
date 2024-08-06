import { Routes } from '@angular/router';
import { RegistroComponent } from './paginas/registro/registro.component';
import { VerEventosComponent } from './paginas/ver-eventos/ver-eventos.component';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';

export const routes: Routes = [
    {path: '', component: RegistroComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'ver', component: VerEventosComponent},
    {path: 'registroUsuario', component: RegistroUsuarioComponent}
];

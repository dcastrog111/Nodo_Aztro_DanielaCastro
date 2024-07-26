import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
    {path:"inicio", component :InicioComponent},
    {path:"tienda", component :TiendaComponent},
    {path:"nosotros", component :NosotrosComponent},
];

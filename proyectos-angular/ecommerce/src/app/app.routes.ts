import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path:"", component:InicioComponent}, //Poner un path vacio para que la pagina por defecto sea inicio
    {path:"inicio", component :InicioComponent},
    {path:"tienda", component :TiendaComponent},
    {path:"nosotros", component :NosotrosComponent},
    {path: "**", component:NotFoundComponent} //selector universal, para todo lo que no sea lo anterior que está enrutado
];

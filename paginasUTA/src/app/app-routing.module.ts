import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaBusquedaComponent} from "./rutas/ruta-busqueda/ruta-busqueda.component";
import {RutaContactoComponent} from "./rutas/ruta-contacto/ruta-contacto.component";
import {RutaInformacionComponent} from "./rutas/ruta-informacion/ruta-informacion.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";

const routes: Routes = [
  {
    path:'busqueda',
    component: RutaBusquedaComponent
  },
  {
    path:'contacto',
    component: RutaContactoComponent
  },
  {
    path:'informacion',
    component: RutaInformacionComponent
  },
  {
    path:'**',
    component: RutaNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaContactoComponent } from './rutas/ruta-contacto/ruta-contacto.component';
import { RutaBusquedaComponent } from './rutas/ruta-busqueda/ruta-busqueda.component';
import { RutaInformacionComponent } from './rutas/ruta-informacion/ruta-informacion.component';
import {BarraOpcionesModule} from "./componentes/barra-opciones/barra-opciones.module";
import {BarraFinalModule} from "./componentes/barra-final/barra-final.module";

@NgModule({
  declarations: [
    AppComponent,
    RutaNotFoundComponent,
    RutaContactoComponent,
    RutaBusquedaComponent,
    RutaInformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarraOpcionesModule,
    BarraFinalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

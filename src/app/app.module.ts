import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing, appRountingProviders } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';


//importar componentes
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component';
import { CoordinacionComponent } from './components/coordinacion/coordinacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EjecucionComponent } from './components/ejecucion/ejecucion.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { RevisiontComponent } from './components/revisiont/revisiont.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { EstadosComponent } from "./components/estados/estados.component";

import { AppComponent } from './app.component';

//graficos
import { ChartsModule } from 'ng2-charts';

//servicios
import { BusquedaPipe } from "./components/pipes/busqueda.pipe";

//Providers
import { ApiPruebaRespaldo } from "./providers/pruebaRespaldo.component";

//Paginacion
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EstablecimientoComponent,
    CoordinacionComponent,
    InicioComponent,
    EjecucionComponent,
    ResultadoComponent,
    RevisiontComponent,
    ReportesComponent,
    InicialComponent,
    AdministracionComponent,
    EstadosComponent,
    BusquedaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ChartsModule,
    NgxPaginationModule
   
  ],
  providers: [
    appRountingProviders,
    ApiPruebaRespaldo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

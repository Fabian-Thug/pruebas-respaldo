import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importando componentes
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


//array de rutas con componetes

const appRoutes: Routes=[
//{path: '', component: InicioComponent},
{path: '', redirectTo: 'inicio', pathMatch:'full'},
{path: 'inicio', component: InicioComponent},
{path: 'estados', component: EstadosComponent},
{path: 'establecimiento', component: EstablecimientoComponent},
{path: 'coordinacion', component: CoordinacionComponent},
{path: 'ejecucion', component: EjecucionComponent},
{path: 'resultado', component: ResultadoComponent},
{path: 'revisiont', component: RevisiontComponent},
{path: 'reportes', component: ReportesComponent},
{path: 'inicial', component: InicialComponent},
{path: 'administracion', component: AdministracionComponent},
{path: '**', component: InicioComponent} 
];

export const appRountingProviders: any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
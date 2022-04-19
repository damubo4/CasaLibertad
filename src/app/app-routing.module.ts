import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcogidaComponent } from './components/acogida/acogida.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ArticulacionComponent } from './components/articulacion/articulacion.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { DimensionComponent } from './components/dimension/dimension.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
 { path: '', component: InicioComponent },
 { path: 'inicio', component: InicioComponent },
 { path: 'inicio/ayuda', component: AyudaComponent},
 { path: 'inicio/administracion', component: AdministracionComponent},
 { path: 'inicio/recepcion', component: RecepcionComponent},
 { path: 'inicio/acogida', component: AcogidaComponent},
 { path: 'inicio/articulacion', component: ArticulacionComponent},
 { path: 'inicio/dimension', component: DimensionComponent},
 { path: 'inicio/agenda', component: AgendaComponent},
 { path: 'inicio/consulta', component: ConsultaComponent},
 { path: 'inicio/reportes', component: ReportesComponent},
 { path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

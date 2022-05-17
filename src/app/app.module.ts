import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfVisualComponent } from './components/conf-visual/conf-visual.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AcogidaComponent } from './components/acogida/acogida.component';
import { ArticulacionComponent } from './components/articulacion/articulacion.component';
import { DimensionComponent } from './components/dimension/dimension.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ReportesComponent } from './components/reportes/reportes.component';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    InicioComponent,
    BreadcrumbComponent,
    FooterComponent,
    ConfVisualComponent,
    RecepcionComponent,
    AyudaComponent,
    AdministracionComponent,
    AcogidaComponent,
    ArticulacionComponent,
    DimensionComponent,
    AgendaComponent,
    ConsultaComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgWizardModule.forRoot(ngWizardConfig), 
    NgMultiSelectDropDownModule.forRoot ()   
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDepartamentos } from 'src/services/departamento.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { EmpleadosdeptComponent } from './components/empleadosdept/empleadosdept.component';
import { ServiceEmpleados } from 'src/services/empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertardepartamentoComponent,
    EditardepartamentoComponent,
    EmpleadosdeptComponent,

  ],
  imports: [
    BrowserModule,
    routing, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [appRoutingProviders, 
    ServiceDepartamentos,
    ServiceEmpleados
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

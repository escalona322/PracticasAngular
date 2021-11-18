import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/comic.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { ServicePersonas } from './services/servicepersonas';
import { ServiceEmpleados } from './services/empleado.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { ServiceEmpleados2 } from './services/empleado2.service';
import { ListadoempleadosComponent } from './components/listadoempleados/listadoempleados.component';
import { DetallesempleadosComponent } from './components/detallesempleados/detallesempleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ComicsComponent,
    HomeComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    ListadoempleadosComponent,
    DetallesempleadosComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule
  ],
  providers: [appRoutingProviders, 
    ComicsService, 
    ServicePersonas,
    ServiceEmpleados,
    ServiceEmpleados2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

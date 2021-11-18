import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing'
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DetallesequipoComponent } from './components/detallesequipo/detallesequipo.component';
import { JugadoresequipoComponent } from './components/jugadoresequipo/jugadoresequipo.component';
import { DetallejugadorComponent } from './components/detallejugador/detallejugador.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { EliminarapuestaComponent } from './components/eliminarapuesta/eliminarapuesta.component';
import { InsertarapuestaComponent } from './components/insertarapuesta/insertarapuesta.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceApuestas } from './services/apuestas.service';
import { ServiceEquipos } from './services/equipos.service';
import { ServiceJugadores } from './services/jugadores.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetallesequipoComponent,
    JugadoresequipoComponent,
    DetallejugadorComponent,
    ApuestasComponent,
    EliminarapuestaComponent,
    InsertarapuestaComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule
  ],
  providers: [appRoutingProviders, ServiceApuestas,
  ServiceEquipos, ServiceJugadores],
  bootstrap: [AppComponent]
})
export class AppModule { }

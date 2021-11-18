import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetallesequipoComponent } from "./components/detallesequipo/detallesequipo.component";
import { JugadoresequipoComponent } from "./components/jugadoresequipo/jugadoresequipo.component";
import { DetallejugadorComponent } from "./components/detallejugador/detallejugador.component";
import { ApuestasComponent } from "./components/apuestas/apuestas.component";
import { EliminarapuestaComponent } from "./components/eliminarapuesta/eliminarapuesta.component";

const appRoutes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "equipo/:idequipo", component: DetallesequipoComponent},
    {path: "jugadoresequipo/:idequipo", component: JugadoresequipoComponent},
    {path: "detallesjugador/:idjugador", component: DetallejugadorComponent},
    {path: "apuestas", component: ApuestasComponent},
    {path: "eliminarapuesta/:idapuesta", component: EliminarapuestaComponent},
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
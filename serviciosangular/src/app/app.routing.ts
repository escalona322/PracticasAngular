import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { ComicsComponent } from "./components/comics/comics.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";


const appRoutes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "comics", component: ComicsComponent},
    {path: "comicsinyeccion", component: ComicsinyeccionComponent},
    {path: "personasapi", component: PersonasapiComponent},
    {path: "empleadossalario", component: EmpleadossalarioComponent},
    {path: "empleadosoficio", component: EmpleadosoficioComponent},
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { CineComponent } from "./components/cine/cine.component";
import { TelevisionComponent } from "./components/television/television.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";
import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { CocheComponent } from "./components/coche/coche.component";
import { ConcesionarioComponent } from "./components/concesionario/concesionario.component";

const appRoutes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "", component: HomeComponent},
    {path: "musica", component: MusicaComponent},
    {path: "television", component: TelevisionComponent},
    {path: "cine", component: CineComponent},  
    {path: "numerodoble", component: NumerodobleComponent},
    {path: "numerodoble/:numero", component: NumerodobleComponent},
    {path: "collatz/:numero", component: CollatzComponent},
    {path: "productos", component: ListaproductosComponent},
    {path: "coche", component: CocheComponent},
    {path: "concesionario", component: ConcesionarioComponent},

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
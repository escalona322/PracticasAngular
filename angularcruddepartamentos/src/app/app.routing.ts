import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { EditardepartamentoComponent } from "./components/editardepartamento/editardepartamento.component";
import { EmpleadosdeptComponent } from "./components/empleadosdept/empleadosdept.component";
import { IncrementarsalarioComponent } from "./components/incrementarsalario/incrementarsalario.component";

const appRoutes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "eliminar/:iddepartamento", component: HomeComponent},
    {path: "editar/:numero/:nombre/:localidad", component: EditardepartamentoComponent},
    {path: "insertardepartamento", component: InsertardepartamentoComponent},
    {path: "empleadosdept/:numero", component: EmpleadosdeptComponent},
    {path: "incrementarsalario/:id", component: IncrementarsalarioComponent},


]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
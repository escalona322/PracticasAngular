import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { ComicsComponent } from "./components/comics/comics.component";


const appRoutes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "comics", component: ComicsComponent},

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
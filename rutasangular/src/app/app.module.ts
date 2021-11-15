import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CineComponent } from './components/cine/cine.component';
import { TelevisionComponent } from './components/television/television.component';
import { MusicaComponent } from './components/musica/musica.component';
import { routing, appRoutingProviders } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { MenuCollatzComponent } from './components/menu-collatz/menu-collatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CineComponent,
    TelevisionComponent,
    MusicaComponent,
    MenuComponent,
    Error404Component,
    NumerodobleComponent,
    MenuCollatzComponent,
    CollatzComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

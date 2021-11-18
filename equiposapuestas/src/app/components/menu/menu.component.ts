import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { ServiceEquipos } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos!: Array<Equipo>

  constructor(private _service: ServiceEquipos,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarEquipos()
  }

  cargarEquipos() {
    this._service.getEquipos().subscribe(response =>{
      this.equipos = response;
   
    })
  }
}

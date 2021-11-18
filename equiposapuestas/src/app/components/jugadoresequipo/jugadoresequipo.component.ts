import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { ServiceJugadores } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugadoresequipo',
  templateUrl: './jugadoresequipo.component.html',
  styleUrls: ['./jugadoresequipo.component.css']
})
export class JugadoresequipoComponent implements OnInit {
  public jugadores!: Array<Jugador>;
  public id!: string;
  constructor(private _route: ActivatedRoute,
    private _service: ServiceJugadores) { }

  ngOnInit(): void {
    this.cargarJugadores()
  }

  cargarJugadores() {
    this._route.params.subscribe((params: Params) => {
      var idequipo = params['idequipo'];
      this.id = idequipo;
      this._service.getJugadoresEquipo(idequipo).subscribe(response =>{
        this.jugadores = response;
        console.log(this.jugadores)
      })
    })  
   
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { ServiceJugadores } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-detallejugador',
  templateUrl: './detallejugador.component.html',
  styleUrls: ['./detallejugador.component.css']
})
export class DetallejugadorComponent implements OnInit {
  public jugador!: Jugador;
  constructor(private _route: ActivatedRoute,
    private _service: ServiceJugadores) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var idjugador = params['idjugador'];
      this._service.getJugadorId(idjugador).subscribe(response =>{
        this.jugador = response;
        console.log(this.jugador)
      })
    })  
  }

}

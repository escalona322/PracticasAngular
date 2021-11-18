import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
import { ServiceEquipos } from 'src/app/services/equipos.service';
@Component({
  selector: 'app-detallesequipo',
  templateUrl: './detallesequipo.component.html',
  styleUrls: ['./detallesequipo.component.css']
})
export class DetallesequipoComponent implements OnInit {

  public equipo!: Equipo

  constructor(private _route: ActivatedRoute,
    private _service: ServiceEquipos) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var idequipo = params['idequipo'];
      this._service.getEquiposId(idequipo).subscribe(response =>{
        this.equipo = response;
     
      })
    })   
  }

}

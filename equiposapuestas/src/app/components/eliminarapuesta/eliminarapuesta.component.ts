import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-eliminarapuesta',
  templateUrl: './eliminarapuesta.component.html',
  styleUrls: ['./eliminarapuesta.component.css']
})
export class EliminarapuestaComponent implements OnInit {

  public idapuesta!: string;
  constructor(private _route: ActivatedRoute,
    private _service: ServiceApuestas) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.idapuesta = params['idapuesta'];
     
    })   
  }

  
}

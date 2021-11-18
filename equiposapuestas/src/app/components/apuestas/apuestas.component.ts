import { Component, OnInit } from '@angular/core';
import { Apuesta } from 'src/app/models/apuesta';
import { Equipo } from 'src/app/models/equipo';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { ServiceEquipos } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {
  public apuestas!: Array<Apuesta>
  public equipos!: Array<Equipo>
  constructor(private _service: ServiceApuestas,
    private _service2: ServiceEquipos) { }

  ngOnInit(): void {
    this.cargarApuestas()
    this.cargarEquipos()
  }

  cargarApuestas(){
    this._service.getApuestas().subscribe(response =>{
      this.apuestas = response;
      console.log(this.apuestas)
    })
  }

  cargarEquipos(){
    this._service2.getEquipos().subscribe(response =>{
      this.equipos = response;
      console.log(this.equipos)
    })
  }

}

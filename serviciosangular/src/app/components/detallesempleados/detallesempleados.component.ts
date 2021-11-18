import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detallesempleados',
  templateUrl: './detallesempleados.component.html',
  styleUrls: ['./detallesempleados.component.css']
})
export class DetallesempleadosComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _route: ActivatedRoute
    ) { }

    findEmpleado(idempleado: string): void{
      this._service.findEmpleado(idempleado).subscribe(response => {
        this.empleado = response;
      })
    }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = params['idempleado'];
      this.findEmpleado(id);
    })
  }

}

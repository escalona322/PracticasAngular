import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listadoempleados',
  templateUrl: './listadoempleados.component.html',
  styleUrls: ['./listadoempleados.component.css']
})
export class ListadoempleadosComponent implements OnInit {
  public empleados!: Array<Empleado>;

  constructor(private _service: ServiceEmpleados) { }

  ngOnInit(): void {
    this.mostrarEmpleados();
  }

  mostrarEmpleados(): void{

    this._service.getEmpleados().subscribe(response=> {
      this.empleados = response
    })
  }
}

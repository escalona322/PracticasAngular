import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados2 } from 'src/app/services/empleado2.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public empleados!: Array<Empleado>;
  @ViewChild("cajaoficio") cajaoficio!: ElementRef;

  constructor(private _service: ServiceEmpleados2) { }

  ngOnInit(): void {
    this.mostrarOficios();
  }

  mostrarEmpleados(): void{
    var oficio = this.cajaoficio.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe(response=> {
      this.empleados = response
    })
  }

  mostrarOficios(): void{
    this._service.getOficios().subscribe(response=> {
      console.log(response)
    })
  }
}

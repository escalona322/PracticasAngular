import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Empleado } from 'src/models/empleado';
import { ServiceEmpleados } from 'src/services/empleados.service';

@Component({
  selector: 'app-empleadosdept',
  templateUrl: './empleadosdept.component.html',
  styleUrls: ['./empleadosdept.component.css']
})
export class EmpleadosdeptComponent implements OnInit {
  public empleados!: Array<Empleado>;
  constructor(private _service: ServiceEmpleados,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmpleadosDept();
  }

  getEmpleadosDept(){
    this._route.params.subscribe((params: Params) => {
       var iddept = params["numero"];
       this._service.getEmpleadosDepartamento(iddept).subscribe(response =>{
        this.empleados = response;
        console.log(this.empleados);
      })
      });
  }
}

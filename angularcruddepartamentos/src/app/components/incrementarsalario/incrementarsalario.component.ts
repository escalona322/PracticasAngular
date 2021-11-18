import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceEmpleados } from 'src/services/empleados.service';
import { Empleado } from 'src/models/empleado';

@Component({
  selector: 'app-incrementarsalario',
  templateUrl: './incrementarsalario.component.html',
  styleUrls: ['./incrementarsalario.component.css']
})
export class IncrementarsalarioComponent implements OnInit {
  public empleado!: Empleado;
  @ViewChild("cajaincremento") cajaincremento!: ElementRef;
  constructor(
    private _service: ServiceEmpleados,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var idempleado = params['id'];
      this._service.getDetallesEmpleado(idempleado).subscribe(response => {
        this.empleado = response;
      })
    })
  }

  incrementarSalarioEmpl() {
    var incremento = this.cajaincremento.nativeElement.value;
    var id = this.empleado.idEmpleado.toString();

    this._service.incrementarSalario(id, incremento).subscribe(response => {
      this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        
      this._router.navigate(["/incrementarsalario", id]));
    })
  }

}

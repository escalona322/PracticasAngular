import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/models/departamento';
import { ServiceDepartamentos } from 'src/services/departamento.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  
  @ViewChild("cajanombre") cajanombre: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad: ElementRef;

  constructor(private _service: ServiceDepartamentos,
    private _route: ActivatedRoute,
    private router: Router
    ) {
    this.cajanombre = new ElementRef("");
    this.cajalocalidad = new ElementRef("");
   }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var numero = parseInt(params['numero']);
      var nombre = params['nombre'];
      var localidad = params['localidad']
      this.departamento = new Departamento(
        numero, nombre, localidad)
    })   
  }

  updateDepartamento() {
    var numero = this.departamento.numero;
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value
    this.departamento = {
      numero, nombre, localidad
    }
  
    this._service.updateDepartamentos(this.departamento).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home'])
    });
  }

}

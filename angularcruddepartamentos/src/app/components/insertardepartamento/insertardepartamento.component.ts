import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from 'src/models/departamento';
import { ServiceDepartamentos } from 'src/services/departamento.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  
  @ViewChild("cajanumero") cajanumero: ElementRef;
  @ViewChild("cajanombre") cajanombre: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad: ElementRef;

  constructor(private _service: ServiceDepartamentos,
    private router: Router) {
    this.cajanumero = new ElementRef("");
    this.cajanombre = new ElementRef("");
    this.cajalocalidad = new ElementRef("");
   }

  ngOnInit(): void {
  }

  insertarDepartamento (): void {
    var numero =  parseInt(this.cajanumero.nativeElement.value)
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value
    this.departamento = {
      numero,
      nombre,
      localidad
    }
    this._service.insertDepartamentos(this.departamento).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home'])
    });

  }
  

}

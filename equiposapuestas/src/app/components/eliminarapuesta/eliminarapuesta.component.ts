import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eliminarapuesta',
  templateUrl: './eliminarapuesta.component.html',
  styleUrls: ['./eliminarapuesta.component.css']
})
export class EliminarapuestaComponent implements OnInit {

  public idapuesta!: string;
  constructor(private _route: ActivatedRoute,
    private _service: ServiceApuestas,
    private _router: Router,) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.idapuesta = params['idapuesta'];     
    })   
  }

  eliminarApuesta() {
    this._service.deleteApuesta(this.idapuesta).subscribe(response =>{
      console.log("eliminado");
      this._router.navigate(["/apuestas",]);
    })

  }

  
}

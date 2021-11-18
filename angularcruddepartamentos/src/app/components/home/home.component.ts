import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/services/departamento.service';
import { Departamento } from 'src/models/departamento';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service: ServiceDepartamentos,
    private _route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params)
      if(params['iddepartamento'] != null){
       var numero = parseInt(params['iddepartamento']);
       this.eliminarDepartamento(numero);
      }
    });
    this.cargarDepartamentos();    
  }

  cargarDepartamentos() {
    this._service.getDepartamentos().subscribe(response =>{
      this.departamentos = response;
    })
  }


  eliminarDepartamento(id: number){
      var idtostring = id.toString()
      this._service.deleteDepartamento(idtostring).subscribe(res => {
        console.log("deleted")
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["home"]));
     
      });
    
  }

}

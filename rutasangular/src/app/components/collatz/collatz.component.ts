import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numero!: number;
  public resultados: Array<number>;
  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router) { 
      this.resultados = [];
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params )=>{
      this.resultados = [];
      if (params['numero'] != null ){
        this.numero = parseInt(params['numero']);
        while(this.numero!=1){
          this.resultados.push(this.numero)
          if(this.numero % 2 == 0){
            this.numero = this.numero / 2;
          }else{
            this.numero = (this.numero*3)+1;
          }         
        }
        this.resultados.push(this.numero);
      }
    })
  }


}

import {Component} from '@angular/core';

@Component ({

    selector: "app-tabla-multiplicar",
    templateUrl:  "./tablamultiplicar.component.html",

})

export class TablaMultiplicar {
    public num1: number;
  
    public tablaMultiplicar: Array<Number>;

    constructor() {
        this.num1 = 0;
        this.tablaMultiplicar = [];
    }
    
    pintarTabla() {
        for(var i=0; i<=10; i++){
            this.tablaMultiplicar[i] = this.num1 * i;
        }
        console.log(this.tablaMultiplicar);
    }
}
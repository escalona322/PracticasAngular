import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component ({

    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html",

})

export class HooksAngular implements OnInit{

    public mensaje: string;

   constructor(){
       console.log("Construcotr, yo voy primero");
       this.mensaje = "Mensaje"
   }

   ngOnInit(): void{
       console.log("ngOnInit, despues del constructor")
   }

   ngDoCheck() {
       console.log("ngDoCheck(): LA vista ha cambiado");
   }

   cambiarMensaje() {
       this.mensaje = "Mensaje cambiado"
   }

   ngOnDestroy(): void {
       console.log("ngOnDestroy(): Componente destruio nano")
   }
}
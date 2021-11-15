import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from 'src/app/models/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  @Input() car!: Coche;
  public mensaje!: string;
  @Output() seleccionarCoche: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.car = new Coche("Pontiac", "Firebird", 0, 220, 25, false);
   
  }

   comprobarEstado() {
     if(this.car.estado == false){
       this.mensaje = "El coche esta apagado";
       this.car.velocidad = 0;
       return false;
     }else{
       this.mensaje = "El coche esta encendido";
       return true;
     }
   }

   encenderCoche() {
     this.car.estado = !this.car.estado;
     this.comprobarEstado();
   }

   acelerarCoche(): void {
     if(this.comprobarEstado() == false){
       alert("El coche no esra encendido");
     }else{
       this.car.velocidad = this.car.velocidad+this.car.aceleracion;
       if(this.car.velocidad > this.car.velocidadMaxima){
         this.car.velocidad = this.car.velocidadMaxima;
       }

     }
   }

   seleccionarCocheHijo(): void {
        this.seleccionarCoche.emit(this.car);
   }

  ngOnInit(): void {
  }

}

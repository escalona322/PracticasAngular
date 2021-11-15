import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;
  public mensaje!: string;
  constructor() { 
    this.coches = [
      new Coche("Ford", "Mustand", 0, 320, 30, false),
      new Coche("Audi", "A8", 0, 280, 30, false),
      new Coche("Kia", "Ceed", 0, 160, 15, false),
      new Coche("Mercedes", "Nose", 0, 290, 25, false),
      new Coche("Ford", "Transit", 0, 220, 35, false),
      new Coche("Seat", "Ibiza", 0, 170, 20, false),
      new Coche("Pontiac", "Firebird", 0, 220, 25, false)
    ]
  }

  seleccionarCochePadre(event: any) {
    this.mensaje = "Seleccionado!" + event.marca + ", "+ event.modelo;
  }
  ngOnInit(): void {
  }

}

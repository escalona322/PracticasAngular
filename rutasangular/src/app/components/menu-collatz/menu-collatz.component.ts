import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-collatz',
  templateUrl: './menu-collatz.component.html',
  styleUrls: ['./menu-collatz.component.css']
})
export class MenuCollatzComponent implements OnInit {
  public numeros: Array<number>;
  constructor() { 
    this.numeros = []
  }

  ngOnInit(): void {
    this.numerosRandom();
  }

  numerosRandom () {
    for(var i=0; i<=10; i++){
      this.numeros[i] = Math.floor(Math.random()*100);
    }
  }
}

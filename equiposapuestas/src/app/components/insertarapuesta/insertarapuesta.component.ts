import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Apuesta } from 'src/app/models/apuesta';
import { ServiceApuestas } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-insertarapuesta',
  templateUrl: './insertarapuesta.component.html',
  styleUrls: ['./insertarapuesta.component.css']
})
export class InsertarapuestaComponent implements OnInit {
  public apuesta!: Apuesta;
  @ViewChild("cajausuario") cajausuario: ElementRef; 
  @ViewChild("cajarm") cajarm: ElementRef; 
  @ViewChild("cajam") cajaam: ElementRef; 
  @ViewChild("cajafecha") cajafecha: ElementRef; 
  constructor(private _service: ServiceApuestas,
    private _router: Router,
    ) { 
      this.cajausuario = new ElementRef("");
      this.cajarm = new ElementRef("");
      this.cajaam = new ElementRef("");
      this.cajafecha = new ElementRef("");
    }

  ngOnInit(): void {
  }

  introducirApuesta() {
    var idApuesta = 0;
    var usuario = this.cajausuario.nativeElement.value;
    var resultado = this.cajarm.nativeElement.value + "-" +this.cajaam.nativeElement.value;
    var fecha = this.cajafecha.nativeElement.value;
    this.apuesta = {
        idApuesta,
        usuario,
        resultado,
        fecha
      }
      console.log(this.apuesta)
    this._service.insertApuesta(this.apuesta).subscribe(res => {
        console.log("insertada");
        this._router.navigate(['/apuestas'])
      });

  }

}

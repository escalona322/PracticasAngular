import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comics';
import { empty } from 'rxjs';
import { ComicsService } from 'src/app/services/comic.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  public comics!: Array<Comic>;
  public favorito: Comic;
  @ViewChild("cajatitulo") cajatitulo: ElementRef;
  @ViewChild("cajaimagen") cajaimagen: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion: ElementRef;
  constructor(private _service: ComicsService) { 
    
    this.favorito = new Comic(
      "",
      "",
      "",
    )
    this.cajatitulo = new ElementRef("");
    this.cajaimagen = new ElementRef("");
    this.cajadescripcion = new ElementRef("");
  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  nuevoComic() {
    var titulo = this.cajatitulo.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    var comicnuevo = new Comic(
      titulo,
      imagen,
      descripcion,
    )
    this.comics.push(comicnuevo);
  }

  modificarComic(event: any) {
    console.log(event);
    var editarcomic = new Comic(
      this.cajatitulo.nativeElement.value,
      this.cajaimagen.nativeElement.value,
      this.cajadescripcion.nativeElement.value,
    )
    let index = this.comics.findIndex(event => event.titulo === event.titulo);
      console.log(index);
    this.comics[index] = editarcomic;
  }


  eliminarComic(event: any) {
    for(var i=0; i<this.comics.length; i++){
      if(this.comics[i].titulo == event.titulo){
         this.comics.splice(i, 1);
      }
    }
  }

  seleccionarFavorito(event: any) {
    this.favorito = event;
  }

}

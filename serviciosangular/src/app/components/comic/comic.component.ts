import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comics';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic;
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  
  borrarComic(): void {
    this.eliminarComic.emit(this.comic);
  }
  elegirFavorito(): void {
    this.seleccionarFavorito.emit(this.comic);
  }
  editarComic(): void {
    this.modificarComic.emit(this.comic);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component} from '@angular/core';

@Component ({

    selector: "primer-component",
    templateUrl:  "./primercomponent.component.html",
    styleUrls: ["./primercomponent.component.css"]
})

export class PrimerComponent {
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    public ocultar: boolean;

    constructor() {
        this.titulo = "Hoy es jueves de Angular";
        this.descripcion = "Aprendiendo Angular";
        this.anyo = 2021;
        this.ocultar = false;
    }

    ocultarComponente() {
        this.ocultar = true;
    }
}
import {Component} from '@angular/core';

@Component ({

    selector: "app-form-bindingmodel",
    templateUrl: "./formulariobindingmodel.component.html",

})

export class FormularioBindingModel {
    public user: any;
    public mensaje: string;

    constructor(){

        this.user = {
            nombre: "",
            apellido: "",
            edad: 0,
        };
        this.mensaje = "";
    }

    recibirFormulario(): void {
        this.mensaje = "Datos recibidos!!";
    }

}
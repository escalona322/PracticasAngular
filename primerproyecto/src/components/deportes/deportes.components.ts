import { Component } from "@angular/core";

@Component ({
    selector: "app-deportes",
    templateUrl: "./deportes.components.html",
})

export class Deportes {
    public sports: Array<string>;
    public numeros: Array<number>

    constructor() {
        this.numeros = [
            16, 13, 24, 45, 21, 18, 36
        ]
        this.sports = ["Petanca", "Furbo", "Basket",
         "Golf", "Natacion", "Atletismo", "Canicas",
        "Nosenosoydeportista"]
    }

}
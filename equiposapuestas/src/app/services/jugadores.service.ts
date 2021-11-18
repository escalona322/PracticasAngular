import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceJugadores {
    constructor(private _http: HttpClient) {}

    getJugadoresEquipo(idequipo: string): Observable<any> {

        var request = "/api/Jugadores/JugadoresEquipos/"+idequipo;
        var url = Global.urlapichampions + request;

        return this._http.get(url);
    }

    getJugadorId(idjugador: string): Observable<any> {

        var request = "/api/Jugadores/"+idjugador;
        var url = Global.urlapichampions + request;

        return this._http.get(url);
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceEquipos {

    constructor(private _http: HttpClient) {}

    getEquipos(): Observable<any> {

        var request = "/api/Equipos";
        var url = Global.urlapichampions + request;

        return this._http.get(url);
    }

    getEquiposId(idequipo: string): Observable<any> {

        var request = "/api/Equipos/"+idequipo;
        var url = Global.urlapichampions + request;

        return this._http.get(url);
    }
}
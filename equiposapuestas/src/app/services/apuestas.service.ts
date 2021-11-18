import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceApuestas {
    constructor(private _http: HttpClient) {}

    getApuestas(): Observable<any> {

        var request = "/api/Apuestas";
        var url = Global.urlapichampions + request;

        return this._http.get(url);
    }

    deleteApuesta(idapuesta: string): Observable<any> {

        var request = "/api/Apuestas/"+idapuesta;
        var url = Global.urlapichampions + request;

        return this._http.get(url);
    }
}
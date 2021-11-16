import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
    constructor(private _https: HttpClient){}

    getPersonas(): Observable<any>{
        var url = Global.urlpersonas;
        return this._https.get(url);
    }
}
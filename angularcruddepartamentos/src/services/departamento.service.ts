import { Injectable } from "@angular/core";
import { Global } from "src/Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "src/models/departamento";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<any>{
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;

        return this._http.get(url);
    }

    insertDepartamentos(dept: Departamento): Observable<any> {
      
        var json = JSON.stringify(dept);
        var header = new HttpHeaders().set("Content-Type", "application/json")
      
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        console.log(url + " " + json);
        return this._http.post(url, json, {headers:header});
       
    }

    updateDepartamentos(dept: Departamento): Observable<any> {
      
        var json = JSON.stringify(dept);
        var header = new HttpHeaders().set("Content-Type", "application/json")
      
        var request = "/api/departamentos";
        var url = Global.urldepartamentos + request;
        console.log(url + " " + json);
        return this._http.put(url, json, {headers:header});
       
    }

    deleteDepartamento(id: string): Observable<any>{
        var request = "/api/departamentos/" +id;
        var url = Global.urldepartamentos + request;
        return this._http.delete(url);
    }

}
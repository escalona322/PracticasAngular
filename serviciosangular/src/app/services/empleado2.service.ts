import { Injectable } from "@angular/core";
import { Empleado } from "../models/empleado";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceEmpleados2{

    constructor(private _http: HttpClient){}

    getEmpleadosOficio(oficio: string): Observable<any>{
       
        var request = "api/Empleados/EmpleadosOficio/"+oficio;
        var url = Global.urldepartamentos+request
        return  this._http.get(url);
    }
    getOficios(): Observable<any>{
       
        var request = "api/Empleados/oficios/";
        var url = Global.urldepartamentos+request
        return  this._http.get(url);
    }
}
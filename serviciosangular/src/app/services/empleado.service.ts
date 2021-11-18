import { Injectable } from "@angular/core";
import { Empleado } from "../models/empleado";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServiceEmpleados{

    constructor(private _http: HttpClient){}

    getEmpleadosSalario(salario: string): Observable<any>{
       
        var request = "api/Empleados/EmpleadosSalario/"+salario;
        var url = Global.urldepartamentos+request
        return  this._http.get(url);
    }

    getEmpleados(): Observable<any> {

        var request = "/api/empleados/";
        var url = Global.urldepartamentos + request;

        return this._http.get(url);
    }

    findEmpleado(idempleado: string): Observable<any>{

        var request = "api/Empleados/"+idempleado;
        var url = Global.urldepartamentos + request;

        return this._http.get(url);
    }
}